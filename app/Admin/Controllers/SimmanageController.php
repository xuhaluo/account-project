<?php

namespace App\Admin\Controllers;

use App\Models\Simcontests;
use App\Models\User;
use App\Models\Shares;
use App\Models\Tactics;
use App\Models\Charge;
use App\Http\Controllers\Controller;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use App\Admin\Extensions\SimmanageExpoter;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Form;
use App\Admin\Extensions\DealExpoter;
use App\Http\Controllers\Api\StockController;
use App\Http\Controllers\Api\TacticsController;
use Illuminate\Http\Request;
use App\Admin\Extensions\ChargeExpoter;


class SimmanageController extends Controller
{
    public function index($type,Content $content,Request $request)
    {
        if ($type == 'chicang') {
            $header = '模拟持仓';
        } elseif ($type == 'pingcang') {
            $header = '模拟平仓';
        } elseif ($type == 'accountlist') {
            $header = '账户列表';
        } elseif ($type == 'settlement'){
            $header = '资金流水';
        } else {
            $header = '模拟大赛管理';
        }
        if($type == 'chicang' || $type =='pingcang'){
            return $content
                ->header($header)
                ->description(' ')
                ->body($this->grid($type, $request));
        }else if($type == 'accountlist'){
            return $content
                ->header($header)
                ->description('')
                ->body($this->accountlist());
        }else if($type == 'settlement'){
            return $content
                ->header($header)
                ->description('')
                ->body($this->gridsettlement());
        }

    }
    protected function accountlist(){
        $grid = new Grid(new User);
        //关联表
        $grid->model()->with(['tactics']);
        $title = '策略人清算统计';
        // $grid->id('ID');
        $grid->column('id', 'ID')->sortable();
        $grid->column('phone', '登录名');
        $grid->column('name', '实名');
        $grid->column('phone', '手机号码');
        $grid->column('money', '模拟资金余额');
        //模拟总创建金额
        $grid->column('total_create_money', '模拟总创建金额')->display(function () {
            return $this->tactics->where('is_analog','1')->sum('create_money');
        });
        //冻结信用金
        $grid->column('frost_xinyongjin','冻结信用金')->display(function(){
            return $this->tactics->where('is_analog','1')->sum('frost_xinyongjin');
        });
        // $grid->column('add_credit','追加信用金')->display(function(){
        //     return 0;
        // });
        $grid->column('position_return_money','持仓盈亏')->display(function(){
            $position_return_money=$this->tactics->where('is_analog','1')->where('order_status',0)->sum('return_money');
            return $position_return_money>0?'<div style="color:red">'.$position_return_money.'</div>':'<div style="color:green">'.$position_return_money.'</div>';
        });
        $grid->column('clear_return_money','清算盈亏')->display(function(){
            $clear_return_money=$this->tactics->where('is_analog','1')->where('order_status',1)->sum('return_money');
            return $clear_return_money>0?'<div style="color:red">'.$clear_return_money.'</div>':'<div style="color:green">'.$clear_return_money.'</div>';
        });
        $grid->column('count_deal_money','交易综合费')->display(function(){
            return $this->tactics->where('is_analog','1')->sum('count_deal_money');
        });
        $grid->column('count_diyanfei','总递延费')->display(function(){
            return $this->tactics->where('is_analog','1')->sum('count_diyanfei');
        });
        $grid->column('diyanfei','今日应收递延费')->display(function(){
            return $this->tactics->where('is_analog','1')->where('order_status',0)->sum('diyanfei');
        });
        $grid->column('tactics_count','持仓总量')->display(function(){
            return $this->tactics->where('is_analog','1')->where('order_status',0)->count();
        });
        // $grid->column('simcontests.ranking', '排名');
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
            // $filter->like('user_id', '账户名');
            $filter->like('name', '实名');
            $filter->like('phone', '手机号码');
        });
        $head = ['会员账号', '登录名', '实名', '手机号码','模拟资金余额','模拟总创建金额','冻结信用金','追加信用金','持仓盈亏','交易综合费','总递延费','今日应收递延费','持仓总量'];
        $body = ['id', 'phone', 'name', 'phone','money','total_create_money','frost_xinyongjin','add_credit','position_return_money','clear_return_money','count_deal_money','count_diyanfei','diyanfei','tactics_count'];

        $grid->exporter(new SimmanageExpoter($title, $head, $body));
        return $grid;
    }
    protected function grid($type,$request)
    {
        $grid = new Grid(new Tactics);
        if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
            $allAgents = User::where('level','>',0)->get();
            // 获取所有子集id
            $agents = getChildren($allAgents,Admin::user()->agent_id);
            $users = User::whereIn('pid',$agents)->where('level',0)->pluck('id');
            $grid->model()->whereIn('user_id',$users);
        }

        if($type == 'chicang'){
            $grid->model()->where('order_status',0)->where('is_analog','1');
            $tableName = '持仓列表';
            if (Admin::user()->can(' ')) {
                $grid->column('操作')->display(function(){
                    return "<a href='/admin/simmanage/pingcang/$this->id'>平仓</a>";
                });
            }
            $where[] = ['tactics.order_status','=',0];
            $where[] = ['tactics.is_analog','=',1];
        }elseif($type == 'pingcang'){
            $grid->model()->where('order_status',1)->where('is_analog','1');
            $tableName = '平仓列表';
            $where[] = ['tactics.order_status','=',1];
            $where[] = ['tactics.is_analog','=',1];
        }else{
            $grid->model()->where('id',0);
            $tableName = '交易列表';
            $where[] = ['tactics.id','=',0];
        }

        $grid->id('ID');
        $grid->order_no('订单号')->sortable();
        $grid->user_id('用户ID')->sortable();
        if(Admin::user()->isAdministrator()){
            $grid->column('user.phone','手机号')->sortable();
        }
        $grid->column('user.name','实名')->sortable();
        $grid->column('shares.name','股票名称');
        $grid->code('股票代码')->sortable();
        $grid->num('股数')->sortable();
        $grid->price('买入价格')->sortable();
        $grid->created_at('买入时间')->sortable();
        // $grid->buy_commission('买入手续费')->sortable();
        if($type == 'pingcang'){
            $grid->deal_money('出售价格')->sortable();
            $grid->deal_time('出售时间')->sortable();
        }
        // $grid->sale_commission('出售手续费')->sortable();
        $grid->count_xingyongjin('总信用金')->sortable();
        if($type == 'pingcang'){
            $grid->return_money('返回金额')->sortable();
        }
        $grid->multiple('策略倍数')->sortable();
        $grid->max_price('止盈')->sortable();
        $grid->min_price('止损')->sortable();
        $grid->cangfei('建仓费')->sortable();
        $grid->diyanfei('递延费')->sortable();
        $grid->count_diyanfei('总递延费')->sortable();
        $grid->column('代理商')->display(function(){
            if($this->user->level_upper){
                return $this->user->level_upper->name;
            }else{
                return '';
            }
        });
        $grid->create_money('订单创建金额')->sortable();
        $grid->rate('收益率')->sortable();
        $grid->deal_money('成交价格')->sortable();
        $grid->count_deal_money('成交总价')->sortable();
        $grid->order_status('状态')->using(['0' => '持仓', '1' => '平仓']);

        // $grid->tools(function ($tools) {
        //     $tools->batch(function ($batch) {
        //         $batch->disableDelete();
        //     });
        // });

        $grid->filter(function($filter){

            // 去掉默认的id过滤器
            $filter->disableIdFilter();

            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->like('order_no', '订单号');
                $filter->like('shares.name', '股票名称');
                $filter->like('code', '股票代码');

                $agents = User::where('level','>',0)->pluck('name','id');
                $filter->equal('user.pid','代理商')->select($agents);
            });
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->between('created_at', '买入时间')->datetime();
                $filter->between('deal_time', '出售时间')->datetime();
            });

        });
        $grid->disableRowSelector();//禁用行选择checkbox
        $grid->disableCreateButton();//禁用创建按钮
        $grid->disableActions();//禁用行动作

        // $grid->
        $grid->actions(function (Grid\Displayers\Actions $actions) {
            $actions->disableDelete();
            $actions->disableView();
            $actions->disableEdit();
        });
        if(Admin::user()->isAdministrator()){
            if($type == 'chicang'){
                $head = ['ID','订单号','用户ID','手机号','股票名称','股票代码','股数','买入价格','买入时间','出售价格','出售时间','信用金','策略倍数','止盈','止损','建仓费','递延费','总递延费','订单创建金额','收益率','成交价格','成交总价','状态'];
                $body = ['id','order_no','user_id','user.phone','shares.name','code','num','price','created_at','deal_money','deal_time','xingyongjin','multiple','max_price','min_price','cangfei','diyanfei','count_diyanfei','create_money','rate','deal_money','count_deal_money','order_status'];
            }elseif($type == 'pingcang'){
                $head = ['ID','订单号','用户ID','手机号','股票名称','股票代码','股数','买入价格','买入时间','出售价格','出售时间','信用金','返还金额','策略倍数','止盈','止损','建仓费','递延费','总递延费','订单创建金额','收益率','成交价格','成交总价','状态'];
                $body = ['id','order_no','user_id','user.phone','shares.name','code','num','price','created_at','deal_money','deal_time','xingyongjin','return_money','multiple','max_price','min_price','cangfei','diyanfei','count_diyanfei','create_money','rate','deal_money','count_deal_money','order_status'];
            }
        }else{
            if($type == 'chicang'){
                $head = ['ID','订单号','用户ID','股票名称','股票代码','股数','买入价格','买入时间','出售价格','出售时间','信用金','策略倍数','止盈','止损','建仓费','递延费','总递延费','订单创建金额','收益率','成交价格','成交总价','状态'];
                $body = ['id','order_no','user_id','shares.name','code','num','price','created_at','deal_money','deal_time','xingyongjin','multiple','max_price','min_price','cangfei','diyanfei','count_diyanfei','create_money','rate','deal_money','count_deal_money','order_status'];
            }elseif($type == 'pingcang'){
                $head = ['ID','订单号','用户ID','股票名称','股票代码','股数','买入价格','买入时间','出售价格','出售时间','信用金','返还金额','策略倍数','止盈','止损','建仓费','递延费','总递延费','订单创建金额','收益率','成交价格','成交总价','状态'];
                $body = ['id','order_no','user_id','shares.name','code','num','price','created_at','deal_money','deal_time','xingyongjin','return_money','multiple','max_price','min_price','cangfei','diyanfei','count_diyanfei','create_money','rate','deal_money','count_deal_money','order_status'];
            }

        }
        // 统计
        if($request->order_no){
            $where[] = ['tactics.order_no','like','%'.$request->order_no.'%'];
        }
        if($request->code){
            $where[] = ['tactics.code','like','%'.$request->code.'%'];
        }
        if($request->shares['name']){
            $where[] = ['shares.name','like','%'.$request->shares['name'].'%'];
        }
        if($request->user['pid']){
            $where[] = ['users.pid','=',$request->user['pid']];
        }
        if($request->created_at['start']){
            $where[] = ['tactics.created_at','>=',$request->created_at['start']];
        }
        if($request->created_at['end']){
            $where[] = ['tactics.created_at','<=',$request->created_at['end']];
        }
        if($request->deal_time['start']){
            $where[] = ['tactics.deal_time','>=',$request->deal_time['start']];
        }
        if($request->deal_time['end']){
            $where[] = ['tactics.deal_time','<=',$request->deal_time['end']];
        }
        $counts = \DB::table('tactics')->select(\DB::raw('SUM(num) as num'),\DB::raw('SUM(xingyongjin) as xingyongjin'),\DB::raw('SUM(count_diyanfei) as count_diyanfei'))->where($where)->join('shares','tactics.code','=','shares.code')->join('users','tactics.user_id','=','users.id')->get();
        $grid->countRaw = ['id' => '统计','num' => $counts[0]->num,'xingyongjin' => $counts[0]->xingyongjin,'count_diyanfei' => $counts[0]->count_diyanfei];
        $grid->exporter(new DealExpoter($tableName,$head,$body));
        // $grid->expandFilter();
        return $grid;
    }
    public function pingcangCreate(Tactics $tactics,Content $content)
    {
        if($tactics->order_status){
            return redirect('/admin/simmanage/chicang');
        }
        $StockController = new StockController();
        $data = $StockController->getRealTimeInfo($tactics->code);
        $form = Admin::form(Shares::class, function(Form $form) use ($tactics,$data){
            $form->setAction("/admin/simmanage/pingcang/$tactics->id");
            $form->text('', '股票名称')->default($data['name'])->disable();
            $form->text('', '股票代码')->default($data['code'])->disable();
            $form->text('', '最新价格')->default($data['current_price'])->disable();
            $form->text('', '昨日收盘价')->default($data['yesterday_end_price'])->disable();
            $form->text('deal_money', '平仓价格')->default($data['current_price']);

            $form->tools(function (Form\Tools $tools) {
                // 去掉`列表`按钮
                $tools->disableList();
                // 去掉`删除`按钮
                $tools->disableDelete();
                // 去掉`查看`按钮
                $tools->disableView();
            });

            $form->footer(function ($footer) {
                // 去掉`重置`按钮
                $footer->disableReset();
                // 去掉`查看`checkbox
                $footer->disableViewCheck();
                // 去掉`继续编辑`checkbox
                $footer->disableEditingCheck();
                // 去掉`继续创建`checkbox
                $footer->disableCreatingCheck();
            });
        });
        return $content
            ->header('模拟平仓')
            ->description(' ')
            ->body($form);
    }
    public function pingcang($tactic_id)
    {
        $tactic = Tactics::with(['user'])->find($tactic_id);
        if(!$tactic->order_status){
            $tacticsController = new TacticsController();
            $tacticsController->pingcang($tactic);
        }
        return redirect('/admin/simmanage/chicang');
    }

    //模拟资金清算
    public function gridsettlement(){
        $grid = new Grid(new Charge);
        $grid->model()->with('user')->leftJoin('users','users.id','=','charges.user_id')->where('charges.is_analog','=',1)->select('charges.*');
        $title = '资金清算';
        // $grid->id('ID');
        // $grid->user_id('账号')->sortable();
        $grid->column('账户类别')->display(function () {
            return '点买人账号';
        });
        $grid->column('user.name','账户名')->sortable();
        $grid->column('user.pid','代理商')->display(function($item){
            $find=User::find($item);
            if($find){
                return $find->name;
            }else{
                return '';
            }
        });
        //1充值2创建订单3平仓4后台操作5提现
        $grid->type('业务类型')->using(['1' => '充值', '2' => '创建订单','3'=>'平仓','4'=>'后台操作','5'=>'提现','6'=>'追加信用金','7'=>'返佣','8'=>'递延费']);
        $grid->column('money','金额');
        $grid->info('摘要')->sortable();
        $grid->updated_at('处理时间')->sortable();
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
            $filter->like('user.name','账户名');
            $filter->between('charges.updated_at', '处理时间')->datetime();
        });
        $head = ['序号','账号','账户名','代理商','金额','业务类型','摘要','处理时间'];
        $body = ['id','user_id','user.name','user.pid','money','type','info','updated_at'];
        $grid->exporter(new ChargeExpoter($title,$head,$body));
        return $grid;
    }
    //排行榜
    // public function gridranklist(){
    //     $grid = new Grid(new Simcontests);
    //     $grid->model()->with('user')->leftJoin('users','users.id','=','simcontests.user_id');
    //     $title = '排行榜';
    //     $grid->id('ID');
    //     $grid->column('user.id','账号');
    //     $grid->column('user.name','昵称');
    //     $grid->column('user.money','总资产');
    //     $grid->column('胜率')->display(function(){
    //         $getres = $this->wintime/$this->tradetime*100;
    //         $getres = sprintf("%.2f", $getres);
    //         return "$getres"."%";
    //     });
    //     $grid->column('tradetime','交易次数');
    //     $grid->disableCreateButton();//禁止创建
    //     $grid->disableRowSelector();//禁止复选框操作
    //     $grid->disableActions();//禁用行操作列
    //     $grid->actions(function (Grid\Displayers\Actions $actions) {
    //         $actions->disableDelete();
    //         $actions->disableView();
    //         $actions->disableEdit();
    //     });
    //     $grid->filter(function ($filter) {
    //         // 设置created_at字段的范围查询
    //         $filter->like('user.id','会员账号');
    //         $filter->like('user.name','真实姓名');
    //     });
    //     $head = ['账号','昵称','总资产','胜率','交易次数'];
    //     $body = ['user.id','user.name','user.money','rate','tradetime'];
    //     $grid->exporter(new ChargeExpoter($title,$head,$body));
    //     return $grid;
    //
    // }




}