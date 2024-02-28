<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Validator;
use Auth;
use App\Models\Bank;
use App\Models\Charge;
use App\Models\Bankcard;
use App\Models\Setting;
use App\Models\SmsLog;
use Carbon\Carbon;
use Illuminate\Validation\Rule;

class PayController extends Controller
{
    private $payUrl = 'https://cashier.sandpay.com.cn/fastPay/quickPay/index';

    // public function bindCard(Request $request)
    // {
    //     $rules = [
    //         'name' => 'bail|required',
    //         'id_card' => 'bail|required|string',
    //         'card_number' => 'bail|required|string',
    //         // 'card_name' => 'bail|required|string',
    //         'card_address' => 'bail|string',
    //         'tel' => 'bail|required|regex:/^1[34578]\d{9}$/',
    //     ];
    //     $messages = [
    //         'name.required' => '请输入持卡人姓名！',
    //         'id_card.required' => '请输入身份证号！',
    //         'card_number.required' => '请输入银行卡号！',
    //         // 'card_name.required' => '请输入开户银行！',
    //         'tel.required' => '请输入银行绑定手机号！',
    //         'tel.regex' => '请输入正确的手机号！',
    //     ];
    //     $validator = Validator::make($request->all(),$rules,$messages);
    //     if($validator->fails()){
    //         foreach($validator->errors()->all() as $error){
    //             return ['status'=>false,'msg'=>$error];
    //         }
    //     }

    //     $res = checkCard($request->card_number);
    //     if(!$res){
    //         return ['status' => false,'msg' => '卡号验证失败！'];
    //     }
    //     if(!$bank = Bank::where('bank_code',$res->bank)->where('b2c',1)->first()){
    //         return ['status' => false,'msg' => '暂不支持此银行卡支付！'];
    //     }

    //     if(!is_idcard($request->id_card)){
    //         return ['status' => false,'msg' => '请输入正确的身份证号'];
    //     }
    //     // 查询是否已绑定此银行卡
    //     $card = Bankcard::where('user_id',Auth::user()->id)->where('card_number',$request->card_number)->first();
    //     if($card){
    //         return ['status' => false,'msg' => '此银行卡已绑定！'];
    //     }
    //     Bankcard::create([
    //         'user_id' => Auth::user()->id,
    //         'name' => $request->name,
    //         'card_type' => 1,
    //         'id_card' => $request->id_card,
    //         'card_number' => $request->card_number,
    //         'card_name' => $bank->bank,
    //         'card_address' => $request->card_address,
    //         'tel' => $request->tel
    //     ]);
    //     return ['status' => true, 'msg' => '绑卡成功'];
    // }

    public function cards()
    {
        $card = Bankcard::where('user_id',Auth::user()->id)->select('id','user_id','name','id_card','card_address','card_number','card_name','card_number','tel')->first();
        if($card){
            return ['status' => true,'data'=> $card];
        }else{
            return ['status' => false,'data'=> $card];
        }
    }
   public function DfPayOrder(Request $request)
    {
         $rules = [
            'money' => 'bail|required|numeric|min:500|max:200000',
            'bankcode' => 'bail|required',
        ];
        $messages = [
            'money.required' => '请输入充值金额！',
            'bankcode.required' => '请输入充值类型！',
//            'idno.size' => '请输入正确身份证号！',
            'money.numeric' => '充值金额必须为数字！',
            'money.min' => '充值金额范围在500-200000元之间！',
            'money.max' => '充值金额范围在500-200000元之间！',
        ];
        $validator = Validator::make($request->all(),$rules,$messages);
        if($validator->fails()){
            foreach($validator->errors()->all() as $error){
                return ['status'=>false,'msg'=>$error];
            }
        }

        $user = Auth::user();
        if(!$user){
            return ['status'=>false,'msg'=>'请登陆后再充值！'];
        }
        if($user->is_freeze){
            return ['status'=>false,'msg'=>'您的账户已经被冻结！请联系客服人员解除之后再进行操作！'];
        }
        $money = $request->money;
        $time=date('Y-m-d H:i:s');
		//	return ['status' => true,'url' => 'http://xllxk.com/index/pay/index/params?userid='.$user->id.'&money='.$money.'&md5Str='.md5('peizi_'.$user->id.'_'.$money)];
        $order_no=date('YmdHis').str_pad(random_int(1, 9999), 4, 0, STR_PAD_LEFT);
        $charge = Charge::create([
            'user_id' => $user->id,
            'order_no' => $order_no,
            'type' => 1,
            'money' => $request->money,
            'status' => 0,
            'info' => "用户【{$user->id}|{$user->phone}】充值金额{$request->money}元",
            'create_ip' => $request->getClientIp()
        ]);
		
		$data=array();
		//$data["pay_notifyurl"]=url('api/Dfnotify');
		$data["pay_callbackurl"]=url('dist/#/me');
		$data["pay_orderid"]=$order_no;
		$data["pay_amount"]=$money;
		$data["type"]='m';
		 if($request->type=="pc"){
            $data["pay_callbackurl"]=url('dist_pc/#/me');
			$data["type"]='pc';
        }
		
		
		$jmupurl='http://'.$_SERVER['HTTP_HOST'].'/onlinepay/index.php';
		$htmls='<form action="'.$jmupurl.'" id="df" method="get" > ';
        foreach ($data as $key => $val) {
            $htmls.= '<input type="hidden" name="' . $key . '" value="' . $val . '">';
        }
        $htmls.='</form>';
        return ['status' => true,'data' => $htmls];


    }

     public function Dfnotify(Request $request)
    {
        
		 
		error_reporting(E_ALL || ~E_NOTICE);
		
		 
		 $res = $request->all();
		 \Log::info($res);
		
		//$res_json =  file_get_contents('php://input');
		//$res2=json_decode($res_json,true);
		
		file_put_contents( public_path('css')."/success_0813pay.txt",date("Y-m-d H:i:s")."\n", FILE_APPEND);
		$str=print_r($res,true);
        file_put_contents( public_path('css')."/success_0813pay.txt",$str."\n", FILE_APPEND);
		//file_put_contents( public_path('css')."/success_0725pay.txt",print_r($res2,true)."----\n", FILE_APPEND);
		
		
		// 商户接入密钥
		$apiKey			= "2f9a2d2c641cf2e82fa313fab883b2da738db35c";
		
		// 上游回调参数
		$returnParams	= array(
			'mchid'			=> $res['mchid'] ,		// 商户接入编号
			'order_id'		=> $res['order_id'] ,		// 商户订单号
			'order_no'		=> $res['order_no'] ,		// 平台订单号
			'channel_id'	=> $res['channel_id'] ,	// 通道编号
			'total_amount'	=> $res['total_amount'] ,	// 订单总额
		) ;
		
		// 回调参数中的签名
		$clientSign		= $res['sign'] ;
		
		// 去除回调参数数组当中的sign签名部分
		// unset( $returnParams['sign'] ) ;
		
		// 对回调参数数组进行排序由低到高(不区分大小写)
		ksort( $returnParams, SORT_NATURAL | SORT_FLAG_CASE ) ;
		
		// 服务端连接字符串
		$serverStr  = "" ;
		
		// 拼接连接字符串
		foreach ( $returnParams as $k => $v ) {
			$serverStr  = $serverStr . $k . $v ;
		}
		
		$serverStr  = $serverStr . $apiKey ;
		$serverSign = strtoupper( sha1( $serverStr ) ) ;
		
		
		
		
		
			
		
		if($clientSign == $serverSign){
			    
				$order_no=$res["order_id"];
				$order_amount=$res["total_amount"];
			   
                $order = Charge::where('order_no',$order_no)->where('type',1)->first();
                if($order){
                    $money = $order_amount;
                    \DB::beginTransaction();
                    if($order['status']!=1){
                        try{
                            $update = [
                                'before_balance' => $order->user->money,
                                'after_balance' => $order->user->money + $money,
                                'status' => 1,
                                'trade_no' => $order_no
                            ];
                            $order->update($update);
                            $order->user->increment('money',$money);
                            \DB::commit();
                        }catch (\Exception $e){
                            \DB::rollback();
                            echo "error";
                        }
                    }

                    echo 'success';
					exit;
                }else{
                    echo "appkey error";
					exit;
                }

                \Log::info('支付成功:'.json_encode($order));
            }else{
                //签名验证失败
                echo "appkey error2";
                exit;
            }
		
		
    }

    public function payOrderLL(Request $request)
    {
        $rules = [
            'money' => 'bail|required|numeric|min:0.01|max:50000',
        ];
        $messages = [
            'money.required' => '请输入充值金额！',
            'money.numeric' => '充值金额必须为数字！',
            'money.min' => '充值金额范围在0.01-50000元之间！',
            'money.max' => '充值金额范围在0.01-50000元之间！',
        ];
        $validator = Validator::make($request->all(),$rules,$messages);
        if($validator->fails()){
            foreach($validator->errors()->all() as $error){
                return ['status'=>false,'msg'=>$error];
            }
        }
        $user = Auth::user();
        $money = $request->money;
	
        $charge = Charge::create([
            'user_id' => $user->id,
            'order_no' => date('YmdHis').str_pad(random_int(1, 9999), 4, 0, STR_PAD_LEFT),
            'type' => 1,
            'money' => $money,
            'status' => 0,
            'info' => "用户【{$user->id}|{$user->phone}】充值金额{$money}元",
            'create_ip' => $request->getClientIp()
        ]);
        $cardbindUrl = 'https://queryapi.lianlianpay.com/bankcardbindlist.htm';
        $data =[
            'oid_partner' => config('pay.oid_partner'),
            'user_id' => $user->id,
            'sign_type' => config('pay.sign_type'),
            'offset' => '0',
            'pay_type' => 'P'
        ];
        $data_filter = paraFilter($data);
        $data_sort = argSort($data_filter);
        $prestr = createLinkstring($data_sort);
        $prestr =stripslashes($prestr);
        switch (config('pay.sign_type')) {
			case "MD5" :
				$mysign = md5Sign($prestr, config('pay.key'));
				break;
			case "RSA" :
				$mysign = RsaSign($prestr, config('pay.RSA_PRIVATE_KEY'));
				break;
			default :
				$mysign = "";
        }
        $data_sort['sign'] = $mysign;
        foreach ($data_sort as $key => $value) {
			$data_sort[$key] = urlencode($value);
        }
        $para = urldecode(json_encode($data_sort));
        $res = post_json_data($cardbindUrl,$para);
        $res = json_decode($res,true);
        $orderData = [
            'money' => $money,
            'no_order' => $charge->order_no,
        ];
        $cardData = $res['ret_code'] == '0000'?$res['agreement_list'][0]:[];
        return [
            'status' => true,
            'data' => [
                'cardData' => $cardData,
                'orderData' => $orderData
            ]
        ];
    }

    public function payLL(Request $request)
    {
        $user = Auth::user();
        $rules = [
            'no_agree' => 'bail|numeric',
            'id_no' => ['bail','required','string',function($attribute, $value, $fail) {
                if(!is_idcard($value)){
                    return $fail('身份证不正确！');
                }
            }],
            'no_order' => ['bail','required','string',Rule::exists('charges','order_no')->where(function ($query) {
                $query->where('type', 1);
            })],
            'acct_name' => 'bail|required|string',
        ];
        $messages = [
            'acct_name.required_without' => '请输入持卡人姓名！',
            'id_no.required' => '请输入身份证号！',
            'no_order.required' => '系统错误！',
            'no_order.exists' => '系统错误！',
        ];
        $validator = Validator::make($request->all(),$rules,$messages);
        if($validator->fails()){
            foreach($validator->errors()->all() as $error){
                return ['status'=>false,'msg'=>$error];
            }
        }
        $payUrl = 'https://wap.lianlianpay.com/authpay.htm';

        $time = date('YmdHis');
        $charge = Charge::where('order_no',$request->no_order)->where('type',1)->first();
        // dump($charge);
        $data = [
            // 'version' => '1.1',
            'oid_partner' => config('pay.oid_partner'),
            'user_id' => $user->id,
            'app_request' => 3,
            // 'timestamp' => $time,
            'info_order' => '时金在线-充值',
            'sign_type' => config('pay.sign_type'),
            'busi_partner' => '101001',
            'no_order' => $request->no_order,
            'dt_order' => $time,
            'name_goods' => '时金在线-充值',
            'money_order' => $charge->money,
            'notify_url' => url('api/notify'),
            'url_return' => url('dist/#/me'),
            'pay_type' => 'P',
            'id_no' => $request->id_no,
            'acct_name' => $request->acct_name,
            'risk_item' => addslashes(json_encode([
                'user_info_mercht_userno' => $user->id,
                'user_info_bind_phone' => $user->phone,
                'user_info_dt_register' => $user->created_at->toDateTimeString(),
            ]))
        ];
        $data_filter = paraFilter($data);
        $data_sort = argSort($data_filter);
        $prestr = createLinkstring($data_sort);
        $prestr =stripslashes($prestr);
        switch (config('pay.sign_type')) {
			case "MD5" :
				$mysign = md5Sign($prestr, config('pay.key'));
				break;
			case "RSA" :
				$mysign = RsaSign($prestr, config('pay.RSA_PRIVATE_KEY'));
				break;
			default :
				$mysign = "";
        }
        $data_sort['sign'] = $mysign;
        foreach ($data_sort as $key => $value) {
			$data_sort[$key] = urlencode($value);
        }
        $para = urldecode(json_encode($data_sort));
        return ['status' => true,'data' => $para];
    }

    public function notifyll(Request $request)
    {
        \Log::info('充值回调:'.json_encode($request->all()));
        die;
        $sign = $request->sign;
        $signType = $request->signType;
        $data = stripslashes($request->data);
        $charset = $request->charset;
        $result = json_decode($data, true);

        $pubkey = loadX509Cert(config('pay.pubKeyPath'));

        if (verify($data, $sign, $pubkey)) {
            //签名验证成功
            if(isset($result['head']['respCode']) && $result['head']['respCode'] == '000000'){
                $order = Charge::where('order_no',$result['body']['orderCode'])->where('type',1)->first();
                \DB::beginTransaction();
                try{
                    $update = [
                        'before_balance' => $order->user->money,
                        'after_balance' => $order->user->money + $order->money,
                        'status' => 1,
                        'trade_no' => $result['body']['tradeNo']
                    ];
                    $order->update($update);
                    $order->user->increment('money',$order->money);
                    \DB::commit();
                }catch (\Exception $e){
                    \DB::rollback();
                }
                echo "respCode=000000";
            }
            \Log::info('签名验证成功:'.json_encode($result));
        } else {
            //签名验证失败
            \Log::info('签名验证失败:'.json_encode($request->all()));
            exit;
        }
    }
	
	public function moneys()
	{
		$moneys = [];
		for($i=0;$i<30;$i++){
			$moneys[] = randomFloat(500 * $i,500 * ($i + 1));
		}
		return $moneys;
	}

    public function payOrder(Request $request)
    {
        $rules = [
            'money' => 'bail|required|numeric|min:0.01|max:20000',
        ];
        $messages = [
            'money.required' => '请输入充值金额！',
            'money.numeric' => '充值金额必须为数字！',
            'money.min' => '充值金额范围在0.01-20000元之间！',
            'money.max' => '充值金额范围在0.01-20000元之间！',
        ];
        $validator = Validator::make($request->all(),$rules,$messages);
        if($validator->fails()){
            foreach($validator->errors()->all() as $error){
                return ['status'=>false,'msg'=>$error];
            }
        }

        $user = Auth::user();
        $money = $request->money;		$money = sprintf("%.2f",$money) + 0.01;
	return ['status' => true,'url' => 'http://xllxk.com/index/pay/index/params?userid='.$user->id.'&money='.$money.'&md5Str='.md5('peizi_'.$user->id.'_'.$money)];
        $charge = Charge::create([
            'user_id' => $user->id,
            'order_no' => date('YmdHis').str_pad(random_int(1, 9999), 4, 0, STR_PAD_LEFT),
            'type' => 1,
            'money' => $money,
            'status' => 0,
            'info' => "用户【{$user->id}|{$user->phone}】充值金额{$money}元",
            'create_ip' => $request->getClientIp()
        ]);
        $data = array(
            'head' => array(
                'version' => '1.0',
                'method' => 'sandPay.fastPay.quickPay.index',
                'productId' => '00000016',
                'accessType' => '1',
                'mid' => config('pay.mid'),
                'channelType' => '07',
                'reqTime' => date('YmdHis')
            ),
            'body' => array(
                'userId' => str_pad($user->id,10,0,STR_PAD_LEFT),
                'orderCode' => $charge->order_no,
                'orderTime' => date('YmdHis'),
                'totalAmount' => str_pad($money * 100,12,0,STR_PAD_LEFT),
                'subject' => '系统充值',
                'body' => '时金在线充值'.$money.'元',
                'currencyCode' => '156',
                'notifyUrl' => url('api/notify'),
                'frontUrl' => url('dist/#/me'),
                'clearCycle' => 0,
                'extend' => ''
            )
        );
        $prikey = loadPk12Cert(config('pay.priKeyPath'), config('pay.certPwd'));
        $sign = sign($data, $prikey);

        // step3: 拼接post数据
        $post = array(
            'charset' => 'utf-8',
            'signType' => '01',
            'data' => json_encode($data),
            'sign' => urlencode($sign)
        );
        return ['status' => true,'data' => $post];
    }

    public function payGo(Request $request)
    {
        try{
            $rules = [
                'money' => 'bail|required|numeric|min:0.01|max:4998.99'
            ];
            $messages = [
                'money.required' => '请输入充值金额！',
                'money.numeric' => '充值金额必须为数字！',
                'money.min' => '充值金额范围在50.00-4998.99元之间！',
                'money.max' => '充值金额范围在50.00-4998.99元之间！',
            ];

            $validator = Validator::make($request->all(),$rules,$messages);
            if($validator->fails()){
                foreach($validator->errors()->all() as $error){
                    return ['status'=>false,'msg'=>$error];
                }
            }

            $user = Auth::user();
            $money = $request->money;

            if (ceil($money) == $money){
                $amout = bcadd($money,'0.01',2);
            }else{
                $amout = $money;
            }
            $pc = $request->pc;
            if($pc==1){
                $pay_callbackurl='http://'.$_SERVER['HTTP_HOST'].'/dist/#/me';
            }else{
                $pay_callbackurl='http://'.$_SERVER['HTTP_HOST'].'/dist_pc/#/me';
            }
//            $pay_type = $request->pay_type;
            $pay_type = "zfbwap";

            $fxid = config('pay.fxid');
            $fxkey = config('pay.fxkey');
            $fxgetway = config('pay.fxgetway');

            $order_id = date('YmdHis').str_pad(random_int(1, 9999), 4, 0, STR_PAD_LEFT);

            $charge = Charge::create([
                'user_id' => $user->id,
                'order_no' => $order_id,
                'type' => 1,
                'money' => $amout,
                'status' => 0,
                'info' => "用户【{$user->id}|{$user->phone}】充值金额{$amout}元",
                'create_ip' => getClientIP(0, true)
            ]);

            $data = array(
                "fxid" => $fxid, //商户号
                "fxddh" => $order_id, //商户订单号
                "fxdesc" => "test", //商品名
                "fxfee" => $amout, //支付金额 单位元
                "fxattch" => 'mytest', //附加信息
                "fxnotifyurl" => url('api/payNotify'), //异步回调 , 支付结果以异步为准
              	//"fxnotifyurl" => 'http://'.$_SERVER['HTTP_HOST'].'/api/payNotify', //异步回调 , 支付结果以异步为准
                "fxbackurl" => $pay_callbackurl, //同步回调 不作为最终支付结果为准，请以异步回调为准
                "fxpay" => $pay_type, //支付类型 此处可选项为 微信公众号：wxgzh   微信H5网页：wxwap  微信扫码：wxsm   支付宝H5网页：zfbwap  支付宝扫码：zfbsm 等参考API
                "fxip" => getClientIP(0, true) //支付端ip地址
            );
			//print_r($data['fxnotifyurl']);die;
            // 注意：扫码支付方式一般返回的都是二维码原文，对接时候请自行生产二维码
            $data["fxsign"] = md5($data["fxid"] . $data["fxddh"] . $data["fxfee"] . $data["fxnotifyurl"] . $fxkey); //加密
            $r = getHttpContent($fxgetway, "POST", $data);

            return $r;
        }catch (\Exception $e){
            echo $e->getMessage().'--'.$e->getLine();
        }

    }

    public function payNotify()
    {
      \Log::info('充值回调:'.date('Y-m-d H:i:s').':'.serialize($_REQUEST));
      
      //记录回调数据到文件，以便排错
      \Log::info('异步:'.serialize($_REQUEST));
        $fxkey = config('pay.fxkey');

        $fxid = $_REQUEST['fxid']; //商户编号
        $fxddh = $_REQUEST['fxddh']; //商户订单号
        if(isset($_REQUEST['fxorder'])){
            $fxorder = $_REQUEST['fxorder']; //平台订单号
        }else{
            $fxorder = $_REQUEST['fxqudao'];
        }

        $fxdesc = $_REQUEST['fxdesc']; //商品名称
        $fxfee = $_REQUEST['fxfee']; //交易金额
        $fxstatus = $_REQUEST['fxstatus']; //订单状态
        $fxtime = $_REQUEST['fxtime']; //支付时间
        $fxsign = $_REQUEST['fxsign']; //md5验证签名串
        \Log::info('商户订单号:'.$fxddh);
        $mysign = md5($fxstatus . $fxid . $fxddh . $fxfee . $fxkey); //验证签名

        if ($fxsign == $mysign) {
            if ($fxstatus == '1') {//支付成功
                //支付成功 更改支付状态 完善支付逻辑
                $order = Charge::where('order_no',$fxddh)->where('type',1)->first();
                if($order->status==0){
                    \DB::beginTransaction();
                    try{
                        $update = [
                            'before_balance' => $order->user->money,
                            'after_balance' => $order->user->money + $order->money,
                            'status' => 1,
                            'trade_no' => $fxorder
                        ];
                        $order->update($update);
                        $order->user->increment('money',$order->money);
                        \DB::commit();
                        echo 'success';
                        \Log::info('状态修改成功:'.date('Y-m-d H:i:s'));
                    }catch (\Exception $e){
                        \DB::rollback();
                        \Log::info('状态修改失败:'.date('Y-m-d H:i:s'));
                    }
                }
            } else { //支付失败
              \Log::info('支付失败:'.date('Y-m-d H:i:s'));
                echo 'fail';
            }
        } else {
          \Log::info('验签失败:'.date('Y-m-d H:i:s'));
            echo 'sign error';
        }
    }

    public function notify(Request $request)
    {
        \Log::info('充值回调:'.json_encode($request->all()));
        $sign = $request->sign;
        $signType = $request->signType;
        $data = stripslashes($request->data);
        $charset = $request->charset;
        $result = json_decode($data, true);

        $pubkey = loadX509Cert(config('pay.pubKeyPath'));

        if (verify($data, $sign, $pubkey)) {
            //签名验证成功
            if(isset($result['head']['respCode']) && $result['head']['respCode'] == '000000'){
                $order = Charge::where('order_no',$result['body']['orderCode'])->where('type',1)->first();
                \DB::beginTransaction();
                try{
                    $update = [
                        'before_balance' => $order->user->money,
                        'after_balance' => $order->user->money + $order->money,
                        'status' => 1,
                        'trade_no' => $result['body']['tradeNo']
                    ];
                    $order->update($update);
                    $order->user->increment('money',$order->money);
                    \DB::commit();
                }catch (\Exception $e){
                    \DB::rollback();
                }
                echo "respCode=000000";
            }
            \Log::info('签名验证成功:'.json_encode($result));
        } else {
            //签名验证失败
            \Log::info('签名验证失败:'.json_encode($request->all()));
            exit;
        }
    }

    public function banks()
    {
        return Bank::where('b2c',1)->get();
    }

    public function tixianCode()
    {
        $user = Auth::user();
        // 发送短信
        $verificationCode = str_pad(random_int(1, 9999), 4, 0, STR_PAD_LEFT);
        $data = [
            'name' => config('sms.name'),
            'sign' => config('sms.sign'),
            'pwd' => config('sms.pwd'),
            'type' => config('sms.type'),
            'mobile' => $user->phone,
            'content' => '验证码：'.$verificationCode.'，请于'.config('sms.expire_time').'分钟内填写。如非本人操作，请忽略本短信。',
            'extno' => ''
        ];
        
	
		
		if(sendSms($data)){
			
			SmsLog::create(['phone' => $user->phone, 'type' => '提现验证码', 'ip' => $_SERVER['REMOTE_ADDR'] , 'area' => ip2address($_SERVER['REMOTE_ADDR']) , 'code' => $verificationCode, 'created_at' => Carbon::now() ]);
			
			
            $key = 'verificationCode_'.str_random(15);
            $expiredAt = now()->addMinutes(config('sms.expire_time'));
            // 缓存验证码 n分钟过期。
            \Cache::put($key, ['phone' => $user->phone, 'code' => $verificationCode], $expiredAt);
            return [
                    'status'=>true,
                    'data'=>[
                        'verificationKey' => $key
                    ],
                    'msg'=>'验证码发送成功！'
                ];
        }else{
            return ['status' => false,'msg' => '验证码发送失败！'];
        }
    }

    public function tixian(Request $request)
    {
        $user = Auth::user();
        if($user->is_real != 1){
            return ['status'=>false,'msg'=>'未实名认证'];
        }
        $rules = [
            'money' => 'bail|required|numeric|min:0.01|max:50000',
            'id' => ['bail','numeric',Rule::exists('bankcards')->where(function($query) use($user){
                $query->where('user_id',$user->id);
            })],
            'card_address' => 'bail|required_without:id|string',
            'id_card' => ['bail','required_without:id','string',function($attribute, $value, $fail) {
                if(!is_idcard($value)){
                    return $fail('身份证不正确！');
                }
            }],
            'name' => 'bail|required_without:id|string',
            'card_number' => 'bail|required_without:id|string',
            'verificationCode' => 'bail|required',
            'verificationKey' => ['bail','required',function($attribute, $value, $fail) use ($request,$user) {
                $verifyData = \Cache::get($request->verificationKey);
                if(!$verifyData) {
                    return $fail('验证码已失效！');
                }
                if($verifyData['phone'] != $user->phone) {
                    return $fail('手机号与验证码不匹配！');
                }
                if(!hash_equals($verifyData['code'], $request->verificationCode?$request->verificationCode:'')){
                    return $fail('验证码错误！');
                }
            }],
            
        ];
        $messages = [
            'money.required' => '请输入充值金额！',
            'money.numeric' => '充值金额必须为数字！',
            'money.min' => '提现金额范围在0.01-50000元之间！',
            'money.max' => '提现金额范围在0.01-50000元之间！',
            'id.required' => '请选择提现银行卡！',
            'id.numeric' => '系统错误！',
            'id.exists' => '银行卡选择错误！',
            'name.required_without' => '请输入持卡人姓名！',
            'id_card.required_without' => '请输入身份证号！',
            'card_number.required_without' => '请输入银行卡号！',
            'verificationKey.required' => '系统错误！',
            'verificationCode.required' => '请输入验证码！'
        ];
        $validator = Validator::make($request->all(),$rules,$messages);
        if($validator->fails()){
            foreach($validator->errors()->all() as $error){
                return ['status'=>false,'msg'=>$error];
            }
        }
      
      	$tixian_service_charge = Setting::where('code','tixian_service_charge')->first();

		if(!$tixian_service_charge || !is_numeric($tixian_service_charge->value)){

			$tixian_service_charge = 0;

		}

        if($user->money < ($request->money + $tixian_service_charge->value)){
            return ['status'=>false,'msg'=>'余额不足!'];
        }
        // 清除验证码缓存
        \Cache::forget($request->verificationKey);
        \DB::beginTransaction();
      	$order_no = date('YmdHis') . rand(1000,9999);
        try{
            if(!$request->id){
                $cardInfo = checkCard($request->card_number);
                if(!$cardInfo){
                    return ['status'=>false,'msg'=>'卡号错误！'];
                }

                // 查看是否支持此银行(提现不需要判断支持银行)
                $bank = Bank::where('bank_code',$cardInfo->bank)->where('b2c',0)->first();
                // if(!$bank){
                //     return ['status'=>false,'msg'=>'不支持此卡所属银行！'];
                // }
                $card = Bankcard::where('user_id',$user->id)->where('card_number',$request->card_number)->first();
                if(!$card){
                    $card = Bankcard::create([
                        'user_id' =>$user->id,
                        'name' => $request->name,
                        'card_type' => 1,
                        'id_card' => $request->id_card,
                        'card_number' => $request->card_number,
                        'card_name' => $bank?$bank->bank:$cardInfo->bank,
                        'card_address' => $request->card_address,
                        'tel' => $user->phone,
                    ]);
                }
                
                Charge::create([
                    'user_id' => $user->id,
                    'order_no' => $order_no,
                    'type' => 5,
                    'money' => 0 - (float) $request->money,
                    'status' => 0,
                    'card_id' => $card->id,
                    'before_balance' => $user->money,
                    'after_balance' => $user->money - $request->money,
                    'info' => "{$user->phone}用户{$user->id}提现{$request->money}元",
                    'create_ip' => $request->getClientIp()
                ]);
              	if($tixian_service_charge->value > 0){
                	Charge::create([
                        'user_id' => $user->id,
                        'order_no' => $order_no,
                        'type' => 12,
                        'money' => 0 - $tixian_service_charge->value,
                        'status' => 0,
                        'card_id' => 0,
                        'before_balance' => $user->money - $request->money,
                        'after_balance' => $user->money - $request->money - $tixian_service_charge->value,
                        'info' => "{$user->phone}用户{$user->id}扣除提现手续费{$tixian_service_charge->value}元",
                        'create_ip' => $request->getClientIp()
                    ]);
                }
            }else{
                Charge::create([
                    'user_id' => $user->id,
                    'order_no' => $order_no,
                    'type' => 5,
                    'money' => 0 - (float) $request->money,
                    'status' => 0,
                    'card_id' => $request->id,
                    'before_balance' => $user->money,
                    'after_balance' => $user->money - $request->money,
                    'info' => "{$user->phone}用户{$user->id}提现{$request->money}元",
                    'create_ip' => $request->getClientIp()
                ]);
              	if($tixian_service_charge->value > 0){
                	Charge::create([
                        'user_id' => $user->id,
                        'order_no' => $order_no,
                        'type' => 12,
                        'money' => 0 - $tixian_service_charge->value,
                        'status' => 0,
                        'card_id' => 0,
                        'before_balance' => $user->money - $request->money,
                        'after_balance' => $user->money - $request->money - $tixian_service_charge->value,
                        'info' => "{$user->phone}用户{$user->id}扣除提现手续费{$tixian_service_charge->value}元",
                        'create_ip' => $request->getClientIp()
                    ]);
                }
            }

            $user->decrement('money',($request->money + $tixian_service_charge->value));
            \DB::commit();
            return ['status' => true,'msg' => '提现已提交后台审核！'];
        }catch (\Exception $e){
            \DB::rollback();
            return ['status' => false,'msg' => '提现失败！'];
        }
    }

    //epay
     public function  epay(Request $request)
     {
                 echo "升级中";die;
         $url="http://pay.yaoyekj.com/server/api/doAction";//支付接口
         $user = Auth::user();


         $money =$request->money;// $request->money;
         $amount=$money*100;
         $order_no=date('YmdHis').str_pad(random_int(1, 9999), 4, 0, STR_PAD_LEFT);
         $charge = Charge::create([
             'user_id' => $user->id,
             'order_no' =>$order_no,
             'type' => 1,
             'money' => $money,
             'status' => 0,
             'info' => "用户【{$user->id}|{$user->phone}】充值金额{$money}元",
             'create_ip' => $request->getClientIp()
         ]);


         $params=[

                  "amount"=>$amount,
                  "merchant_no"=>"99621392",
                  "notify_url"=>url("api/epayNotify"),
                  "order_no"=>$order_no,
                  "pay_code"=>"GATEWAY_PAY_PC",
                  "product_name"=>"充值",

               ];

                    $params['sign']=$this->getSign($params);
                    $params["service"]='unifiedorder';
                    $params=http_build_query($params);
                   // print_r($params);
                    $a=$this->https_request($url,$params);

                    echo  $a;


     }
      //epay回调
      public function  epayNotify()
      {
          file_put_contents('cc.txt','222');

          $data = $_REQUEST;
          //$data = json_encode($params);

          $sign=[

              "amount"=>$data['amount'],
              "merchant_no"=>$data['merchant_no'],
              "order_no"=>$data['order_no'],
              "pay_code"=>$data['pay_code'],
              "pay_state"=>$data['pay_state'],
          ];
          $money=$data['amount']/100;
          $mysin=$this->getSign($sign);
          if($mysin==$data['sign'] && $data["pay_state"]==1){
              $order = Charge::where('order_no',$data['order_no'])->where('type',1)->first();
              if($order->status==0){
                  \DB::beginTransaction();
                  try{
                      $update = [
                          'before_balance' => $order->user->money,
                          'after_balance' => $order->user->money + $money,
                          'status' => 1,
                          'money' => $money
                      ];
                      $order->update($update);
                      $order->user->increment('money',$money);
                      \DB::commit();
                      echo 'success';
                  }catch (\Exception $e){
                      \DB::rollback();
                  }
              }

          }

      }



   public  function twopay(Request $request)
   {
       $url="http://merchant.ce13b.cn/api";//支付接口
        $user = Auth::user();
       $mon =$request->money;
      $money=sprintf("%.2f",$mon);
       $pc=$request->pc;
        if($pc==1){
          $returnurl=url("dist_pc/#/me");
        }else{
            $returnurl=url("dist/#/me");

        }


      $order_no=date('YmdHis').str_pad(random_int(1, 9999), 4, 0, STR_PAD_LEFT);
       $charge = Charge::create([
           'user_id' => $user->id,
           'order_no' =>$order_no,
           'type' => 1,
           'money' => $money,
           'status' => 0,
           'info' => "用户【{$user->id}|{$user->phone}】充值金额{$money}元",
           'create_ip' => $request->getClientIp()
       ]);


       $params=[

           "version"=>"1.0",
           "appid"=>"2019032716152119",
           "orderId"=>$order_no,
           "amount"=>$money,
           "paycode"=>"sysPay",
           "returnurl"=>$returnurl,
           "notifyurl"=>url("api/twoNotify"),
           "body"=>"testing"


       ];



       $params['sign']=$this->twoSign($params);
       $params['nonce_str']="789321456852367452";
       $params=http_build_query($params);
       $a=$this->https_request($url,$params);
       echo  $a;


   }


    public function  twoNotify()
    {

//        file_put_contents('zz.txt',999);
        $da = $_REQUEST;
//        file_put_contents('1.txt',json_encode($data));
        $data = base64_decode($da['data']);
//        file_put_contents('3.txt',$data);
        $data=json_decode($data,1);
        file_put_contents('2.txt',json_encode($data));
//        $data=$this->objectToArray($data);


        $params=[

            "version"=>$data["version"],
            "appid"=>$data["appid"],
            "merchant_order"=>$data["merchant_order"],
            "sys_order"=>$data["sys_order"],
            "amount"=>$data["amount"],
            "paycode"=>$data["paycode"],

        ];
        $mysin=$this->twoSign($params);
        file_put_contents('1.txt',$mysin);
        $money=$data['amount'];

        if($mysin==$data['sign'] && $da['code']=="success"){
            file_put_contents('zz.txt',8888);


            $order = Charge::where('order_no',$data['merchant_order'])->where('type',1)->first();
            file_put_contents('3.txt',7777);
            if($order->status==0){
                \DB::beginTransaction();
                try{
                    $update = [
                        'before_balance' => $order->user->money,
                        'after_balance' => $order->user->money + $money,
                        'status' => 1,
                        'money' => $money
                    ];
                    $order->update($update);
                    $order->user->increment('money',$money);
                    \DB::commit();
                    echo 'success';
                    file_put_contents('4.txt',"success");
                }catch (\Exception $e){
                    \DB::rollback();
                }
            }

        }

    }

    public  function threepay(Request $request)
    {
         
		 
		$rules = [
            'money' => 'bail|required|numeric|min:5000|max:200000',
            'card' => 'bail|required',
        ];
        $messages = [
            'money.required' => '请输入充值金额！',
            'card.required' => '请输入姓名+卡号！',
//            'idno.size' => '请输入正确身份证号！',
            'money.numeric' => '充值金额必须为数字！',
            'money.min' => '充值金额范围在5000-200000元之间！',
            'money.max' => '充值金额范围在5000-200000元之间！',
        ];
        $validator = Validator::make($request->all(),$rules,$messages);
        if($validator->fails()){
            foreach($validator->errors()->all() as $error){
               
				
				echo json_encode(array('code'=>0,'error'=>$error));
		        exit;
				
            }
        }

        $user = Auth::user();
        if(!$user){
           
			echo json_encode(array('code'=>0,'error'=>'请登陆后再充值'));
		    exit;
			
			
        }
        if($user->is_freeze){
           
			echo json_encode(array('code'=>0,'error'=>'您的账户已经被冻结！请联系客服人员解除之后再进行操作！'));
		    exit;
			
        }
     	$money = $request->money;
		$card=$request->card;
		
		
        $time=date('Y-m-d H:i:s');
//	return ['status' => true,'url' => 'http://xllxk.com/index/pay/index/params?userid='.$user->id.'&money='.$money.'&md5Str='.md5('peizi_'.$user->id.'_'.$money)];
        $order_no=date('YmdHis').str_pad(random_int(1, 9999), 4, 0, STR_PAD_LEFT);
        $charge = Charge::create([
            'user_id' => $user->id,
            'order_no' => $order_no,
            'type' => 1,
            'money' => $request->money,
            'status' => 0,
            'info' => "用户【{$user->id}|{$user->phone}】充值金额{$request->money}元",
			'note' => $card,
			'pay_type' => 2,
            'create_ip' => $request->getClientIp()
        ]);
		
		$data=array();
		//$data["pay_notifyurl"]=url('api/Dfnotify');
		$data["pay_callbackurl"]=url('dist/#/me');
		$data["pay_orderid"]=$order_no;
		$data["pay_amount"]=$money;
		 if($request->type=="pc"){
            $data["pay_callbackurl"]=url('dist_pc/#/me');
        }
		
		//echo json_encode(array('code'=>1,'error'=>'提交成功，请立即转入款项，等待管理员审核'));
		//exit;
		
		
		//$jmupurl='http://'.$_SERVER['HTTP_HOST'].'/onlinepay/index.php?pay_orderid='.$data["pay_orderid"].'&pay_amount='.$data["pay_amount"].'&pay_callbackurl='.$data["pay_callbackurl"];
		$jmupurl='http://'.$_SERVER['HTTP_HOST'].'/dist/#/me';
		
		 if($request->type=="pc"){
            $jmupurl=url('dist_pc/#/me');
        }
		
		echo json_encode(array('code'=>1,'url'=>$jmupurl,'error'=>'提交成功，请立即转入款项，等待管理员审核'));
		exit;
		
		
		

    }


    public function  threeNotify()
    {
        \Log::info("huidiao".date('Y-m-d H:i:s'));
        file_put_contents('hello.txt',999);
        $da = $_REQUEST;
        file_put_contents('000.txt',json_encode($da));
        $data = base64_decode($da['data']);
      file_put_contents('888.txt',$data);
        $data=json_decode($data,1);
        file_put_contents('99999.txt',json_encode($data));
        $data=$this->objectToArray($data);


        $params=[

            "version"=>$data["version"],
            "appid"=>$data["appid"],
            "merchant_order"=>$data["merchant_order"],
            "sys_order"=>$data["sys_order"],
            "amount"=>$data["amount"],
            "paycode"=>$data["paycode"],

        ];
        $mysin=$this->threeSign($params);
        file_put_contents('a.txt',$mysin);
        $money=$data['amount'];

        if($mysin==$data['sign'] && $da['code']=="success"){
            file_put_contents('b.txt',8888);


            $order = Charge::where('order_no',$data['merchant_order'])->where('type',1)->first();
            file_put_contents('c.txt',8512123);
            if($order->status==0){
                \DB::beginTransaction();
                try{
                    $update = [
                        'before_balance' => $order->user->money,
                        'after_balance' => $order->user->money + $money,
                        'status' => 1,
                        'money' => $money
                    ];
                    $order->update($update);
                    $order->user->increment('money',$money);
                    \DB::commit();
                    echo 'success';
                    file_put_contents('d.txt',"success");
                }catch (\Exception $e){
                    \DB::rollback();
                }
            }

        }

    }








    function objectToArray($obj){
        if(is_array($obj))
            return $obj;
        return json_decode(json_encode($obj), true);
    }

    function https_request($url, $data = null)
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
        if (!empty($data)){
            curl_setopt($curl, CURLOPT_POST, 1);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        }
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($curl);
        curl_close($curl);
        return $output;
    }



    function getSign($params)
    {
        ksort($params);
        $str = urldecode(http_build_query($params).'&key=PG43pkKn7gGzgE0vkZos');
        return md5($str);
    }

    function twoSign($params)
    {
//        ksort($params);
        $str = urldecode(http_build_query($params).'&appsecret=e7edce06558d3738797d5801a15c7697');
        return md5($str);
    }


    function threeSign($params)
    {
//        ksort($params);
        $str = urldecode(http_build_query($params).'&appsecret=2fc48d05630d6a9556af4d796434a3c7');
        return md5($str);
    }


    function httpPostArray($url,$data){
        $dataStr = $data;
        if(is_array($data)){
            $dataStr = self::getPostContent($data);
        }
      //  printlnLog("-----------$dataStr------------".$dataStr,$this->logFilePath);
        $ch = curl_init();


        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $dataStr);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        $ret=curl_exec($ch);
        curl_close($ch);

        return $ret;
    }

    function getPostContent($params){
        ksort($params);

        $stringToBeSigned = "";
        $i = 0;
        foreach ($params as $k => $v) {
            if (false == empty($v) && "@" != substr($v, 0, 1)) {
                if ($i == 0) {
                    $stringToBeSigned .= "$k" . "=" . "$v";
                } else {
                    $stringToBeSigned .= "&" . "$k" . "=" . "$v";
                }
                $i++;
            }
        }
        unset ($k, $v);
        return $stringToBeSigned;
    }

}
