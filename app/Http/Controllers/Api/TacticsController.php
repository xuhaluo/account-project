<?php
namespace App\Http\Controllers\Api;

use App\Models\Charge;
use App\Models\Commission;
use App\Models\Procedure;
use App\Models\Shares;
use App\Models\Storage;
use App\Models\Tactics;
use App\Models\User;
use App\Models\Setting;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Transformers\TacticsTransformer;
use Mockery\Exception;
use Illuminate\Support\Facades\Cache;
use App\Jobs\ShipanHandle;

class TacticsController extends Controller
{
    public function multiple()
    {
        $multiples = Setting::where('code','multiple_conf')->get(['value'])->pluck('value');
        if($multiples){
            return ['status'=>true,'data'=>$multiples];
        }
        return ['status' => false,'msg' => '系统错误！'];
    }

    public function procedure(Request $request)
    {
        $rules = [
            'xingyongjin' => 'bail|required|numeric',
            'multiple' => 'bail|required|numeric',
            'code' => 'bail|required|exists:shares,code',
        ];

        $messages = [

            'xingyongjin.required' => '请选择或输入信用金！',

            'xingyongjin.numeric' => '信用金数额不正确！',

            'multiple.required' => '请选择策略倍数！',

            'multiple.numeric' => '策略倍数不正确！',

            'code.required' => '系统错误#1！',

            'code.exists' => '系统错误#2！'

        ];

        $validator = \Validator::make($request->all(),$rules,$messages);

        if($validator->fails()){

            foreach($validator->errors()->all() as $error){

                return ['status'=>false,'msg'=>$error];

            }

        }

        $xingyongjin = $request->xingyongjin;

        $multiple = $request->multiple;

        $code = $request->code;



        $share = Shares::where('code',$code)->first();

        if(!$share){

            return ['status' => false,'msg' => '系统错误#3！'];

        }

        $shareInfo = getRealTimeInfo($code);

        if(!$shareInfo){

            return ['status' => false,'msg' => '系统错误#4！'];

        }



        // 递延费计算

        $loss_ratio = Setting::where('code','loss_ratio')->first();

        if(!$loss_ratio || !is_numeric($loss_ratio->value)){

            return ['status' => false,'msg' => '系统错误！'];

        }
        $profit_ratio = Setting::where('code','profit_ratio')->first();

        if(!$profit_ratio || !is_numeric($profit_ratio->value)){

            return ['status' => false,'msg' => '系统错误！'];

        }

        $diyanfei_base = Setting::where('code','diyanfei_base')->first();

        if(!$diyanfei_base || !is_numeric($diyanfei_base->value)){

            return ['status' => false,'msg' => '系统错误！'];

        }

        $diyanfei = round($diyanfei_base->value * $xingyongjin * $multiple / 10000,2);


        $num = $xingyongjin * $multiple / $shareInfo['current_price'] > 100? floor($xingyongjin * $multiple / $shareInfo['current_price'] / 100) * 100 : 100;          //购买的股数


        // (((交易本金[信用金*策略倍数])-(总信用金*可扣除的比例[loss_ratio]))/交易本金)*股价

        $all_trade = $xingyongjin * $multiple;  // 交易本金

        $xinyongjin_canuse = $xingyongjin * $loss_ratio->value;  // 信用金可扣除的额度

        $res = $all_trade - $xinyongjin_canuse < 0?0:$all_trade - $xinyongjin_canuse;

        $min_min_price = round($res * $shareInfo['current_price']/$all_trade,2);        // 最小止损

        $profit_canuse = $all_trade * $profit_ratio->value;  // 最大盈利

        $res = $all_trade + $profit_canuse;

        $max_max_price = round($res * $shareInfo['current_price']/$all_trade,2);        // 最大止盈

        // 建仓费计算

        $cangfei_base = Setting::where('code','cangfei_base')->first();

        if(!$cangfei_base || !is_numeric($cangfei_base->value)){

            return ['status' => false,'msg' => '系统错误！'];

        }

        $cangfei = ceil($cangfei_base->value * $xingyongjin * $multiple / 10000);

        return [

            'status'=>true,

            'data'=>[

                'diyanfei'=>$diyanfei,

                'cangfei'=>$cangfei,

                'num' => $num,

                'min_min_price'=>$min_min_price,

                'max_max_price'=>$max_max_price,

            ]

        ];

    }



    public function store(Request $request)

    {
        // 判断是否在交易时间

        $open_trade = Setting::where('code','open_trade')->first();

        if($open_trade->value == 0){
            if(!isJiaoYi()){
                return ['status' => false,'msg' => '不在交易时间！'];

            }
        }

        $user = Auth::user();
        $share = Shares::where('code',$request->code)->first();

        if($share->created_at >= Carbon::today()->subDays(90)){

            return ['status' => false,'msg' => '新股禁止交易！'];

        }

        $rules = [

            'code' => 'bail|required|exists:shares,code',

            'xingyongjin' => 'bail|required|numeric',

            'multiple' => 'bail|required|numeric',

            'max_price' => 'bail|required|numeric',

            'min_price' => 'bail|required|numeric',

            'is_sell' => 'bail|required|in:1,2',                // 1 不递延， 2 递延

            'is_add' => 'bail|required|in:1,2',                 // 1 不自动追加信用金， 2 自动追加信用金

            'is_analog' => 'bail|in:0,1',                       // 0 正常持仓， 1 模拟点买

            'uuid' => 'bail|required',                          // 防止重复下单

        ];

        $messages = [

            'code.required' => '请选择股票！',

            'code.exists' => '该股票不存在！',

            'xingyongjin.required' => '请选择或输入信用金！',

            'xingyongjin.numeric' => '信用金数额不正确！',

            'multiple.required' => '请选择策略倍数！',

            'multiple.numeric' => '策略倍数不正确！',

            'max_price.required' => '请输入止盈！',

            'max_price.numeric' => '止盈数额不正确！',

            'min_price.required' => '请输入止损！',

            'min_price.numeric' => '止损数额不正确！',

            'is_sell.required' => '请选择是否自动递延',

            'is_sell.in' => '自动递延值错误',

            'is_add.required' => '请选择是否自动追加信用金',

            'is_add.in' => '自动追加值错误',

            'is_analog.required' => '系统错误！',

            'is_analog.in' => '系统错误！',

            'uuid' => '系统错误！'

        ];

        $validator = \Validator::make($request->all(),$rules,$messages);

        if($validator->fails()){

            foreach($validator->errors()->all() as $error){

                return ['status'=>false,'msg'=>$error];

            }

        }

        $uuid = $request->uuid;

        if(Cache::has($uuid)){

            return ['status' => false,'msg' => '请勿重复提交订单！'];

        }else{

            Cache::put($uuid,$uuid,60);

        }

        $xingyongjin = $request->xingyongjin;                   // 信用金

        $multiple = $request->multiple;                         // 策略倍数

        $code = $request->code;                                 // 股票代码

        $max_price = $request->max_price;                       // 止盈

        $min_price = $request->min_price;                       // 止损

        $is_sell = $request->is_sell;                           // 递延

        $is_add = $request->is_add;                             // 追加信用金

        $is_analog = $request->input('is_analog',1);            // 是否模拟点买

        // 信用金判断

        $xingyongjin_min = Setting::where('code','xingyongjin_min')->first();

        $xingyongjin_max = Setting::where('code','xingyongjin_max')->first();

        if($xingyongjin < $xingyongjin_min->value || $xingyongjin > $xingyongjin_max->value){
            return ['status' => false,'msg' => "信用金应在 $xingyongjin_min->value - $xingyongjin_max->value 之间！"];
        }

        // 策略倍数判断

        $multiple_conf = Setting::where('code','multiple_conf')->get();

        if(!$multiple_conf->contains('value',$multiple)){

            return ['status' => false,'msg' => '策略倍数错误！'];

        }

		//sleep(rand(3,4));

        $sharesInfo = getRealTimeInfo($code);

        if(!$sharesInfo){

            return ['status' => false,'msg' => '系统错误！'];

        }

        if($share->is_danger){

            return ['status' => false,'msg' => '高风险股票禁止交易！'];

        }



        $currentPrice = $sharesInfo['current_price'];                               // 当前价格

        if($currentPrice == 0){

            return ['status' => false,'msg' => '系统错误！'];

        }

        $yesterdayEndPrice = $sharesInfo['yesterday_end_price'];                    // 昨天收盘价

        $max_rose = Setting::where('code','max_rose')->first();                     // 买入最大涨跌幅



        if($currentPrice > $yesterdayEndPrice && $yesterdayEndPrice != 0 && abs($currentPrice - $yesterdayEndPrice) / $yesterdayEndPrice > $max_rose->value){

            return ['status' => false,'msg' => '股票禁止交易！'];

        }

        if($currentPrice < $yesterdayEndPrice && $yesterdayEndPrice != 0 && abs($currentPrice - $yesterdayEndPrice) / $yesterdayEndPrice > $max_rose->value){

            return ['status' => false,'msg' => '股票禁止交易！'];

        }
        // 建仓费计算

        $cangfei_base = Setting::where('code','cangfei_base')->first();

        if(!$cangfei_base || !is_numeric($cangfei_base->value)){

            return ['status' => false,'msg' => '系统错误！'];

        }

        $cangfei = ceil($cangfei_base->value * $xingyongjin * $multiple / 10000);

        $currentPay = $xingyongjin + $cangfei;                                      // 需扣除的余额



        // 止盈止损价格判断

        $loss_ratio = Setting::where('code','loss_ratio')->first();

        if(!$loss_ratio || !is_numeric($loss_ratio->value)){

            return ['status' => false,'msg' => '系统错误！'];

        }

        $profit_ratio = Setting::where('code','profit_ratio')->first();

        if(!$profit_ratio || !is_numeric($profit_ratio->value)){

            return ['status' => false,'msg' => '系统错误！'];

        }

        // (((交易本金[信用金*策略倍数])-(总信用金*可扣除的比例[loss_ratio]))/交易本金)*股价

        $all_trade = $xingyongjin * $multiple;  // 交易本金

        $xinyongjin_canuse = $xingyongjin * $loss_ratio->value;  // 信用金可扣除的额度

        $res = $all_trade - $xinyongjin_canuse < 0?0:$all_trade - $xinyongjin_canuse;

        $min_min_price = round($res * $currentPrice/$all_trade,2);        // 最小止损

        $profit_canuse = $all_trade * $profit_ratio->value;  // 最大盈利

        $res = $all_trade + $profit_canuse;

        $max_max_price = round($res * $currentPrice/$all_trade,2);        // 最大止盈

        if($min_price < $min_min_price){

            return ['status' => false,'msg' => '止损价格不能低于'.$min_min_price];

        }

        if($max_price > $max_max_price){

            return ['status' => false,'msg' => '止盈价格不能高于'.$max_max_price];

        }

        if($min_price > $currentPrice){

            return ['status' => false,'msg' => '止损价格不能高于当前价格'];

        }

        if($max_price < $currentPrice){

            return ['status' => false,'msg' => '止盈价格不能低于当前价格'];

        }

        if($xingyongjin * $multiple / $currentPrice < 100){

            return ['status' => false,'msg' => '当前信用金及倍数未达到购买标准！'];

        }

        $num = floor($xingyongjin * $multiple / $currentPrice / 100) * 100;          //购买的股数

        $diyanfei_base = Setting::where('code','diyanfei_base')->first();

        if(!$diyanfei_base || !is_numeric($diyanfei_base->value)){

            return ['status' => false,'msg' => '系统错误！'];

        }

        

        $diyanfei = round($diyanfei_base->value * $xingyongjin * $multiple / 10000,2);       // 递延费

        // $diyanfei = round($diyanfei_base->value * $num * $currentPrice / 10000,2);

        $order_no = date('YmdHis') . rand(1000,9999);                               // 订单号

        $data = [

            'order_no' => $order_no,

            'user_id' => $user->id,

            'code' => $code,

            'num' => $num,

            'price' => $currentPrice,

            'xingyongjin' => $xingyongjin,

            'count_xingyongjin' => $xingyongjin,

            'multiple' => $multiple,

            'max_price' => $max_price,

            'min_price' => $min_price,

            'cangfei' => $cangfei,

            'diyanfei' => $diyanfei,

            'create_money' => $currentPay,

            'is_add' => $is_add,

            'is_sell' => $is_sell,

            'order_status' => 0,

            'process_id' => mt_rand(0,7)

        ];

        $charge = [

            'user_id' => $user->id,

            'order_no' => $order_no,

            'type' => 2,

            'money' => 0 - (float) $currentPay,

            'before_balance' => $user->money,

            'after_balance' => $user->money - (float) $currentPay,

            'status' => 1,

            'info' => "用户【{$user->id}|{$user->phone}】创建订单，信用金：{$xingyongjin}|建仓费：{$cangfei},共计：{$currentPay}元",

            'create_ip' => $request->getClientIp()

        ];



        if($is_analog == 0){                                    // 正常发布策略
            if($user->money < $currentPay){
                return ['status' => false,'msg' => '余额不足，请充值！'];
            }
            $data['is_analog'] = 0;

            $charge['is_analog'] = 0;

            DB::beginTransaction();

            try{
				
                $tactic = Tactics::create($data)->load('user');

                Charge::create($charge);

                $user->decrement('money',$currentPay);



                // 计算递延费，发送短信

                $tactics = $user->with(['tactics'=>function($query){

                    $query->where('is_analog',0)->where("is_sell",2)->where('created_at','<',Carbon::today())->where('order_status',0)->whereIn('is_entrust',[1,6,7,99]);

                }])->get();

                if($user->money < $tactics->sum('diyanfei')){

                    $smsData = [

                        'name' => config('sms.name'),

                        'sign' => config('sms.sign'),

                        'pwd' => config('sms.pwd'),

                        'type' => config('sms.type'),

                        'mobile' => $user->phone,

                        'content' => '您的'.$user->phone.'账户余额已不足以缴纳下个交易日的系统递延费，请及时充值,否则将会在下个交易日14:50自动平仓！',

                        'extno' => ''

                    ];

                    sendSms($smsData);

                }

                DB::commit();

                return ['status'=>true,'msg'=>'订单创建成功'];

            }catch (\Exception $e){

                DB::rollback();

                return ['status'=>false,'msg'=>'订单创建失败'];

            }

        }elseif($is_analog == 1){           // 模拟点买

            if($user->analog_money < $currentPay){

                return ['status' => false,'msg' => '模拟账户余额不足！'];

            }

            $data['is_analog'] = 1;

            $charge['is_analog'] = 1;



            DB::beginTransaction();

            try{

                Tactics::create($data);

                Charge::create($charge);

                $user->decrement('analog_money',$currentPay);

                DB::commit();

                return ['status'=>true,'msg'=>'订单创建成功'];

            }catch (\Exception $e){

                DB::rollback();

                return ['status'=>false,'msg'=>'订单创建失败'];

            }

        }

    }



    public function revokeTactic($tactic_id)

    {

        DB::beginTransaction();

        try{

            $tactic = Tactics::with('user')->find($tactic_id);

            if($tactic->order_status == 2){

                return;

            }

            $tactic->is_entrust = 5;

            $tactic->order_status = 2;

            $tactic->save();



            $charge = [

                'user_id' => $tactic->user->id,

                'order_no' => $tactic->order_no,

                'type' => 11,

                'money' => (float) $tactic->create_money,

                'before_balance' => $tactic->user->money,

                'after_balance' => $tactic->user->money + (float) $tactic->create_money,

                'status' => 1,

                'info' => "用户【{$tactic->user->id}|{$tactic->user->phone}】订单撤销，返还信用金：{$tactic->xingyongjin}|建仓费：{$tactic->cangfei},共计：{$tactic->create_money}元",

                'create_ip' => '127.0.0.1'

            ];

            if($tactic->is_analog == 0){

                $charge['is_analog'] = 0;

                $charge['before_balance'] = $tactic->user->money;

                $charge['after_balance'] = $tactic->user->money + (float) $tactic->create_money;

            }elseif($tactic->is_analog == 1){

                $charge['is_analog'] = 1;

                $charge['before_balance'] = $tactic->user->analog_money;

                $charge['after_balance'] = $tactic->user->analog_money + (float) $tactic->create_money;

            }

            Charge::create($charge);

            if($tactic->is_analog == 0){

                $tactic->user->increment('money',$tactic->create_money);

            }elseif($tactic->is_analog == 1){

                $tactic->user->increment('analog_money',$tactic->create_money);

            }

            DB::commit();

            return true;

        }catch (\Exception $e){

            DB::rollback();

            return false;

        }



    }

    //手动追加信用金
    public function addShoudong(Request $request)

    {

        $user = Auth::user();

        $tactic_id = $request->tactic_id;

        $xingyongjin = $request->xingyongjin;
		if(!preg_match('/^\d+(\.\d{1,2}){0,1}$/',$xingyongjin,$match)){
        	return ['status' => false,'msg' => '信用金格式不正确！'];
        }
        $tactic = Tactics::find($tactic_id);

        if(!$tactic){

            return ['status' => false,'msg' => '订单不存在！'];

        }

        if($tactic->is_analog == 0){

            if($user->money < $xingyongjin){

                return ['status' => false,'msg' => '余额不足！'];

            }

        }else{

            if($user->analog_money < $xingyongjin){

                return ['status' => false,'msg' => '模拟余额不足！'];

            }

        }



        if($this->addXinYongJin($tactic,[],$xingyongjin)){

            return ['status' => true,'msg' => '追加信用金成功！'];

        }else{

            return ['status' => false,'msg' => '追加信用金失败！'];

        }

    }

    public function sale(Request $request)

    {
		
        // 判断是否在交易时间

        $open_trade = Setting::where('code','open_trade')->first();

        if($open_trade->value == 0){

            if(!isJiaoYi()){

                return ['status' => false,'msg' => '不在交易时间！'];

            }

        }

        $user = Auth::user();



        $tactic_id = $request->tactic_id;

        $tactic = Tactics::with('user')->where('id',$tactic_id)->where('user_id',$user->id)->first();

        if(!$tactic){

            return ['status' => false,'msg' => '该订单不存在！'];

        }

        if($tactic->order_status == 1){

            return ['status' => false,'msg' => '该订单已平仓！'];

        }

        if($tactic->order_status == 2){

            return ['status' => false,'msg' => '该订单已撤销！'];

        }
//        if($user->id != 79){
            if($tactic->created_at >= Carbon::today()){

                return ['status' => false,'msg' => '股票买入当日不可卖出！'];

            }
//        }
      
      	sleep(rand(2,3));

        $sharesInfo = getRealTimeInfo($tactic->code);

        if(!$sharesInfo){

            return ['status' => false,'msg' => '系统错误！'];

        }

        $commission_ratio = Setting::where('code','commission_ratio')->first();

        if(!$commission_ratio || !is_numeric($commission_ratio->value)){

            return ['status' => false,'msg' => '系统错误！'];

        }



        $currentPrice = $sharesInfo['current_price'];           // 当前价格

        $yesterdayEndPrice = $sharesInfo['yesterday_end_price'];                    // 昨天收盘价

        $max_decline = Setting::where('code','max_decline')->first();                     // 最大跌幅

        if($currentPrice < $yesterdayEndPrice && $yesterdayEndPrice != 0 && abs($currentPrice - $yesterdayEndPrice) / $yesterdayEndPrice > $max_decline->value){

            return ['status' => false,'msg' => '股票禁止交易！'];

        }
      

        $count_deal_money = $currentPrice * $tactic->num;       // 成交额

        $return_money = ($currentPrice - $tactic->price) * $tactic->num + $tactic->count_xingyongjin;

        $profit = round(($currentPrice - $tactic->price) * $tactic->num - $tactic->count_diyanfei - $tactic->cangfei,2);

        $commission = 0;

        if($profit > 0){

            $commission = round($profit * $commission_ratio->value,2);

            $profit = $profit-$commission;

            $return_money = $return_money-$commission;

        }

        if($return_money<0){
            $return_money=0;
        }

        $rate = round((($currentPrice - $tactic->price) * $tactic->num) / $tactic->count_xingyongjin * 100) . '%';



        $data = [

            'order_status' => 1,

            'pingcang_type' => '用户平仓',

            'profit' => $profit,

            'return_money' => (float) $return_money,

            'commission' => $commission,

            'rate' => $rate,

            'deal_money' => $currentPrice,

            'count_deal_money' => $count_deal_money,

            'deal_time' => date('Y-m-d H:i:s'),

            'is_settle' => 1,   // 已结算

        ];

        if($tactic->buy_orderId > 0 && $tactic->is_entrust < 99){

            $data['platform_profit'] = $tactic->cangfei + $tactic->count_diyanfei + $commission;

        }else{

//            $data['platform_profit'] = $tactic->cangfei + $tactic->count_diyanfei - ($currentPrice - $tactic->price) * $tactic->num + $commission;
            $data['platform_profit'] = 0-$profit;

        }

        $charge = [

            'user_id' => $user->id,

            'order_no' => $tactic->order_no,

            'sn'=>"9SN".$tactic->order_no,

            'type' => 9,

            'money' => (float) $return_money,

            'status' => 1,

            'info' => "用户【{$user->id}|{$user->phone}】平仓，返还金额{$return_money}元",

            'create_ip' => $request->getClientIp()

        ];

        if($tactic->is_analog == 0){

            $charge['is_analog'] = 0;

            $charge['before_balance'] = $user->money;

            $charge['after_balance'] = $user->money + (float) $return_money;

            DB::beginTransaction();

            try{

                if($tactic->is_entrust == 1 || $tactic->is_entrust == 7){               // 走实盘，先不执行结算操作

                    // $tactic->update([

                    //     'pingcang_type' => '用户平仓',

                    //     'is_entrust' => 2,

                    // ]);

                    $tactic->pingcang_type = '用户平仓';

                    $tactic->is_entrust = 2;

                    $tactic->save();

                    DB::commit();

                    // \Log::info('队列sale开始-----：'.$tactic->id.'-----'.$tactic->code.'-----'.date('Y-m-d H:i:s'));

                    // $this->dispatch(new ShipanHandle($tactic,2,$sharesInfo['yesterday_end_price']));

                    // \Log::info('队列sale结束-----：'.$tactic->id.'-----'.$tactic->code.'-----'.date('Y-m-d H:i:s'));

                    return ['status' => true, 'msg' => '交易委托中！'];

                    // ShipanHandle::dispatch($tactic,2,$sharesInfo['yesterday_end_price'])->onQueue('peizi-worker_0'.rand(0,7));

                }else{

                    $tactic->update($data);

                    Charge::create($charge);

                    $user->update([

                        'money' => DB::raw("money + $return_money"),

                        'total_corpus' => DB::raw("total_corpus + $tactic->count_xingyongjin"),

                        'total_profit' => DB::raw("total_profit + $tactic->num * ($currentPrice - $tactic->price)"),

                    ]);

                    //返佣金

                    rebate($tactic);

                }

                DB::commit();

                return ['status' => true, 'msg' => '交易成功！'];

            }catch (\Exception $e ){

                DB::rollback();

                return ['status' => false, 'msg' => '交易失败！'];

            }

        }elseif($tactic->is_analog == 1){

            $charge['is_analog'] = 1;

            $charge['before_balance'] = $user->analog_money;

            $charge['after_balance'] = $user->analog_money + (float) $return_money;

            DB::beginTransaction();

            try{

                $tactic->update($data);

                Charge::create($charge);

                $user->increment('analog_money',$return_money);

                DB::commit();

                return ['status' => true, 'msg' => '交易成功！'];

            }catch (\Exception $e ){

                DB::rollback();

                return ['status' => false, 'msg' => '交易失败！'];

            }

        }

    }

    public function pingcang(Tactics $tactic,$sharesInfo = [],$type = '平仓')

    {

        if(!$tactic->order_status){

            if(!$sharesInfo){

                $sharesInfo = getRealTimeInfo($tactic->code);

            }

            if(!$sharesInfo){

                return ['status' => false,'msg' => '系统错误！'];

            }

            $commission_ratio = Setting::where('code','commission_ratio')->first();

            if(!$commission_ratio || !is_numeric($commission_ratio->value)){

                return ['status' => false,'msg' => '系统错误！'];

            }



            $currentPrice = $sharesInfo['current_price'];           // 当前价格

            $count_deal_money = $currentPrice * $tactic->num;       // 成交额

            $return_money = ($currentPrice - $tactic->price) * $tactic->num + $tactic->count_xingyongjin;

            $profit = round(($currentPrice - $tactic->price) * $tactic->num - $tactic->count_diyanfei - $tactic->cangfei,2);

            $commission = 0;

            if($profit > 0){

                $commission = round($profit * $commission_ratio->value,2);

                $profit = $profit-$commission;

                $return_money = $return_money-$commission;

            }

            if($return_money<0){
                $return_money=0;
            }

            $rate = round((($currentPrice - $tactic->price) * $tactic->num) / $tactic->count_xingyongjin * 100) . '%';



            $data = [

                'order_status' => 1,

                'pingcang_type' => $type,

                'profit' => (float) $profit,

                'return_money' => (float) $return_money,

                'commission' => (float) $commission,

                'rate' => $rate,

                'deal_money' => (float) $currentPrice,

                'count_deal_money' => (float) $count_deal_money,

                'deal_time' => Carbon::now(),

                'is_settle' => 1,   // 已结算

            ];

            if($tactic->buy_orderId > 0 && $tactic->is_entrust < 99){

                $data['platform_profit'] = $tactic->cangfei + $tactic->count_diyanfei+ $commission;

            }else{

                $data['platform_profit'] = 0-$profit;

            }

            $charge = [

                'user_id' => $tactic->user_id,

                'order_no' => $tactic->order_no,

                'type' => 3,
              	
              	'sn'=>"3SN".$tactic->order_no,

                'money' => (float) $return_money,

                'status' => 1,

                'info' => "用户【{$tactic->user->id}|{$tactic->user->phone}】【{$type}】，返还金额{$return_money}元",

                'create_ip' => '127.0.0.1'

            ];

            $find=Charge::where('order_no',$tactic->order_no)->where('type',3)->first();
            if(!$find){
                if($tactic->is_analog == 0){

                    $charge['is_analog'] = 0;

                    $charge['before_balance'] = (float) $tactic->user->money;

                    $charge['after_balance'] =  (float) $tactic->user->money + $return_money;

                    DB::beginTransaction();

                    try{

                        if($tactic->is_entrust == 1 || $tactic->is_entrust == 7){               // 走实盘，先不执行结算操作

                            $tactic->update(['pingcang_type' => $type,'is_entrust' => 2]);

                            // \Log::info('队列pingcang开始-----：'.$tactic->id.'-----'.$tactic->code.'-----'.date('Y-m-d H:i:s'));

                            // $this->dispatch(new ShipanHandle($tactic,2,$sharesInfo['yesterday_end_price']));

                            // \Log::info('队列pingcang结束-----：'.$tactic->id.'-----'.$tactic->code.'-----'.date('Y-m-d H:i:s'));

                            // ShipanHandle::dispatch($tactic,2,$sharesInfo['yesterday_end_price'])->onQueue('peizi-worker_0'.rand(0,7));

                            // $this->dispatch((new ShipanHandle($tactic,2,$sharesInfo['yesterday_end_price']))->onQueue('peizi-worker_0'.rand(0,7));

                        }else{

                            $tactic->update($data);

                            Charge::create($charge);

                            $tactic->user->increment('money',(float) $return_money);

                            $tactic->user->increment('total_corpus',(float) $tactic->count_xingyongjin);

                            $tactic->user->increment('total_profit',$tactic->num * ($currentPrice - $tactic->price));

                            rebate($tactic);

                        }

                        DB::commit();

                    }catch (\Exception $e ){

                        DB::rollback();

                    }

                }elseif($tactic->is_analog == 1){

                    $charge['is_analog'] = 1;

                    $charge['before_balance'] = $tactic->user->analog_money;

                    $charge['after_balance'] = $tactic->user->analog_money + $return_money;

                    DB::beginTransaction();

                    try{

                        $tactic->update($data);

                        Charge::create($charge);

                        $tactic->user->decrement('analog_money',$return_money);

                        DB::commit();

                    }catch (\Exception $e ){

                        DB::rollback();

                    }

                }
            }

        }

    }

    public function shipanSettle(Tactics $tactic)

    {

        if(!$tactic->order_status){

            $commission_ratio = Setting::where('code','commission_ratio')->first();

            if(!$commission_ratio || !is_numeric($commission_ratio->value)){

                return ['status' => false,'msg' => '系统错误！'];

            }



            $currentPrice = $tactic->deal_money;           // 结算价格

            $count_deal_money = $currentPrice * $tactic->num;       // 成交额

            $return_money = ($currentPrice - $tactic->price) * $tactic->num + $tactic->count_xingyongjin;

            $profit = round(($currentPrice - $tactic->price) * $tactic->num - $tactic->count_diyanfei - $tactic->cangfei,2);

            $commission = 0;

            if($profit > 0){

                $commission = round($profit * $commission_ratio->value,2);

                $profit = $profit-$commission;

                $return_money = $return_money-$commission;

            }



            $rate = round((($currentPrice - $tactic->price) * $tactic->num) / $tactic->count_xingyongjin * 100) . '%';



            $data = [

                'order_status' => 1,

                'profit' => (float) $profit,

                'return_money' => (float) $return_money,

                'commission' => (float) $commission,

                'rate' => $rate,

                'deal_money' => (float) $currentPrice,

                'count_deal_money' => (float) $count_deal_money,

                'deal_time' => Carbon::now(),

                'is_settle' => 1,   // 已结算

            ];

            if($tactic->buy_orderId > 0 && $tactic->is_entrust > 0){

                $data['platform_profit'] = $tactic->cangfei + $tactic->count_diyanfei;

            }else{

                $data['platform_profit'] = $tactic->cangfei + $tactic->count_diyanfei - ($currentPrice - $tactic->price) * $tactic->num;

            }

            $charge = [

                'user_id' => $tactic->user_id,

                'order_no' => $tactic->order_no,

                'type' => 3,
              
             	 'sn'=>"3SN".$tactic->order_no,

                'money' => (float) $return_money,

                'status' => 1,

                'info' => "用户【{$tactic->user->id}|{$tactic->user->phone}】【{$tactic->pingcang_type}】，返还金额{$return_money}元",

                'create_ip' => '127.0.0.1'

            ];

            if($tactic->is_analog == 0){

                $charge['is_analog'] = 0;

                $charge['before_balance'] = (float) $tactic->user->money;

                $charge['after_balance'] =  (float) $tactic->user->money + $return_money;

                DB::beginTransaction();

                try{

                    $tactic->update($data);

                    Charge::create($charge);

                    $tactic->user->increment('money',(float) $return_money);

                    $tactic->user->increment('total_corpus',(float) $tactic->count_xingyongjin);

                    $tactic->user->increment('total_profit',$tactic->num * ($currentPrice - $tactic->price));

                    rebate($tactic);

                    DB::commit();

                }catch (\Exception $e ){

                    DB::rollback();

                }

            }elseif($tactic->is_analog == 1){

                $charge['is_analog'] = 1;

                $charge['before_balance'] = $tactic->user->analog_money;

                $charge['after_balance'] = $tactic->user->analog_money + $return_money;

                DB::beginTransaction();

                try{

                    $tactic->update($data);

                    Charge::create($charge);

                    $tactic->user->decrement('analog_money',$return_money);

                    DB::commit();

                }catch (\Exception $e ){

                    DB::rollback();

                }

            }

        }

    }

    //是否递延

    public function isSell(Request $request)
    {

        $user = Auth::user();

        $user_id = Auth::user()->id;

        $tactic_id = $request->tactic_id;

        $tactic_id = $request->tactic_id;

        $is_sell = $request->is_sell;

        $status = 0;

        if (!$tactic_id){

            return ['status'=>false,'msg'=>'该订单号不存在'];

        }

        $tactic = Tactics::where('user_id',$user_id)->where('id',$tactic_id)->first();

        if (!$tactic){

            return ['status'=>false,'msg'=>'该订单不存在'];

        }

        if (($is_sell == 1 || $is_sell == 2)){

            $tactic->is_sell = $is_sell;

            $status = $tactic->save();

        }

        if ($status){

            return ['status'=>true,'修改成功'];

        }else{

            return ['status'=>false,'修改失败'];

        }



    }

    //修改止盈止损价

    public function editMinPrice(Request $request)
    {

        $max_price = $request->max_price;

        $min_price = $request->min_price;

        $user = Auth::user();

        $user_id = $user->id;

        $tactic_id = $request->tactic_id;

        if (!$tactic_id){

            return ['status'=>false,'msg'=>'该订单号不存在'];

        }

        $tactic = Tactics::where('user_id',$user_id)->where('id',$tactic_id)->first();

        if (!$tactic){

            return ['status'=>false,'msg'=>'该订单不存在'];

        }

        $loss_ratio = Setting::where('code','loss_ratio')->first();

        if(!$loss_ratio || !is_numeric($loss_ratio->value)){

            return ['status' => false,'msg' => '系统错误！'];

        }
        $profit_ratio = Setting::where('code','profit_ratio')->first();

        if(!$profit_ratio || !is_numeric($profit_ratio->value)){

            return ['status' => false,'msg' => '系统错误！'];

        }

        // (((交易本金[信用金*策略倍数])-(总信用金*可扣除的比例[loss_ratio]))/交易本金)*股价

        $all_trade = $tactic->xingyongjin * $tactic->multiple;  // 交易本金

        $xinyongjin_canuse = $tactic->count_xingyongjin * $loss_ratio->value;  // 信用金可扣除的额度

        $res = $all_trade - $xinyongjin_canuse < 0?0:$all_trade - $xinyongjin_canuse;

        $is_min_price = round($res * $tactic->price/$all_trade,2);        // 最小止损

        $profit_canuse = $all_trade * $profit_ratio->value;  // 最大盈利

        $res = $all_trade + $profit_canuse;

        $is_max_price = round($res * $tactic->price/$all_trade,2);        // 最大止盈

        if($max_price <= $tactic->price){

            return ['stauts'=>false,'msg' => '止盈价格不能小于买入价格'];

        }
        if($min_price >= $tactic->price){

            return ['stauts'=>false,'msg' => '止损价格不能大于买入价格'];

        }
        if ($is_min_price>$min_price){

            return ['stauts'=>false,'msg' => '止损价格设置过低'];

        }
        if ($is_max_price<$max_price){

            return ['stauts'=>false,'msg' => '止盈价格设置过高'];

        }

        $tactic->min_price = $min_price;

        $tactic->max_price = $max_price;

        $status = $tactic->save();

        if ($status){

            return ['status'=>true,'msg' => '修改成功'];

        }else{

            return ['status'=>false,'msg' => '修改失败'];

        }



    }

    public  function addMoney($data){

        $user = User::lockForUpdate()->find($data['user_id']);

        $before_balance	= $user->money;

        $user->money= $user->money+$data['profit'];

        $after_balance	= $user->money;

        //账户钱不够

        if ($user->money<0){

            DB::rollback();

            exit;

        }

        $r = $user->save();

        $card_id = isset($data['card_id'])?$data['card_id']:0;

        $status = Charge::create([

            'card_id' => $card_id,

            'user_id'=>$data['user_id'],

            'order_no'=> $data['order_no'],

            'status'=>$data['status'],

            'type' =>$data['type'],

            'before_balance' => $before_balance,

            'after_balance' => $after_balance,

            'info' =>$data['info'],

            'money' => $data['profit']

        ]);



    }



    //自动追加信用金

    // public  function addXingyongjin($data){

    //     $data['type'] = 6;

    //     $data['info'] = "{$data['phone']}用户{$data['user_id']}自动追加信用金{$data['xingyongjin']}";

    //     $data['status'] = 1;

    //     $data['profit'] = -$data['xingyongjin'];

    //     DB::beginTransaction();

    //     try {

    //         $this->addMoney($data);

    //         $loss_ratio = Setting::where('code','loss_ratio')->first();

    //         if(!$loss_ratio || !is_numeric($loss_ratio->value)){

    //             return ['status' => false,'msg' => '系统错误！'];

    //         }

    //         $min_price = round($data['nowPrice']-$data['nowPrice']*$loss_ratio->value/$data['multiple'],2);

    //         Tactics::where('id',$data['id'])->increment('count_xingyongjin',$data['xingyongjin'],['min_price' =>$min_price]);

    //         DB::commit();

    //     }catch (\Exception $e){

    //         DB::rollback();

    //     }

    // }



    /**

     * 俞俊杰 追加信用金

     */

    public function addXinYongJin($tactic,$sharesInfo = [],$xinyongjin = 0)

    {

        if(!$xinyongjin){

            $xinyongjin = $tactic->xingyongjin;

        }

        if(!$sharesInfo){

            $sharesInfo = getRealTimeInfo($tactic->code);

        }

        if(!$sharesInfo){

            return false;

        }

        DB::beginTransaction();

        try{

            $tactic->increment('count_xingyongjin',$xinyongjin);

            $loss_ratio = Setting::where('code','loss_ratio')->first();

            if(!$loss_ratio || !is_numeric($loss_ratio->value)){

                return ['status' => false,'msg' => '系统错误！'];

            }
            $profit_ratio = Setting::where('code','profit_ratio')->first();

            if(!$profit_ratio || !is_numeric($profit_ratio->value)){

                return ['status' => false,'msg' => '系统错误！'];

            }

            // (((交易本金[信用金*策略倍数])-(总信用金*可扣除的比例[loss_ratio]))/交易本金)*股价

            $all_trade = $tactic->xingyongjin * $tactic->multiple;  // 交易本金

            $xinyongjin_canuse = $tactic->count_xingyongjin * $loss_ratio->value;  // 信用金可扣除的额度

            $res = $all_trade - $xinyongjin_canuse < 0?0:$all_trade - $xinyongjin_canuse;

            $min_min_price = round($res * $tactic->price/$all_trade,2);        // 最小止损

            $profit_canuse = $all_trade * $profit_ratio->value;  // 最大盈利

            $res = $all_trade + $profit_canuse;

            $max_max_price = round($res * $tactic->price/$all_trade,2);        // 最大止盈

            $tactic->min_price = $min_min_price;
            $tactic->max_price = $max_max_price;

            $tactic->save();

            $charge = [

                'user_id' => $tactic->user_id,

                'order_no' => $tactic->order_no,

                'type' => 6,

                'money' => 0 - (float) $xinyongjin,

                'status' => 1,

                'info' => "用户【{$tactic->user->id}|{$tactic->user->phone}】系统追加信用金{$xinyongjin}元",

                'create_ip' => '127.0.0.1',

                'is_analog' => $tactic->is_analog,
            ];

            if($tactic->is_analog == 0){

                $charge['before_balance'] = $tactic->user->money;

                $charge['after_balance'] = $tactic->user->money - (float) $xinyongjin;

                $tactic->user->decrement('money',(float) $xinyongjin);

            }elseif($tactic->is_analog == 1){

                $charge['before_balance'] = $tactic->user->analog_money;

                $charge['after_balance'] = $tactic->user->analog_money - (float) $xinyongjin;

                $tactic->user->decrement('analog_money',(float) $xinyongjin);

            }

            Charge::create($charge);

            DB::commit();

            return true;

        }catch (\Exception $e ){

            DB::rollback();

            return false;

        }

    }



    public function tacticsHome($type){

        if($type == 'new'){

            $tactics = Tactics::join('shares','tactics.code','shares.code')->where('shares.is_del',0)->where('tactics.order_status',0)->orderBy('tactics.created_at','desc')->limit(6)->get(['tactics.id','tactics.user_id','tactics.code','tactics.price','tactics.rate','tactics.deal_money','tactics.num','tactics.profit','tactics.created_at']);

        }elseif($type == 'best'){

            $tactics = Tactics::join('shares','tactics.code','shares.code')->where('shares.is_del',0)->where('tactics.order_status',1)->orderBy('tactics.rate','desc')->limit(3)->get(['tactics.id','tactics.user_id','tactics.code','tactics.price','tactics.rate','tactics.deal_money','tactics.num','tactics.profit','tactics.created_at']);

        }else{

            return;

        }

        return $this->response->collection($tactics,new TacticsTransformer());

    }



    public function tacticsList($type){

        if($type == 'new'){

            $tactics = Tactics::join('shares','tactics.code','shares.code')->where('shares.is_del',0)->where('tactics.order_status',0)->orderBy('tactics.created_at','desc')->paginate(15);

        }elseif($type == 'best'){

            $tactics = Tactics::join('shares','tactics.code','shares.code')->where('shares.is_del',0)->where('tactics.order_status',1)->orderBy('tactics.rate','desc')->paginate(15);

        }else{

            return;

        }

        return $this->response->paginator($tactics,new TacticsTransformer());

    }

    public function hotshare()
    {
    	$shares = Shares::where('is_hot',1)->limit(3)->get();
      	$sharesStr = $shares->pluck('code')->implode(',');
      	$sharesInfo = getRealTimeInfos($sharesStr);
      	return $sharesInfo;
    }

    public function computePlan()

    {

        Tactics::where('order_status',1)->get();

    }

}
