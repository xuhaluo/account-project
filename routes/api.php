<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$api = app('Dingo\Api\Routing\Router');
$api->version('v1', [
    'namespace' => 'App\Http\Controllers\Api',
    //'middleware' => ['serializer:array', 'bindings', 'change-locale']
], function($api) {
    $api->get('version', function() {
        return response('this is version v1');
    });
    // ws
    $api->get('ws', 'WSController@index');//登录初始化
    $api->get('Trade_QueryData', 'WSController@Trade_QueryData');//查询交易数据
    $api->get('old_Trade_QueryData', 'WSController@old_Trade_QueryData');//查询交易数据
    $api->get('Trade_QueryHisData', 'WSController@Trade_QueryHisData');//查询历史交易数据
    $api->get('Trade_QueryQuote', 'WSController@Trade_QueryQuote');//5档行情查询
    $api->get('Trade_CommitOrder', 'WSController@Trade_CommitOrder');//交易委托
    $api->get('Trade_CancelOrder', 'WSController@Trade_CancelOrder');//撤销交易委托
    $api->get('Trade_IPO', 'WSController@Trade_IPO');//一键打新股
    $api->get('Trade_SellAll', 'WSController@Trade_SellAll');//一键清仓
    $api->get('Trade_TradableCount', 'WSController@Trade_TradableCount');//获取可交易数量
    $api->get('Trade_CheckStatus', 'WSController@Trade_CheckStatus');//查询交易连接状态
    $api->get('Trade_LogOut', 'WSController@Trade_LogOut');//退出交易服务器

    $api->group([
        'middleware' => 'api.throttle',
        'limit' => config('api.rate_limits.sign.limit'),
        'expires' => config('api.rate_limits.sign.expires'),
    ], function ($api) {
        // 用户注册
        $api->post('users', 'UsersController@store')
            ->name('api.users.store');
        // 登录
        $api->post('authorizations', 'AuthorizationsController@store')
            ->name('api.authorizations.store');
        // 刷新token
        $api->put('authorizations/current', 'AuthorizationsController@update')
            ->name('api.authorizations.update');
        // 删除token
        $api->delete('authorizations/current', 'AuthorizationsController@destroy')
            ->name('api.authorizations.destroy');
        //首页
        $api->get('index','IndexController@index')
            ->name('api.index.index');

        $api->get('get_price/{code}','IndexController@getprice')
            ->name('api.index.get_price');

        $api->get('stock','StockController@index')
            ->name('api.stock.index');
        //搜索
        $api->get('stock/search','StockController@search')
            ->name('api.stock.search');
        $api->get('tactics/deal','TacticsController@deal')
            ->name('api.tactics.deal');
        //文章
        $api->get('articleTypes','ArticleController@articleTypes')
            ->name('api.article.articleTypes');

        $api->get('information','ArticleController@information')
            ->name('api.article.information');

        $api->get('articles/{article_type}','ArticleController@articles')
            ->name('api.article.articles');
        
        $api->get('article/{article}','ArticleController@article')
            ->name('api.article.article');

        // 首页动态、策略
        $api->get('tactics/home/{type}','TacticsController@tacticsHome')
            ->name('api.tactics.home');
        // 动态、策略列表
        $api->get('tactics/list/{type}','TacticsController@tacticsList')
            ->name('api.tactics/list');

        // 发送验证码
        $api->post('verificationCode/{type}','VerificationCodeController@send')
            ->name('api.verificationCode.send');
        // 忘记密码(修改)
        $api->post('forgetPassword','UsersController@forgetPassword')
            ->name('api.forgetPassword');
        //获取仓费
        $api->get('tactics/storage','TacticsController@storage')
            ->name('api.tactics.storage');
        //股票信息
        $api->get('stock/getprice/','StockController@getprice')
            ->name('api.stock.getprice');
        $api->get('stock/getRealTimeInfos/{codes}','StockController@getRealTimeInfos')
            ->name('api.stock.getRealTimeInfos');
        // 股票k线图数据（腾讯api）
        $api->get('stock/kline/{type}/{code}','StockController@getKLine')
            ->name('api.stock.getKLine');
        $api->get('stock/realTimeInfo/{code}','StockController@getRealTimeInfo')
            ->name('api.stock.getRealTimeInfo');

        //用户历史记录
        $api->get('goods/hot','GoodsController@hot')
            ->name('api.goods.hot');
    });
	
	$api->get('apps','UsersController@apps')
	->name('api.apps');

    //不同策略组合计算递延费，建仓费
    $api->post('tactics/procedure','TacticsController@procedure')
    ->name('api.tactics.procedure');
    
    //不递延
    $api->get('notDiyan','CrontabController@notDiyan')
        ->name('api.crontab.notDiyan');
    //自动递延
    $api->get('isDiyan','CrontabController@isDiyan')
        ->name('api.crontab.isDiyan');
    // 递延费短信提醒       每天一次
    $api->get('diyanfeiSms','CrontabController@diyanfeiSms')
    ->name('api.crontab.diyanfeiSms');
    // 止损平仓         每秒一次
    $api->get('stopLosePingcang','CrontabController@stopLosePingcang')
        ->name('api.crontab.stopLosePingcang');
    // 高风险平仓       每天一次
    $api->get('dangerPingcang','CrontabController@dangerPingcang')
        ->name('api.crontab.dangerPingcang');
    // 持仓到期平仓       每天一次
    $api->get('maxDayPingcang','CrontabController@maxDayPingcang')
    ->name('api.crontab.maxDayPingcang');


    $api->get('banks','PayController@banks');

    // 支付回调
    $api->post('notify','PayController@notify')
        ->name('api.notify');

    // 支付回调
    $api->post('Dfnotify','PayController@Dfnotify')
        ->name('api.pay.Dfnotify');
    
    $api->get('multiple','TacticsController@multiple')
        ->name('api.multiple');
    
    //最牛达人
    $api->get('getbestinfo_nologin','BestmanController@getbestinfo')->name('api.bestman.getbestinfo');
    //更多动态
    $api->get('morebestmaninfo','BestmanController@morebestmaninfo')->name('api.bestman.morebestmaninfo');
    $api->get('hotshare','TacticsController@hotshare')->name('api.tactics.hotshare');
    $api->get('contactWay','UsersController@contactWay')->name('api.users.contactWay');
    // 获取支付金额
	$api->get('moneys','PayController@moneys')
		->name('api.pay.moneys');
       // 充值信息

          $api->get('recharge','UsersController@rechargeImg')
          ->name('api.user.recharge');




    $api->group(['middleware' => 'api.auth'],function ($api){
        $api->get('getbestinfo_login','BestmanController@getbestinfo')->name('api.bestman.getbestinfo');
        //当前登陆用户信息
        $api->get('user','UsersController@me')
            ->name('api.user.show');
        
        //银行卡管理
        $api->get('cardmanger','UsersController@cardmanger')->name('api.user.cardmanger');
        //修改用户头像
        $api->post("avatar",'UsersController@avatar')->name('api.user.avatar');

        //上传实名信息
        $api->post("real_user",'UsersController@real_user')->name('api.user.real_user');
        $api->post("uploads",'UsersController@uploads')->name('api.user.uploads');
        $api->post("query",'UsersController@query')->name('api.user.query');
        $api->post("Open_bank",'UsersController@Open_bank')->name('api.user.Open_bank');
        //修改用户信息
        $api->post("changeuserdata",'UsersController@changeuserdata')->name('api.user.changeuserdata');
        //修改密码
        $api->post("changeuserpwd",'UsersController@changeuserpwd')->name('api.user.changeuserpwd');
        //我关注的牛人
        $api->get("myfocus",'UsersController@myfocus')->name('api.user.myfocus');
        //合作协议
        $api->get("agreement",'UsersController@agreement')->name('api.user.agreement');
        //公告
        $api->get("park",'UsersController@park')->name('api.user.park');
        //公告详情
        $api->get("parkdetail",'UsersController@parkdetail')->name('api.user.parkdetail');
        //支付协议
        $api->get("payagreement",'UsersController@payagreement')->name('api.user.payagreement');
        //资金明细
        $api->get("financialdetails",'UsersController@financialdetails')->name('api.user.financialdetails');
        $api->get('bestmaninfo','BestmanController@bestmaninfo')->name('api.bestman.bestmaninfo');
        //跟买
        $api->post('followbuy','BestmanController@followbuy')->name('api.bestman.followbuy');
        //新跟买，上面的可能用不到
        $api->post('newfollowbuy','BestmanController@newfollowbuy')->name('api.bestman.newfollowbuy');

        $api->post('selfstock','SelfstockController@store')
            ->name('api.selfstock.store');
        $api->delete('selfstock','SelfstockController@destroy')
            ->name('api.selfstock.destroy');
        $api->get('selfstock','SelfstockController@index')
            ->name('api.selfstock.index');
        $api->get('getprice','SelfstockController@getprice')
            ->name('api.selfstock.getprice');
        // 发布策略
        $api->post('tactics','TacticsController@store')
            ->name('api.tactics.store');
        //手动交易
        $api->post('tactics/sale','TacticsController@sale')
            ->name('api.tactics.sale');
        //手动追加信用金
        $api->post('tactics/addshoudong','TacticsController@addShoudong')
            ->name('api.tactics.addshoudong');
        //修改止损价格
        $api->post('tactics/editprice','TacticsController@editMinPrice')
            ->name('api.tactics.editprice');
        //是否递延
        $api->post('tactics/issell','TacticsController@isSell')
            ->name('api.tactics.issell');
        // 用户资金持仓统计
        $api->get('accountCount/{type}','GoodsController@accountCount')
            ->name('api.goods.accountCount');
        // 用户策略统计
        $api->get('shareCount/{type}','GoodsController@shareCount')
        ->name('api.goods.shareCount');
        //用户持仓
        $api->get('strategyChiCang/{type}','GoodsController@strategyChiCang')
            ->name('api.goods.strategyChiCang');
        $api->get('strategyChiCangPc/{type}','GoodsController@strategyChiCangPc')
            ->name('api.goods.strategyChiCangPc');
        //用户历史记录
        $api->get('strategyHistory/{type}','GoodsController@strategyHistory')
            ->name('api.goods.strategyHistory');
        $api->get('strategyHistoryPc/{type}','GoodsController@strategyHistoryPc')
            ->name('api.goods.strategyHistoryPc');
        //用户委托
        $api->get('strategyEntrust','GoodsController@strategyEntrust')
            ->name('api.goods.strategyEntrust');
        $api->get('strategyEntrustPc','GoodsController@strategyEntrustPc')
            ->name('api.goods.strategyEntrustPc');


        //搜索
        $api->post('search','SearchController@store')
            ->name('api.search.store');
        //搜索
        $api->get('search','SearchController@index')
            ->name('api.search.index');
        //搜索删除
        $api->delete('search','SearchController@delete')
            ->name('api.search.delete');
        //自选股票搜索
        $api->get('selfstock/search','SelfstockController@search')
            ->name('api.search.search');
        //持仓市值
        $api->get('goods/asset','GoodsController@asset')
            ->name('api.goods.asset');

        // 绑卡
        $api->post('bindCard','PayController@bindCard')
            ->name('api.pay.bind');
        // 已绑卡号
        $api->get('cards','PayController@cards')
            ->name('api.pay.cards');
        // 生成支付订单
        $api->post('payOrder','PayController@payOrder1')
            ->name('api.pay.order');
        // 生成支付订单
        $api->post('DfPayOrder','PayController@DfPayOrder')
            ->name('api.pay.DfPayOrder');


        // 支付
        $api->post('pay','PayController@pay')
            ->name('api.pay');
        // 发送提现验证码
        $api->get('tixianCode','PayController@tixianCode')
            ->name('api.tixianCode');
        // 提现
        $api->post('tixian','PayController@tixian')
            ->name('api.pay.tixian');
        //粉丝
        $api->post('follow','FollowController@store')
            ->name('api.follow.store');
        // $api->delete('follow','FollowController@destroy')
        //     ->name('api.follow.destroy');
        $api->get('following','FollowController@following')
            ->name('api.follow.following');
        $api->post('epay','PayController@epay')
            ->name('api.epay');

        $api->post('twopay','PayController@twopay')
            ->name('api.twopay');

        $api->post('threepay','PayController@threepay')
            ->name('api.threepay');

        $api->post('payGo','PayController@payGo');
    });
    //起点支付回调
    $api->any('payNotify','PayController@payNotify');
    $api->any('epayNotify','PayController@epayNotify');
    $api->any('twoNotify','PayController@twoNotify');
    $api->any('threeNotify','PayController@threeNotify');






});
