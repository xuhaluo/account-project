<?php

namespace App\Admin\Controllers;

use App\Admin\Extensions\ActualCountExporter;
use App\Admin\Extensions\ActualExporter;
use App\Models\User;
use App\Models\Tactics;
use App\Models\Shares;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Facades\Admin;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\StockController;
use App\Http\Controllers\Api\TacticsController;
use Encore\Admin\Form;


class ActualController extends Controller
{
    use HasResourceActions;

    /**
     * Index interface.
     *
     * @param Content $content
     * @return Content
     */
    public function index($type,Content $content,Request $request)
    {
        if($type == 'chicang'){
            $header = '实盘持仓';
        }elseif($type == 'pingcang'){
            $header = '实盘平仓';
        }elseif($type == 'buy_entrust'){
            $header = '实盘点买委托';
        }elseif($type == 'sell_entrust'){
            $header = '实盘点卖委托';
        }else{
            $header = '实盘管理';
        }
        
        return $content
            ->header($header)
            ->description(' ')
            ->body($this->grid($type,$request));
    }

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
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
            $grid->model()->whereIn('is_entrust',[1,6,7]);
            $tableName = '实盘持仓列表';
            $where[] = ['tactics.is_entrust','>',0];
            if (Admin::user()->can(' ')) {
                $grid->column('操作')->display(function(){
                    return "<a href='/admin/actual/pingcang/$this->id'>平仓</a>";
                });
            }
        }elseif($type == 'pingcang'){
            $grid->model()->where('is_entrust',3);
            $tableName = '实盘平仓列表';
            $where[] = ['tactics.is_entrust','=',3];
        }elseif($type == 'buy_entrust'){
//            $grid->model()->where('is_entrust',0)->where('buy_orderId','>',0);
            $grid->model()->where('is_entrust',0);
            $tableName = '实盘点买委托列表';
            $where[] = ['tactics.is_entrust','=',0];
//            $where[] = ['tactics.buy_orderId','>',0];
        }elseif($type == 'sell_entrust'){
            $grid->model()->where('is_entrust',2);
            $tableName = '实盘点卖委托列表';
            $where[] = ['tactics.is_entrust','=',2];
        }else{
            $grid->model()->where('id',0);
            $tableName = '交易列表';
            $where[] = ['tactics.id','=',0];
        }
        
        $grid->id('ID');
        $grid->order_no('订单号')->sortable();
//        $grid->user_id('用户ID')->sortable();
        if(Admin::user()->isAdministrator()){
            $grid->column('user.phone','手机号')->sortable();
        }
        $grid->column('user.name','实名')->sortable();
        $grid->column('shares.name','股票名称');
        $grid->code('股票代码')->sortable();
        $grid->num('股数')->sortable();
        $grid->price('买入价格')->sortable();
        $grid->created_at('买入时间')->sortable();
        $grid->deal_money('出售价格')->sortable();
        $grid->deal_time('出售时间')->sortable();
        $grid->xingyongjin('信用金')->sortable();
        if($type == 'pingcang'){
            $grid->return_money('返回金额')->sortable();
        }
        $grid->multiple('策略倍数')->sortable();
        $grid->max_price('止盈')->sortable();
        $grid->min_price('止损')->sortable();
        $grid->cangfei('建仓费')->sortable();
        $grid->diyanfei('递延费')->sortable();
        $grid->count_diyanfei('总递延费')->sortable();
        $grid->profit('用户利润')->sortable();
        $grid->platform_profit('平台利润')->sortable();
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
        $grid->is_entrust('状态')->display(function (){
            if(in_array($this->is_entrust,[1,6,7])){
                return "实盘持仓";
            }elseif(in_array($this->is_entrust,[3])){
                return "实盘平仓";
            }else{
                return "委托中";
            }
        });

        $grid->filter(function($filter){

            // 去掉默认的id过滤器
            $filter->disableIdFilter();
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器
                $filter->like('order_no', '订单号');
                $filter->like('shares.name', '股票名称');
                $filter->like('code', '股票代码');
            });
            $filter->column(1/2, function ($filter) {
                // 在这里添加字段过滤器

                $agents = User::where('level','>',0)->pluck('name','id');
                $filter->equal('user.pid','代理商')->select($agents);
                $filter->between('created_at', '买入时间')->datetime();
                $filter->between('deal_time', '卖出时间')->datetime();
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
            if($type == 'chicang'||$type=='buy_entrust'){
                $head = ['ID','订单号','手机号','股票名称','股票代码','股数','买入价格','买入时间','出售价格','出售时间','信用金','策略倍数','止盈','止损','建仓费','递延费','总递延费','订单创建金额','收益率','成交价格','成交总价','状态'];
                $body = ['id','order_no','user.phone','shares.name','code','num','price','created_at','deal_money','deal_time','xingyongjin','multiple','max_price','min_price','cangfei','diyanfei','count_diyanfei','create_money','rate','deal_money','count_deal_money','is_entrust'];
            }elseif($type == 'pingcang'||$type=='sell_entrust'){

                $head = ['ID','订单号','手机号','股票名称','股票代码','股数','买入价格','买入时间','出售价格','出售时间','信用金','返还金额','策略倍数','止盈','止损','建仓费','递延费','总递延费','用户利润','平台利润','订单创建金额','收益率','成交价格','成交总价','状态'];
                $body = ['id','order_no','user.phone','shares.name','code','num','price','created_at','deal_money','deal_time','xingyongjin','return_money','multiple','max_price','min_price','cangfei','diyanfei','count_diyanfei','profit','platform_profit','create_money','rate','deal_money','count_deal_money','is_entrust'];
            }
            
        }
        // 统计
        if(isset($request->order_no)&&$request->order_no){
            $where[] = ['tactics.order_no','like','%'.$request->order_no.'%'];
        }
        if(isset($request->code)&&$request->code){
            $where[] = ['tactics.code','like','%'.$request->code.'%'];
        }
        if(isset($request->shares['name'])&&$request->shares['name']){
            $where[] = ['shares.name','like','%'.$request->shares['name'].'%'];
        }
        if(isset($request->user['pid'])&&$request->user['pid']){
            $where[] = ['users.pid','=',$request->user['pid']];
        }
        if(isset($request->created_at['start'])&&$request->created_at['start']){
            $where[] = ['tactics.created_at','>=',$request->created_at['start']];
        }
        if(isset($request->created_at['end'])&&$request->created_at['end']){
            $where[] = ['tactics.created_at','<=',$request->created_at['end']];
        }
        if(isset($request->deal_time['start'])&&$request->deal_time['start']){
            $where[] = ['tactics.deal_time','>=',$request->deal_time['start']];
        }
        if(isset($request->deal_time['end'])&&$request->deal_time['end']){
            $where[] = ['tactics.deal_time','<=',$request->deal_time['end']];
        }
        // if($type == 'chicang'){
        //     $counts = \DB::table('tactics')->select(\DB::raw('SUM(num) as num'),\DB::raw('SUM(xingyongjin) as xingyongjin'),\DB::raw('SUM(count_diyanfei) as count_diyanfei'))->where($where)->whereIn('is_entrust',[1,6,7])->join('shares','tactics.code','=','shares.code')->join('users','tactics.user_id','=','users.id')->get();
        // }else{
        //     $counts = \DB::table('tactics')->select(\DB::raw('SUM(num) as num'),\DB::raw('SUM(xingyongjin) as xingyongjin'),\DB::raw('SUM(count_diyanfei) as count_diyanfei'))->where($where)->join('shares','tactics.code','=','shares.code')->join('users','tactics.user_id','=','users.id')->get();
        // }
        // $grid->countRaw = ['id' => '统计','num' => $counts[0]->num,'xingyongjin' => $counts[0]->xingyongjin,'count_diyanfei' => $counts[0]->count_diyanfei];
        // $grid->exporter(new ActualExporter($tableName,$head,$body));
        if($type == 'chicang'){
            $counts = \DB::table('tactics')->select(\DB::raw('SUM(num) as num'),\DB::raw('SUM(profit) as profit'),\DB::raw('SUM(platform_profit) as platform_profit'),\DB::raw('SUM(tactics.cangfei) as cangfei'),\DB::raw('SUM(tactics.diyanfei) as diyanfei'),\DB::raw('SUM(xingyongjin) as xingyongjin'),\DB::raw('SUM(count_diyanfei) as count_diyanfei'))->where($where)->whereIn('is_entrust',[1,6,7])->join('shares','tactics.code','=','shares.code')->join('users','tactics.user_id','=','users.id')->get();
        }else{
            $counts = \DB::table('tactics')->select(\DB::raw('SUM(num) as num'),\DB::raw('SUM(xingyongjin) as xingyongjin'),\DB::raw('SUM(profit) as profit'),\DB::raw('SUM(platform_profit) as platform_profit'),\DB::raw('SUM(tactics.cangfei) as cangfei'),\DB::raw('SUM(tactics.diyanfei) as diyanfei'),\DB::raw('SUM(count_diyanfei) as count_diyanfei'))->where($where)->join('shares','tactics.code','=','shares.code')->join('users','tactics.user_id','=','users.id')->get();
        }
        $grid->countRaw = ['id' => '统计','num' => $counts[0]->num,'xingyongjin' => $counts[0]->xingyongjin,'profit'=>$counts[0]->profit,'platform_profit'=>$counts[0]->platform_profit,'cangfei'=>$counts[0]->cangfei,'diyanfei'=>$counts[0]->diyanfei,'count_diyanfei' => $counts[0]->count_diyanfei];
        $grid->exporter(new ActualExporter($tableName,$head,$body));
        return $grid;
    }

    public function pingcangCreate(Tactics $tactics,Content $content)
    {
        if($tactics->order_status){
            return redirect('/admin/actual/chicang');
        }
        $StockController = new StockController();
        $data = $StockController->getRealTimeInfo($tactics->code);
        $form = Admin::form(Shares::class, function(Form $form) use ($tactics,$data){
            $form->setAction("/admin/actual/pingcang/$tactics->id");
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
            ->header('平仓')
            ->description(' ')
            ->body($form);
    }

    public function pingcang($tactic_id)
    {   
        $tactic = Tactics::with(['user'])->find($tactic_id);
        if(!$tactic->order_status){
            $tacticsController = new TacticsController();
            $tacticsController->pingcang($tactic,[],'后台平仓');
        }
        return redirect('/admin/actual/chicang');
    }

    public function count(Content $content,Request $request)
    {
        $grid = Admin::grid(Shares::class, function(Grid $grid) use ($request){

            $whereShares = [];
            if($request->shares['name']){
                $whereShares[] = ['shares.name','like','%'.$request->name.'%'];
            }

            $where = [['tactics.buy_orderId','>',0]];
            if($request->code){
                $where[] = ['tactics.code',$request->code];
            }

            $grid->model()->where($whereShares)->with(['tactics'])->orderBy('created_at','desc');
            $grid->id();
            $grid->code('股票代码')->sortable();
            $grid->name('股票名称')->sortable();
            $grid->column('total_buy_num','买入股数')->display(function() {
                return $this->tactics->whereIn('is_entrust',[1,2,3,6,7])->where('buy_orderId','>',0)->sum('num');
            });
            $grid->column('total_sell_num','卖出股数')->display(function() {
                return $this->tactics->whereIn('is_entrust',[3])->where('sell_orderId','>',0)->sum('num');
            });
            $grid->column('now_num','当前持仓股数')->display(function() {
                return $this->tactics->whereIn('is_entrust',[1,2,7])->where('buy_orderId','>',0)->sum('num');
            });
            $grid->column('buy_count','买入次数')->display(function() {
                return $this->tactics->whereIn('is_entrust',[1,2,3,6,7])->where('buy_orderId','>',0)->count();
            });
            $grid->column('sell_count','卖出次数')->display(function() {
                return $this->tactics->whereIn('is_entrust',[3])->where('sell_orderId','>',0)->count();
            });
            $grid->column('tactics_buy_count','创建策略委托次数')->display(function() {
                return $this->tactics->where('buy_orderId','>',0)->count();
            });
            $grid->column('tactics_sell_count','清算策略委托次数')->display(function() {
                return $this->tactics->where('sell_orderId','>',0)->count();
            });
            $grid->filter(function($filter){
                // 去掉默认的id过滤器
                $filter->disableIdFilter();
                $filter->column(1/2, function ($filter) {
                    // 在这里添加字段过滤器
                    $filter->like('code', '股票代码');
                });
                $filter->column(1/2, function ($filter) {
                    // 在这里添加字段过滤器
                    $filter->like('name', '股票名称');
                });
            });
            $grid->disableRowSelector();//禁用行选择checkbox
            $grid->disableCreateButton();//禁用创建按钮
            $grid->disableActions();//禁用行动作
            $grid->actions(function (Grid\Displayers\Actions $actions) {
                $actions->disableDelete();
                $actions->disableView();
                $actions->disableEdit();
            });
            $head = ['ID','股票代码','股票名称','买入股数','卖出股数','当前持仓股数','买入次数','卖出次数','创建策略委托次数','清算策略委托次数'];
            $body = ['id','code','name','total_buy_num','total_sell_num','now_num','buy_count','sell_count','tactics_buy_count','tactics_sell_count'];
            // 统计
            $codes = Shares::leftjoin('tactics','tactics.code','=','shares.code')->where($where)->pluck('shares.code');
            $total_buy_num=Tactics::whereIn('code',$codes)->whereIn('is_entrust',[1,2,3,6,7])->where('buy_orderId','>',0)->sum('num');
            $total_sell_num=Tactics::whereIn('code',$codes)->whereIn('is_entrust',[3])->where('sell_orderId','>',0)->sum('num');
            $now_num=Tactics::whereIn('code',$codes)->whereIn('is_entrust',[1,2,7])->where('buy_orderId','>',0)->sum('num');
            $buy_count=Tactics::whereIn('code',$codes)->whereIn('is_entrust',[1,2,3,6,7])->where('buy_orderId','>',0)->count();
            $sell_count=Tactics::whereIn('code',$codes)->whereIn('is_entrust',[3])->where('sell_orderId','>',0)->count();
            $tactics_buy_count=Tactics::whereIn('code',$codes)->where('buy_orderId','>',0)->count();
            $tactics_sell_count=Tactics::whereIn('code',$codes)->where('sell_orderId','>',0)->count();
            $grid->countRaw = ['id' => '统计','total_buy_num' => $total_buy_num,'total_sell_num' => $total_sell_num,'now_num' => $now_num,'buy_count' => $buy_count,
                'sell_count' => $sell_count,'tactics_buy_count' => $tactics_buy_count,'tactics_sell_count'=>$tactics_sell_count];

            $grid->exporter(new ActualCountExporter('实盘数据统计',$head,$body));
        });

        return $content
            ->header('实盘数据统计')
            ->description(' ')
            ->body($grid);
    }
}
