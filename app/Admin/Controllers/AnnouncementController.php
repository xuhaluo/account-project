<?php

namespace App\Admin\Controllers;

use App\Models\Announcement;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Grid;
use Encore\Admin\Form;
use Encore\Admin\Layout\Content;
use Illuminate\Http\Request;
use App\Admin\Requests;
use Encore\Admin\Facades\Admin;

class AnnouncementController extends Controller
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
            ->header('公告管理')
            ->description('列表')
            ->body($this->index_grid());
    }

    public function index_grid(){
        $grid=new Grid(new Announcement);
        $grid->model()->with('admin')->where('is_del',0)->orderby('id','desc');
        $grid->column('id', 'ID')->sortable();
        $grid->column('title','标题');
        $grid->column('source','来源');
        $grid->column('type','类型')->display(function($item){
            switch ($item){
                case 1:return '要闻';
                    break;
                case 2:return '操盘必读';
                    break;
                case 3:return '行业研究';
                    break;
                case 4:return '新股快讯';
                    break;
                case 5:return '全球股市';
                    break;
                case 6:return '合作协议';
                    break;
                default:return '';
            }
        });
        $grid->column('admin.username','创建者');
        $grid->column('created_at', '创建时间');

//        $grid->disableCreateButton();//禁用创建按钮
        if (!Admin::user()->can('announcement_create')) {
            $grid->disableCreateButton();
        }
        $grid->actions(function (Grid\Displayers\Actions $actions) {
//            $actions->disableDelete();
            $actions->disableView();
            if (!Admin::user()->can('announcement_edit')) {
                $actions->disableEdit();
            }
            if (!Admin::user()->can('announcement_delete')) {
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
            $grid->disableExport();//禁用导出
//            $grid->perPages([5,10, 20, 30, 40, 50]);//设置分页选择器选项

        // filter($callback)方法用来设置表格的简单搜索框
        $grid->filter(function ($filter) {
            // 去掉默认的id过滤器
            $filter->disableIdFilter();
            // 设置created_at字段的范围查询
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->between('created_at', '发送时间')->datetime();
                $filter->equal('type','类型')->select([1 => '要闻',2=>'操盘必读',3=>'行业研究',4=>'新股快讯',5=>'全球股市',6=>'合作协议']);
            });
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->like('title','标题');
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
        $form = new Form(new Announcement);

        $form->text('title', '标题');
        $form->text('source', '来源');
        $gList=array(
            '1'=>'要闻',
            '2'=>'操盘必读',
            '3'=>'行业研究',
            '4'=>'新股快讯',
            '5'=>'全球股市',
            '6'=>'合作协议'
        );
        $form->select('type', '类型')->options($gList);
        $form->editor('announcement', '内容');
        $form->setAction(url('admin/announcement/create_save'));

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
            ->header('公告管理')
            ->description('新建')
            ->body($form);
    }

    public function create_save(Requests\AnnouncementRequest $request)
    {
        try
        {
            $model=new Announcement();

            $model->title=$request->title;
            $model->type=$request->type;
            $model->announcement=$request->announcement;
            $model->source=$request->source;
            $model->admin_id=Admin::user()->id;

            $res = $model->save();
            if($res)
            {
                admin_toastr('操作成功','success');
                return redirect()->to(url('admin/announcement'));
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
            ->header('公告管理')
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
        $form = new Form(new Announcement);

        $form->text('title', '标题');
        $form->text('source', '来源');
        $gList=array(
            '1'=>'要闻',
            '2'=>'操盘必读',
            '3'=>'行业研究',
            '4'=>'新股快讯',
            '5'=>'全球股市',
            '6'=>'合作协议'
        );
        $form->select('type', '类型')->options($gList)->default('type');
        $form->editor('announcement', '内容');
        $form->setAction(url('admin/announcement/edit_save'));

        $form->hidden('id');


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

    public function edit_save()
    {
        try
        {
            $data=Request::capture();
//            print_r($data);die;
            if(!isset($data->id)||empty($data->id)){
                admin_toastr('ID不正确','error');
                return redirect()->back();
            }
            $model=Announcement::find($data->id);

            $model->title=$data->title;
            $model->type=$data->type;
            $model->announcement=$data->announcement;
            $model->source=$data->source;

            $res = $model->save();
            if($res)
            {
                admin_toastr('操作成功','success');
                return redirect()->to(url('admin/announcement'));
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
            $model=Announcement::find($id);
            if(!$model){
                admin_toastr('数据不存在','error');
                return redirect()->back();
            }

            $model->is_del=1;
            $res = $model->save();
            if($res)
            {
                admin_toastr('操作成功','success');
                return redirect()->to(url('admin/announcement'));
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

