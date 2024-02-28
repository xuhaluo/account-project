<?php

namespace App\Admin\Controllers;

use App\Models\Bankcard;
use App\Http\Controllers\Controller;
use App\Models\User;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Grid;
use Encore\Admin\Form;
use App\Admin\Extensions\BankcardExporter;
use Encore\Admin\Layout\Content;
use Illuminate\Http\Request;
use App\Admin\Requests;
use Encore\Admin\Facades\Admin;

class BankcardController extends Controller
{
    use HasResourceActions;

    /**
     * Index interface.
     *
     * @param Content $content
     * @return Content
     */
    public function index(Content $content)
    {
        return $content
            ->header('银行卡管理')
            ->description('列表')
            ->body($this->index_grid());
    }

    public function index_grid(){
        $grid=new Grid(new Bankcard);
        if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
            $allAgents = User::where('level','>',0)->get();
            // 获取所有子集id
            $agents = getChildren($allAgents,Admin::user()->agent_id);
            $users = User::whereIn('pid',$agents)->where('level',0)->pluck('id');
            $grid->model()->with('user')->whereIn('user_id',$users);
        }else{
            $grid->model()->with('user');
        }
//        $grid->model()->with('user');
        $grid->column('id', 'ID')->sortable();
        $grid->column('name','真实姓名');
        $grid->column('id_card','身份证号');
        $grid->column('tel','手机号');
        $grid->column('card_name','银行名称');
        $grid->column('card_number','银行卡号');
        $grid->column('card_address','开户行支行');

        if (!Admin::user()->can('bankcard_create')) {
            $grid->disableCreateButton();
        }
        $grid->actions(function (Grid\Displayers\Actions $actions) {
//            $actions->disableDelete();
            $actions->disableView();
            if (!Admin::user()->can('bankcard_edit')) {
                $actions->disableEdit();
            }
            if (!Admin::user()->can('bankcard_delete')) {
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

        $title='银行卡列表'.date('YmdHis');
        $head = ['id', '真实姓名','身份证号', '手机','银行名称','银行卡号','开户支行'];
        $body = ['id', '.name','id_card', 'tel','card_name','card_number','card_address'];
        $grid->exporter(new BankcardExporter($title,$head,$body));

        // filter($callback)方法用来设置表格的简单搜索框
        $grid->filter(function ($filter) {
            // 去掉默认的id过滤器
            $filter->disableIdFilter();
            // 设置created_at字段的范围查询
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
//                $filter->like('user.name','姓名');
                $filter->like('name','姓名');
                $filter->like('tel','手机号');
                $filter->like('card_address','开户支行');
            });
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->like('card_name','银行名称');
                $filter->like('card_number','银行卡号');
            });
        });
        return $grid;
    }

    /**
     * Create interface.
     *
     * @param Content $content
     * @return Content
     */
    public function create(Content $content)
    {
        $form = new Form(new Bankcard());

        $gList=User::where('id','>',0)->pluck('name','id');
        $form->select('user_id', '策略人')->options($gList);
        $form->text('name', '真实姓名');
        $form->text('id_card', '身份证号');
        $form->text('card_number', '卡号');
        $form->text('card_name', '银行名称');
        $form->text('card_address', '开户支行');
        $form->setAction(url('admin/bankcard/create_save'));

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
            ->header('银行卡管理')
            ->description('新建')
            ->body($form);
    }

    public function create_agent(Content $content)
    {
        $form = new Form(new Bankcard());


        $form->hidden('user_id')->default(Admin::user()->agent_id);
        $form->text('name', '真实姓名');
        $form->text('id_card', '身份证号');
        $form->text('card_number', '卡号');
        $form->text('card_name', '银行名称');
        $form->text('card_address', '开户支行');
        $form->setAction(url('admin/bankcard/create_save'));

        $form->tools(function (Form\Tools $tools) {

//          去掉`删除`按钮
            $tools->disableDelete();
            //去掉查看按钮
            $tools->disableView();

            if(Admin::user()->agent_id){
                $tools->disableList();
            }
        });
        $form->footer(function ($footer) {
            // 去掉`查看`checkbox
            $footer->disableViewCheck();
            // 去掉`继续编辑`checkbox
            $footer->disableEditingCheck();
            $footer->disableCreatingCheck();
        });

        return $content
            ->header('银行卡管理')
            ->description('新建')
            ->body($form);
    }

    public function create_save(Requests\BankcardRequest $request)
    {
        try
        {
            $model=new Bankcard();

            $model->user_id=$request->user_id;
            $model->card_number=$request->card_number;
            $model->name=$request->name;
            $model->id_card=$request->id_card;
            $model->card_name=$request->card_name;
            $model->card_address=$request->card_address;
            $user=User::find($request->user_id);
            $model->tel=$user->phone;

            $res = $model->save();
            if($res)
            {
                admin_toastr('操作成功','success');
                if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
                    return redirect()->to(url('admin'));
                }else{
                    return redirect()->to(url('admin/bankcard'));
                }
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

    public function edit($id, Content $content)
    {
        return $content
            ->header('银行卡管理')
            ->description('编辑')
            ->body($this->form()->edit($id));
    }


    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Bankcard());

        $form->text('user.name', '策略人')->disable();
        $form->text('name', '真实姓名');
        $form->text('id_card', '身份证号');
        $form->text('card_number', '卡号');
        $form->text('card_name', '银行名称');
        $form->text('card_address', '开户支行');
        $form->setAction(url('admin/bankcard/edit_save'));

        $form->hidden('id');


        $form->tools(function (Form\Tools $tools) {
            if(Admin::user()->agent_id){
                $tools->disableList();
            }
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

    public function edit_save()
    {
        try
        {
            $data=Request::capture();
            if(!isset($data->id)||empty($data->id)){
                admin_toastr('ID不正确','error');
                return redirect()->back();
//                echo "<script>alert('ID不正确');history.go(-1);</script>";exit;
            }
            $model=Bankcard::find($data->id);

            if(isset($data->card_name)&&!empty($data->card_name)){
                $model->card_name=$data->card_name;
            }
            if(isset($data->name)&&!empty($data->name)){
                $model->name=$data->name;
            }
            if(isset($data->id_card)&&!empty($data->id_card)){
                $model->id_card=$data->id_card;
            }
            if(isset($data->card_address)&&!empty($data->card_address)){
                $model->card_address=$data->card_address;
            }
            if(isset($data->card_number)&&!empty($data->card_number)){
                $model->card_number=$data->card_number;
            }

            $res = $model->save();
            if($res)
            {
                admin_toastr('操作成功','success');
                if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
                    return redirect()->to(url('admin'));
                }else{
                    return redirect()->to(url('admin/bankcard'));
                }
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

    public function delete($id)
    {
        try
        {
            $model=Bankcard::find($id);
            if(!$model){
                admin_toastr('数据不存在','error');
                return redirect()->back();
            }

            $res = $model->delete();
            if($res)
            {
                admin_toastr('操作成功','success');
                return redirect()->to(url('admin/bankcard'));
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
}

