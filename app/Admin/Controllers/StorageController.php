<?php

namespace App\Admin\Controllers;

use App\Models\Storage;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;

class StorageController extends Controller
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
            ->header('仓费管理')
            ->description('description')
            ->body($this->grid());

   /*     return Admin::content(function (Content $content) {

            // 选填
            $content->header('仓费管理');

            // 选填
            $content->description('仓费管理');
            $content->body('hello world');

            // 在body中添加另一段内容
            $content->body('foo bar');

            // `row`是`body`方法的别名
            $content->row('hello world');


        });*/

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
            ->header('Detail')
            ->description('description')
            ->body($this->detail($id));
    }

    /**
     * Edit interface.
     *
     * @param mixed $id
     * @param Content $content
     * @return Content
     */
    public function edit($id, Content $content)
    {
        return $content
            ->header('Edit')
            ->description('description')
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
        return $content
            ->header('Create')
            ->description('description')
            ->body($this->form());
    }

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Storage);

        $grid->id('Id');
        $grid->multiple('策略匹配倍数');
        $grid->xingyongjin('信用金');
        $grid->cangfei('建仓费');
        $grid->created_at('创建时间');
        $grid->updated_at('更新时间');

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
        $show = new Show(Storage::findOrFail($id));

        $show->id('Id');
        $show->multiple('策略匹配倍数');
        $show->xingyongjin('信用金');
        $show->cangfei('建仓费');
        $show->created_at('创建时间');
        $show->updated_at('更新时间');

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Storage);
        $form->number('multiple', '策略匹配倍数');
        $form->decimal('xingyongjin', '信用金');
        $form->decimal('cangfei', '建仓费 ')->default(0.00);
        return $form;
    }
}
