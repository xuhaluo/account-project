<?php

namespace App\Admin\Controllers;

use App\Models\User;
use App\Models\Tactics;
use App\Models\Shares;
use App\Models\Charge;
use App\Models\AdminUser;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;
use Encore\Admin\Facades\Admin;
use App\Admin\Extensions\DealExpoter;
use App\Admin\Extensions\DealCountExpoter;
use App\Admin\Extensions\DealListenerExpoter;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\StockController;
use App\Http\Controllers\Api\TacticsController;
use Carbon\Carbon;

class DealController extends Controller
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
            $header = '持仓';
        }elseif($type == 'pingcang'){
            $header = '平仓';
        }else{
            $header = '交易管理';
        }
        
        return $content
            ->header($header)
            ->description(' ')
            ->body($this->grid($type,$request));
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
    protected function grid($type,$request)
    {
        $grid = new Grid(new Tactics);
		$users = null;
        if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
            $allAgents = User::where('level','>',0)->get();
            // 获取所有子集id
            $agents = getChildren($allAgents,Admin::user()->agent_id);
            $users = User::whereIn('pid',$agents)->where('level',0)->pluck('id');
            $grid->model()->whereIn('user_id',$users);
        }

        if($type == 'chicang'){
            $grid->model()->where('order_status',0)->where('is_analog',0)->when(Admin::user()->isAdministrator(),function($query){
                $query->where('is_entrust',99);
            })->orderBy('created_at','desc');
            $tableName = '持仓列表';
            if (Admin::user()->can('deal_pingcang_handle')) {
                $grid->column('操作')->display(function(){
                    return "<a href='/admin/deal/pingcang/$this->id'>平仓</a>";
                });
            }
            $where[] = ['tactics.order_status','=',0];
            $where[] = ['tactics.is_analog','=',0];
            if(Admin::user()->isAdministrator()){
                $where[] = ['tactics.is_entrust','=',99];
            }
        }elseif($type == 'pingcang'){
            $grid->model()->where('order_status',1)->where('is_analog',0)->when(Admin::user()->isAdministrator(),function($query){
                $query->where('is_entrust',99);
            })->orderBy('created_at','desc');
            $tableName = '平仓列表';
            $where[] = ['tactics.order_status','=',1];
            $where[] = ['tactics.is_analog','=',0];
            if(Admin::user()->isAdministrator()){
                $where[] = ['tactics.is_entrust','=',99];
            }
        }else{
            $grid->model()->where('id',0)->orderBy('created_at','desc');
            $tableName = '交易列表';
            $where[] = ['tactics.id','=',0];
        }
        
        $grid->id('ID');
        $grid->order_no('订单号')->sortable();
        $grid->user_id('用户ID')->sortable();
       /* if(Admin::user()->isAdministrator()){
            $grid->column('user.phone','手机号')->sortable();
        }*/
		$grid->column('user.phone','手机号')->sortable();
        $grid->column('user.realname','实名')->sortable();
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
        //$grid->diyanfei('递延费')->sortable();
        $grid->count_diyanfei('总递延费')->sortable();
      	if($type == 'chicang'){
        	$grid->column('float_earn','浮动盈亏')->display(function(){
              	$shareInfo = getRealTimeInfo($this->code);
				$float_earn = round(($shareInfo['current_price'] - $this->price) * $this->num,2);
              	return $float_earn;
            });
        }
      	if($type == 'pingcang'){
        	$grid->column('float_earn','订单盈亏')->display(function(){
              	// $shareInfo = getRealTimeInfo($this->code);
				$float_earn = round(($this->deal_money - $this->price) * $this->num,2);
              	return $float_earn;
            });
        	$grid->platform_profit('平台利润')->sortable();
        	$grid->commission('客户收益分成')->sortable();
//          	$grid->column('shouyifencheng','客户收益分成')->display(function(){
//				$return_money = ($this->deal_money - $this->price) * $this->num + $this->count_xingyongjin;
//				if($return_money<0){
//                    return 0;
//                }else{
//                    return abs(round((float)$return_money - (float)$this->return_money,2));
//                }
//            });
        }
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

                $agents = User::where('level','>',0)->where('is_del',0)->pluck('name','id');
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
                $head = ['ID','订单号','用户ID','手机号','股票名称','股票代码','股数','买入价格','买入时间','出售价格','出售时间','信用金','策略倍数','止盈','止损','建仓费','总递延费','浮动盈亏','订单创建金额','收益率','成交价格','成交总价','状态'];
                $body = ['id','order_no','user_id','user.phone','shares.name','code','num','price','created_at','deal_money','deal_time','xingyongjin','multiple','max_price','min_price','cangfei','count_diyanfei','float_earn','create_money','rate','deal_money','count_deal_money','order_status'];
            }elseif($type == 'pingcang'){
                $head = ['ID','订单号','用户ID','手机号','股票名称','股票代码','股数','买入价格','买入时间','出售价格','出售时间','信用金','返还金额','策略倍数','止盈','止损','建仓费','总递延费','订单盈亏','平台利润','订单创建金额','收益率','成交价格','成交总价','状态'];
                $body = ['id','order_no','user_id','user.phone','shares.name','code','num','price','created_at','deal_money','deal_time','xingyongjin','return_money','multiple','max_price','min_price','cangfei','count_diyanfei','float_earn','platform_profit','create_money','rate','deal_money','count_deal_money','order_status'];
            }
        }else{
            if($type == 'chicang'){
                $head = ['ID','订单号','用户ID','手机号','股票名称','股票代码','股数','买入价格','买入时间','出售价格','出售时间','信用金','策略倍数','止盈','止损','建仓费','总递延费','浮动盈亏','订单创建金额','收益率','成交价格','成交总价','状态'];
                $body = ['id','order_no','user_id','user.phone','shares.name','code','num','price','created_at','deal_money','deal_time','xingyongjin','multiple','max_price','min_price','cangfei','count_diyanfei','float_earn','create_money','rate','deal_money','count_deal_money','order_status'];
            }elseif($type == 'pingcang'){
                $head = ['ID','订单号','用户ID','手机号','股票名称','股票代码','股数','买入价格','买入时间','出售价格','出售时间','信用金','返还金额','策略倍数','止盈','止损','建仓费','总递延费','订单盈亏','平台利润','订单创建金额','收益率','成交价格','成交总价','状态'];
                $body = ['id','order_no','user_id','user.phone','shares.name','code','num','price','created_at','deal_money','deal_time','xingyongjin','return_money','multiple','max_price','min_price','cangfei','count_diyanfei','float_earn','platform_profit','create_money','rate','deal_money','count_deal_money','order_status'];
            }
            
        }
        // 统计
        if(isset($request->order_on)&&$request->order_no){
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
      
      	if($type == 'chicang'){
        	$float_earns = 0;
          	if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
            	$tactics = Tactics::where($where)->when((Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id),function($query)use($users){
                    $query->whereIn('user_id',$users);
                })->join('shares','tactics.code','=','shares.code')->join('users','tactics.user_id','=','users.id')->select('tactics.*')->get();
            }else{
            	$tactics = Tactics::where($where)->join('shares','tactics.code','=','shares.code')->join('users','tactics.user_id','=','users.id')->select('tactics.*')->get();
            }
			
            $codes = $tactics->pluck('code')->unique();
            $codes = $codes->implode(',');
            $goods = getRealTimeInfos($codes);
//            print_r($goods);die;
			foreach($tactics as $tactic){
				if(isset($goods[$tactic->code])){
                    $good = $goods[$tactic->code];
                }else{
                    continue;
                }
				$float_earns += round(($good['current_price'] - $tactic->price) * $tactic->num,2);
			}
          	$counts = \DB::table('tactics')->select(\DB::raw('SUM(num) as num'),\DB::raw('SUM(xingyongjin) as xingyongjin'),\DB::raw('SUM(profit) as profit'),\DB::raw('SUM(platform_profit) as platform_profit'),\DB::raw('SUM(tactics.cangfei) as cangfei'),\DB::raw('SUM(tactics.diyanfei) as diyanfei'),\DB::raw('SUM(count_diyanfei) as count_diyanfei'),\DB::raw('SUM((`deal_money` - `price`) * `num`) as float_earns'))->where($where)->when($users,function($query)use($users){
				return $query->whereIn('user_id',$users);
			})->join('shares','tactics.code','=','shares.code')->join('users','tactics.user_id','=','users.id')->get();
        	$grid->countRaw = ['id' => '统计','num' => $counts[0]->num,'xingyongjin' => $counts[0]->xingyongjin,'profit'=>$counts[0]->profit,'platform_profit'=>$counts[0]->platform_profit,'cangfei'=>$counts[0]->cangfei,'diyanfei'=>$counts[0]->diyanfei,'count_diyanfei' => $counts[0]->count_diyanfei,'float_earn'=>isset($float_earns)?$float_earns:$counts[0]->float_earns];
        }else{
        	$counts = \DB::table('tactics')->select(\DB::raw('SUM(num) as num'),\DB::raw('SUM(count_xingyongjin) as count_xingyongjin'),\DB::raw('SUM(profit) as profit'),\DB::raw('SUM(platform_profit) as platform_profit'),\DB::raw('SUM(tactics.cangfei) as cangfei'),\DB::raw('SUM(tactics.diyanfei) as diyanfei'),\DB::raw('SUM(count_diyanfei) as count_diyanfei'),\DB::raw('SUM((`deal_money` - `price`) * `num`) as float_earns'),\DB::raw('SUM(commission) as commission'))->where($where)->when($users,function($query)use($users){
				return $query->whereIn('user_id',$users);
			})->join('shares','tactics.code','=','shares.code')->join('users','tactics.user_id','=','users.id')->get();
            $grid->countRaw = ['id' => '统计','num' => $counts[0]->num,'count_xingyongjin' => $counts[0]->count_xingyongjin,'profit'=>$counts[0]->profit,'platform_profit'=>$counts[0]->platform_profit,'cangfei'=>$counts[0]->cangfei,'diyanfei'=>$counts[0]->diyanfei,'count_diyanfei' => $counts[0]->count_diyanfei,'float_earn'=>isset($float_earns)?$float_earns:$counts[0]->float_earns,'commission'=>$counts[0]->commission];
            //$grid->countRaw = ['id' => '统计','num' => $counts[0]->num,'count_xingyongjin' => $counts[0]->count_xingyongjin,'profit'=>$counts[0]->profit,'platform_profit'=>$counts[0]->platform_profit,'cangfei'=>$counts[0]->cangfei,'diyanfei'=>$counts[0]->diyanfei,'count_diyanfei' => $counts[0]->count_diyanfei,'float_earn'=>isset($float_earns)?$float_earns:$counts[0]->float_earns,'shouyifencheng'=>$counts[0]->shouyifencheng];
        }
        $grid->exporter(new DealExpoter($tableName,$head,$body));
        // $grid->expandFilter();
        return $grid;
    }

    public function count(Content $content,Request $request)
    {
        $grid = Admin::grid(Shares::class, function(Grid $grid) use ($request){

            $where = $whereShares = [];
            
            $whereCount = [
                ['order_status',0],
                ['is_analog',0]
            ];
            if($request->shares['name']){
                $whereCount[] = $whereShares[] = ['shares.name','like','%'.$request->name.'%'];
            }
            if($request->code){
                $whereCount[] = $whereShares[] = ['shares.code','like','%'.$request->code.'%'];
            }
            
            if($request->tactics['created_at']['start']){
                $where[] = ['created_at.start',$request->tactics['created_at']['start']];
                $whereCount[] = ['tactics.created_at','>=',$request->tactics['created_at']['start']];
            }
            if($request->tactics['created_at']['end']){
                $where[] = ['created_at.end',$request->tactics['created_at']['end']];
                $whereCount[] = ['tactics.created_at','<=',$request->tactics['created_at']['end']];
            }

            $users = collect([]);
            if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
                $allAgents = User::where('level','>',0)->get();
                // 获取所有子集id
                $agents = getChildren($allAgents,Admin::user()->agent_id);
                $users = User::whereIn('pid',$agents)->where('level',0)->pluck('id');
            }

            $grid->model()->where($whereShares)->with(['tactics'])->orderBy('created_at','desc');
            // dd($grid->model()->tactics);
            $grid->id();
            $grid->code('股票代码')->sortable();
            $grid->name('股票名称')->sortable();
            $grid->column('tactics_count','创建策略次数')->display(function() use($where,$users) {
                return $this->tactics->reject(function ($value, $key) use($where) {
                    if($value->is_analog == 1 || $value->order_status != 0){
                        return true;
                    }
                    foreach($where as $item){
                        if($item[0] == 'code'){
                            if(strpos($value->code,$item[1]) === false){return true;}
                        }
                        if($item[0] == 'created_at.start'){
                            if($value['created_at'] <= $item[1]){return true;}
                        }
                        if($item[0] == 'created_at.end'){
                            if($value['created_at'] >= $item[1]){return true;}
                        }
                    }
                })->when($users->isNotEmpty(),function($collect) use ($users){
                    return $collect->whereIn('user_id',$users);
                })->count();
            });
            $grid->column('tactics_sum','创建策略总额')->display(function() use($where,$users) {
                return $this->tactics->reject(function ($value, $key) use($where) {
                    if($value->is_analog == 1 || $value->order_status != 0){
                        return true;
                    }
                    foreach($where as $item){
                        if($item[0] == 'code'){
                            if(strpos($value->code,$item[1]) === false){return true;}
                        }
                        if($item[0] == 'created_at.start'){
                            if($value['created_at'] <= $item[1]){return true;}
                        }
                        if($item[0] == 'created_at.end'){
                            if($value['created_at'] >= $item[1]){return true;}
                        }
                    }
                })->when($users->isNotEmpty(),function($collect) use ($users){
                    return $collect->whereIn('user_id',$users);
                })->sum('create_money');
            });
            $grid->column('xingyongjin_sum','信用金总额')->display(function() use($where,$users) {
                return $this->tactics->reject(function ($value, $key) use($where) {
                    if($value->is_analog == 1 || $value->order_status != 0){
                        return true;
                    }
                    foreach($where as $item){
                        if($item[0] == 'code'){
                            if(strpos($value->code,$item[1]) === false){return true;}
                        }
                        if($item[0] == 'created_at.start'){
                            if($value['created_at'] <= $item[1]){return true;}
                        }
                        if($item[0] == 'created_at.end'){
                            if($value['created_at'] >= $item[1]){return true;}
                        }
                    }
                })->when($users->isNotEmpty(),function($collect) use ($users){
                    return $collect->whereIn('user_id',$users);
                })->sum('xingyongjin');
            });
            $grid->column('deal_money_sum','交易综合费总额')->display(function() use($where,$users) {
                return $this->tactics->reject(function ($value, $key) use($where) {
                    if($value->is_analog == 1 || $value->order_status != 0){
                        return true;
                    }
                    foreach($where as $item){
                        if($item[0] == 'code'){
                            if(strpos($value->code,$item[1]) === false){return true;}
                        }
                        if($item[0] == 'created_at.start'){
                            if($value['created_at'] <= $item[1]){return true;}
                        }
                        if($item[0] == 'created_at.end'){
                            if($value['created_at'] >= $item[1]){return true;}
                        }
                    }
                })->when($users->isNotEmpty(),function($collect) use ($users){
                    return $collect->whereIn('user_id',$users);
                })->sum('count_deal_money');
            });
            $grid->column('diyanfei_sum','递延费总额')->display(function() use($where,$users) {
                return $this->tactics->reject(function ($value, $key) use($where) {
                    if($value->is_analog == 1 || $value->order_status != 0){
                        return true;
                    }
                    foreach($where as $item){
                        if($item[0] == 'code'){
                            if(strpos($value->code,$item[1]) === false){return true;}
                        }
                        if($item[0] == 'created_at.start'){
                            if($value['created_at'] <= $item[1]){return true;}
                        }
                        if($item[0] == 'created_at.end'){
                            if($value['created_at'] >= $item[1]){return true;}
                        }
                    }
                })->when($users->isNotEmpty(),function($collect) use ($users){
                    return $collect->whereIn('user_id',$users);
                })->sum('count_diyanfei');
            });
            $grid->column('return_money_sum','浮动盈亏总额')->display(function() use($where,$users) {
                return $this->tactics->reject(function ($value, $key) use($where) {
                    if($value->is_analog == 1 || $value->order_status != 0){
                        return true;
                    }
                    foreach($where as $item){
                        if($item[0] == 'code'){
                            if(strpos($value->code,$item[1]) === false){return true;}
                        }
                        if($item[0] == 'created_at.start'){
                            if($value['created_at'] <= $item[1]){return true;}
                        }
                        if($item[0] == 'created_at.end'){
                            if($value['created_at'] >= $item[1]){return true;}
                        }
                    }
                })->when($users->isNotEmpty(),function($collect) use ($users){
                    return $collect->whereIn('user_id',$users);
                })->sum('return_money');
            });

            $grid->filter(function($filter){
                // 去掉默认的id过滤器
                $filter->disableIdFilter();
                $filter->column(1/2, function ($filter) {
                    // 在这里添加字段过滤器
                    $filter->like('code', '股票代码');
                    $filter->like('name', '股票名称');
                });
                $filter->column(1/2, function ($filter) {
                    // 在这里添加字段过滤器
                    $filter->between('tactics.created_at', '创建时间')->datetime();
                    // $filter->between('tactics.deal_time', '交易时间')->datetime();
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
            $head = ['ID','股票代码','股票名称','创建策略次数','创建策略总额','信用金总额','交易综合费总额','递延费总额','浮动盈亏总额'];
            $body = ['id','code','name','tactics_count','tactics_sum','xingyongjin_sum','deal_money_sum','diyanfei_sum','return_money_sum'];
            // dd($request->all());
            // 统计
            $counts = \DB::table('tactics')->select(\DB::raw('count(1) as tactics_count'),\DB::raw('SUM(create_money) as tactics_sum'),\DB::raw('SUM(xingyongjin) as xingyongjin_sum'),\DB::raw('SUM(count_deal_money) as deal_money_sum'),\DB::raw('SUM(count_diyanfei) as diyanfei_sum'),\DB::raw('SUM(return_money) as return_money_sum'))->where($whereCount)->join('shares','tactics.code','=','shares.code')->join('users','tactics.user_id','=','users.id')->get();
            $grid->countRaw = ['id' => '统计','tactics_count' => $counts[0]->tactics_count,'tactics_sum' => $counts[0]->tactics_sum,'xingyongjin_sum' => $counts[0]->xingyongjin_sum,'deal_money_sum' => $counts[0]->deal_money_sum,'diyanfei_sum' => $counts[0]->diyanfei_sum,'return_money_sum' => $counts[0]->return_money_sum];

            $grid->exporter(new DealCountExpoter('持仓统计',$head,$body));
        });

        return $content
            ->header('持仓统计')
            ->description(' ')
            ->body($grid);
    }

    public function danger(Content $content)
    {
        $grid = Admin::grid(Shares::class, function(Grid $grid){
            $grid->model()->where('is_danger',1);
            $grid->id('ID');
            $grid->code('股票代码')->sortable();
            $grid->name('股票名称')->sortable();
            $grid->danger_reason('风险描述');
            $grid->actions(function (Grid\Displayers\Actions $actions) {
                $actions->disableView();
                $actions->disableEdit();
            });
            $grid->filter(function($filter){

                // 去掉默认的id过滤器
                $filter->disableIdFilter();
    
                $filter->column(1/2, function ($filter) {
                    // 在这里添加字段过滤器
                    $filter->like('code', '股票代码');
                    // $filter->like('code', '股票代码');
                });
                $filter->column(1/2, function ($filter) {
                    // 在这里添加字段过滤器
                    $filter->like('name', '股票名称');
                });
            });
            if(!Admin::user()->can('deal_danger_create')){
                $grid->disableCreateButton();//禁用创建按钮
            }
            if(!Admin::user()->can('deal_danger_delete')){
                $grid->disableRowSelector();//禁用行选择checkbox
                $grid->disableActions();
            }
            
            $head = ['ID','股票代码','股票名称','风险描述'];
            $body = ['id','code','name','danger_reason'];
            $grid->exporter(new DealExpoter('高风险股票',$head,$body));
        });
        return $content
            ->header('高风险股票')
            ->description(' ')
            ->body($grid);
    }

    public function dangerCreate(Content $content)
    {
        $form = Admin::form(Shares::class, function(Form $form){
            $form->listbox('ids','选择股票')->options(function($like){
                $res = Shares::select('id','name','code')->where('is_danger',0)->get();
                return $res->mapWithKeys(function($item){
                    return [$item->id => $item->code.'|'.$item->name];
                });
            });
            $form->textarea('danger_reason', '风险描述');
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
            ->header('Create')
            ->description('description')
            ->body($form);
    }

    public function dangerStore(Request $request)
    {
        Shares::whereIn('id',$request->ids)->update([
            'is_danger'=>1,
            'danger_reason'=>$request->danger_reason
        ]);
        $shares = Shares::whereIn('id',$request->ids)->pluck('code');
        $tactics = Tactics::with(['user','shares'])->whereIn('code',$shares)->get();
        $tactics = $tactics->unique(function($item){
            return $item['user_id'].'_'.$item['code'];
        });
        foreach($tactics as $tactic){
            $smsData = [
                'name' => config('sms.name'),
                'sign' => config('sms.sign'),
                'pwd' => config('sms.pwd'),
                'type' => config('sms.type'),
                'mobile' => $tactic->user->phone,
                'content' => "您的{$tactic->user->phone}账户购买的{$tactic->shares->name}-{$tactic->code}股票已被设为危险股票，最迟将会在明日14:40平仓！",
                'extno' => ''
            ];
            sendSms($smsData);
        }
    }

    public function destory($ids = 0){
        Shares::whereIn('id',explode(',',$ids))->update([
            'is_danger'=>0,
            'danger_reason'=>''
        ]);
    }

    public function pingcangCreate(Tactics $tactics,Content $content)
    {
        if($tactics->order_status){
            return redirect('/admin/deal/chicang');
        }
        $StockController = new StockController();
        $data = $StockController->getRealTimeInfo($tactics->code);
        $form = Admin::form(Shares::class, function(Form $form) use ($tactics,$data){
            $form->setAction("/admin/deal/pingcang/$tactics->id");
            $form->text('', '股票名称')->default($data['name'])->disable();
            $form->text('', '股票代码')->default($data['code'])->disable();
            $form->text('', '最新价格')->default($data['current_price'])->disable();
            $form->text('', '昨日收盘价')->default($data['yesterday_end_price'])->disable();
            $form->text('deal_money', '平仓价格')->default($data['current_price'])->disable();

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
        $today=date('Y-m-d').' 00:00:00';
        if($today>$tactic->created_at){
            if(!$tactic->order_status){
                $tacticsController = new TacticsController();
                $a=$tacticsController->pingcang($tactic,[],'后台平仓');
            }
            print_r($a);die;
            return redirect('/admin/deal/chicang');
        }else{
            admin_toastr('股票买入当日不可卖出','error');
            return redirect()->back();
        }
    }

    public function listener(Content $content)
    {
        $grid = Admin::grid(Charge::class, function(Grid $grid){
            $users = collect([]);
            if(Admin::user()->inRoles(['level_1', 'level_2', 'level_3']) && Admin::user()->agent_id){
                $allAgents = User::where('level','>',0)->get();
                // 获取所有子集id
                $agents = getChildren($allAgents,Admin::user()->agent_id);
                $users = User::whereIn('pid',$agents)->where('level',0)->pluck('id');
            }
            $grid->model()->when($users->isNotEmpty(),function($query) use ($users){
                $query->whereIn('user_id',$users);
            })->where('is_analog',0)->whereIn('type',[2,3])->where('created_at','>=',Carbon::today())->orderBy('created_at','desc')->with(['tactics.shares']);
            $grid->column('user.name','用户名');
            $grid->column('agent','代理商')->display(function(){
                if($this->user->level_upper){
                    return $this->user->level_upper->name;
                }else{
                    return '';
                }
            });
            $grid->column('tactics.order_no','单号')->sortable();
            $grid->column('tactics.code','股票代码')->sortable();
            $grid->column('shares_name','股票名称')->display(function(){
                return $this->tactics->shares->name;
            })->sortable();
            $grid->column('business_direction','买卖方向')->display(function(){
                return $this->type == 2?'买入':'卖出';
            });
            $grid->money('金额');
            $grid->column('deal_money','成交价格')->display(function(){
                return $this->type == 2?$this->tactics->price:$this->tactics->deal_money;
            });
            $grid->column('tactics.num','股数');
            $grid->column('deal_time','成交时间')->display(function(){
                // dump($this);
                return $this->type == 2?$this->tactics->created_at->toDateTimeString():$this->tactics->deal_time;
            });
            $grid->info('交易说明');
            
            $grid->actions(function (Grid\Displayers\Actions $actions) {
                $actions->disableView();
                $actions->disableEdit();
            });
            $grid->filter(function($filter){

                // 去掉默认的id过滤器
                $filter->disableIdFilter();
    
                $filter->column(1/2, function ($filter) {
                    // 在这里添加字段过滤器
                    $filter->like('tactics.code', '股票代码');
                    // $filter->like('tactics.shares.name', '股票名称');
                });
                $filter->column(1/2, function ($filter) {
                    // 在这里添加字段过滤器
                    $agents = User::where('level','>',0)->pluck('name','id');
                    $filter->equal('user.pid','代理商')->select($agents);
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
            
            $head = ['用户名','代理商','股票代码','股票名称','买卖方向','创建策略金额','成交价格','股数','成交时间','交易说明'];
            $body = ['user.name','agent','tactics.code','shares_name','business_direction','money','deal_money','tactics.num','deal_time','info'];
            $grid->exporter(new DealListenerExpoter(Carbon::today()->toDateString().'成交监控',$head,$body));
        });
        Admin::script($this->script(Charge::orderBy('id','desc')->first()->id,csrf_token()));
        return $content
            ->header('持仓监控')
            ->description(' ')
            ->body($grid);
    }


    public function hot(Content $content)
    {
        $grid = Admin::grid(Shares::class, function(Grid $grid){
            $grid->model()->where('is_hot',1);
            $grid->id('ID');
            $grid->code('股票代码')->sortable();
            $grid->name('股票名称')->sortable();
            $grid->actions(function (Grid\Displayers\Actions $actions) {
                $actions->disableView();
                $actions->disableEdit();
            });
            $grid->filter(function($filter){

                // 去掉默认的id过滤器
                $filter->disableIdFilter();

                $filter->column(1/2, function ($filter) {
                    // 在这里添加字段过滤器
                    $filter->like('code', '股票代码');
                    // $filter->like('code', '股票代码');
                });
                $filter->column(1/2, function ($filter) {
                    // 在这里添加字段过滤器
                    $filter->like('name', '股票名称');
                });
            });
            if(!Admin::user()->can('deal_hot_create')){
                $grid->disableCreateButton();//禁用创建按钮
            }
            if(!Admin::user()->can('deal_hot_delete')){
                $grid->disableRowSelector();//禁用行选择checkbox
                $grid->disableActions();
            }

            $head = ['ID','股票代码','股票名称'];
            $body = ['id','code','name'];
            $grid->exporter(new DealExpoter('热门股票',$head,$body));
        });
        return $content
            ->header('热门股票')
            ->description(' ')
            ->body($grid);
    }

    public function hotCreate(Content $content)
    {
        $form = Admin::form(Shares::class, function(Form $form){
            $form->listbox('ids','选择股票')->options(function($like){
                $res = Shares::select('id','name','code')->where('is_danger',0)->get();
                return $res->mapWithKeys(function($item){
                    return [$item->id => $item->code.'|'.$item->name];
                });
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
            ->header('Create')
            ->description('description')
            ->body($form);
    }

    public function hotStore(Request $request)
    {
        Shares::whereIn('id',$request->ids)->update([
            'is_hot'=>1,
        ]);
    }

    public function hotdestory($ids = 0){
        Shares::whereIn('id',explode(',',$ids))->update([
            'is_hot'=>0,
        ]);
    }










    
    public function listenerNew(Request $request)
    {
        $id = $request->_id;
        $charge = Charge::where('id','>',$id)->where('is_analog',0)->whereIn('type',[2,3])->first();
        if($charge){
            return ['status' => true];
        }else{
            return ['status' => false];
        }
    }

    protected function script($_id,$token)
    {
        return <<<SCRIPT
        setInterval(function(){
            $.ajax({
                url:'/admin/deal/listener',
                type:'post',
                dataType:'json',
                data: {
                    _token:'$token',
                    _id:$_id
                },
                success:function(data){
                    if(data.status == true){
                        window.location.reload();
                    }
                }
            })
        }, 3000);

SCRIPT;
    }
}
