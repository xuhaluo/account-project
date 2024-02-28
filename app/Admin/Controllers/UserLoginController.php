<?php

namespace App\Admin\Controllers;

use App\Models\User;
use App\Models\UserLoginLog;
use App\Http\Controllers\Controller;
use App\Admin\Extensions\UserLoginLogExporter;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;

class UserLoginController extends Controller
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
            ->description('用户登录日志')
            ->body($this->index_grid());
    }

    public function index_grid(){
        $grid=new Grid(new UserLoginLog);

        if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
            $allAgents = User::where('level','>',0)->get();
            // 获取所有子集id
            $agents = getChildren($allAgents,Admin::user()->agent_id);
            $users = User::whereIn('pid',$agents)->where('level','=',0)->pluck('id');
            $grid->model()->with('user')->whereIn('user_id',$users);
        }else{
            $grid->model()->with('user');
        }

        $grid->model()->orderBy('id','desc');
        $grid->column('id', 'ID')->sortable();
        $grid->column('user.phone','账户');
        $grid->column('user.name','姓名');
        $grid->column('desc','描述');
        $grid->column('ip','登录ip');
        $grid->column('ip_address','登录地');
        $grid->column('created_at', '登录时间');

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

        $title='用户登录日志'.date('YmdHis');
        $head = ['id', '账户', '姓名','描述','登录ip','登陆地','登录时间'];
        $body = ['id','user.phone','user.name','desc','ip','ip_address','created_at'];
        $grid->exporter(new UserLoginLogExporter($title,$head,$body));

        // filter($callback)方法用来设置表格的简单搜索框
        $grid->filter(function ($filter) {
            // 去掉默认的id过滤器
            $filter->disableIdFilter();
            // 设置created_at字段的范围查询
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->between('created_at', '登录时间')->datetime();
                $filter->like('user.name','姓名');
            });
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->like('user.phone','账户');
            });
        });
        return $grid;
    }
}

