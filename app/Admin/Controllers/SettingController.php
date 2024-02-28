<?php

namespace App\Admin\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use App\Models\SettingRecharge;
use App\Handlers\ImageUploadHandler;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Admin\Requests;

class SettingController extends Controller
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
            ->header('配置系统')
            ->description('')
            ->body($this->grid());
    }

    protected function grid()
    {
        $grid = new Grid(new Setting);
        $grid->id('Id');
        $grid->code('code');
        $grid->value('值');
        $grid->desc('描述');
        $grid->created_at('创建时间');
        $grid->filter(function ($filter) {
            //去掉ID过滤器
            $filter->disableIdFilter();
            // 设置created_at字段的范围查询
            $filter->like('code','code');

        });
        $grid->disableExport();//禁用导出
        $grid->actions(function (Grid\Displayers\Actions $actions) {
            $actions->disableDelete();
            $actions->disableView();
//            if (!Admin::user()->can('customer_edit')) {
//                $actions->disableEdit();
//            }
        });


        return $grid;
    }
    public function edit($id, Content $content)
    {
        return $content
            ->header('配置管理')
            ->description('编辑')
            ->body($this->form()->edit($id));
    }

    //新增
    public function create(Content $content)
    {
        $form = new Form(new Setting);

        $form->text('code', 'code');
        $form->text('value', '值');
        $form->text('desc', '描述');
        $form->setAction(url('admin/setting/list/create_save'));

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
            ->header('配置管理')
            ->description('新建')
            ->body($form);
    }
    public function create_save(Requests\SettingRequest $request)
    {
        try
        {
            $setting=new Setting();
            $setting->code=$request->code;
            $setting->value=$request->value;
            $setting->desc=$request->desc;

            $res = $setting->save();
            if($res)
            {
                admin_toastr('操作成功','success');
                return redirect()->to(url('admin/setting/list'));
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

    protected function form()
    {
        $form = new Form(new Setting);

        $form->text('code', 'code')->disable();
        $form->text('value', '值');
        $form->text('desc', '描述');
        $form->setAction(url('admin/setting/list/edit_save'));

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

    //保存
    public function edit_save(Content $content)
    {
        try
        {
            $data=Request::capture();
            if(!isset($data->id)||empty($data->id)){
                admin_toastr('ID不正确','error');
                return redirect()->back();
            }
            $setting=Setting::find($data->id);
            // $setting->code=$data->code;
            $setting->value=$data->value;
            $setting->desc=$data->desc;
            
            $status=true;
            DB::beginTransaction();
            $res = $setting->save();
            if($res&&$status)
            {
                DB::commit();
                admin_toastr('操作成功','success');
                return redirect()->to(url('admin/setting/list'));
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
    public function delete($id)
    {
        try
        {
            $model=Setting::find($id);
            if(!$model){
                admin_toastr('数据不存在','error');
                return redirect()->back();
            }
            $res = $model->delete();
            if($res)
            {
                admin_toastr('操作成功','success');
                return redirect()->to(url('admin/setting/list'));
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

    public function recharge(Content $content){

        $grid = new Grid(new SettingRecharge);

        $grid->column('id','编号ID');

        $grid->column('zfb_img','支付宝充值图片')->display(function ($item){
            return "<img src='".$item."' width='300'>";
        });

        // $grid->column('dg_img','对公账号充值图片')->display(function ($item){
        //     return "<img src='".$item."' width='300'>";
        // });
        
        $grid->column('account','账户');
        $grid->column('name','户名');
        $grid->column('bank','开户银行');
        $grid->column('address','开户行地址');

        $grid->filter(function ($filter) {
            //去掉ID过滤器
            $filter->disableIdFilter();
            // 设置created_at字段的范围查询
            $filter->like('code','code');

        });
        $grid->disableCreateButton();
        $grid->disableFilter();
        $grid->disableExport();//禁用导出
        $grid->disableRowSelector();//禁用行选择checkbox
        $grid->actions(function (Grid\Displayers\Actions $actions) {
            $actions->disableDelete();
            $actions->disableView();
        });


        return $content

            ->header('充值配置管理')

            ->description('列表')

            ->body($grid);
    }

    public function rechargeShow($id, Content $content){

        return $content
            ->header('充值配置管理')
            ->description('编辑')
            ->body($this->rechargeFrom($id)->edit($id));
    }

    public function rechargeFrom($id){
        $form = new Form(new SettingRecharge);
        $find=SettingRecharge::find($id);
        if($find->zfb_img){
            $form->display('支付宝充值图片')->default("<img src='".$find->zfb_img."' height='400'>");
        }
        $form->image('zfb');
        $form->hidden('zfb_img');
        // if($find->dg_img){
        //     $form->display('对公账号充值图片')->default("<img src='".$find->dg_img."' height='400'>");
        // }
        // $form->image('dg');
        // $form->hidden('dg_img');
        $form->text('account', '账户');
        $form->text('name', '户名');
        $form->text('bank', '开户银行');
        $form->text('address', '开户行地址');
        $form->setAction(url('admin/setting/recharge/save_img'));

        $form->hidden('id');

        $form->tools(function (Form\Tools $tools) {

            $tools->disableDelete();
            //去掉查看按钮
            $tools->disableView();
            // 添加一个按钮, 参数可以是字符串, 或者实现了Renderable或Htmlable接口的对象实例
//                    $tools->add('<a class="btn btn-sm btn-danger"><i class="fa fa-trash"></i>&nbsp;&nbsp;delete</a>');
        });
        $form->footer(function ($footer) {
//                    // 去掉`重置`按钮
                   $footer->disableReset();
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

    public function save_img(Request $request, ImageUploadHandler $uploader)
    {
        $uploadimage = '';
        if ($request->zfb) {
            $result_zfb_img = $uploader->save($request->zfb, 'recharge', 0);
            if ($result_zfb_img) {
                $zfb_img = $result_zfb_img['path'];
            }
        }else{
            $zfb_img=$request->zfb_img;
        }


        // if ($request->dg) {
        //     $result_dg_img = $uploader->save($request->dg, 'recharge', 0);
        //     if ($result_dg_img) {
        //         $dg_img = $result_dg_img['path'];
        //     }
        // }else{
        //     $dg_img=$request->dg_img;
        // }
        $res = DB::table('setting_recharge')->where('id',$request->id)->update([
            'zfb_img'=>$zfb_img,
            'account'=>$request->account,
            'name'=>$request->name,
            'bank'=>$request->bank,
            'address'=>$request->address,
        ]);
        if($res!==false)
        {
            admin_toastr('操作成功','success');
            return redirect()->to(url('admin/setting/recharge'));
        }
        else
        {
            admin_toastr('操作失败','error');
            return redirect()->back();
        }
        // $log = DB::getQueryLog();
        // var_dump($log);
        // return ['status'=>200,'msg'=>$uploadimage];

    }

}
