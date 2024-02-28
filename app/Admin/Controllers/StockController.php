<?php

namespace App\Admin\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Shares;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Form;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Admin\Requests;
use Maatwebsite\Excel\Facades\Excel;
use App\Admin\Extensions\SharesExpoter;
use App\Admin\Extensions\ExcelExpoter;

class StockController extends Controller
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
            ->header('股票列表')
            ->description('')
            ->body($this->grid());
    }

    protected function grid()
    {
        $grid = new Grid(new Shares);
        $title = '股票列表';
        $grid->code('code');
        $grid->name('name');
        // $grid->status('状态')->using(['1' => '正常交易', '2' => '连续停牌']);
        // $grid->is_hot('推荐')->using(['0' => '不推荐', '1' => '推荐']);
        // $grid->is_danger('高风险股票')->using(['0' => '非高风险股票', '1' => '高风险股票']);
        // $grid->danger_reason('高风险原因');
        // $grid->set_danger_time('设置高风险时间');
        // $grid->is_del('回收站')->using(['0'=>'正常','1'=>'回收']);
        // $grid->money('名义本金');
        // $grid->rules('期权规则');
        $grid->filter(function ($filter) {
            //去掉ID过滤器
            $filter->disableIdFilter();
            // 设置created_at字段的范围查询
            $filter->like('code', 'code');

        });
        $grid->tools(function ($tools)use ($grid){
            //关闭批量删除
            $tools->batch(function ($batch) {
                $batch->disableDelete();
            });
            $tools->append("<a href='/admin/stock/stocklist/import' class='btn btn-danger noShow'style='background-color:#00c0ef;border-color:#00c0ef'>导入</a>");
        });
        // $grid->disableCreateButton();//禁止创建
        // $grid->disableExport();//禁用导出
        $grid->disableRowSelector();//禁止复选框操作
        $grid->actions(function (Grid\Displayers\Actions $actions) {
            // $actions->disableDelete();
            $actions->disableView();
//            if (!Admin::user()->can('customer_edit')) {
//                $actions->disableEdit();
//            }
        });
        // $head = ['code', 'name', '状态(1:正常交易,2:连续停牌)', '推荐(0:不推荐,1:推荐)','高风险股票(0:非高风险股票,1:高风险股票)','高风险原因','设置高风险时间','回收站','名义本金','期权规则'];
        $head = ['code', 'name'];
        $body = ['code', 'name'];
        // $body = ['code', 'name', 'status', 'is_hot','is_danger','danger_reason','set_danger_time','is_del','money','rules'];
        $grid->exporter(new SharesExpoter($title, $head, $body));
        return $grid;
    }
    public function edit($id, Content $content)
    {
        return $content
            ->header('配置管理')
            ->description('编辑')
            ->body($this->form()->edit($id));
    }
    protected function form()
    {
        $form = new Form(new Shares);

        $form->text('code', 'code');
        $form->text('name', '名字');
        // $form->text('status', '状态(1:正常交易,2:连续停牌)');
        // $form->text('is_hot', '推荐(0:不推荐,1:推荐)');
        // $form->text('danger_reason', '高风险原因');
        // $form->text('set_danger_time', '设置高风险时间');
        // $form->text('is_danger', '高风险股票(0:非高风险股票,1:高风险股票)');
        // $form->text('is_del', '回收站(0:正常,1：回收)');
        // $form->text('money', '名义本金');
        // $form->text('rules', '期权规则');

        $form->setAction(url('admin/stock/stocklist/edit_save'));

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
            $shares=Shares::find($data->id);

            if(isset($shares->code) && !empty($data->code))
            {
                $shares->code=$data->code;
            }
            if(isset($shares->name) && !empty($data->name))
            {
                $shares->name=$data->name;
            }
            // if(isset($shares->status) && !empty($data->status))
            // {
            //     $shares->status=$data->status;
            // }
            // if(isset($shares->is_hot) && !empty($data->is_hot))
            // {
            //     $shares->is_hot=$data->is_hot;
            // }
            // if(isset($shares->is_danger) && !empty($data->is_danger))
            // {
            //     $shares->is_danger=$data->is_danger;
            // }
            // if(isset($shares->set_danger_time) && !empty($data->set_danger_time))
            // {
            //     $shares->set_danger_time=$data->set_danger_time;
            // }
            // if(isset($shares->danger_reason) && !empty($data->danger_reason))
            // {
            //     $shares->danger_reason=$data->danger_reason;
            // }
            // if(isset($shares->is_del) && !empty($data->is_del))
            // {
            //     $shares->is_del=$data->is_del;
            // }
            // if(isset($shares->money) && !empty($data->money))
            // {
            //     $shares->money=$data->money;
            // }
            // if(isset($shares->rules) && !empty($data->rules))
            // {
            //     $shares->rules=$data->rules;
            // }
            $status=true;
            DB::beginTransaction();
            $res = $shares->save();
            if($res&&$status)
            {
                DB::commit();
                admin_toastr('操作成功','success');
                return redirect()->to(url('admin/stock/stocklist'));
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
    //新增
    public function create(Content $content)
    {
        $form = new Form(new Shares);

        $form->text('code', 'code');
        $form->text('name', '名字');
        // $form->text('status', '状态(1:正常交易,2:连续停牌)');
        // $form->text('is_hot', '推荐(0:不推荐,1:推荐)');
        // $form->text('is_danger', '高风险股票(0:非高风险股票,1:高风险股票)');
        // $form->text('danger_reason', '高风险原因');
        // $form->text('set_danger_time', '设置高风险时间');
        // $form->text('is_del', '回收站(0:正常,1：回收)');
        // $form->text('money', '名义本金');
        // $form->text('rules', '期权规则');
        $form->setAction(url('admin/stock/stocklist/create_save'));

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
            ->header('股票列表')
            ->description('新建')
            ->body($form);
    }
    public function create_save(Requests\ShareRequest $request)
    {
        try
        {
            $shares=new Shares();
            $shares->code=$request->code;
            $shares->name=$request->name;
            // $shares->status=$request->status;
            // $shares->is_hot=$request->is_hot;
            // $shares->is_danger=$request->is_danger;
            // $shares->danger_reason=$request->danger_reason;
            // $shares->set_danger_time=$request->set_danger_time;
            // $shares->is_del=$request->is_del;
            // $shares->money=$request->money;
            // $shares->rules=$request->rules;
            $res = $shares->save();
            if($res)
            {
                admin_toastr('操作成功','success');
                return redirect()->to(url('admin/stock/stocklist'));
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
            $model=Shares::find($id);
            if(!$model){
                admin_toastr('数据不存在','error');
                return redirect()->back();
            }
            $res = $model->delete();
            if($res)
            {
                admin_toastr('操作成功','success');
                return redirect()->to(url('admin/stock/stocklist'));
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
    public function import_shares(Content $content){
        $form = Admin::form(Shares::class, function (Form $form) {

            $form->file('file', '导入excel')->removable()->options([
                'showPreview' => false,
                'allowedFileExtensions'=>['xls','xlsx'],
                'showUpload'=>false,
                'uploadAsync' =>false,
                'uploadUrl' => '/admin/stock/stocklist/import/shares',
                'uploadExtraData' => [
                    '_token'    => csrf_token(),
                    '_method'   => 'POST',
                ],
            ])->setWidth(4, 3);
            $form->setAction(url('admin/stock/stocklist/import/shares'));
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
                // 去掉`重置`按钮
                $footer->disableReset();
//                $footer->disableSubmit();
            });
        });
        return $content
            ->header('导入管理')
            ->description('导入')
            ->body($form);
    }
    public function import(Request $request){
        set_time_limit(0);
        if(!$request->hasFile('file')){
            exit('上传文件为空！');
        }
        $file = $_FILES;
        $excel_file_path = $file['file']['tmp_name'];
        $res = [];
        Excel::load($excel_file_path, function($reader) use( &$res ) {
            $reader = $reader->getSheet(0);
            $res = $reader->toArray();
        },'GBK');
        if($res['0']['0'] != 'code'){
            admin_toastr('A1列标题名称不对','error');
            return redirect()->back();
        }
        if($res['0']['1'] != 'name'){
            admin_toastr('A2列标题名称不对','error');
            return redirect()->back();
        }
        $res1 = true;
        for($i = 1;$i<count($res);$i++){
             $check = Shares::where('name',$res[$i][1])->first();
            if(!$check && !empty($res[$i][0])){
                $shares=new Shares();
                if(strpos($res[$i][0],'.') !== false){
                    $getcodearr = explode('.',$res[$i][0]);
                    $getcode = $getcodearr['1'].$getcodearr['0'];
                }else{
                    $getcode = $res[$i][0];
                }
                 if(strpos($res[$i][1],'ST') !== false){
                     $shares->danger_reason = '危险股票';
                     $shares->set_danger_time = date('Y-m-d H:i:s');
                 }
                 // $getname = preg_replace('/\D/s', '', $res[$i][1]);
                 $shares->code=strtolower($getcode);
                 $shares->name=$res[$i][1];
                 $res1 = $shares->save();

             }

        }
        if($res1)
        {
            admin_toastr('操作成功','success');
            return redirect()->to(url('admin/stock/stocklist'));
        }
        else
        {
            admin_toastr('操作失败','error');
            return redirect()->back();
        }

    }

}