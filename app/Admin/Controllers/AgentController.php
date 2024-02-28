<?php

namespace App\Admin\Controllers;

use App\Admin\Extensions\AgentCountExporter;
use App\Admin\Extensions\AgentWithdrawExporter;
use App\Models\AdminRoles;
use App\Models\AdminUser;
use App\Models\AdminUserRole;
use App\Models\Bankcard;
use App\Models\Charge;
use App\Models\Tactics;
use App\Models\User;
use App\Http\Controllers\Controller;
use App\Admin\Extensions\AgentExporter;
use App\Admin\Extensions\AgentSpreadExporter;
use App\Admin\Extensions\AgentBalanceClearExporter;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;
use Encore\Admin\Facades\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Admin\Requests;
use Encore\Admin\Layout\Column;
use Encore\Admin\Layout\Row;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Auth;

class AgentController extends Controller
{
    use HasResourceActions;

    /**
     * Index interface.
     *
     * @param Content $content
     * @return Content
     */
    public function index(Content $content,Request $request)
    {
        return $content
            ->header('代理商管理')
            ->description('列表')
            ->body($this->index_grid($request));
    }

    public function index_grid($request){
        $grid=new Grid(new User);

        if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
            $allAgents = User::where('level','>',0)->get();
            // 获取所有子集id
            $agents = getChildren($allAgents,Admin::user()->agent_id);
            $users = User::whereIn('pid',$agents)->where('level','!=',0)->where('is_del',0)->pluck('id');
            $grid->model()->with('level_lower')->with('level_upper')->with('charges')->with('tactics')->whereIn('id',$users);
        }else{
            $users = User::where('level','!=',0)->where('is_del',0)->pluck('id');
            $grid->model()->with('level_lower')->with('level_upper')->with('charges')->with('tactics')->whereIn('id',$users);
        }

        $grid->column('id', 'ID')->sortable();
        $grid->column('name','姓名');
        $grid->column('phone','登录名');
        $grid->column('phone','手机');
        $grid->column('deferredrate','递延费佣金比例')->display(function($item){
            return $item.'%';
        });
        $grid->column('synthesizerate','综合费佣金比例')->display(function($item){
            return $item.'%';
        });
        $grid->column('money','佣金余额');
        $grid->column('total_commission','佣金总额');
        $grid->column('level_lower','策略人数')->display(function (){
            return $this->level_lower->where('level',0)->count();
        });
        $grid->column('total_charge_money','历史充值总额')->display(function(){
            return $this->charges->where('status',1)->whereIn('type',[1,4])->sum('money');
        });
        $grid->column('total_tactics_money','总创建策略金额')->display(function(){
            return $this->tactics->sum('create_money');
        });
        $grid->column('count_deal_money','交易综合费')->display(function(){
            return $this->tactics->sum('count_deal_money');
        });
        $grid->column('position_return_money','持仓盈亏')->display(function(){
            $position_return_money=$this->tactics->where('order_status',0)->sum('return_money');
            return $position_return_money>0?'<div style="color:red">'.$position_return_money.'</div>':'<div style="color:green">'.$position_return_money.'</div>';
        });
        $grid->column('clear_return_money','清算盈亏')->display(function(){
            $clear_return_money=$this->tactics->where('order_status',1)->sum('return_money');
            return $clear_return_money>0?'<div style="color:red">'.$clear_return_money.'</div>':'<div style="color:green">'.$clear_return_money.'</div>';
        });
        $grid->column('count_diyanfei','总递延费')->display(function(){
            return $this->tactics->sum('count_diyanfei');
        });
        $grid->column('diyanfei','今日应收递延费')->display(function(){
            return $this->tactics->where('order_status',0)->sum('diyanfei');
        });
        $grid->column('tactics_count','持仓总量')->display(function(){
            return $this->tactics->where('order_status',0)->count();
        });
        $grid->column('level_upper.name','上级代理');
        $grid->column('level', '代理商等级')->display(function ($item) {
            switch ($item){
                case 0:return '';
                    break;
                case 1:return '一级代理';
                    break;
                case 2:return '二级代理';
                    break;
                case 3:return '三级代理';
                    break;
                default:return '';
            }
        });
       // $grid->column('is_freeze','账户状态')->display(function($item){
           // return $item==1?"<div style='color:red'>冻结<div>":"<div style='color:green'>正常</div>";
       // });
        if(!Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id == 0){
            $grid->column('is_actual','实盘状态')->display(function($item){
                return $item==1?"<div style='color:red'>开启<div>":"<div style='color:green'>关闭</div>";
            });
        }
        

        //if (Admin::user()->can('agent_freeze')) {
           // $grid->column('freeze', '冻结操作')->display(function(){

            //    return $this->is_freeze==1?"<a href='/admin/agent/freeze?is_freeze=0&id=".$this->id."' class='btn btn-danger noShow' >解冻</a>":"<a href='/admin/agent/freeze?is_freeze=1&id=".$this->id."'class='btn btn-danger noShow'style=\"background-color:#00c0ef;border-color:#00c0ef\" >冻结</a>";

           // });
       // }

        $grid->column('updated_at', '更新时间');
        if (!Admin::user()->can('agent_create')) {
            $grid->disableCreateButton();
        }
//            $grid->disableCreateButton();//禁用创建按钮
        $grid->actions(function (Grid\Displayers\Actions $actions) {
//            $actions->disableDelete();
            $actions->disableView();
            if (!Admin::user()->can('agent_edit')) {
                $actions->disableEdit();
            }
            if (!Admin::user()->can('agent_delete')) {
                $actions->disableDelete();
            }
        });
        $grid->tools(function ($tools)use ($grid){
            //关闭批量删除
            $tools->batch(function ($batch) {
                $batch->disableDelete();
            });
        });
//            $grid->disableRowSelector();//禁用行选择checkbox
//            $grid->disableFilter();//禁用查询过滤器
//            $grid->disablePagination();//禁用分页条
//            $grid->disableActions();//禁用行操作列
//            $grid->disableExport();//禁用导出
//            $grid->perPages([5,10, 20, 30, 40, 50]);//设置分页选择器选项

//            重定义导出
        $title='代理商'.date('YmdHis');
        $head = ['id', '姓名', '登录名','手机','递延费佣金比例','综合费佣金比例','佣金余额','佣金总额','策略人数','历史充值总额','总创建策略金额','交易综合费',
            '持仓盈亏','清算盈亏','总递延费','今日应收递延费','持仓总量','上级代理','代理商等级','账户状态','更新时间'];
        $body = ['id', 'name', 'phone','phone','deferredrate','synthesizerate','money','total_commission','level_lower','total_charge_money','total_tactics_money','count_deal_money',
            'position_return_money','clear_return_money','count_diyanfei','diyanfei','tactics_count','level_upper.name','level','is_freeze','updated_at'];
        $grid->exporter(new AgentExporter($title,$head,$body));

        // filter($callback)方法用来设置表格的简单搜索框
        $grid->filter(function ($filter) {
            // 去掉默认的id过滤器
            $filter->disableIdFilter();
            // 设置created_at字段的范围查询
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->between('updated_at', '更新时间')->datetime();
                $filter->like('name','姓名');
            });
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->like('phone','登录名/手机');
                $filter->like('level_upper.name','上级代理');
            });
        });

        $where[]=['users.id','>',0];
        // 统计
        if(isset($request->name)&&$request->name){
            $where[] = ['users.name','like','%'.$request->name.'%'];
        }
        if(isset($request->phone)&&$request->phone){
            $where[] = ['users.phone','like','%'.$request->phone.'%'];
        }
        if(isset($request->created_at['start'])&&$request->created_at['start']){
            $where[] = ['users.created_at','>=',$request->created_at['start']];
        }
        if(isset($request->created_at['end'])&&$request->created_at['end']){
            $where[] = ['users.created_at','<=',$request->created_at['end']];
        }
        if(isset($request->level_upper['name'])&&$request->level_upper['name']){
            $users=User::whereIn('id',$users)->where("name",'like','%'.$request->level_upper['name'].'%')->pluck("id");
            $users=User::whereIn('pid',$users)->where('level','!=',0)->pluck('id');
        }

        $userIds=User::whereIn('id',$users)->where($where)->pluck("id");
        $data['money']=User::whereIn('id',$userIds)->sum('money');
        $data['total_commission']=User::whereIn('id',$userIds)->sum('total_commission');
        $data['level_lower']=User::whereIn('pid',$userIds)->where('level',0)->count();
        $data['total_charge_money']=Charge::whereIn('user_id',$userIds)->where('status',1)->whereIn('type',[1,4])->sum('money');
        $data['total_tactics_money']=Tactics::whereIn('user_id',$userIds)->sum('create_money');
        $data['position_return_money']=Tactics::whereIn('user_id',$userIds)->where('order_status',0)->sum('return_money');
        $data['clear_return_money']=Tactics::whereIn('user_id',$userIds)->where('order_status',1)->sum('return_money');
        $data['count_deal_money']=Tactics::whereIn('user_id',$userIds)->sum('count_deal_money');
        $data['count_diyanfei']=Tactics::whereIn('user_id',$userIds)->sum('count_diyanfei');
        $data['diyanfei']=Tactics::whereIn('user_id',$userIds)->where('order_status',0)->sum('diyanfei');
        $data['tactics_count']=Tactics::whereIn('user_id',$userIds)->where('order_status',0)->count();

        $grid->countRaw = ['id' => '合计','money' => $data['money'],'total_commission'=>$data['total_commission'],'level_lower'=>$data['level_lower'],
            'total_charge_money'=>$data['total_charge_money'],'total_tactics_money'=>$data['total_tactics_money'],
            'position_return_money'=>$data['position_return_money'],'clear_return_money'=>$data['clear_return_money'],
            'count_deal_money'=>$data['count_deal_money'],'count_diyanfei'=>$data['count_diyanfei'],'diyanfei'=>$data['diyanfei'],'tactics_count'=>$data['tactics_count']];

        return $grid;
    }

    public function freeze()
    {
        $data=Request::capture();
        $rs=User::find($data->id);
        $rs->is_freeze=$data->is_freeze;
        $res = $rs->save();
        if($res)
        {
            admin_toastr('操作成功','success');
            return redirect()->to(url('admin/agent'));
        }
        else
        {
            admin_toastr('操作失败','error');
            return redirect()->back();
        }
    }
    /**
     * Show interface.
     *
     * @param mixed $id
     * @param Content $content
     * @return Content
     */

    public function show($id, Content $content)
    {
        return $content
            ->header('代理商管理')
            ->description('详情')
            ->body($this->detail($id));
    }

    public function edit($id, Content $content)
    {
        return $content
            ->header('代理商管理')
            ->description('编辑')
            ->body($this->form()->edit($id));
    }

    public function upper($agent_id)
    {
        $data=Request::capture();
        $level=$data->q-1;
        if($level>0)
        {
            if($agent_id){
                $find=User::find($agent_id);
                if($find['level']==$level){
                    $list= User::where('id',$agent_id)->get(['id',DB::raw('name as text')]);
                    $data= $list->toArray();
                }else{
                    $list= User::where('pid',$agent_id)->where('level',$level)->get(['id',DB::raw('name as text')]);
                    $data= $list->toArray();
                }
                
            }else{
                $list= User::where('level',$level)->get(['id',DB::raw('name as text')]);
                $data= $list->toArray();
            }
            return $data;
        }
        else
        {
            return [];
        }
    }

    /**
     * Create interface.
     *
     * @param Content $content
     * @return Content
     */
    public function create(Content $content)
    {
        if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
            $agent_id=Admin::user()->agent_id;
        }else{
            $agent_id=0;
        }
        $agent=User::find($agent_id);

        $form = new Form(new User);

        $form->mobile('phone', '手机号');
        $form->text('name', '姓名');
        $form->text('password','密码');
        $form->rate('deferredrate','递延费佣金比例')->default(0);
        $form->rate('synthesizerate','综合费佣金比例')->default(0);

        if($agent){
            if($agent->level==1){
                $gList=array(
                    '2'=>'二级代理',
                    '3'=>'三级代理'
                );
            }elseif($agent->level==2){
                $gList=array(
                    '3'=>'三级代理'
                );
            }
        }else{
            $gList=array(
                '1'=>'一级代理',
                '2'=>'二级代理',
                '3'=>'三级代理'
            );
        }

        $form->select('level', '代理级别')->options($gList)->load('pid',url('admin/agent/create/upper/'.$agent_id));
        $form->select('pid','代理商');
        $form->setAction(url('admin/agent/create_save'));

        $form->tools(function (Form\Tools $tools) {

//          去掉`删除`按钮
            $tools->disableDelete();
            //去掉查看按钮
            $tools->disableView();
        });
        $form->footer(function ($footer) {
            // 去掉`查看`checkbox
            $footer->disableViewCheck();
            // 去掉`继续编辑`checkbox
            $footer->disableEditingCheck();
            $footer->disableCreatingCheck();
        });

        return $content
            ->header('代理商管理')
            ->description('新建')
            ->body($form);
    }

    public function create_save(Requests\AgentRequest $request)
    {
        try
        {
            $user=new User();

            $user->phone=$request->phone;
            $user->name=$request->name;
            if(empty($request->deferredrate)){
                $request->deferredrate=0;
            }
            if(empty($request->synthesizerate)){
                $request->synthesizerate=0;
            }
            $user->deferredrate=$request->deferredrate;
            $user->synthesizerate=$request->synthesizerate;
            $user->password=bcrypt($request->password);
            if($request->level==1){
                $request->pid=0;
            }else{
                $puser = User::find($request->pid);
                $user->is_actual = $puser->is_actual;
            }
            $user->pid=$request->pid;
            $user->level=$request->level;

            $code=strtoupper(str_random(6));
            if(User::where('code',$code)->exists()){
                $code=strtoupper(str_random(6));
            }
            $user->code=$code;

            DB::beginTransaction();
            $res = $user->save();

            $admin_user=new AdminUser();
            $admin_user->agent_id=$user->id;
            $admin_user->username=$request->phone;
            $admin_user->name=$request->name;
            $admin_user->password=bcrypt($request->password);
            $res1=$admin_user->save();

            $slug='level_'.$request->level;
            $role=AdminRoles::where('slug',$slug)->first();

            $admin_user_role=new AdminUserRole();
            $admin_user_role->role_id=$role->id;
            $admin_user_role->user_id=$admin_user->id;
            $res2=$admin_user_role->save();

            if($res&&$res1&&$res2)
            {
                DB::commit();
                admin_toastr('操作成功','success');
                return redirect()->to(url('admin/agent'));
            }
            else
            {
                DB::rollback();
                admin_toastr('操作失败','error');
                return redirect()->back();
            }
        }
        catch (\Exception $ex)
        {
            $m=$ex->getMessage();
            echo $m;
        }
    }

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new User);

        $grid->id('Id');
        $grid->name('Name');
        $grid->phone('Phone');
        $grid->email('Email');
        $grid->password('Password');
        $grid->pid('Pid');
        $grid->code('Code');
        $grid->referral_code('Referral code');
        $grid->remember_token('Remember token');
        $grid->money('Money');
        $grid->cangfei('Cangfei');
        $grid->diyanfei('Diyanfei');
        $grid->created_at('Created at');
        $grid->updated_at('Updated at');

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(User::findOrFail($id));

        $show->id('序号');
        $show->name('姓名');
        $show->phone('手机');
        $show->email('邮箱');
        $show->code('邀请码');
        $show->money('账户余额');
        $show->created_at('注册时间');

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
            $agent_id=Admin::user()->agent_id;
        }else{
            $agent_id=0;
        }
        $agent=User::find($agent_id);

        $form = new Form(new User);

        $form->text('name', '姓名');
        $form->display('phone', '手机');
        $form->text('password','新密码');
        $form->text('password_confirm','确认密码');
        $form->rate('deferredrate','递延费佣金比例');
        $form->rate('synthesizerate','综合费佣金比例');
       	$form->text('money','账户余额')->disable();
		$form->number('addMoney','充值金额');
        $form->password('pay_password','密码')->placeholder('充值请输入密码，不充值可不填');
        $form->setAction(url('admin/agent/edit_save'));
        $form->display('level', '代理商等级')->with(function ($item) {
            switch ($item){
                case 0:return '';
                    break;
                case 1:return '一级代理';
                    break;
                case 2:return '二级代理';
                    break;
                case 3:return '三级代理';
                    break;
                default:return '';
            }
        });
        $form->select('pid','代理商')->options(function()use($agent){
            if($agent){
                if($this->level==2){
                    $dList = User::where('id',$agent->id)->pluck('name','id');
                }elseif($this->level==3){
                    $dList = User::where('pid',$agent->id)->where('level',$this->level-1)->pluck('name','id');
                }else{
                    $dList=[];
                }
            }else{
                if($this->level>1){
                    $dList = User::where('level',$this->level-1)->pluck('name','id');
                }else{
                    $dList=[];
                }
            }
            return $dList;
        })->default('pid');
        if(!Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id == 0){
            $form->radio('is_actual','实盘状态')->options(['0' => '关闭', '1'=> '开启']);
        }
        $form->hidden('id');

        $form->tools(function (Form\Tools $tools) {
//                    // 去掉`列表`按钮
//                    $tools->disableList();
            // 去掉`删除`按钮
            $tools->disableDelete();
            //去掉查看按钮
            $tools->disableView();
        });
        $form->footer(function ($footer) {
//                    // 去掉`重置`按钮
//                    $footer->disableReset();
//                    // 去掉`提交`按钮
//                    $footer->disableSubmit();
            // 去掉`查看`checkbox
            $footer->disableViewCheck();
            // 去掉`继续编辑`checkbox
            $footer->disableEditingCheck();
            $footer->disableCreatingCheck();
        });

        return $form;
    }

    public function edit_save(Content $content)
    {
        try
        {
            $data=Request::capture();
            if(!isset($data->id)||empty($data->id)){
                admin_toastr('ID不正确','error');
                return redirect()->back();
            }
            DB::beginTransaction();
            $user=User::find($data->id);
            $admin_user=AdminUser::where('agent_id',$user->id)->first();
            $res2=true;
            $res3=true;
            if(!$admin_user){
                $admin_user=new AdminUser();
                $admin_user->username=$user->phone;
                $admin_user->name=$user->name;
                $admin_user->password=$user->password;
                $admin_user->agent_id=$user->id;
                $res3 = $admin_user->save();

                $slug='level_'.$user->level;
                $role=AdminRoles::where('slug',$slug)->first();

                $admin_user_role=new AdminUserRole();
                $admin_user_role->role_id=$role->id;
                $admin_user_role->user_id=$admin_user->id;
                $res2=$admin_user_role->save();
            }
            if(isset($data->name) && !empty($data->name))
            {
                $user->name=$data->name;
                if($admin_user){
                    $admin_user->name=$data->name;
                }
            }
            if(isset($data->password) && !empty($data->password))
            {
                if($data->password!=$data->password_confirm){
                    admin_toastr('密码不一致','error');
                    return redirect()->back();
                }
                $user->password=bcrypt($data->password);
                if($admin_user) {
                    $admin_user->password = bcrypt($data->password);
                }
            }
            if(isset($data->pid) && !empty($data->pid))
            {
                $user->pid=$data->pid;
            }
            if(isset($data->deferredrate) && !empty($data->deferredrate))
            {
                $user->deferredrate=$data->deferredrate;
            }
            if(isset($data->synthesizerate) && !empty($data->synthesizerate))
            {
                $user->synthesizerate=$data->synthesizerate;
            }
            if(isset($data->is_actual) && is_numeric($data->is_actual))
            {
                $allAgents = User::where('level','>',0)->get();
                // 获取所有子集id
                $agents = getChildren($allAgents,$data->id);
                User::whereIn('id',$agents)->update(['is_actual'=>$data->is_actual]);
            }
          	if(isset($data->addMoney)&&$data->addMoney!=0)
            {
                if(empty(trim($data->pay_password))){
                    admin_toastr('充值操作需要输入密码！','error');
                    return redirect()->back();
                }else{
                    $credentials = [
                        'username' => Admin::user()->username,
                        'password' => $data->pay_password
                    ];
                    if(!Auth::guard('admin')->attempt($credentials)){
                        admin_toastr('密码错误！','error');
                        return redirect()->back();
                    }
                }
                $before_balance	= $user->money;
                $user->money=round($user->money+$data->addMoney,2);
                if($user->money<0){
                    admin_toastr('余额不足！','error');
                    return redirect()->back();
                }
                $after_balance	= $user->money;
                $charge=new Charge();
                $charge->user_id=$user->id;
                $charge->order_no=date('YmdHis').rand(1000,9999);
                $charge->status=1;
                $charge->type=4;
                $charge->before_balance=$before_balance;
                $charge->after_balance=$after_balance;
                $charge->info="后台操作";
                $charge->money=$data->addMoney;
                $status = $charge->save();
            }

            $res = $user->save();
            $res1 = $admin_user->save();

            if($res&&$res1&&$res2&&$res3)
            {
                DB::commit();
                admin_toastr('操作成功','success');
                return redirect()->to(url('admin/agent'));
            }
            else
            {
                DB::rollback();
                admin_toastr('操作失败','error');
                return redirect()->back();
            }
        }
        catch (\Exception $ex)
        {
            $m=$ex->getMessage();
            echo $m.'--'.$ex->getLine();
        }
    }
  
  	public function delete($id)
    {
        try
        {
            $model=User::with('level_lower')->find($id);
            if(!$model){
                admin_toastr('数据不存在','error');
              	toastr.error();
                return redirect()->back();
            }
          	if($model->level_lower->count()){
                admin_toastr('该代理商拥有下级代理商或用户，无法删除','error');
                toastr.error();
                return redirect()->back();
            }
          
			AdminUser::where('username',$model->phone)->delete();
            $model->delete();
        }
        catch (\Exception $ex)
        {
            $m=$ex->getMessage();
            echo $m;
        }
    }
  
  	public function deleteBak($id)
    {
        try
        {
            $model=User::find($id);
            if(!$model){
                admin_toastr('数据不存在','error');
                return redirect()->back();
            }

            $model->is_del=1;
            $res = $model->save();
            if($res)
            {
                admin_toastr('操作成功','success');
                return redirect()->to(url('admin/agent'));
            }
            else
            {
//                echo "<script>alert('操作失败');history.go(-1);</script>";exit;
                admin_toastr('操作失败','error');
                return redirect()->back();
            }
        }
        catch (\Exception $ex)
        {
            $m=$ex->getMessage();
            echo $m;
        }
    }

    public function spread(Content $content)
    {
        return $content
            ->header('代理商管理')
            ->description('推广')
            ->body($this->spread_grid());
    }

    public function spread_grid(){
        $grid=new Grid(new User);

        if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
            $allAgents = User::where('level','>',0)->get();
            // 获取所有子集id
            $agents = getChildren($allAgents,Admin::user()->agent_id);
            $users = User::whereIn('pid',$agents)->where('level','!=',0)->where('is_del',0)->pluck('id');
            $grid->model()->whereIn('id',$users);
        }else{
            $grid->model()->where('level','!=',0)->where('is_del',0);
        }

//        $grid->model()->where('level','!=',0)->where('is_del',0);
        $grid->column('id', 'ID')->sortable();
        $grid->column('name','姓名');
//            $grid->image('头像')->image(\App\Common\Helper::getImgUrl("", ""), 100, 100);
        $grid->column('phone','登录名');
        $grid->column('phone','手机');
        $grid->column('deferredrate','递延费佣金比例')->display(function($item){
            return $item.'%';
        });
        $grid->column('synthesizerate','综合费佣金比例')->display(function($item){
            return $item.'%';
        });
        $grid->column('money','佣金余额');

        $grid->column('is_freeze','账户状态')->display(function($item){
            return $item==1?"<div style='color:red'>冻结<div>":"<div style='color:green'>正常</div>";
        });

        $grid->column('created_at', '创建时间');

        if (Admin::user()->can('agent_generate_qrcode')) {
            $grid->column('qrcode','二维码')->display(function (){
                return '<img src="'.url("admin/agent/generate_qrcode/$this->code").'">';
            });
        }
        $grid->column('url', '注册链接')->display(function (){
            return url('/dist/#/loginRegistrat/registrat?code='.$this->code);
        });

            $grid->disableCreateButton();//禁用创建按钮
        $grid->actions(function (Grid\Displayers\Actions $actions) {
//            $actions->disableDelete();
            $actions->disableView();
        });
        $grid->tools(function ($tools)use ($grid){
            //关闭批量删除
            $tools->batch(function ($batch) {
                $batch->disableDelete();
            });
        });
//            $grid->disableRowSelector();//禁用行选择checkbox
//            $grid->disableFilter();//禁用查询过滤器
//            $grid->disablePagination();//禁用分页条
            $grid->disableActions();//禁用行操作列
//            $grid->disableExport();//禁用导出
//            $grid->perPages([5,10, 20, 30, 40, 50]);//设置分页选择器选项

//            重定义导出
        $title='代理商推广'.date('YmdHis');
        $head = ['id', '姓名', '登录名','手机','递延费佣金比例','综合费佣金比例','佣金余额','账户状态','创建时间','注册链接'];
        $body = ['id', 'name', 'phone','phone','deferredrate','synthesizerate','money','is_freeze','created_at','url'];
        $grid->exporter(new AgentSpreadExporter($title,$head,$body));

        // filter($callback)方法用来设置表格的简单搜索框
        $grid->filter(function ($filter) {
            // 去掉默认的id过滤器
            $filter->disableIdFilter();
            // 设置created_at字段的范围查询
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->like('name','姓名');
//                $filter->like('phone','手机');
            });
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->like('phone','登录名/手机');
            });
        });
        return $grid;
    }

    public function generate_qrcode($code)
    {
        try{
            $url=url('/dist/#/loginRegistrat/registrat?code='.$code);
            $img="logo.jpg";
            echo QrCode::format('png')
                //size() 修改二维码图片尺寸：像素
                ->size(150)
                //margin()二维码边距设置,默认为4
                ->margin(1)
                //容错级别设置 L（7%）、M（15%）、Q（25%）、H（30%），容错级别越高，字节码回复率越大，二维码里能存储的数据越少
                ->errorCorrection("M")
                //merge($filename, $percentage, $absolute)Logo或者头像放到二维码图片中，参数分别为 图片路径，百分比，切换绝对路径
                ->merge($img, .23, true)
                //指定编码
                ->encoding('UTF-8')
                //generate($text , $filename)$text 二维码数据 $filename 文件名及保存路径
                ->generate($url);
        }catch (\Exception $e){
            echo $e->getMessage().'--'.$e->getLine();
        }

    }

    public function balance_clear(Content $content)
    {
        return $content
            ->header('代理商管理')
            ->description('资金清算')
            ->body($this->balance_clear_grid());
    }

    public function balance_clear_grid(){
        $grid=new Grid(new Charge);

        if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
            $allAgents = User::where('level','>',0)->get();
            // 获取所有子集id
            $agents = getChildren($allAgents,Admin::user()->agent_id);
            $users = User::whereIn('pid',$agents)->where('level','!=',0)->where('is_del',0)->pluck('id');
            $grid->model()->with('user')->with('charge')->leftJoin('users','users.id','=','charges.user_id')->whereIn('users.id',$users)->select('charges.*');
        }else{
            $grid->model()->with('user')->with('charge')->leftJoin('users','users.id','=','charges.user_id')->where('users.level','!=',0)->select('charges.*');
        }

//        $grid->model()->with('user')->with('charge')->leftJoin('users','users.id','=','charges.user_id')->where('users.level','!=',0)->select('charges.*');
        $grid->column('id', 'ID')->sortable();
        $grid->column('user.name','姓名');
        $grid->column('user.phone','登录名');
        $grid->column('user.phone','手机');
        $grid->column('type','业务类型')->display(function($item){
            switch ($item){
//                case 1:return '充值';
//                    break;
//                case 2:return '创建订单';
//                    break;
//                case 3:return '平仓';
//                    break;
//                case 4:return '后台操作';
//                    break;
                case 5:return '提现';
                    break;
//                case 6:return '追加信用金';
//                    break;
                case 7:return '返佣';
                    break;
                default:return '';
            }
        });
        $grid->column('money','金额')->display(function ($item){
            return $item>0?'<div style="color:red">'.$item.'</div>':'<div style="color:green">'.$item.'</div>';
        });
        $grid->column('before_balance','变动前余额');
        $grid->column('after_balance','变动后余额');
        $grid->column('created_at', '时间');

        $grid->disableCreateButton();//禁用创建按钮
        $grid->actions(function (Grid\Displayers\Actions $actions) {
//            $actions->disableDelete();
            $actions->disableView();
        });
        $grid->tools(function ($tools)use ($grid){
            //关闭批量删除
            $tools->batch(function ($batch) {
                $batch->disableDelete();
            });
        });
//            $grid->disableRowSelector();//禁用行选择checkbox
//            $grid->disableFilter();//禁用查询过滤器
//            $grid->disablePagination();//禁用分页条
        $grid->disableActions();//禁用行操作列
//            $grid->disableExport();//禁用导出
//            $grid->perPages([5,10, 20, 30, 40, 50]);//设置分页选择器选项

//            重定义导出
        $title='代理商资金清算'.date('YmdHis');
        $head = ['id', '姓名', '登录名','手机','业务类型','金额','变动前余额','变动后余额','时间'];
        $body = ['id', 'user.name', 'user.phone','user.phone','type','money','before_balance','after_balance','created_at'];
        $grid->exporter(new AgentBalanceClearExporter($title,$head,$body));

        // filter($callback)方法用来设置表格的简单搜索框
        $grid->filter(function ($filter) {
            // 去掉默认的id过滤器
            $filter->disableIdFilter();
            // 设置created_at字段的范围查询
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->like('user.name','姓名');
                $filter->like('user.phone','登录名');
                $filter->equal('charge.type','业务类型')->select([5 => '提现',7=>'返佣']);
            });
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->like('user.phone','手机');
                $filter->between('charge.created_at', '时间')->datetime();
                $agent=User::where('level','!=',0)->pluck('name','id');
                $filter->equal('charge.user_id','代理商')->select($agent);
            });
        });
        return $grid;
    }

    public function withdraw(Content $content)
    {
        return $content
            ->header('代理商管理')
            ->description('提现记录')
            ->body($this->withdraw_grid());
    }

    public function withdraw_grid(){
        $grid=new Grid(new Charge);

        if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
            $allAgents = User::where('level','>',0)->get();
            // 获取所有子集id
            $agents = getChildren($allAgents,Admin::user()->agent_id);
            $users = User::whereIn('pid',$agents)->where('level','!=',0)->where('is_del',0)->pluck('id');
            $grid->model()->with('user')->with('charge')->with('bankcard')->leftJoin('users','users.id','=','charges.user_id')->whereIn('users.id',$users)->where('charges.type',5)->select('charges.*');
        }else{
            $grid->model()->with('user')->with('charge')->with('bankcard')->leftJoin('users','users.id','=','charges.user_id')->where('users.level','!=',0)->where('charges.type',5)->select('charges.*');
        }

        $grid->column('id', 'ID')->sortable();
        $grid->column('order_no','流水号');
        $grid->column('user.name','姓名');
        $grid->column('user.phone','登录名');
        $grid->column('user.phone','手机');

        $grid->column('money','金额')->display(function ($item){
            return $item>0?'<div style="color:red">'.$item.'</div>':'<div style="color:green">'.$item.'</div>';
        });
        $grid->column('bankcard.card_name','开户行');
        $grid->column('bankcard.card_address','支行');
        $grid->column('bankcard.card_number','卡号');
        $grid->column('created_at', '申请时间');
        $grid->column('deal_at', '处理时间');
        $grid->column('status','状态')->display(function($item){
            switch ($item){
                case 0:return '待处理';
                    break;
                case 1:return '<div style="color: green">已通过</div>';
                    break;
                case 2:return '<div style="color: red">已拒绝</div>';
                    break;
                default:return '待处理';
            }
        });

        if (Admin::user()->can('agent_withdraw_check')) {
            $grid->column('deal','操作')->display(function(){
                if($this->status==0){
                    return "<a href='/admin/agent/withdraw_check?id=".$this->id."&status=1'class='btn btn-danger noShow'style=\"background-color:#00c0ef;border-color:#00c0ef\" >通过</a>&nbsp;<a href='/admin/agent/withdraw_check?id=".$this->id."&status=2'class='btn btn-danger noShow'style=\"background-color:#00c0ef;border-color:#00c0ef\" >不通过</a>";
                }else{
                    return '已处理';
                }
            });
        }
        $grid->disableCreateButton();//禁用创建按钮
        $grid->actions(function (Grid\Displayers\Actions $actions) {
//            $actions->disableDelete();
            $actions->disableView();
        });
        $grid->tools(function ($tools)use ($grid){
            //关闭批量删除
            $tools->batch(function ($batch) {
                $batch->disableDelete();
            });
        });
//            $grid->disableRowSelector();//禁用行选择checkbox
//            $grid->disableFilter();//禁用查询过滤器
//            $grid->disablePagination();//禁用分页条
        $grid->disableActions();//禁用行操作列
//            $grid->disableExport();//禁用导出
//            $grid->perPages([5,10, 20, 30, 40, 50]);//设置分页选择器选项

//            重定义导出
        $title='代理商提现记录'.date('YmdHis');
        $head = ['id', '流水号','姓名', '登录名','手机','金额','开户行','支行','卡号','申请时间','处理时间','状态'];
        $body = ['id', 'order_no','user.name', 'user.phone','user.phone','money','bankcard.card_name','bankcard.card_address','bankcard.card_number','created_at','deal_at','status'];
        $grid->exporter(new AgentWithdrawExporter($title,$head,$body));

        // filter($callback)方法用来设置表格的简单搜索框
        $grid->filter(function ($filter) {
            // 去掉默认的id过滤器
            $filter->disableIdFilter();
            // 设置created_at字段的范围查询
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->like('user.name','姓名');
                $filter->like('user.phone','手机');
                $agent=User::where('level','!=',0)->pluck('name','id');
                $filter->equal('charge.user_id','代理商')->select($agent);
            });
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->between('charge.created_at', '时间')->datetime();
                $filter->equal('charge.status','处理状态')->select([0 => '待处理',1=>'已通过','2'=>'已拒绝']);
            });
        });
        return $grid;
    }

    public function withdraw_check()
    {
        $data=Request::capture();
        $rs=Charge::find($data->id);
        $rs->status=$data->status;
        $rs->deal_at=date('Y-m-d H:i:s');
        DB::beginTransaction();
        $res = $rs->save();

        $status=true;
        $res1=true;
        if($data->status==2){
            $user=User::find($rs->user_id);
            $before_balance	= $user->money;
            $user->money= $user->money+abs($rs->money);
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
            $charge->info="提现失败,返还提现金额";
            $charge->money=abs($rs->money);
            $status = $charge->save();
        }

        if($res&&$res1&&$status)
        {
            DB::commit();
            admin_toastr('操作成功','success');
            return redirect()->to(url('admin/agent/withdraw'));
        }
        else
        {
            DB::rollback();
            admin_toastr('操作失败','error');
            return redirect()->back();
        }
    }

    public function agent_count(Content $content,Request $request)
    {
        return $content
            ->header('代理商管理')
            ->description('统计')
            ->body($this->agent_count_grid($request));
    }

    public function agent_count_grid($request){
        $grid=new Grid(new User);

        if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
            $allAgents = User::where('level','>',0)->get();
            // 获取所有子集id
            $agents = getChildren($allAgents,Admin::user()->agent_id);
            $users = User::whereIn('pid',$agents)->where('level','!=',0)->where('is_del',0)->pluck('id');
            $grid->model()->with('level_lower')->with('level_upper')->with('charges')->with('tactics')->whereIn('users.id',$users);
        }else{
            $users = User::where('level','!=',0)->where('is_del',0)->pluck('id');
            $grid->model()->with('level_lower')->with('level_upper')->with('charges')->with('tactics')->whereIn('users.id',$users);
        }

        $grid->column('id', 'ID')->sortable();
        $grid->column('name','姓名');
//            $grid->image('头像')->image(\App\Common\Helper::getImgUrl("", ""), 100, 100);
        $grid->column('phone','登录名');
        $grid->column('phone','手机');
        $grid->column('deferredrate','递延费佣金比例')->display(function($item){
            return $item.'%';
        });
        $grid->column('synthesizerate','综合费佣金比例')->display(function($item){
            return $item.'%';
        });
        $grid->column('level_upper.name','上级代理');
        $grid->column('total_commission','佣金总额');
        $grid->column('total_charge_money','历史充值总额')->display(function(){
            return $this->charges->where('status',1)->whereIn('type',[1,4])->sum('money');
        });
        $grid->column('clear_return_money','清算盈亏')->display(function(){
            $clear_return_money=$this->tactics->where('order_status',1)->sum('return_money');
            return $clear_return_money>0?'<div style="color:red">'.$clear_return_money.'</div>':'<div style="color:green">'.$clear_return_money.'</div>';
        });
        $grid->column('count_deal_money','交易综合费')->display(function(){
            return $this->tactics->sum('count_deal_money');
        });
        $grid->column('count_diyanfei','总递延费')->display(function(){
            return $this->tactics->sum('count_diyanfei');
        });

        $grid->actions(function (Grid\Displayers\Actions $actions) {
//            $actions->disableDelete();
            $actions->disableView();
        });
        $grid->tools(function ($tools)use ($grid){
            //关闭批量删除
            $tools->batch(function ($batch) {
                $batch->disableDelete();
            });
        });
        $grid->disableCreateButton();//禁用创建按钮
//            $grid->disableRowSelector();//禁用行选择checkbox
//            $grid->disableFilter();//禁用查询过滤器
//            $grid->disablePagination();//禁用分页条
            $grid->disableActions();//禁用行操作列
//            $grid->disableExport();//禁用导出
//            $grid->perPages([5,10, 20, 30, 40, 50]);//设置分页选择器选项

//            重定义导出
        $title='代理商统计'.date('YmdHis');
        $head = ['id', '姓名', '登录名','手机','递延费佣金比例','综合费佣金比例','上级代理','佣金总额','历史充值总额','清算盈亏','交易综合费','总递延费'];
        $body = ['id', 'name', 'phone','phone','deferredrate','synthesizerate','level_upper.name','total_commission','total_charge_money','clear_return_money','count_deal_money','count_diyanfei'];
        $grid->exporter(new AgentCountExporter($title,$head,$body));

        // filter($callback)方法用来设置表格的简单搜索框
        $grid->filter(function ($filter) {
            // 去掉默认的id过滤器
            $filter->disableIdFilter();
            // 设置created_at字段的范围查询
//            $filter->between('updated_at', '更新时间')->datetime();
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->like('name','姓名');
                $filter->like('phone','登录名/手机');
            });
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
//                $filter->like('phone','手机');
                $filter->like('level_upper.name','上级代理');
            });
        });

        $where[]=['users.id','>',0];
        // 统计
        if(isset($request->name)&&$request->name){
            $where[] = ['users.name','like','%'.$request->name.'%'];
        }
        if(isset($request->phone)&&$request->phone){
            $where[] = ['users.phone','like','%'.$request->phone.'%'];
        }
        if(isset($request->created_at['start'])&&$request->created_at['start']){
            $where[] = ['users.created_at','>=',$request->created_at['start']];
        }
        if(isset($request->created_at['end'])&&$request->created_at['end']){
            $where[] = ['users.created_at','<=',$request->created_at['end']];
        }
        if(isset($request->level_upper['name'])&&$request->level_upper['name']){
            $users=User::whereIn('id',$users)->where("name",'like','%'.$request->level_upper['name'].'%')->pluck("id");
            $users=User::whereIn('pid',$users)->where('level','!=',0)->pluck('id');
        }

        $userIds=User::whereIn('id',$users)->where($where)->pluck("id");
        $data['total_commission']=User::whereIn('id',$userIds)->sum('total_commission');
        $data['total_charge_money']=Charge::whereIn('user_id',$userIds)->where('status',1)->whereIn('type',[1,4])->sum('money');
        $data['clear_return_money']=Tactics::whereIn('user_id',$userIds)->where('order_status',1)->sum('return_money');
        $data['count_deal_money']=Tactics::whereIn('user_id',$userIds)->sum('count_deal_money');
        $data['count_diyanfei']=Tactics::whereIn('user_id',$userIds)->sum('count_diyanfei');

        $grid->countRaw = ['id' => '合计','total_commission'=>$data['total_commission'],
            'total_charge_money'=>$data['total_charge_money'],'clear_return_money'=>$data['clear_return_money'],
            'count_deal_money'=>$data['count_deal_money'],'count_diyanfei'=>$data['count_diyanfei']];

        return $grid;
    }

    public function withdraw_deal(Content $content)
    {
        $form = new Form(new Charge);
        $user=User::find(Admin::user()->agent_id);
        $bankcard=Bankcard::where('user_id',$user->id)->pluck('card_number','id');
        $form->display('phone', '账户')->with(function ()use($user) {
            return $user->phone;
        });
        $form->display('name', '姓名')->with(function ()use($user) {
            return $user->name;
        });
        $form->display('balance', '余额')->with(function ()use($user) {
            return $user->money;
        });

        $form->select('card_id', '银行卡')->options($bankcard);
        $form->text('money','金额');
        $form->hidden('user_id')->default($user->id);
        $form->setAction(url('admin/agent/withdraw/deal_save'));

        $form->tools(function (Form\Tools $tools) {

//          去掉`删除`按钮
            $tools->disableDelete();
            //去掉查看按钮
            $tools->disableView();
            $tools->disableList();

        });
        $form->footer(function ($footer) {
            // 去掉`查看`checkbox
            $footer->disableViewCheck();
            // 去掉`继续编辑`checkbox
            $footer->disableEditingCheck();
            $footer->disableCreatingCheck();
        });

        return $content
            ->header('个人信息')
            ->description('提现')
            ->body($form);
    }

    public function withdraw_deal_save()
    {
        try
        {
            $data=Request::capture();

            $charge=new Charge();
            $user=User::find($data->user_id);

            if(!$data->card_id){
                admin_toastr('请选择银行卡','error');
                return redirect()->back();
            }
            if($data->money<=0){
                admin_toastr('提现金额需大于0','error');
                return redirect()->back();
            }
            if($data->money>$user->money){
                admin_toastr('余额不足','error');
                return redirect()->back();
            }
            DB::beginTransaction();

            $before_balance	= $user->money;
            $user->money= $user->money-$data->money;
            $after_balance	= $user->money;

            $res = $user->save();

            $charge->card_id=$data->card_id;
            $charge->user_id=$user->id;
            $charge->order_no=date('YmdHis').rand(1000,9999);
            $charge->status=0;
            $charge->type=5;
            $charge->before_balance=$before_balance;
            $charge->after_balance=$after_balance;
            $charge->info="提现";
            $charge->money='-'.$data->money;
            $status = $charge->save();
            if($res&&$status)
            {
                DB::commit();
                admin_toastr('申请成功','success');
                return redirect()->to(url('admin'));
            }
            else
            {
                DB::rollback();
                admin_toastr('操作失败','error');
                return redirect()->back();
            }
        }
        catch (\Exception $ex)
        {
            $m=$ex->getMessage();
            echo $m;
        }
    }
}

