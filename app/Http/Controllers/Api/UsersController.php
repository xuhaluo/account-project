<?php

namespace App\Http\Controllers\Api;
use App\Models\Bankcard;
use App\Models\User;
use App\Models\SettingRecharge;
use App\Handlers\ImageUploadHandler;
use Illuminate\Http\Request;
use App\Transformers\UserTransformer;
use Illuminate\Support\Facades\DB;
use Auth;
use App\Models\Setting;
use League\Flysystem\Exception;

class UsersController extends Controller
{
    public function store(Request $request)
    {
//        print_r($request);die;
        $rules = [
            'code' => 'bail|required|exists:users',
            'phone' => 'bail|required',//|regex:/^1[34578]\d{9}$/|unique:users,phone
            'verificationKey' => 'bail|required',
            'verificationCode' => 'bail|required',
            'password' => 'bail|required|string|between:6,12',
            'passwordRepeat' => 'bail|required|string|same:password',
        ];
        $messages = [
            'code.required' => '请输入推荐码！',
            'code.exists' => '推荐码不存在！',
            'phone.required' => '请输入手机号！',
            'phone.regex' => '请输入正确的手机号！',
            'phone.unique' => '手机号已被注册！',
            'verificationKey.required' => '系统异常（verificationKey）！',
            'verificationCode.required' => '请输入验证码！',
            'password.required' => '请输入密码！',
            'password.between' => '密码长度应在:min-:max之间！',
            'passwordRepeat.required' => '两次密码不一致！',
            'passwordRepeat.same' => '两次密码不一致！',
        ];

        $validator = \Validator::make($request->all(),$rules,$messages);
        if($validator->fails()){
            foreach($validator->errors()->all() as $error){
                return ['status'=>false,'msg'=>$error];
            }
        }

        $verifyData = \Cache::get($request->verificationKey);

        if($verifyData['phone'] != $request->phone) {
            return ['status'=>false,'msg'=>'手机号与验证码不匹配！'];
        }
        if(!$verifyData) {
            return ['status'=>false,'msg'=>'验证码已失效！'];
        }
        if(!hash_equals($verifyData['code'], $request->verificationCode)){
            return ['status'=>false,'msg'=>'验证码错误！'];
        }
        $data = [
            'phone' => $request->phone,
            'password' => bcrypt($request->password),
            'type' => 1,
            'analog_money' => 100000
        ];
        $p_user = User::where('code',$request->code)->first();
        $data['pid'] = $p_user->id;
        $data['image'] = '/uploads/images/avatars/default_image.png';    //默认头像
        // 代理商级别或个人
        // if($p_user->level == 1){
        //     $data['level'] = 2;
        // }elseif($p_user->level == 2){
        //     $data['level'] = 3;
        // }else{
        //     $data['level'] = 0;
        // }
        $data['level'] = 0;
        $user = User::create($data);

        // 清除验证码缓存
        \Cache::forget($request->verificationKey);

        return ['status'=>true,'msg'=>'注册成功！'];
    }
    public function index()
    {

    }
    //银行卡管理
    public function cardmanger(){
        $user_id = Auth::user()->id;
        $cardlist = DB::table('bankcards')->where('user_id',$user_id)->first();
        return ['status'=>200,'data'=>$cardlist];
    }
    //个人中心展示页面
    public function me()
    {
        return $this->response->item($this->user(), new UserTransformer());
        // $user_id = Auth::user()->id;
        // $userlist = DB::table('users')->select('name','money')->where('id',$user_id)->get();
        // if(isset($userlist)){
        //     return ['status_code'=>200,'data'=>$userlist];
        // }else{
        //     return ['status_code'=>300,'msg'=>'未发现数据'];
        //}
    }

    // 系统服务tel,qq
    public function contactWay()
    {
       	$customer_service_qq = Setting::where('code','customer_service_qq')->first();
        $customer_service_tel = Setting::where('code','customer_service_tel')->first();
        $customer_service_email = Setting::where('code','customer_service_email')->first();
        $company_address = Setting::where('code','company_address')->first();
        $record_number = Setting::where('code','record_number')->first();
      	$web_title = Setting::where('code','web_title')->first();

        return [
            'status' => true,
            'data' => [
                'qq' => $customer_service_qq->value,
                'tel' => $customer_service_tel->value,
                'email' => $customer_service_email->value,
                'address' => $company_address->value,
                'record_number' => $record_number->value,
              	'web_title' => $web_title->value,
            ]
        ];
    }

    //个人中心充值页面
    public function recharge(Request $request){
        $user_id = Auth::user()->id;
        $money = $request->money;
        $order_no = time().mt_rand();
        $ip = $_SERVER['REMOTE_ADDR'];
        $time = date('Y-m-d H:i:s');
        if (!$money){
            return ['status'=>false,'msg'=>'充值金额不能为空'];
        }
        $addmoney = DB::table('charge')->insert([
            'user_id'=>$user_id,
            'order_no'=>$order_no,
            'money'=>$money,
            'status'=>0,
            'create_ip'=>$ip,
            'created_at'=>$time,
        ]);
        if(isset($addmoney)){
            return ['status_code'=>200,'msg'=>'订单生成成功'];
        }
    }
    //修改头像
    public function avatar(Request $request, ImageUploadHandler $uploader)
    {
        $user_id = Auth::user()->id;
        $uploadimage = '';
        if ($request->file) {
            $result = $uploader->save($request->file, 'avatars', $user_id);
            if ($result) {
                $uploadimage = $result['path'];
            }
        }
        // DB::connection()->enableQueryLog();
        DB::table('users')->where('id',$user_id)->update([
            'image'=>$uploadimage
        ]);
        // $log = DB::getQueryLog();
        // var_dump($log);
        return ['status'=>200,'msg'=>$uploadimage];

    }



    public function uploads(Request $request, ImageUploadHandler $uploader)
    {

        $user_id = Auth::user()->id;

        $uploadimage = '';

        if ($request->file) {
//            return $request->file;
            $result = $uploader->save($request->file, 'realinfo', $user_id);

            if ($result) {
                $uploadimage = $result['path'];
            }
        }

        return ['status'=>200,'msg'=>$uploadimage];

    }

    //实名认证

    /**
     * @param Request $request
     * @return array
     */
    public function real_user(Request $request)
    {

//        $rules = [
////            'money' => 'bail|required|numeric|min:0.01|max:50000',
//            'realname'=> 'required',
//            'id_num'=> 'required',
//            'id_card_on'=> 'required',
//            'id_card_off'=> 'required',
//        ];
//        $messages = [
//            'realname.required' => '姓名不能为空',
//            'id_num.required' => '身份证不能为空',
//            'id_card_on.required' => '身份证正面必须上传',
//            'id_card_off.required' => '身份证反面必须上传',
//        ];
//        $validator =  \Validator::make($request->all(),$rules,$messages);
//        if($validator->fails()){
//            foreach($validator->errors()->all() as $error){
//                return ['status'=>false,'msg'=>$error];
//            }
//        }
        $user_id = Auth::user()->id;
        $realname = $request->realname;
        $id_num = $request->id_num;
        $id_card_on = $request->id_card_on;
        $id_card_off = $request->id_card_off;
        $cardInfo = checkCard($request->card_number);
        if (!$cardInfo) {
            return ['status' => false, 'msg' => '卡号错误！'];
        }
        $data=array(
            'realname'=>$realname,
            'id_num'=>$id_num,
            'id_card_on'=>$id_card_on,
            'id_card_off'=>$id_card_off,
            'is_real'=>1,//3等待审核 1已经认证
        );

        $bdata = array(
            'card_number'=>$request->card_number,
            'card_address'=>$request->card_address,
            'id_card'=>$id_num,
            'user_id'=>$user_id,
            'card_name'=>'',
            'tel'=> '',
            'name'=>$realname

        );

//        $banks = DB::table('bankcards')->insert([
//            'card_number'=>$request->card_number,
//            'card_address'=>$request->card_address,
//            'id_card'=>$id_num,
//            'user_id'=>$user_id
//        ]);

//        print_r($bdata);die;

//        DB::table('bankcards')->where('user_id',$user_id)->create($bdata);
        Bankcard::create($bdata);
//        bankcards::create
        // DB::connection()->enableQueryLog();
        DB::table('users')->where('id',$user_id)->update($data);
        // $log = DB::getQueryLog();
        // var_dump($log);
        return ['status'=>200,'msg'=>"上传成功"];

    }
    //查询是否实名认证
    public function query(){

        $user_id = Auth::user()->id;
        $use =  user::find($user_id);
        if($use->is_real == 0){
            return ['status'=>0,'msg'=>"未认证"];

        }
        if($use->is_real ==2){
            return ['status'=>2,'msg'=>"驳回"];

        }
        if($use->is_real ==3){
            return ['status'=>3,'msg'=>"待审核"];

        }
        if($use->is_real == 1){
            return ['status'=>1,'msg'=>"ok"];

        }



//        if($use->is_real != 1){
//            return ['status'=>false,'msg'=>"未实名认证"];
//
//        }else{
//            return ['status'=>1,'msg'=>"ok"];
//        }
    }
    //开户行查询
    public function Open_bank(){
        try{
            $user_id = Auth::user()->id;
            $bank = Bankcard::where('user_id',$user_id)->get();
            if(empty($bank)){
                return ['status'=>0,'msg'=>"数据错误"];
            }

            return ['status'=>1,'msg'=>$bank];
        }catch (Exception $e){

            return ['status'=>0,'msg'=>"数据错误"];
        }

    }



    //修改昵称
    public function changeuserdata(Request $request){
        $user_id = Auth::user()->id;
        $type = $request->type;
        $data = $request->data;
        $status = 1;
        switch ($type){
            //昵称
            case 'name':
                DB::table('users')->where('id',$user_id)->update([
                    'name'=>$data,
                ]);
                break;
            //手机号
            // case 'phone':
            //     DB::table('users')->where('id',$user_id)->update([
            //         'phone'=>$data,
            //     ]);
            //     break;
            default:
                $status = 0;

        }
        if($status != 0){
            return ['status'=>1,'data'=>$data];
        }else{
            return ['stauts'=>0,'data'=>'修改失败'];
        }
    }
    //修改密码
    public function changeuserpwd(Request $request){
        $user_id = Auth::user()->id;
        //新密码
        $data = $request->password;
        $update = DB::table('users')->where('id',$user_id)->update([
            'password'=>bcrypt($data),
        ]);
        if($update){
            return ['status'=>200,'msg'=>'密码修改成功'];
        }else{
            return ['stauts'=>300,'msg'=>'密码修改失败'];
        }
    }
    public function forgetPassword(Request $request)
    {
        $rules = [
            'phone' => 'bail|required|regex:/^1[34578]\d{9}$/|exists:users,phone',
            'verificationKey' => 'bail|required',
            'verificationCode' => 'bail|required',
            'password' => 'bail|required|digits_between:6,12',
            'passwordRepeat' => 'bail|required|same:password',
        ];
        $messages = [
            'phone.required' => '请输入手机号！',
            'phone.regex' => '请输入正确的手机号！',
            'phone.exists' => '该手机号未注册！',
            'verificationKey.required' => '系统异常（verificationKey）！',
            'verificationCode.required' => '请输入验证码！',
            'password.required' => '请输入密码！',
            'password.digits_between' => '密码长度应在:min-:max之间！',
            'passwordRepeat.required' => '两次密码不一致！',
            'passwordRepeat.same' => '两次密码不一致！',
        ];
        $validator = \Validator::make($request->all(),$rules,$messages);
        if($validator->fails()){
            foreach($validator->errors()->all() as $error){
                return ['status'=>false,'msg'=>$error];
            }
        }

        $verifyData = \Cache::get($request->verificationKey);
        if($verifyData['phone'] != $request->phone) {
            return ['status'=>false,'msg'=>'手机号与验证码不匹配！'];
        }
        if(!$verifyData) {
            return ['status'=>false,'msg'=>'验证码已失效！'];
        }
        if(!hash_equals($verifyData['code'], $request->verificationCode)){
            return ['status'=>false,'msg'=>'验证码错误！'];
        }
        $user = User::where('phone',$verifyData['phone'])->update([
            'password' => bcrypt($request->password)
        ]);
        
        // 清除验证码缓存
        \Cache::forget($request->verificationKey);

        return ['status' => true,'msg' => '修改密码成功'];

    }
    //是否公开实盘信息
    public function is_open(Request $request){
        $user_id = Auth::user()->id;
        $is_open = $request->is_open;
        $update = DB::table('users')->where('id',$user_id)->update([
            'is_open'=>$is_open,
        ]);
        if($update){
            return ['status'=>200,'msg'=>'实盘信息开启'];
        }else{
            return ['stauts'=>300,'msg'=>'实盘信息关闭'];
        }
    }
    //公告管理
    public function park(){
        $agreement = DB::table('announcement')->where('status','2')->where('is_del','0')->get();
        return ['status'=>200,'msg'=>$agreement];
    }
    //公告详情
    public function parkdetail(Request $request){
        $id = $request->id;
        $agreementdetail = DB::table('announcement')->where('id',$id)->first();
        return ['status'=>200,'msg'=>$agreementdetail];
    }
    //合作协议
    public function payagreement(){
        $agreement = DB::table('announcement')->where('id','10')->first();
        return ['status'=>200,'msg'=>$agreement];
    }
    //支付协议
    public function agreement(){
        $agreement = DB::table('announcement')->where('id','9')->first();
        return ['status'=>200,'msg'=>$agreement];
    }
    //牛人收益
    public function bestmanincome(){

    }
    //资金明细
    public function financialdetails(Request $request){
        $user_id = Auth::user()->id;
        $type = $request->type;
        $page = $request->page;
        $time = $request->time;
        $endtime = '0';
        //获取当前时间
        $nowtime = date('Y-m-d H:i:s');
        if($time == 'oneweek'){
            $endtime = date('Y-m-d H:i:s',strtotime('-1 week'));
        }else if($time == 'onemonth'){
            $endtime = date('Y-m-d H:i:s',strtotime('-1 month'));
        }else if($time == 'threemonth'){
            $endtime = date('Y-m-d H:i:s',strtotime('-3 month'));
        }else if($time == 'halfyear'){
            $endtime = date('Y-m-d H:i:s',strtotime('-6 month'));
        }else if($time == 'oneyear'){
            $endtime = date('Y-m-d H:i:s',strtotime('-1 year'));
        }else{

        }

        $limit = 10; //返回条数
        if (!$page){
            $page = 1;
        }
        $offset = $page*$limit;//起始值
        switch ($type){
            //保证金
            case 'bailaccount':
                // DB::connection()->enableQueryLog();
                $data = DB::table('tactics')
                    ->where('user_id',$user_id)
                    ->select('code','xingyongjin')
                    ->where('created_at', '>=', $endtime)
                    ->where('created_at', '<=', $nowtime)
                    ->paginate(5);
                // $log = DB::getQueryLog();
                // var_dump($log);
                break;
            //建仓费
            case 'jiancangaccount':
                $data = DB::table('tactics')
                    ->where('user_id',$user_id)
                    ->select('code','cangfei')
                    ->whereTime('created_at', '>=', $endtime)
                    ->whereTime('created_at', '<=', $nowtime)
                    ->paginate(5);
                break;
            //递延费
            case 'diyanaccount':
                $data = DB::table('tactics')
                    ->where('user_id',$user_id)
                    ->select('code','diyanfei')
                    ->whereTime('created_at', '>=', $endtime)
                    ->whereTime('created_at', '<=', $nowtime)
                    ->paginate(5);
                break;			
            //提现记录            
          	case 'tixiancount':
            	$data = DB::table('charges')
              		->select('money','status')
              		->where('user_id',$user_id)
                  	->where('type',5)
              		->whereTime('created_at', '>=', $endtime)
              		->whereTime('created_at', '<=', $nowtime)
                    ->orderby('id','desc')
              		->paginate(5);                
            break;
            default:
                // DB::connection()->enableQueryLog();
                $data = DB::table('tactics')
                    ->where('user_id',$user_id)
                    ->select('code','xingyongjin','cangfei','diyanfei')
                    ->whereTime('created_at', '>=', $endtime)
                    ->whereTime('created_at', '<=', $nowtime)
                    ->paginate(5);
            // $log = DB::getQueryLog();
            // var_dump($log);
        }
        return ['status'=>200,'data'=>$data];
    }

    //资金明细PC端
    // public function financialdetailsPC(Request $request){
    //     $user_id = Auth::user()->id;
    // }


    //我的策略
    public function mystrategy(Request $request){

    }
    //我关注的牛人
    public function myfocus(){
        $user_id = Auth::user()->id;
        $data = DB::table('follows')->join('users','users.id','=','follows.to_user_id')->where('user_id',$user_id)->select('name','yieldrate','tacticsnum','winsum','tacticsnum','total_profit','total_corpus','follower','intro')->get();
        return ['status'=>200,'data'=>$data];
    }
	
	public function apps()
	{
		$data = [
			'app_qrcode' => '/uploads/images/qrcode/download_qrcode.png'
		];
		if(file_exists('../storage/app/public/exe/app.exe')){
			$data['exe_url'] = '/storage/exe/app.exe';
		}
		return $data;
	}

    public function rechargeImg(){
        return;
        $data = SettingRecharge::first();
        return $data;
    }
}
