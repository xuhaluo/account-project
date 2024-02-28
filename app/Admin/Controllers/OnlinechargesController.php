<?php

namespace App\Admin\Controllers;

use App\Models\Charge;
use App\Models\User;
use App\Models\Tactics;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Grid;
use Encore\Admin\Form;
use function foo\func;
use Illuminate\Http\Request;
use App\Admin\Requests;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Layout\Content;
use App\Admin\Extensions\ChargeExpoter;
use Encore\Admin\Layout\Column;
use Encore\Admin\Layout\Row;

class OnlinechargesController extends Controller
{
    use HasResourceActions;
    public function index($type,Content $content,Request $request)
    {
        if ($type == 'online-recharge') {
            $title = '在线充值记录';
        } else if ($type == 'backstage-recharge') {
            $title = '后台充值记录';
        } else if ($type == 'deposit') {
            $title = '提款记录';
        } else if ($type == 'capitalsettlement') {
            $title = '资金清算';
        } else if ($type == 'diyancount') {
            $title = '递延费统计';
        } else if ($type == 'clearingstatistics') {
            $title = '策略人清算统计';
        } else if ($type == 'accountcapital') {
            $title = '资金流水';
        }else if ($type == 'rechargeaccount'){
            $title = '充值统计';
        }else{
            $title = '资金管理';
        }
        if($type == 'deposit'){
            return $content
                ->header($title)
                ->description('')
                ->body($this->griddeposit($type,$request));
        }else if($type == 'capitalsettlement') {
            return $content
                ->header($title)
                ->description('')
                ->body($this->gridsettlement($request));
        }else if($type == 'diyancount') {
            // $data['count_diyanfei'] = Tactics::where('is_analog',0)->sum('count_diyanfei');
            return $content
                ->header($title)
                ->description('')
                ->body($this->griddiyan($request));
        }else if($type == 'clearingstatistics') {
            return $content
                ->header($title)
                ->description('')
                ->body($this->statistics($request));
        }else if($type == 'accountcapital') {
            return $content
                ->header($title)
                ->description('')
                ->body($this->accountcapital($request));
        }else if($type == 'rechargeaccount'){
            return $content
                ->header($title)
                ->description('')
                ->body($this->rechargeaccount($request));
        }else{
            return $content
                ->header($title)
                ->description('')
                ->body($this->grid($type,$request));
        }
    }

    //body
    public function grid($type,$request){
        $grid = new Grid(new Charge);
        $users = User::where('level',0)->pluck('id');
        if($type == 'online-recharge'){
            $grid->model()->whereIn('user_id',$users)->where('type','1')->orderBy('id','desc');//->where('status','1');
            $title = '在线充值记录';
        }else if($type == 'backstage-recharge'){
            $grid->model()->whereIn('user_id',$users)->where('type','4')->where('status','1')->orderBy('id','desc');
            $title = '后台充值记录';
        }else{
            $grid->model();
            $title = '资金管理';
        }
        $grid->id('ID')->sortable();
        $grid->order_no('订单编号')->sortable();
        //$grid->user_id('会员账号')->sortable();
		$grid->note('对公信息');
        $grid->column('user.name','实名')->sortable();
        $grid->column('user.phone','账号')->sortable();
        $grid->money('金额')->sortable();
        $grid->created_at('申请时间')->sortable();
        $grid->updated_at('处理时间')->sortable();
        //$grid->status('状态')->using(['0' => '等待处理', '1' => '处理成功']);
		
		//$grid->pay_type('类型')->using(['1' => '<font style="color:#03F;">四方充值</font>', '2' => '<font style="color:#C30;">对公转账</font>','3' => '<font style="color:#F39;">后台充值</font>'])->sortable();
		
		
		$grid->pay_type('类型')->using(['1' => '<font style="color:#03F;">四方充值</font>', '2' => '<font style="color:#C30;">对公转账</font>','3' => '<font style="color:#F39;">后台充值</font>','4' => '<font style="color:#993;">支付宝转账</font>','5' => '<font style="color:#96C;">微信转账</font>'])->sortable();
		
		
		$grid->column('status','状态')->display(function($item){
            switch ($item){
                case '0':
                    return '待处理';
                    break;
                case '1':
                    return '已通过';
                    break;
                case '2':
                    return '已拒绝';
                    break;
                default:
                    return '待处理';
            }
        });
        $grid->column('deal','操作')->display(function(){
            if($this->status == '0'){
                return "<a href='/admin/recharge/deposit/recharge_check?id=".$this->id."&status=1'class='btn btn-danger noShow'style=\"background-color:#00c0ef;border-color:#00c0ef\" >通过</a>&nbsp;<a href='/admin/recharge/deposit/recharge_check?id=".$this->id."&status=2'class='btn btn-danger noShow'style=\"background-color:#00c0ef;border-color:#00c0ef\" >不通过</a>";
            }else{
                return '已处理';
            }
        });
		
		
		
        $grid->disableCreateButton();//禁止创建
        $grid->disableRowSelector();//禁止复选框操作
        $grid->disableActions();//禁用行操作列
        $grid->actions(function (Grid\Displayers\Actions $actions) {
            $actions->disableDelete();
            $actions->disableView();
            $actions->disableEdit();
        });
        $grid->filter(function ($filter) {
            //去掉ID过滤器
            $filter->disableIdFilter();
            // 设置created_at字段的范围查询
            $filter->like('user.name','实名');
            $filter->between('created_at', '申请时间')->datetime();
            $filter->equal('status','充值状态')->select(['0' => '等待处理','1'=>'处理成功','2'=>'拒接']);
			 $filter->equal('pay_type','充值类型')->select(['1' => '四方充值','2'=>'对公转账','4'=>'支付宝转账','5'=>'微信转账']);
        });
        $head = ['序号','资金流水号','会员账号','实名','金额','申请时间','处理时间','充值状态'];
        $body = ['id','order_no','user_id','user.name','money','created_at','updated_at','status'];

        //统计
        $where[] = ['charges.status','=','1'];
        if(isset($request->user['name'])&&$request->user['name']){
            $where[] = ['users.name','like','%'.$request->user['name'].'%'];
        }
        if(isset($request->created_at['start'])&&$request->created_at['start']){
            $where[] = ['charges.created_at','>=',$request->created_at['start']];
        }
        if(isset($request->created_at['end'])&&$request->created_at['end']){
            $where[] = ['charges.created_at','<=',$request->created_at['end']];
        }
        if(isset($request->status)&&$request->status){
            $where[] = ['status','=',$request->status];
        }
        if(isset($request->user['phone'])&&$request->user['phone']){
            $where[] = ['users.phone','like','%'.$request->user['phone'].'%'];
        }
        if($type == 'online-recharge') {
            $count = \DB::table('charges')->join('users','charges.user_id','=','users.id')->where($where)->whereIn('charges.user_id', $users)->where('charges.type', '1')->sum('charges.money');
        }else if($type == 'backstage-recharge'){
            $count = \DB::table('charges')->join('users','charges.user_id','=','users.id')->where($where)->whereIn('charges.user_id', $users)->where('charges.type', '4')->sum('charges.money');
        }
        $grid->countRaw = ['id'=>'统计','money'=>$count];
        $grid->exporter(new ChargeExpoter($title,$head,$body));
        return $grid;
    }
   
   //充值审核
   
      public function recharge_check()
    {
      	$data = Request::capture();
        $rs=Charge::find($data->id);
        $rs->status=$data->status;
        $rs->deal_at=date('Y-m-d H:i:s');
		
		
		/*$order_no=$res["order_id"];
		$order_amount=$res["total_amount"];
			   
        $order = Charge::where('id',$order_no)->where('type',1)->first();
        if($order){
        		
				    $money = $order_amount;
					
					 if($data->status != 1){
						 $money=0;
					 }
					
					
					
                    \DB::beginTransaction();
                   
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
							return redirect()->to(url('admin/recharge/online-recharge'));
                        }catch (\Exception $e){
                            \DB::rollback();
                            echo "<script>alert('操作失败');history.go(-1);</script>";exit;
                        }
                   
				
				
				   
        }
		
		
		
		
		*/
		
		
		
		
     	\DB::beginTransaction();
      	try{
        	$res = $rs->save();
            if($data->status==1){
                //$tixian_service_charge = Charge::where('order_no',$rs->order_no)->where('type',12)->first();
                //$tixian_service_money = $tixian_service_charge?abs($tixian_service_charge->money):0;
                $user=User::find($rs->user_id);
                $before_balance	= $user->money;
                $user->money= $user->money + $rs->money;
                $after_balance	= $user->money + $rs->money;

                $res1 = $user->save();
               /* $charge=new Charge();
                $charge->card_id=$rs->card_id;
                $charge->user_id=$user->id;
                $charge->order_no=date('YmdHis').rand(1000,9999);
                $charge->status=1;
                $charge->type=20;
                $charge->before_balance=$before_balance;
                $charge->after_balance=$after_balance;
                $charge->info="提现失败,返还提现金额及手续费";
                $charge->money=abs($rs->money);
                $status = $charge->save();*/
            }
          	\DB::commit();
          	return redirect()->to(url('admin/recharge/online-recharge'));
        }catch (\Exception $e){
          	\DB::rollback();
          	echo "<script>alert('操作失败');history.go(-1);</script>";exit;
        }
   
   
   
   
   
   
   
   
   
   
   
   
    }

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    //充值统计
    public function rechargeaccount($request){
        $grid = new Grid(new Charge);
        if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
            $allAgents = User::where('level','>',0)->get();
            // 获取所有子集id
            $agents = getChildren($allAgents,Admin::user()->agent_id);
            $users = User::whereIn('pid',$agents)->where('level',0)->pluck('id');
            $grid->model()->whereIn('user_id',$users)->where('status',1)->whereIn('type',['1','4']);
        }else{
            $users = User::where('level',0)->pluck('id');
            $grid->model()->whereIn('user_id',$users)->where('status',1)->whereIn('type',['1','4']);
        }
        $title = '充值统计';
        $grid->id('ID');
        $grid->column('代理商')->display(function(){
            if($this->user->level_upper){
                return $this->user->level_upper->name;
            }else{
                return '';
            }
        });
        $grid->column('user.name','实名');
        $grid->column('user.phone','手机号');
        $grid->money('金额')->sortable();
        $grid->info('摘要')->sortable();
        $grid->created_at('申请时间')->sortable();

        $grid->disableCreateButton();//禁止创建
        $grid->disableRowSelector();//禁止复选框操作
        $grid->disableActions();//禁用行操作列
        $grid->actions(function (Grid\Displayers\Actions $actions) {
            $actions->disableDelete();
            $actions->disableView();
            $actions->disableEdit();
        });
        $grid->filter(function ($filter) {
            //去掉ID过滤器
            $filter->disableIdFilter();
            // 设置created_at字段的范围查询
            $filter->like('user.name','姓名');
            $filter->between('created_at', '申请时间')->datetime();
        });
        $head = ['序号','姓名','手机号','金额','申请时间'];
        $body = ['id','user.name','user.phone','money','created_at'];
        //统计
        $where[] = ['charges.status','=','1'];
        if(isset($request->user['name'])&&$request->user['name']){
            $where[] = ['users.name','like','%'.$request->user['name'].'%'];
        }
        if(isset($request->created_at['start'])&&$request->created_at['start']){
            $where[] = ['charges.created_at','>=',$request->created_at['start']];
        }
        if(isset($request->created_at['end'])&&$request->created_at['end']){
            $where[] = ['charges.created_at','<=',$request->created_at['end']];
        }
        $counts = \DB::table('charges')->join('users','user_id','=','users.id')->whereIn('user_id',$users)->where($where)->whereIn('charges.type',['1','4'])->sum('charges.money');
        $grid->countRaw = ['id'=>'统计','money'=>$counts];
        $grid->exporter(new ChargeExpoter($title,$head,$body));
        return $grid;
    }
    //提款记录
    public function griddeposit($type,$request){
        $grid = new Grid(new Charge);
        if($type == 'deposit'){
            if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
                $allAgents = User::where('level','>',0)->get();
                // 获取所有子集id
                $agents = getChildren($allAgents,Admin::user()->agent_id);
                $users = User::whereIn('pid',$agents)->where('level',0)->pluck('id');
                $grid->model()->whereIn('user_id',$users)->where('status',1)->where('type','5')->with('bankcard')->with('user');
            }else{
                $users = User::where('level',0)->pluck('id');
                $grid->model()->whereIn('user_id',$users)->where('type','5')->with('bankcard')->with('user');
            }
            $title = '提款记录';
        }
        $grid->id('ID');
        $grid->order_no('流水资金号')->sortable();
        $grid->user_id('会员账号')->sortable();
      	$grid->column('上级代理商')->display(function(){
          	$upper = $this->user->level_upper;
            return $upper?$upper->name:'';
        });
        $grid->column('bankcard.name','持卡人')->sortable();
        $grid->money('金额')->sortable();
        $grid->column('bankcard.card_name','开户行')->sortable();
        $grid->column('bankcard.card_address','开户地')->sortable();
        $grid->column('bankcard.card_number','银行卡号')->sortable();
        $grid->created_at('申请时间')->sortable();
        $grid->updated_at('处理时间')->sortable();
        // $grid->status('状态')->using(['0' => '等待处理', '1' => '处理成功']);
        $grid->column('status','状态')->display(function($item){
            switch ($item){
                case '0':
                    return '待处理';
                    break;
                case '1':
                    return '已通过';
                    break;
                case '2':
                    return '已拒绝';
                    break;
                default:
                    return '待处理';
            }
        });
        $grid->column('deal','操作')->display(function(){
            if($this->status == '0'){
                return "<a href='/admin/recharge/deposit/withdraw_check?id=".$this->id."&status=1'class='btn btn-danger noShow'style=\"background-color:#00c0ef;border-color:#00c0ef\" >通过</a>&nbsp;<a href='/admin/recharge/deposit/withdraw_check?id=".$this->id."&status=2'class='btn btn-danger noShow'style=\"background-color:#00c0ef;border-color:#00c0ef\" >不通过</a>";
            }else{
                return '已处理';
            }
        });
        $grid->disableCreateButton();//禁止创建
        $grid->disableRowSelector();//禁止复选框操作
        $grid->disableActions();//禁用行操作列
        $grid->actions(function (Grid\Displayers\Actions $actions) {
            $actions->disableDelete();
            $actions->disableView();
            // $actions->disableEdit();
        });
        $grid->filter(function ($filter) {
            //去掉ID过滤器
            $filter->disableIdFilter();
            // 设置created_at字段的范围查询
            $filter->like('user_id','会员账号');
            $filter->like('user.name','姓名');
            $filter->between('created_at', '申请时间')->datetime();
            $filter->equal('status','充值状态')->select(['0' => '待处理','1'=>'已通过','2'=>'已拒绝']);
        });
        $head = ['序号','资金流水号','会员账号','实名','金额','开户行','开户银行','银行卡号','申请时间','处理时间','提款状态'];
        $body = ['id','card_id','user_id','user.name','money','bankcard.card_name','bankcard.card_address','bankcard.card_number','created_at','updated_at','status'];
        //统计
        $where[] = ['charges.type','=','5'];
        if(isset($request->user['name'])&&$request->user['name']){
            $where[] = ['users.name','like','%'.$request->user['name'].'%'];
        }
        if(isset($request->created_at['start'])&&$request->created_at['start']){
            $where[] = ['charges.created_at','>=',$request->created_at['start']];
        }
        if(isset($request->created_at['end'])&&$request->created_at['end']){
            $where[] = ['charges.created_at','<=',$request->created_at['end']];
        }
        if(isset($request->status)&&$request->status){
            $where[] = ['status','=',$request->status];
        }
        $counts = \DB::table('charges')->join('users','user_id','=','users.id')->whereIn('user_id',$users)->where($where)->sum('charges.money');
        $grid->countRaw = ['id'=>'统计','money'=>$counts];
        $grid->exporter(new ChargeExpoter($title,$head,$body));
        return $grid;
    }
    public function withdraw_check()
    {
      	$data = Request::capture();
        $rs=Charge::find($data->id);
        $rs->status=$data->status;
        $rs->deal_at=date('Y-m-d H:i:s');
      	\DB::beginTransaction();
      	try{
        	$res = $rs->save();
            if($data->status==2){
                $tixian_service_charge = Charge::where('order_no',$rs->order_no)->where('type',12)->first();
                $tixian_service_money = $tixian_service_charge?abs($tixian_service_charge->money):0;
                $user=User::find($rs->user_id);
                $before_balance	= $user->money;
                $user->money= $user->money+abs($rs->money)+$tixian_service_money;
                $after_balance	= $user->money;

                $res1 = $user->save();
                $charge=new Charge();
                $charge->card_id=$rs->card_id;
                $charge->user_id=$user->id;
                $charge->order_no=date('YmdHis').rand(1000,9999);
                $charge->status=1;
                $charge->type=10;
                $charge->before_balance=$before_balance;
                $charge->after_balance=$after_balance;
                $charge->info="提现失败,返还提现金额及手续费";
                $charge->money=abs($rs->money);
                $status = $charge->save();
            }
          	\DB::commit();
          	return redirect()->to(url('admin/recharge/deposit'));
        }catch (\Exception $e){
          	\DB::rollback();
          	echo "<script>alert('操作失败');history.go(-1);</script>";exit;
        }
    }

    //资金清算
    public function gridsettlement($request){
        $grid = new Grid(new Charge);
        if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
            $allAgents = User::where('level','>',0)->get();
            // 获取所有子集id
            $agents = getChildren($allAgents,Admin::user()->agent_id);
            $users = User::whereIn('pid',$agents)->where('level',0)->pluck('id');
            // $grid->model()->whereIn('user_id',$users)->where('status',1)->where('charges.is_analog','=',0)->with('user');
            $grid->model()->whereIn('user_id',$users)->leftJoin('users','users.id','=','charges.user_id')->where('charges.is_analog','=',0)->select('charges.*');
        }else{
            $users = User::where('level',0)->pluck('id');
            // $grid->model()->whereIn('user_id',$users)->where('status',1)->where('charges.is_analog','=',0)->with('user');
            $grid->model()->whereIn('user_id',$users)->leftJoin('users','users.id','=','charges.user_id')->where('charges.is_analog','=',0)->select('charges.*');
        }
        $title = '资金清算';
        $grid->id('ID');
        $grid->user_id('账号')->sortable();
        $grid->column('账户类别')->display(function () {
            return '点买人账号';
        });
        $grid->column('user.name','账户名')->sortable();
        $grid->column('user.phone','手机号');
        $grid->column('user.pid','代理商')->display(function($item){
            $find=User::find($item);
            if($find){
                return $find->name;
            }else{
                return '';
            }
        });
        $grid->column('order_no','订单号');
        //1充值2创建订单3平仓4后台操作5提现
        $grid->type('业务类型')->using(['1' => '充值', '2' => '创建订单','3'=>'平仓','4'=>'后台操作','5'=>'提现','6'=>'追加信用金','7'=>'返佣','8'=>'递延费','9'=>'手动平仓']);
        $grid->column('money','金额');
        $grid->info('摘要')->sortable();
        $grid->created_at('申请时间')->sortable();
        $grid->disableCreateButton();//禁止创建
        $grid->disableRowSelector();//禁止复选框操作
        $grid->disableActions();//禁用行操作列
        // $grid->actions(function (Grid\Displayers\Actions $actions) {
        //     $actions->disableDelete();
        //     $actions->disableView();
        //     $actions->disableEdit();
        // });
        $grid->filter(function ($filter) {
            // 设置created_at字段的范围查询
            $filter->disableIdFilter();
            $filter->like('user.name','账户名');
            $filter->like('user.phone','手机号');
            $filter->between('charges.created_at', '申请时间')->datetime();
            $filter->equal('charges.type','业务类型')->select(['1' => '充值', '2' => '创建订单','3'=>'平仓','4'=>'后台操作','5'=>'提现','6'=>'追加信用金','7'=>'返佣','8'=>'递延费']);
            // $filter->equal('status','充值状态')->select(['0' => '等待处理','1'=>'处理成功']);
        });

        $head = ['序号','账号','账户名','代理商','金额','业务类型','摘要','申请时间'];
        $body = ['id','user_id','user.name','user.pid','money','type','info','created_at'];
        //统计
        $where[] = ['charges.is_analog','=','0'];
        if(isset($request->user['name'])&&$request->user['name']){
            $where[] = ['users.name','like',$request->user['name']];
        }
        if(isset($request->user['phone'])&&$request->user['phone']){
            $where[] = ['users.phone','like',$request->user['phone']];
        }
        if(isset($request->charges['type'])&&$request->charges['type']){
            $where[] = ['charges.type','=',$request->charges['type']];
        }
        if(isset($request->charges['created_at']['start'])&&$request->charges['created_at']['start']){
            $where[] = ['charges.created_at','>=',$request->charges['created_at']['start']];
        }
        if(isset($request->charges['created_at']['end'])&&$request->charges['created_at']['end']){
            $where[] = ['charges.created_at','<',$request->charges['created_at']['end']];
        }
        $counts = \DB::table('charges')->leftJoin('users','users.id','=','charges.user_id')->whereIn('charges.user_id',$users)->where($where)->sum('charges.money');
        $grid->countRaw = ['id'=>'统计','money'=>$counts];
        $grid->exporter(new ChargeExpoter($title,$head,$body));
        return $grid;
    }
    //递延费统计
    public function griddiyan($request){
        $grid = new Grid(new User);
        $grid->model()->with(['tactics']);
        $title = '递延费统计';
        // $grid->id('ID');
        $grid->column('id','ID')->sortable();
        $grid->column('phone','登录名')->sortable();
        $grid->column('name','实名')->sortable();
        $grid->column('phone','手机号码')->sortable();
        $grid->column('count_diyanfei','递延费总额')->display(function(){
            return $this->tactics->where('is_analog',0)->sum('count_diyanfei');
        });


        $grid->disableCreateButton();//禁止创建
        $grid->disableRowSelector();//禁止复选框操作
        $grid->disableActions();//禁用行操作列
        $grid->actions(function (Grid\Displayers\Actions $actions) {
            $actions->disableDelete();
            $actions->disableView();
            $actions->disableEdit();
        });
        $grid->filter(function ($filter) {
            //去掉ID过滤器
            $filter->disableIdFilter();
            $filter->like('name','实名');
            $filter->like('phone','手机号码');
        });
        $head = ['序号','会员账号','登录名','实名','手机号码','递延费总额'];
        $body = ['id','id','phone','name','phone','count_diyanfei'];
        //统计
        $where = array();
        $where['is_analog'] = 0;
        if(isset($request->name)&&$request->name){
            $where[] = ['users.name','like','%'.$request->name.'%'];
        }
        if(isset($request->phone)&&$request->phone){
            $where[] = ['users.phone','like','%'.$request->phone.'%'];
        }
        if(isset($request->created_at['start'])&&$request->created_at['start']){
            $where[] = ['charges.created_at','>=',$request->created_at['start']];
        }
        if(isset($request->created_at['end'])&&$request->created_at['end']){
            $where[] = ['charges.created_at','<=',$request->created_at['end']];
        }
        // DB::connection()->enableQueryLog();
        $counts = \DB::table('tactics')->join('users','users.id','=','tactics.user_id')->where($where)->sum('count_diyanfei');
        // $log = DB::getQueryLog();
        // var_dump($log);
        $grid->countRaw = ['id'=>'统计','count_diyanfei'=>$counts];
        $grid->exporter(new ChargeExpoter($title,$head,$body));
        return $grid;
    }
    //资金流水
    public function accountcapital($request){
        $grid = new Grid(new Charge);
        if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
            $allAgents = User::where('level','>',0)->get();
            // 获取所有子集id
            $agents = getChildren($allAgents,Admin::user()->agent_id);
            $users = User::whereIn('pid',$agents)->where('level',0)->pluck('id');
            $grid->model()->whereIn('user_id',$users)->leftJoin('users','users.id','=','charges.user_id')->where('is_analog','=',0)->where('status',1)->select('charges.*');
            //$grid->model()->whereIn('user_id',$users);
        }else{
            $users = User::where('level',0)->pluck('id');
            $grid->model()->whereIn('user_id',$users)->leftJoin('users','users.id','=','charges.user_id')->where('is_analog','=',0)->where('status',1)->select('charges.*');
        }
        $title = '资金流水';
        $grid->id('ID');
        $grid->column('user.name','策略人名称');
        $grid->order_no('资金流水号')->sortable();
        $grid->column('业务类型')->display(function () {
            return '销售提成';
        });
        $grid->column('user.phone','策略人账号')->sortable();
        $grid->column('user.pid','代理商')->display(function($item){
            $find=User::find($item);
            if($find){
                return $find->name;
            }else{
                return '';
            }
        });
        $grid->column('user.phone','策略人手机号')->sortable();
        //1充值2创建订单3平仓4后台操作5提现
        $grid->column('charges.money','金额');
        $grid->column('before_balance','变动前金额');
        $grid->column('after_balance','变动后金额');
        $grid->column('charges.created_at','申请时间');
        $grid->disableCreateButton();//禁止创建
        $grid->disableRowSelector();//禁止复选框操作
        $grid->disableActions();//禁用行操作列
        $grid->actions(function (Grid\Displayers\Actions $actions) {
            $actions->disableDelete();
            $actions->disableView();
            $actions->disableEdit();
        });
        $grid->filter(function ($filter) {
            // 设置created_at字段的范围查询
            $filter->disableIdFilter();
            $filter->like('user.name','策略人名称');
            $filter->like('user.phone','手机号');
            $filter->between('charges.created_at', '申请时间')->datetime();
        });
        $head = ['序号','资金流水号','业务类型','策略人账号','代理商','策略人手机号','金额','变动前金额','变动后金额','发生时间'];
        $body = ['id','order_no','销售提成','user.phone','level','user.phone','charges.money','before_balance','after_balance','charges.created_at'];
        //统计
        $where[] = ['status','=','1'];
        if(isset($request->user['name'])&&$request->user['name']){
            $where[] = ['users.name','like','%'.$request->user['name'].'%'];
        }
        if(isset($request->user['phone'])&&$request->user['phone']){
            $where[] = ['users.phone','like','%'.$request->user['phone'].'%'];
        }
        if(isset($request->charges['created_at']['start'])&&$request->charges['created_at']['start']){
            $where[] = ['charges.created_at','>=',$request->charges['created_at']['start']];
        }
        if(isset($request->charges['created_at']['end'])&&$request->charges['created_at']['end']){
            $where[] = ['charges.created_at','<',$request->charges['created_at']['end']];
        }
        $charges_money = \DB::table('users')->leftJoin('charges','users.id','=','charges.user_id')->where($where)->whereIn('user_id',$users)->where('is_analog','=',0)->sum('charges.money');
        $before_balance = \DB::table('users')->leftJoin('charges','users.id','=','charges.user_id')->where($where)->whereIn('user_id',$users)->where('is_analog','=',0)->sum('charges.before_balance');
        $after_balance = \DB::table('users')->leftJoin('charges','users.id','=','charges.user_id')->where($where)->whereIn('user_id',$users)->where('is_analog','=',0)->sum('charges.after_balance');
        $grid->countRaw = ['id'=>'统计','charges.money'=>$charges_money,'before_balance'=>$before_balance,'after_balance'=>$after_balance];
        $grid->exporter(new ChargeExpoter($title,$head,$body));
        return $grid;
    }
    //策略人清算统计
    public function statistics($request){
        $grid = new Grid(new User);
        //关联表
        if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
            $allAgents = User::where('level','>',0)->get();
            // 获取所有子集id
            $agents = getChildren($allAgents,Admin::user()->agent_id);
            $users = User::whereIn('pid',$agents)->where('level',0)->pluck('id');
            $grid->model()->whereIn('id',$users)->with('real_tactics')->with('charges');
            // $grid->model()->with('tactics')->with('charges');
        }else{
            $users = User::where('level',0)->pluck('id');
            $grid->model()->whereIn('id',$users)->with('real_tactics')->with('charges');
        }
        $title = '策略人清算统计';
        // $grid->id('ID');
        $grid->column('id','ID')->sortable();
        $grid->column('phone','登录名')->sortable();
        $grid->column('name','实名')->sortable();
        $grid->column('phone','手机号码')->sortable();
        $grid->column('pid','代理商')->display(function($item){
            $find=User::find($item);
            if($find){
                return $find->name;
            }else{
                return '';
            }
        });
        $grid->column('total_charge_money','充值总额')->display(function(){
            return $this->charges->where('status',1)->whereIn('type',[1,4])->sum('money');
        });
        //提现总额
        $grid->column('total_deposit_money','提现总额')->display(function(){
            return $this->charges->where('status',1)->where('type','5')->sum('money');
        });
        //清算盈亏
        $grid->column('clear_return_money','清算盈亏')->display(function(){
            return $this->real_tactics->sum('return_money');
        });
        //交易综合费总额
        $grid->column('count_deal_money','交易综合费')->display(function(){
            return $this->real_tactics->sum('count_deal_money');
        });
        //递延费总额
        $grid->column('count_diyanfei','递延费总额')->display(function(){
            return $this->real_tactics->sum('count_diyanfei');
        });
        $grid->disableCreateButton();//禁止创建
        $grid->disableRowSelector();//禁止复选框操作
        $grid->disableActions();//禁用行操作列
        $grid->actions(function (Grid\Displayers\Actions $actions) {
            $actions->disableDelete();
            $actions->disableView();
            $actions->disableEdit();
        });
        $grid->filter(function ($filter) {
            //去掉ID过滤器
            $filter->disableIdFilter();
            $filter->like('name','实名');
            $filter->like('phone','手机号码');
            // $filter->column(1/2, function ($filter) {
            //     // 在这里添加字段过滤器
            //     $agents = User::where('level','>',0)->pluck('name','id');
            //     $filter->equal('user.pid','代理商')->select($agents);
            // });
        });
        $head = ['序号','会员账号','登录名','实名','手机号码','代理商','充值总额','提现总额','清算盈亏','交易综合费','递延费总额'];
        $body = ['id','id','phone','name','phone','level','total_charge_money','total_deposit_money','clear_return_money','count_deal_money','count_diyanfei'];
        $grid->exporter(new ChargeExpoter($title,$head,$body));
        //统计
        $where = array();
        if(isset($request->name)&&$request->name){
            $where[] = ['users.name','like','%'.$request->name.'%'];
        }
        if(isset($request->phone)&&$request->phone){
            $where[] = ['users.phone','like','%'.$request->phone.'%'];
        }
        if(isset($request->pid)&&$request->pid){
            $where[] = ['users.pid','=',$request->pid];
        }

        $total_charge_money = \DB::table('users')->leftJoin('charges','users.id','=','charges.user_id')->where($where)->whereIn('charges.user_id',$users)->where('status',1)->whereIn('charges.type',[1,4])->sum('charges.money');
        $total_deposit_money = \DB::table('users')->leftJoin('charges','users.id','=','charges.user_id')->where($where)->whereIn('charges.user_id',$users)->where('status',1)->where('charges.type','5')->sum('charges.money');
        $clear_return_money = \DB::table('users')->leftJoin('tactics','users.id','=','tactics.user_id')->where($where)->where('tactics.is_analog',0)->whereIn('tactics.user_id',$users)->sum('return_money');
        $count_deal_money = \DB::table('users')->leftJoin('tactics','users.id','=','tactics.user_id')->where($where)->where('tactics.is_analog',0)->whereIn('tactics.user_id',$users)->sum('count_deal_money');
        $count_diyanfei = \DB::table('users')->leftJoin('tactics','users.id','=','tactics.user_id')->where($where)->where('tactics.is_analog',0)->whereIn('tactics.user_id',$users)->sum('count_diyanfei');
        $grid->countRaw = ['id'=>'统计','total_charge_money'=>$total_charge_money,'total_deposit_money'=>$total_deposit_money,'clear_return_money'=>$clear_return_money,'count_deal_money'=>$count_deal_money,'count_diyanfei'=>$count_diyanfei];

        return $grid;
    }
}