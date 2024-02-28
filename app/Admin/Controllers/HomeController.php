<?php

namespace App\Admin\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Charge;
use App\Models\Tactics;
use App\Models\User;
use Encore\Admin\Controllers\Dashboard;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Layout\Column;
use Encore\Admin\Layout\Content;
use Encore\Admin\Layout\Row;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
//    public function index(Content $content)
//    {
//        return $content
//            ->header('Dashboard')
//            ->description('Description...')
//            ->row(Dashboard::title())
//            ->row(function (Row $row) {
//
//                $row->column(4, function (Column $column) {
//                    $column->append(Dashboard::environment());
//                });
//
//                $row->column(4, function (Column $column) {
//                    $column->append(Dashboard::extensions());
//                });
//
//                $row->column(4, function (Column $column) {
//                    $column->append(Dashboard::dependencies());
//                });
//            });
//    }

    public function index(Content $content)
    {

        try{
            if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
                $user_id=Admin::user()->agent_id;
                $user=User::with('bankcard')->find($user_id);
                if(!$user){
                    Auth::guard('admin')->logout();
                    return redirect("admin/auth/logout");
                }
                $allAgents = User::where('level','>',0)->get();
                // 获取所有子集id
                $agents = getChildren($allAgents,$user_id);

                

                $today=date('Y-m-d');
                $data['total_user']=User::whereIn('pid',$agents)->count();
                $data['today_user']=User::where('created_at','like','%'.$today.'%')->whereIn('pid',$agents)->count();
                $today_tactics=DB::select('select distinct(b.id) from tactics as a left join users as b on a.user_id = b.id where a.is_analog = 0 and a.created_at like "%'.$today.'%" and b.pid in ('.implode(',',$agents).')');
                $data['today_tactics_count']=count($today_tactics);

                $data['total_charge']=Charge::leftjoin('users','charges.user_id','=','users.id')->where('charges.is_analog',0)->whereIn('charges.type',[1,4])->where('charges.status',1)->whereIn('users.pid',$agents)->sum('charges.money');
                $data['today_total_charge']=Charge::leftjoin('users','charges.user_id','=','users.id')->where('charges.is_analog',0)->whereIn('charges.type',[1,4])->where('charges.status',1)->where('charges.created_at','like','%'.$today.'%')->whereIn('pid',$agents)->sum('charges.money');

                $data['total_withdraw']=abs(Charge::leftjoin('users','charges.user_id','=','users.id')->where('charges.is_analog',0)->where('charges.status',1)->where('charges.type',5)->whereIn('users.pid',$agents)->sum('charges.money'));
                $data['today_total_withdraw']=abs(Charge::leftjoin('users','charges.user_id','=','users.id')->where('charges.is_analog',0)->where('charges.status',1)->where('charges.type',5)->where('charges.created_at','like','%'.$today.'%')->whereIn('users.pid',$agents)->sum('charges.money'));
                // $data['user_total_withdraw']=abs(Charge::leftjoin('users','charges.user_id','=','users.id')->where('charges.is_analog',0)->where('users.level',0)->where('charges.type',5)->whereIn('users.pid',$agents)->sum('charges.money'));
                // $data['agent_total_withdraw']=abs(Charge::leftjoin('users','charges.user_id','=','users.id')->where('charges.is_analog',0)->where('users.level','!=',0)->where('charges.type',5)->whereIn('users.pid',$agents)->sum('charges.money'));

                $data['total_tactics_money_tmp']=Tactics::leftjoin('users','tactics.user_id','=','users.id')->where('tactics.is_analog',0)->where('is_entrust',1)->whereIn('users.pid',$agents)->get(['price','num']);
                $data['total_tactics_money'] = $data['total_tactics_money_tmp']->map(function($item){
                    return $item->price * $item->num;
                })->sum();
                $data['today_tactics_money_tmp']=Tactics::leftjoin('users','tactics.user_id','=','users.id')->where('tactics.is_analog',0)->where('is_entrust',1)->where('tactics.created_at','like','%'.$today.'%')->whereIn('users.pid',$agents)->get(['price','num']);
                $data['today_tactics_money'] = $data['today_tactics_money_tmp']->map(function($item){
                    return $item->price * $item->num;
                })->sum();
                $data['total_sale_money']=Tactics::leftjoin('users','tactics.user_id','=','users.id')->where('tactics.is_analog',0)->where('tactics.order_status',1)->whereIn('users.pid',$agents)->sum('tactics.count_deal_money');
                $data['today_sale_money']=Tactics::leftjoin('users','tactics.user_id','=','users.id')->where('tactics.is_analog',0)->where('deal_time','like','%'.$today.'%')->where('tactics.order_status',1)->whereIn('users.pid',$agents)->sum('tactics.count_deal_money');
                $data['total_man_money_tmp']=Tactics::leftjoin('users','tactics.user_id','=','users.id')->where('tactics.is_analog',0)->whereIn('users.pid',$agents)->get(['tactics.cangfei','tactics.count_diyanfei']);
                $data['total_man_money']=$data['total_man_money_tmp']->map(function($item){
                    return $item->cangfei + $item->count_diyanfei;
                })->sum();
                $data['total_cangfei']=Tactics::leftjoin('users','tactics.user_id','=','users.id')->where('tactics.is_analog',0)->whereIn('users.pid',$agents)->where('tactics.order_status','<',2)->sum('tactics.cangfei');
                $data['count_deal_money']=Tactics::leftjoin('users','tactics.user_id','=','users.id')->where('tactics.is_analog',0)->whereIn('users.pid',$agents)->sum('tactics.count_deal_money');
                $data['count_diyanfei']=Tactics::leftjoin('users','tactics.user_id','=','users.id')->where('tactics.is_analog',0)->whereIn('users.pid',$agents)->sum('tactics.count_diyanfei');
                $data['diyanfei']=Tactics::leftjoin('users','tactics.user_id','=','users.id')->where('tactics.is_analog',0)->where('tactics.order_status',0)->whereIn('users.pid',$agents)->sum('tactics.diyanfei');
                $data['today_income_diyanfei']=abs(Charge::leftjoin('users','charges.user_id','=','users.id')->where('charges.is_analog',0)->where('charges.type',8)->where('charges.status',1)->where('charges.created_at','like','%'.$today.'%')->whereIn('users.pid',$agents)->sum('charges.money'));
                $data['total_commission']=User::whereIn('pid',$agents)->where('level','!=',0)->sum('total_commission');

                $data['total_return_money']=Tactics::leftjoin('users','tactics.user_id','=','users.id')->where('tactics.is_analog',0)->whereIn('users.pid',$agents)->where('tactics.order_status',1)->sum('tactics.return_money');
                $data['today_return_money']=Tactics::leftjoin('users','tactics.user_id','=','users.id')->where('tactics.is_analog',0)->whereIn('users.pid',$agents)->where('tactics.order_status',1)->where('tactics.deal_time','like','%'.$today.'%')->sum('tactics.return_money');

                $data['total_credit_money']=abs(Charge::leftjoin('users','charges.user_id','=','users.id')->where('charges.is_analog',0)->whereIn('users.pid',$agents)->where('charges.status',1)->where('charges.type',6)->sum('charges.money'));

                $data['level_lower_count'] = User::whereIn('pid',$agents)->where('level',0)->count();

                $data['total_money_count']=User::whereIn('pid',$agents)->sum('money');
                $data['total_capital_count']=$data['total_money_count'] + Tactics::leftjoin('users','tactics.user_id','=','users.id')->where('tactics.is_analog',0)->whereIn('users.pid',$agents)->where('tactics.order_status',0)->sum('count_xingyongjin');
                $tactics = Tactics::leftjoin('users','tactics.user_id','=','users.id')->where('tactics.is_analog',0)->whereIn('users.pid',$agents)->where('tactics.order_status',0)->get(['tactics.id','tactics.code','is_entrust','num']);
                $codes = $tactics->pluck('code')->unique()->implode(',');
                $goods = getRealTimeInfos($codes);
                $chicang_tmp = $tactics->map(function($item) use ($goods){
                    if(array_key_exists($item->code,$goods)){
                        if($item->is_entrust < 99){
                            return ['is_shipan' => 'is_shipan','market_value' => $item->num * $goods[$item->code]['current_price']];
                        }else{
                            return ['is_shipan' => 'not_shipan','market_value' => $item->num * $goods[$item->code]['current_price']];
                        }
                    }
                })->groupBy('is_shipan');
                $data['total_A_chicang_count']=$chicang_tmp->has('is_shipan')?$chicang_tmp['is_shipan']->sum('market_value'):0;
                $data['total_B_chicang_count']=$chicang_tmp->has('not_shipan')?$chicang_tmp['not_shipan']->sum('market_value'):0;
                $data['total_chicang_count']=$data['total_A_chicang_count']+$data['total_B_chicang_count'];

                $data['bankcard']='';
                if(count($user->bankcard)>0){
                    for($i=0;$i<count($user->bankcard);$i++)
                    {
                        $data['bankcard']=$data['bankcard']."<span style='margin-left: 0.5em'>银行：".$user->bankcard[$i]->card_name."&nbsp;卡号：".$user->bankcard[$i]->card_number."&nbsp;支行：".$user->bankcard[$i]->card_address."&nbsp;<a href='/admin/bankcard/".$user->bankcard[$i]->id."/edit'class='btn btn-danger noShow'style='background-color:#00c0ef;border-color:#00c0ef' >编辑</a></span><br>";
                    }
                }
                $data['bankcard']=$data['bankcard']."<span style='margin-left: 0.5em'><a href='/admin/bankcard/create/agent'class='btn btn-danger noShow'style='background-color:#00c0ef;border-color:#00c0ef'>添加</a></span>";

                return $content
                    ->header('个人基本信息')
                    ->description(' ')
                    ->row(function (Row $row)use($data,$user) {
                        $row->column(12, function (Column $column)use($data,$user) {
                            $column->append('<table border="1" style="width: 100%;background-color: white;border-width: 0;margin-bottom:20px;">
                                                        <tr style="height: 2.5em;"><td style="width: 20%"><span style="float:right">账户名：</span></td><td style="width: 80%"><span style="margin-left: 0.5em">'.$user->phone.'</span></td></tr>
                                                        <tr style="height: 2.5em;"><td style="width: 20%"><span style="float:right">姓名：</span></td><td style="width: 80%"><span style="margin-left: 0.5em">'.$user->name.'</span></td></tr>
                                                        <tr style="height: 2.5em;"><td style="width: 20%"><span style="float:right">手机号码：</span></td><td style="width: 80%"><span style="margin-left: 0.5em">'.$user->phone.'</span></td></tr>
                                                        <tr style="height: 2.5em;"><td style="width: 20%"><span style="float:right">银行卡：</span></td><td style="width: 80%"><span style="margin-left: 0em">'.$data['bankcard'].'</span></td></tr>
                                                        <tr style="height: 2.5em;"><td style="width: 20%"><span style="float:right">总佣金(元)：</span></td><td style="width: 80%"><span style="margin-left: 0.5em">'.$user->total_commission.'</span></td></tr>
                                                        <tr style="height: 2.5em;"><td style="width: 20%"><span style="float:right">递延费佣金比例：</span></td><td style="width: 80%"><span style="margin-left: 0.5em">'.$user->deferredrate.'%</span></td></tr>
                                                        <tr style="height: 2.5em;"><td style="width: 20%"><span style="float:right">综合费佣金比例：</span></td><td style="width: 80%"><span style="margin-left: 0.5em">'.$user->synthesizerate.'%</span></td></tr>
                                                        <tr style="height: 2.5em;"><td style="width: 20%"><span style="float:right">账户余额（元）：</span></td><td style="width: 80%"><span style="margin-left: 0.5em">'.$user->money.'
                                                        <a href="/admin"class="btn btn-danger noShow" style="background-color:#00c0ef;border-color:#00c0ef">刷新</a>
                                                        <a href="/admin/agent/withdraw/deal" class="btn btn-danger noShow" style="background-color:#00c0ef;border-color:#00c0ef">提现</a></span></td></tr>
                                                        <tr style="height: 2.5em;"><td style="width: 20%"><span style="float:right">已发展策略人数：</span></td><td style="width: 80%"><span style="margin-left: 0.5em">'.$data['level_lower_count'].'</span></td></tr>
                                                        <tr style="height: 2.5em;"><td style="width: 20%"><span style="float:right">推荐码：</span></td><td style="width: 80%"><span style="margin-left: 0.5em">'.$user->code.'</span></td></tr>
                                                        <tr style="height: 2.5em;"><td style="width: 20%"><span style="float:right">注册链接：</span></td><td style="width: 80%"><span style="margin-left: 0.5em">'.url('/dist/#/loginRegistrat/registrat?code='.$user->code).'</span></td></tr>
                                                        <tr><td style="width: 20%"><span style="float:right">注册二维码：</span></td><td style="width: 80%"><img src="'.url("admin/agent/generate_qrcode/$user->code").'"></td></tr>
                                                      </table>');
                        });
                    })
                    ->row(function (Row $row)use($data) {
 
                        $row->column(4, function (Column $column)use($data) {
                            $column->append("<div style='background: #00acd6;color:white;height: 10em;font-size: 1.2em;font-weight: bold'>
                                                    <div style='margin-left: 0.5em'>总注册会员&emsp;<span style='margin-left: 1em'>".$data['total_user']."</span></div>
                                                    <div style='margin-left: 0.5em'>今日注册会员<span style='margin-left: 1em'>".$data['today_user']."</span></div>
                                                    <div style='margin-left: 0.5em'>今日交易用户<span style='margin-left: 1em'>".$data['today_tactics_count']."</span></div>
                                                    </div>");
                        });
                        $row->column(4, function (Column $column)use($data) {
                            $column->append("<div style='background: #00acd6;color:white;height: 10em;font-size: 1.2em;font-weight: bold'>
                                                <div style='margin-left: 0.5em'>累计充值总额<span style='margin-left: 1em'>".$data['total_charge']."</span></div>
                                                <div style='margin-left: 0.5em'>今日充值总额<span style='margin-left: 1em'>".$data['today_total_charge']."</span></div>
                                                <div style='margin-left: 0.5em'>累计提现总额<span style='margin-left: 1em'>".$data['total_withdraw']."</span></div>
                                                <div style='margin-left: 0.5em'>今日提现总额<span style='margin-left: 1em'>".$data['today_total_withdraw']."</span></div>
                                                </div>");
                        });
                        $row->column(4, function (Column $column)use($data) {
                            $column->append("<div style='background: #00acd6;color:white;height: 10em;font-size: 1.2em;font-weight: bold'>
                                                <div style='margin-left: 0.5em'>累计买入<span style='margin-left: 1em'>".$data['total_tactics_money']."</span></div>
                                                <div style='margin-left: 0.5em'>今日买入<span style='margin-left: 1em'>".$data['today_tactics_money']."</span></div>
                                                <div style='margin-left: 0.5em'>累计卖出<span style='margin-left: 1em'>".$data['total_sale_money']."</span></div>
                                                <div style='margin-left: 0.5em'>今日卖出<span style='margin-left: 1em'>".$data['today_sale_money']."</span></div>
                                                </div>");
                        });

                    })
                    ->row(function (Row $row)use($data) {

                        $row->column(4, function (Column $column)use($data) {
                            $column->append("<div style='background: #00acd6;color:white;margin-top: 2em;height: 10em;font-size: 1.2em;font-weight: bold'>
                                                <div style='margin-left: 0.5em'>持仓总额<span style='margin-left: 1em'>".$data['total_chicang_count']."</span></div>
                                                <div style='margin-left: 0.5em'>账户总余额<span style='margin-left: 1em'>".$data['total_money_count']."</span></div>
                                                </div>");
                        });
                        $row->column(4, function (Column $column)use($data) {
                            $column->append("<div style='background: #00acd6;color:white;margin-top: 2em;height: 10em;font-size: 1.2em;font-weight: bold'>
                                                <div style='margin-left: 0.5em'>已收交易综合费<span style='margin-left: 1em'>".$data['total_man_money']."</span></div>
                                                <div style='margin-left: 0.5em'>已收建仓费&emsp;&emsp;<span style='margin-left: 1em'>".$data['total_cangfei']."</span></div>
                                                <div style='margin-left: 0.5em'>已收递延费&emsp;&emsp;<span style='margin-left: 1em'>".$data['count_diyanfei']."</span></div>
                                                <div style='margin-left: 0.5em'>今日应收递延费<span style='margin-left: 1em'>".$data['diyanfei']."</span></div>
                                                <div style='margin-left: 0.5em'>今日实收递延费<span style='margin-left: 1em'>".$data['today_income_diyanfei']."</span></div>
                                                </div>");
                        });

                    });
            }elseif(!Admin::user()->isAdministrator()){
                return $content
                    ->header('首页')
                    ->description(' ')
                    ->body('');
            }else{
                $today=date('Y-m-d');
                $data['total_user']=User::count();
                $data['today_user']=User::where('created_at','like','%'.$today.'%')->count();
                $today_tactics=DB::select('select distinct(user_id) from tactics where is_analog = 0 and created_at like "%'.$today.'%"');
                $data['today_tactics_count']=count($today_tactics);

                $data['total_charge']=Charge::whereIn('type',[1,4])->where('is_analog',0)->where('status',1)->sum('money');
                $data['today_total_charge']=Charge::whereIn('type',[1,4])->where('is_analog',0)->where('status',1)->where('created_at','like','%'.$today.'%')->sum('money');

                $data['total_withdraw']=abs(Charge::where('status',1)->where('is_analog',0)->where('type',5)->sum('money'));
                $data['today_total_withdraw']=abs(Charge::leftjoin('users','charges.user_id','=','users.id')->where('charges.is_analog',0)->where('charges.status',1)->where('charges.type',5)->where('charges.created_at','like','%'.$today.'%')->sum('charges.money'));
                $data['user_total_withdraw']=abs(Charge::leftjoin('users','charges.user_id','=','users.id')->where('charges.is_analog',0)->where('users.level',0)->where('charges.type',5)->sum('charges.money'));
                $data['agent_total_withdraw']=abs(Charge::leftjoin('users','charges.user_id','=','users.id')->where('charges.is_analog',0)->where('users.level','!=',0)->where('charges.type',5)->sum('charges.money'));

                $data['total_tactics_money']=Tactics::where('is_analog',0)->where('is_entrust',1)->sum('create_money');
                $data['today_tactics_money']=Tactics::where('is_analog',0)->where('is_entrust',1)->where('created_at','like','%'.$today.'%')->sum('create_money');
                $data['today_sale_money']=Tactics::where('is_analog',0)->where('deal_time','like','%'.$today.'%')->where('order_status',1)->sum('count_deal_money');


                $data['total_tactics_money_tmp']=Tactics::where('tactics.is_analog',0)->get(['price','num']);
                $data['total_tactics_money'] = $data['total_tactics_money_tmp']->map(function($item){
                    return $item->price * $item->num;
                })->sum();
                $data['today_tactics_money_tmp']=Tactics::where('tactics.is_analog',0)->where('tactics.created_at','like','%'.$today.'%')->get(['price','num']);
                $data['today_tactics_money'] = $data['today_tactics_money_tmp']->map(function($item){
                    return $item->price * $item->num;
                })->sum();
                $data['total_sale_money']=Tactics::where('tactics.is_analog',0)->where('tactics.order_status',1)->sum('tactics.count_deal_money');
                $data['today_sale_money']=Tactics::where('tactics.is_analog',0)->where('deal_time','like','%'.$today.'%')->where('tactics.order_status',1)->sum('tactics.count_deal_money');
                $data['total_man_money_tmp']=Tactics::where('tactics.is_analog',0)->get(['tactics.cangfei','tactics.count_diyanfei']);
                $data['total_man_money']=$data['total_man_money_tmp']->map(function($item){
                    return $item->cangfei + $item->count_diyanfei;
                })->sum();
                $data['total_cangfei']=Tactics::where('tactics.is_analog',0)->where('tactics.order_status','<',2)->sum('tactics.cangfei');
                $data['count_deal_money']=Tactics::where('is_analog',0)->sum('count_deal_money');
                $data['count_diyanfei']=Tactics::where('is_analog',0)->sum('count_diyanfei');
                $data['diyanfei']=Tactics::where('is_analog',0)->where('order_status',0)->sum('diyanfei');
                $data['today_income_diyanfei']=abs(Charge::where('is_analog',0)->where('type',8)->where('status',1)->where('created_at','like','%'.$today.'%')->sum('money'));
                $data['total_commission']=User::where('level','!=',0)->sum('total_commission');

                $data['total_return_money']=Tactics::where('is_analog',0)->where('order_status',1)->sum('return_money');
                $data['today_return_money']=Tactics::where('is_analog',0)->where('order_status',1)->where('deal_time','like','%'.$today.'%')->sum('return_money');

                $data['total_credit_money']=abs(Charge::where('is_analog',0)->where('status',1)->where('type',6)->sum('money'));

                $data['total_money_count']=User::sum('money');
                $data['total_capital_count']=$data['total_money_count'] + Tactics::leftjoin('users','tactics.user_id','=','users.id')->where('tactics.is_analog',0)->where('tactics.order_status',0)->sum('count_xingyongjin');
                $tactics = Tactics::leftjoin('users','tactics.user_id','=','users.id')->where('tactics.is_analog',0)->where('tactics.order_status',0)->get(['tactics.id','tactics.code','is_entrust','num']);
                $codes = $tactics->pluck('code')->unique()->implode(',');
                $goods = getRealTimeInfos($codes);
                $chicang_tmp = $tactics->map(function($item) use ($goods){
                    if(array_key_exists($item->code,$goods)){
                        if($item->is_entrust < 99){
                            return ['is_shipan' => 'is_shipan','market_value' => $item->num * $goods[$item->code]['current_price']];
                        }else{
                            return ['is_shipan' => 'not_shipan','market_value' => $item->num * $goods[$item->code]['current_price']];
                        }
                    }
                })->groupBy('is_shipan');
                $data['total_A_chicang_count']=$chicang_tmp->has('is_shipan')?$chicang_tmp['is_shipan']->sum('market_value'):0;
                $data['total_B_chicang_count']=$chicang_tmp->has('not_shipan')?$chicang_tmp['not_shipan']->sum('market_value'):0;
                $data['total_chicang_count']=$data['total_A_chicang_count']+$data['total_B_chicang_count'];

                return $content
                    ->header('首页')
                    ->description(' ')
                    ->row(function (Row $row)use($data) {

                        $row->column(4, function (Column $column)use($data) {
                            $column->append("<div style='background: #00acd6;color:white;height: 10em;font-size: 1.2em;font-weight: bold'>
                                                    <div style='margin-left: 0.5em'>总注册会员&emsp;<span style='margin-left: 1em'>".$data['total_user']."</span></div>
                                                    <div style='margin-left: 0.5em'>今日注册会员<span style='margin-left: 1em'>".$data['today_user']."</span></div>
                                                    <div style='margin-left: 0.5em'>今日交易用户<span style='margin-left: 1em'>".$data['today_tactics_count']."</span></div>
                                                    </div>");
                        });
                        $row->column(4, function (Column $column)use($data) {
                            $column->append("<div style='background: #00acd6;color:white;height: 10em;font-size: 1.2em;font-weight: bold'>
                                                <div style='margin-left: 0.5em'>累计充值总额<span style='margin-left: 1em'>".$data['total_charge']."</span></div>
                                                <div style='margin-left: 0.5em'>今日充值总额<span style='margin-left: 1em'>".$data['today_total_charge']."</span></div>
                                                <div style='margin-left: 0.5em'>累计提现总额<span style='margin-left: 1em'>".$data['total_withdraw']."</span></div>
                                                <div style='margin-left: 0.5em'>今日提现总额<span style='margin-left: 1em'>".$data['today_total_withdraw']."</span></div>
                                                </div>");
                        });
                        $row->column(4, function (Column $column)use($data) {
                            $column->append("<div style='background: #00acd6;color:white;height: 10em;font-size: 1.2em;font-weight: bold'>
                                                <div style='margin-left: 0.5em'>累计买入<span style='margin-left: 1em'>".$data['total_tactics_money']."</span></div>
                                                <div style='margin-left: 0.5em'>今日买入<span style='margin-left: 1em'>".$data['today_tactics_money']."</span></div>
                                                <div style='margin-left: 0.5em'>累计卖出<span style='margin-left: 1em'>".$data['total_sale_money']."</span></div>
                                                <div style='margin-left: 0.5em'>今日卖出<span style='margin-left: 1em'>".$data['today_sale_money']."</span></div>
                                                </div>");
                        });

                    })
                    ->row(function (Row $row)use($data) {

                        $row->column(4, function (Column $column)use($data) {
                            $column->append("<div style='background: #00acd6;color:white;margin-top: 2em;height: 10em;font-size: 1.2em;font-weight: bold'>
                                                <div style='margin-left: 0.5em'>持仓总额<span style='margin-left: 1em'>".$data['total_chicang_count']."</span></div>
                                                <div style='margin-left: 0.5em'>持仓1通道总额<span style='margin-left: 1em'>".$data['total_A_chicang_count']."</span></div>
                                                <div style='margin-left: 0.5em'>持仓2通道总额<span style='margin-left: 1em'>".$data['total_B_chicang_count']."</span></div>
                                                <div style='margin-left: 0.5em'>账户总余额<span style='margin-left: 1em'>".$data['total_money_count']."</span></div>
                                                </div>");
                        });
                        $row->column(4, function (Column $column)use($data) {
                            $column->append("<div style='background: #00acd6;color:white;margin-top: 2em;height: 10em;font-size: 1.2em;font-weight: bold'>
                                                <div style='margin-left: 0.5em'>已收交易综合费<span style='margin-left: 1em'>".$data['total_man_money']."</span></div>
                                                <div style='margin-left: 0.5em'>已收建仓费&emsp;&emsp;<span style='margin-left: 1em'>".$data['total_cangfei']."</span></div>
                                                <div style='margin-left: 0.5em'>已收递延费&emsp;&emsp;<span style='margin-left: 1em'>".$data['count_diyanfei']."</span></div>
                                                <div style='margin-left: 0.5em'>今日应收递延费<span style='margin-left: 1em'>".$data['diyanfei']."</span></div>
                                                <div style='margin-left: 0.5em'>今日实收递延费<span style='margin-left: 1em'>".$data['today_income_diyanfei']."</span></div>
                                                </div>");
                        });

                    });
            }
        }catch (\Exception $e){
            echo $e->getMessage();
        }
    }
}
