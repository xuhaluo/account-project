<?php



namespace App\Admin\Controllers;



use App\Models\Charge;

use App\Models\Shares;

use App\Models\Tactics;

use App\Models\User;

use App\Http\Controllers\Controller;

use App\Admin\Extensions\UserExporter;

use App\Admin\Extensions\UserCountExporter;

use Encore\Admin\Controllers\HasResourceActions;

use Encore\Admin\Form;

use Encore\Admin\Grid;

use Encore\Admin\Layout\Content;

use Encore\Admin\Show;

use Encore\Admin\Facades\Admin;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

use Maatwebsite\Excel\Facades\Excel;

use App\Admin\Requests;

use Auth;



class UserController extends Controller

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

            ->header('策略人')

            ->description('列表')

            ->body($this->index_grid($request));

    }



    public function index_grid($request){

        $grid=new Grid(new User);



        if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){

            $allAgents = User::where('level','>',0)->get();

            // 获取所有子集id

            $agents = getChildren($allAgents,Admin::user()->agent_id);

            $users = User::whereIn('pid',$agents)->where('level',0)->pluck('id');

            $grid->model()->whereIn('id',$users)->where('is_del',0);

        }else{

            $users = User::where('level',0)->pluck('id');

            $grid->model()->whereIn('id',$users)->where('is_del',0);

        }

        $grid->column('id', 'ID')->sortable();

        $grid->column('name','姓名');

        $grid->column('phone','手机');
        $grid->column('realname','真实姓名');
        $grid->column('id_num','身份证号');
        $grid->column('id_card_on','身份证正面')->display(function($item){

            return $item? "<img src='".$item."' width= '30%'>":'';

        });;
        $grid->column('id_card_off','身份证反面')->display(function ($item){
            return $item? "<img src='".$item."' width='30%'>":'';
        });

//        $grid->column('email','邮箱');
//
//        $grid->column('code','邀请码');

        $grid->column('money','账户余额');

        //$grid->column('is_freeze','账户状态')->display(function($item){

          //  return $item==1?"<div style='color:red'>冻结<div>":"<div style='color:green'>正常</div>";

       // });

        $grid->column('is_actual','实盘状态')->display(function($item){
            if($item == 0){
                return '根据上级代理商';
            }elseif($item == 1){
                return '是';
            }elseif($item == 2){
                return '否';
            }
        });

        //if (Admin::user()->can('customer_freeze')) {

           // $grid->column('freeze', '冻结操作')->display(function(){

              //  return $this->is_freeze==1?"<a href='/admin/user/freeze?is_freeze=0&id=".$this->id."' class='btn btn-danger noShow' >解冻</a>":"<a href='/admin/user/freeze?is_freeze=1&id=".$this->id."'class='btn btn-danger noShow'style=\"background-color:#00c0ef;border-color:#00c0ef\" >冻结</a>";



         //   });
//
       // }
        if (Admin::user()->can('customer_freeze')) {

            $grid->column('real', '审核操作')->display(function(){

              //  return $this->is_real==1?"已认证":"<a href='/admin/user/review?is_real=1&id=".$this->id."'class='btn btn-danger noShow'style=\"background-color:#00c0ef;border-color:#00c0ef\" >审核通过</a>
              //  <a href='/admin/user/review?is_real=2&id=".$this->id."'class='btn btn-danger noShow'style=\"background-color:#00c0ef;border-color:#00c0ef;margin-top:10px;\" >驳回</a>";
              
                if( $this->is_real==1){
                  return "已认证";
                
                }else if($this->is_real==2){
                    return "已驳回";
                
                }else{
                
                
             return    "<a href='/admin/user/review?is_real=1&id=".$this->id."'class='btn btn-danger noShow'style=\"background-color:#00c0ef;border-color:#00c0ef\" >审核通过</a>
                <a href='/admin/user/review?is_real=2&id=".$this->id."'class='btn btn-danger noShow'style=\"background-color:#00c0ef;border-color:#00c0ef;margin-top:10px;\" >驳回</a>";
                
                
                }
              
              
              
              
                

            });
        }
      
    
     
      
    


        if (Admin::user()->can('customer_agent')) {

            $grid->column('agent', '分配代理')->display(function(){

                return $this->level!=0?"":"<a href='/admin/user/agent?user_id=".$this->id."'class='btn btn-danger noShow'style=\"background-color:#00c0ef;border-color:#00c0ef\" >分配代理</a>";

            });

        }



        $grid->column('level','代理商')->display(function($item){

            switch ($item){

                case 0:return '普通会员';

                    break;

                case 1:return '一级代理';

                    break;

                case 2:return '二级代理';

                    break;

                case 3:return '三级代理';

                    break;

                default:return '普通会员';

            }

        });

//        $grid->level('代理商')->using(['0' => '普通会员', '1' => '一级代理', '2' => '二级代理', '3' => '三级代理']);

        $grid->column('pid','代理商')->display(function($item){

            $find=User::find($item);

            if($find){

                return $find->name;

            }else{

                return '';

            }

        });



        $grid->column('created_at', '注册时间');

//            $grid->disableCreateButton();//禁用创建按钮

        $grid->actions(function (Grid\Displayers\Actions $actions) {

            $actions->disableDelete();

            $actions->disableView();

//            if (!Admin::user()->can('customer_edit')) {

//                $actions->disableEdit();

//            }

        });

        $grid->tools(function ($tools)use ($grid){

            //关闭批量删除

            //$tools->batch(function ($batch) {

            //    $batch->disableDelete();

            //});

//            $tools->append("<a href='/admin/user/import' class='btn btn-danger noShow'style='background-color:#00c0ef;border-color:#00c0ef'>导入</a>");

        });

//            $grid->disableRowSelector();//禁用行选择checkbox

//            $grid->disableFilter();//禁用查询过滤器

//            $grid->disablePagination();//禁用分页条

//            $grid->disableActions();//禁用行操作列

//            $grid->disableExport();//禁用导出

//            $grid->perPages([5,10, 20, 30, 40, 50]);//设置分页选择器选项



        if (!Admin::user()->can('customer_edit')) {

            $grid->disableActions();

        }

        if (!Admin::user()->can('customer_create')) {

            $grid->disableCreateButton();

        }

        $title='用户列表'.date('YmdHis');

        $head = ['id', '姓名', '手机','余额','注册时间','账户状态','代理商','推荐人'];

        $body = ['id', 'name', 'phone','money','created_at','is_freeze','level','pid'];

        $grid->exporter(new UserExporter($title,$head,$body));



        // filter($callback)方法用来设置表格的简单搜索框

        $grid->filter(function ($filter) {

            // 去掉默认的id过滤器

            $filter->disableIdFilter();

            // 设置created_at字段的范围查询



            $filter->column(1/2, function ($filter) {

                // 在这里添加字段过滤器

                   // $filter->like('name','姓名');
              
                  $filter->like('realname','真实姓名');
                $filter->between('created_at', '注册时间')->datetime();

            });

            $filter->column(1/2, function ($filter) {

                // 在这里添加字段过滤器

                $filter->like('phone','手机');
                // $agent=User::where('level','!=',0)->pluck('name','id');
                // $filter->equal('pid','代理商')->select($agent);

                if (Admin::user()->agent_id) {
                    // $agent=User::whereIn('id',$agents)->where('level','!=',0)->where('is_del',0)->pluck('name','id');
                }else{
                    $agent=User::where('level','!=',0)->where('is_del',0)->pluck('name','id');
                    $filter->equal('pid','代理商')->select($agent);
                }

            });

        });

        $where[]=['users.id','>',0];

        // 统计

        if($request->name){

            $where[] = ['users.name','like','%'.$request->name.'%'];

        }

        if($request->phone){

            $where[] = ['users.phone','like','%'.$request->phone.'%'];

        }

        if($request->created_at['start']){

            $where[] = ['users.created_at','>=',$request->created_at['start']];

        }

        if($request->created_at['end']){

            $where[] = ['users.created_at','<=',$request->created_at['end']];

        }
        if($request->pid){
            $where[] = ['users.pid','=',$request->pid];
        }

        $money = User::where($where)->whereIn('id',$users)->sum('money');

        $grid->countRaw = ['id' => '合计','money' => $money];



        return $grid;

    }
	
	public function delete($ids = '')
	{
		$ids = explode(',',$ids);
		if($ids){
			User::whereIn('id',$ids)->update(['is_del'=>1]);
		}
	}



    public function freeze()

    {

        $data=Request::capture();


        $rs=User::find($data->id);

        $rs->is_freeze=$data->is_freeze;

        $res = $rs->save();

        if($res)

        {

//            admin_success('提示','操作成功');

            admin_toastr('操作成功','success');

            return redirect()->to(url('admin/user'));

        }

        else

        {

            admin_toastr('操作失败','error');

            return redirect()->back();

        }

    }
    public  function review(){

        $data=Request::capture();


        $rs=User::find($data->id);

        $rs->is_real=$data->is_real;

        $res = $rs->save();

        if($res)

        {

//            admin_success('提示','操作成功');

            admin_toastr('操作成功','success');

            return redirect()->to(url('admin/user'));

        }

        else

        {

            admin_toastr('操作失败','error');

            return redirect()->back();

        }
    }



    public function agent(Content $content)

    {

        $data=Request::capture();

        $user=User::find($data->id);

        $form = new Form(new User);



        $gList = User::where('level','!=',0)->pluck('phone','id');

        $form->select('pid', '代理商')->options($gList)->default($user->pid);

        $form->setAction(url('admin/user/agent_save'));

        $form->hidden('id')->default($data->id);

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

            // 去掉`重置`按钮

            $footer->disableReset();

        });



        return $content

            ->header('客户管理')

            ->description('分配代理')

            ->body($form);

    }



    public function agent_new(Content $content)

    {

        $data=Request::capture();

        $user=User::find($data->user_id);

        $grid = Admin::grid(User::class, function(Grid $grid)use($user){

            $grid->model()->where('level','!=',0)->where('id','!=',$user->pid)->orderBy('id', 'asc');



            $grid->column('id', 'ID')->sortable();

            $grid->column('name','姓名');

            $grid->column('phone','手机');

            $grid->column('code','邀请码');

            $grid->column('money','账户余额');

            $grid->column('is_freeze','账户状态')->display(function($item){

                return $item==1?"<div style='color:red'>冻结<div>":"<div style='color:green'>正常</div>";

            });

            $grid->column('level','代理商')->display(function($item){

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



            $grid->column('agent', '更改代理商')->display(function()use($user){



                return "<a href='/admin/user/agent_save?user_id=".$user->id."&pid=".$this->id."'class='btn btn-danger noShow'style=\"background-color:#00c0ef;border-color:#00c0ef\" >更改</a>";



            });



            $grid->disableCreateButton();//禁用创建按钮

            $grid->actions(function (Grid\Displayers\Actions $actions){

                $actions->disableDelete();

                $actions->disableView();

            });

            $grid->tools(function ($tools)use ($grid){

                //关闭批量删除

                $tools->batch(function ($batch) {

                    $batch->disableDelete();

                });

            });

            $grid->disableRowSelector();//禁用行选择checkbox

//            $grid->disableFilter();//禁用查询过滤器

//            $grid->disablePagination();//禁用分页条

            $grid->disableActions();//禁用行操作列

            $grid->disableExport();//禁用导出

//            $grid->perPages([5,10, 20, 30, 40, 50]);//设置分页选择器选项



            // filter($callback)方法用来设置表格的简单搜索框

            $grid->filter(function ($filter) {

                $filter->disableIdFilter();

                $filter->column(1/2,function ($filter){

                    $filter->like('name','姓名');

                });

                $filter->column(1/2,function ($filter){

                    $filter->like('phone','手机');

                });

            });

        });



        return $content

            ->header('客户管理')

            ->description('分配代理')

            ->body($grid);

    }



    public function export(){

        $data=Request::capture();

        $rs=User::where('id','>',0);

        if(isset($data->id)&&!empty($data->id)){

            $rs=$rs->whereIn('id',[$data->id]);

        }

        if(isset($data->name)&&!empty($data->name)){

            $rs=$rs->where('name','like','%'.$data->name.'%');

        }

        if(isset($data->created_at_start)&&!empty($data->created_at_start)){

            $rs=$rs->where('created_at','>=',$data->created_at_start);

        }

        if(isset($data->created_at_end)&&!empty($data->created_at_end)){

            $rs=$rs->where('created_at','<=',$data->created_at_end);

        }

        if(isset($data->phone)&&!empty($data->phone)){

            $rs=$rs->where('phone','like','%'.$data->phone.'%');

        }

        $rs=$rs->get();

        $cell_data = array();

        $header = array('id', '姓名', '手机','邮箱','邀请码','余额','注册时间','账户状态','代理商','推荐人');



        $cell_data[] = $header;

        foreach ($rs as $item)

        {

            if($item['is_freeze']==1){

                $freeze='冻结';

            }else{

                $freeze='正常';

            }

            switch ($item['level']){

                case 0:$level= '';

                    break;

                case 1:$level= '一级代理';

                    break;

                case 2:$level= '二级代理';

                    break;

                case 3:$level= '三级代理';

                    break;

                default:$level= '';

            }

            $find=User::find($item['pid']);

            if($find){

                $pid= $find->phone;

            }else{

                $pid= '';

            }

            $cell_data[]=array($item['id'],$item['name'],$item['phone'],$item['email'],

                $item['code'],$item['money'],$item['created_at'],$freeze,$level,$pid);

        }

        Excel::create('用户列表'.date('YmdHis'),function($excel) use ($cell_data){

            $excel->sheet('Sheet1', function($sheet) use ($cell_data){

                $sheet->rows($cell_data);

            });

        })->export('xls');



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

            ->header('客户管理')

            ->description('详情')

            ->body($this->detail($id));

    }



    /**

     * Edit interface.

     *

     * @param mixed $id

     * @param Content $content

     * @return Content

     */



//    public function edit($id, Content $content)

//    {

//        try{

//            $user=User::where('id',$id)->first();

//            $form = Admin::form(User::class, function(Form $form) use ($user){

//                $form->setAction(url('user/save'));

//

//                $form->hidden('mode_type')->default('edit');

//                $form->hidden('id')->default($user->id);

//                $form->display('name','姓名')->default($user['name']);

//

//                $form->mobile('phone','手机')->default($user['phone']);

//

//                $form->text('email','邮箱')->default($user['email']);

//

//                $form->tools(function (Form\Tools $tools) {

////                    // 去掉`列表`按钮

////                    $tools->disableList();

////                    // 去掉`删除`按钮

////                    $tools->disableDelete();

//                     //去掉查看按钮

//                    $tools->disableView();

//                    // 添加一个按钮, 参数可以是字符串, 或者实现了Renderable或Htmlable接口的对象实例

////                    $tools->add('<a class="btn btn-sm btn-danger"><i class="fa fa-trash"></i>&nbsp;&nbsp;delete</a>');

//                });

//                $form->footer(function ($footer) {

////                    // 去掉`重置`按钮

////                    $footer->disableReset();

////                    // 去掉`提交`按钮

////                    $footer->disableSubmit();

//                    // 去掉`查看`checkbox

//                    $footer->disableViewCheck();

//                    // 去掉`继续编辑`checkbox

//                    $footer->disableEditingCheck();

//                });

//            });

//            return $content

//                ->header('用户管理')

//                ->description('详情')

//                ->body($form);

//        }catch(\Exception $e){

//            Helper::messageToastr('error',array('title'=>'编辑用户','message'=>$e->getMessage()));

//        }

//

//    }

    public function edit($id, Content $content)

    {

        return $content

            ->header('客户管理')

            ->description('详情')

            ->body($this->form()->edit($id));

    }



    /**

     * Create interface.

     *

     * @param Content $content

     * @return Content

     */

    public function create(Content $content)

    {

        $form = new Form(new User);



        $form->text('code', '机构码');

        $form->mobile('phone', '手机号');

        $form->text('password','密码');

        $form->setAction(url('admin/user/create_save'));



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

            ->header('客户管理')

            ->description('新建')

            ->body($form);

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

        $form = new Form(new User);



        $form->text('name', '姓名');

        $form->mobile('phone', '手机');

        $form->email('email', '邮箱');

        $form->select('is_actual','是否实盘')->options([0 => '根据上级代理商',1 => '是', 2 => '否']);

        $form->text('money','账户余额')->disable();



        $form->number('addMoney','充值金额');

        $form->password('pay_password','密码')->placeholder('充值请输入密码，不充值可不填');

        $form->text('password','新密码');

        $form->text('password_confirm','确认密码');

        $form->setAction(url('admin/user/edit_save'));



//        $form->hidden('mode_type')->default('edit');

        $form->hidden('id');

//        $form->password('password', 'Password');

//        $form->number('pid', 'Pid');

//        $form->text('code', 'Code');

//        $form->number('referral_code', 'Referral code');

//        $form->text('remember_token', 'Remember token');

//        $form->decimal('money', 'Money');

//        $form->decimal('cangfei', 'Cangfei')->default(36.00);

//        $form->decimal('diyanfei', 'Diyanfei')->default(16.00);



        $form->tools(function (Form\Tools $tools) {

//                    // 去掉`列表`按钮

//                    $tools->disableList();

//                    // 去掉`删除`按钮

                    $tools->disableDelete();

            //去掉查看按钮

            $tools->disableView();

            // 添加一个按钮, 参数可以是字符串, 或者实现了Renderable或Htmlable接口的对象实例

//                    $tools->add('<a class="btn btn-sm btn-danger"><i class="fa fa-trash"></i>&nbsp;&nbsp;delete</a>');

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

            $user=User::find($data->id);



            if(isset($data->name) && !empty($data->name))

            {

                $user->name=$data->name;

            }

            if(isset($data->phone) && !empty($data->phone))

            {

                $user->phone=$data->phone;

            }

            if(isset($data->email) && !empty($data->email))

            {

                $user->email=$data->email;

            }

            if(isset($data->is_actual) && in_array($data->is_actual,[0,1,2]))

            {

                $user->is_actual=$data->is_actual;

            }

            if(isset($data->password) && !empty($data->password))

            {

                if($data->password!=$data->password_confirm){

                    admin_toastr('密码不一致','error');

                    return redirect()->back();

                }

                $user->password=bcrypt($data->password);

            }

            $status=true;

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
				$charge->pay_type=3;

                $status = $charge->save();

            }

            DB::beginTransaction();

            $res = $user->save();

            if($res&&$status)

            {

                DB::commit();

                admin_toastr('操作成功','success');

                return redirect()->to(url('admin/user'));

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



    public function create_save(Requests\UserRequest $request)

    {

        try

        {

            $user=new User();



            $find=User::where('code',$request->code)->first();

            if(!$find){

                admin_toastr('机构码不存在','error');

                return redirect()->back();

            }



            $user->phone=$request->phone;

            $user->password=bcrypt($request->password);

            $user->pid=$find->id;

            $user->level=0;



            $res = $user->save();

            if($res)

            {

                admin_toastr('操作成功','success');

                return redirect()->to(url('admin/user'));

            }

            else

            {

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



    public function agent_save()

    {

        try

        {

            $data=Request::capture();

            $find=User::where('id',$data->user_id)->first();

            $find->pid=$data->pid;

            $res = $find->save();

            if($res)

            {

                admin_toastr('操作成功','success');

                return redirect()->to(url('admin/user'));

            }

            else

            {

                admin_toastr('操作失败','error');

                return redirect()->back();;

            }

        }

        catch (\Exception $ex)

        {

            $m=$ex->getMessage();

            echo $m;

        }

    }





    public function count_user(Content $content,Request $request)

    {

        try{

            return $content

                ->header('策略人统计')

                ->description(' ')

                ->body($this->count_user_grid($request));

        }catch (\Exception $e){

            print_r($e->getMessage().'--'.$e->getLine());

        }

    }



    protected function count_user_grid($request)

    {
        $grid = new Grid(new User);

        if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){

            $allAgents = User::where('level','>',0)->get();

            // 获取所有子集id

            $agents = getChildren($allAgents,Admin::user()->agent_id);

            $users = User::whereIn('pid',$agents)->where('level',0)->pluck('id');

            $grid->model()->with('charges')->with('tactics')->whereIn('id',$users)->where('is_del',0);

        }else{
        
            $users = User::where('level',0)->pluck('id');

            $grid->model()->with('charges')->with('tactics')->whereIn('id',$users)->where('is_del',0);

        }



        $grid->column('id', 'ID')->sortable();

        $grid->column('name','姓名');

        $grid->column('phone','手机');

        $grid->column('money','账户余额');

        $grid->column('is_freeze','账户状态')->display(function($item){

            return $item==1?"<div style='color:red'>冻结<div>":"<div style='color:green'>正常</div>";

        });



//        $grid->column('level','代理商')->display(function($item){

//            switch ($item){

//                case 0:return '';

//                    break;

//                case 1:return '一级代理';

//                    break;

//                case 2:return '二级代理';

//                    break;

//                case 3:return '三级代理';

//                    break;

//                default:return '';

//            }

//        });

        $grid->column('created_at', '注册时间');

        $grid->column('total_charge_money','历史充值总额')->display(function(){

            return $this->charges->where('status',1)->whereIn('type',[1,4])->sum('money');

        });

        $grid->column('total_withdraw_money','历史提现总额')->display(function(){

            return $this->charges->where('status',1)->whereIn('type',[5])->sum('money');

        });

		$grid->column('total_xinyongjin','总信用金')->display(function(){

            return $this->tactics->sum('xingyongjin');

        });
        $grid->column('total_tactics_money','总创建策略金额')->display(function(){

            return $this->tactics->sum('create_money');

        });

        $grid->column('add_credit','追加信用金')->display(function(){

            return abs($this->charges->where('status',1)->where('type',6)->sum('money'));

        });

        $grid->column('position_return_money','持仓盈亏')->display(function(){

            $position_return_money=$this->tactics->where('order_status',0)->sum('return_money');

            return $position_return_money>0?'<div style="color:red">'.$position_return_money.'</div>':'<div style="color:green">'.$position_return_money.'</div>';

        });

        $grid->column('clear_return_money','清算盈亏')->display(function(){

            $clear_return_money=$this->tactics->where('order_status',1)->sum('profit');

            return $clear_return_money>0?'<div style="color:red">'.$clear_return_money.'</div>':'<div style="color:green">'.$clear_return_money.'</div>';

        });

        $grid->column('count_deal_money','交易总额')->display(function(){

            return $this->tactics->sum('count_deal_money');

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

        $grid->column('fan_count','推广人数')->display(function(){

            $fan_count=User::where('pid',$this->id)->count();

            return $fan_count;

        });

        $grid->column('total_commission','盈利分成');
        $grid->column('pid','代理商')->display(function($item){

            $find=User::find($item);

            if($find){

                return $find->name;

            }else{

                return '';

            }

        });



        $grid->actions(function (Grid\Displayers\Actions $actions) {

            $actions->disableDelete();

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

        $title='策略人统计'.date('YmdHis');

        $head = ['id', '姓名', '手机','余额','注册时间','账户状态','历史充值总额','历史提现总额','总信用金','总创建策略金额','追加信用金',

            '持仓盈亏','清算盈亏','交易总额','总递延费','今日应收递延费','持仓总量','推广人数','盈利分成'];

        $body = ['id', 'name', 'phone','money','created_at','is_freeze','total_charge_money','total_withdraw_money','total_xinyongjin','total_tactics_money','add_credit',

            'position_return_money','clear_return_money','count_deal_money','count_diyanfei','diyanfei','tactics_count','fan_count','total_commission'];

        $grid->exporter(new UserCountExporter($title,$head,$body));



        // filter($callback)方法用来设置表格的简单搜索框

        $grid->filter(function ($filter) {

            // 去掉默认的id过滤器

            $filter->disableIdFilter();

            // 设置created_at字段的范围查询

            $filter->column(1/2, function ($filter) {

                // 在这里添加字段过滤器

                $filter->between('created_at', '注册时间')->datetime();

                $filter->like('name','姓名');

            });

            $filter->column(1/2, function ($filter) {

                // 在这里添加字段过滤器

                $filter->like('phone','手机');
                if (Admin::user()->agent_id) {
                    // $agent=User::whereIn('id',$agents)->where('level','!=',0)->where('is_del',0)->pluck('name','id');
                }else{
                    $agent=User::where('level','!=',0)->where('is_del',0)->pluck('name','id');
                    $filter->equal('pid','代理商')->select($agent);
                }

//                $filter->equal('level','代理商')->select([1 => '一级代理商',2=>'二级代理商',3=>'三级代理商']);

            });

        });





        $where[]=['users.id','>',0];

        // 统计
        if($request->name){

            $where[] = ['users.name','like','%'.$request->name.'%'];

        }

        if($request->phone){

            $where[] = ['users.phone','like','%'.$request->phone.'%'];

        }

        if($request->level){

            $where[] = ['users.level','like','%'.$request->level.'%'];

        }

        if($request->created_at['start']){

            $where[] = ['users.created_at','>=',$request->created_at['start']];

        }

        if($request->created_at['end']){

            $where[] = ['users.created_at','<=',$request->created_at['end']];

        }
        if($request->pid){
            $where[] = ['users.pid','=',$request->pid];
        }

        $userIds=User::whereIn('id',$users)->where($where)->pluck("id");

        $data['money']=User::whereIn('id',$userIds)->sum('money');

        $data['total_charge_money']=Charge::whereIn('user_id',$userIds)->where('status',1)->whereIn('type',[1,4])->sum('money');
        $data['total_withdraw_money']=Charge::whereIn('user_id',$userIds)->where('status',1)->whereIn('type',[5])->sum('money');
		$data['total_xinyongjin']=Tactics::whereIn('user_id',$userIds)->sum('xingyongjin');
        $data['total_tactics_money']=Tactics::whereIn('user_id',$userIds)->sum('create_money');

        $data['add_credit']=abs(Charge::whereIn('user_id',$userIds)->where('status',1)->where('type',6)->sum('money'));

        $data['position_return_money']=Tactics::whereIn('user_id',$userIds)->where('order_status',0)->sum('return_money');

        $data['clear_return_money']=Tactics::whereIn('user_id',$userIds)->where('order_status',1)->sum('profit');

        $data['count_deal_money']=Tactics::whereIn('user_id',$userIds)->sum('count_deal_money');

        $data['count_diyanfei']=Tactics::whereIn('user_id',$userIds)->sum('count_diyanfei');

        $data['diyanfei']=Tactics::whereIn('user_id',$userIds)->where('order_status',0)->sum('diyanfei');

        $data['tactics_count']=Tactics::whereIn('user_id',$userIds)->where('order_status',0)->count();



        $grid->countRaw = ['id' => '合计','money' => $data['money'],'total_charge_money'=>$data['total_charge_money'],'total_withdraw_money'=>$data['total_withdraw_money'],'total_xinyongjin'=>$data['total_xinyongjin'],'total_tactics_money'=>$data['total_tactics_money'],

            'add_credit'=>$data['add_credit'],'position_return_money'=>$data['position_return_money'],'clear_return_money'=>$data['clear_return_money'],

            'count_deal_money'=>$data['count_deal_money'],'count_diyanfei'=>$data['count_diyanfei'],'diyanfei'=>$data['diyanfei'],'tactics_count'=>$data['tactics_count']];



        return $grid;

    }

}



