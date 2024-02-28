<?php

namespace App\Admin\Controllers;

use App\Models\SmsLog;
use App\Http\Controllers\Controller;
use App\Admin\Extensions\RegisterCodeLogExporter;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;

class RegisterCodeController extends Controller
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
            ->header('系统日志')
            ->description('发送验证码记录')
            ->body($this->index_grid());
    }

    public function index_grid(){
        $grid=new Grid(new SmsLog);
        $grid->model()->orderBy('id','desc');
        $grid->column('id', 'ID')->sortable();
        $grid->column('phone','手机');
        $grid->column('type','操作类型');
        $grid->column('ip','登录ip');
        $grid->column('area','登陆地');
        $grid->column('code','验证码');
        $grid->column('created_at', '发送时间');

        $grid->disableCreateButton();//禁用创建按钮
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
//            $grid->disableRowSelector();//禁用行选择checkbox
//            $grid->disableFilter();//禁用查询过滤器
//            $grid->disablePagination();//禁用分页条
            $grid->disableActions();//禁用行操作列
//            $grid->disableExport();//禁用导出
//            $grid->perPages([5,10, 20, 30, 40, 50]);//设置分页选择器选项

        $title='发送验证码记录'.date('YmdHis');
        $head = ['id', '手机', '操作类型','登录ip','登陆地','验证码','发送时间'];
        $body = ['id', 'phone', 'type','ip','area','code','created_at'];
        $grid->exporter(new RegisterCodeLogExporter($title,$head,$body));

        // filter($callback)方法用来设置表格的简单搜索框
        $grid->filter(function ($filter) {
            // 去掉默认的id过滤器
            $filter->disableIdFilter();
            // 设置created_at字段的范围查询
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->between('created_at', '发送时间')->datetime();
            });
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->like('phone','手机');
            });


        });
        return $grid;
    }
}

