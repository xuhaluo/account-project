<?php

use Illuminate\Routing\Router;

Admin::registerAuthRoutes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
], function (Router $router) {

    //首页
    $router->get('/', 'HomeController@index');

    //系统日志
    $router->get('/log/register/code', 'RegisterCodeController@index');
    $router->get('/log/user/login', 'UserLoginController@index');
    $router->get('/log/notice/send', 'NoticeSendController@index');

    //公告管理
    $router->post('/announcement/create_save', 'AnnouncementController@create_save');
    $router->put('/announcement/edit_save', 'AnnouncementController@edit_save');
    $router->get('/announcement/create', 'AnnouncementController@create');
    $router->get('/announcement', 'AnnouncementController@index');
    $router->delete('/announcement/{id}', 'AnnouncementController@delete');
    $router->get('/announcement/{id}/edit', 'AnnouncementController@edit');

    //银行卡管理
    $router->get('/bankcard/create', 'BankcardController@create');
    $router->get('/bankcard/create/agent', 'BankcardController@create_agent');
    $router->post('/bankcard/create_save', 'BankcardController@create_save');
    $router->put('/bankcard/edit_save', 'BankcardController@edit_save');
    $router->get('/bankcard', 'BankcardController@index');
    $router->delete('/bankcard/{id}', 'BankcardController@delete');
    $router->get('/bankcard/{id}/edit', 'BankcardController@edit');

    //代理商管理
    $router->get('/agent/count', 'AgentController@agent_count');
    $router->get('/agent/balance_clear', 'AgentController@balance_clear');
    $router->get('/agent/withdraw', 'AgentController@withdraw');
    $router->get('/agent/withdraw/deal', 'AgentController@withdraw_deal');
    $router->post('/agent/withdraw/deal_save', 'AgentController@withdraw_deal_save');
    $router->get('/agent/withdraw_check', 'AgentController@withdraw_check');
    $router->get('/agent/spread', 'AgentController@spread');
    $router->get('/agent/generate_qrcode/{id}', 'AgentController@generate_qrcode');
    $router->get('/agent/create', 'AgentController@create');
    $router->get('/agent/create/upper/{id}', 'AgentController@upper');
    $router->get('/agent/freeze', 'AgentController@freeze');
    $router->put('/agent/edit_save', 'AgentController@edit_save');
    $router->post('/agent/create_save', 'AgentController@create_save');
    $router->get('/agent', 'AgentController@index');
//    $router->get('/agent/{id}', 'AgentController@show');
    $router->delete('/agent/{id}', 'AgentController@delete');
    $router->get('/agent/{id}/edit', 'AgentController@edit');

    //客户管理
    $router->get('/user/count', 'UserController@count_user');
    $router->get('/user/create', 'UserController@create');
    $router->get('/user/freeze', 'UserController@freeze');
    //审核操作
    $router->get('/user/review', 'UserController@review');
    $router->get('/user/agent', 'UserController@agent_new');
    $router->put('/user/edit_save', 'UserController@edit_save');
    $router->post('/user/create_save', 'UserController@create_save');
    $router->get('/user/agent_save', 'UserController@agent_save');
    $router->get('/user', 'UserController@index');
    $router->get('/user/{id}', 'UserController@show');
    $router->get('/user/{id}/edit', 'UserController@edit');

    //交易管理
    $router->get('/deal/hot','DealController@hot');
    $router->get('/deal/hot/create','DealController@hotCreate');
    $router->post('/deal/hot','DealController@hotStore');
    $router->delete('/deal/hot/{ids?}','DealController@hotdestory');


    $router->get('/deal/danger','DealController@danger');
    $router->get('/deal/danger/create','DealController@dangerCreate');
    $router->post('/deal/danger','DealController@dangerStore');
    $router->delete('/deal/danger/{ids?}','DealController@destory');
    $router->get('/deal/listener','DealController@listener');
    $router->post('/deal/listener','DealController@listenerNew');
    $router->get('/deal/{type}','DealController@index');
    $router->get('/deal/chicang/count','DealController@count');
    $router->get('/deal/pingcang/{tactics}','DealController@pingcangCreate');
    $router->post('/deal/pingcang/{tactics}','DealController@pingcang');

    $router->get('/actual/pingcang/{tactics}','ActualController@pingcangCreate');
    $router->post('/actual/pingcang/{tactics}','ActualController@pingcang');


    //资金管理模块
    $router->get('/recharge/{type}', 'OnlinechargesController@index');
    $router->get('/recharge/deposit/withdraw_check', 'OnlinechargesController@withdraw_check');
	$router->get('/recharge/deposit/recharge_check', 'OnlinechargesController@recharge_check');
	
    //配置模块
    $router->get('/setting/list', 'SettingController@index');
    $router->get('/setting/list/{id}/edit', 'SettingController@edit');
    $router->get('/setting/list/create', 'SettingController@create');
    $router->put('/setting/list/edit_save', 'SettingController@edit_save');
    $router->post('/setting/list/create_save', 'SettingController@create_save');
    $router->delete('/setting/list/{id}', 'SettingController@delete');
    //充值图片上传
    $router->get('/setting/recharge', 'SettingController@recharge');
    $router->get('/setting/recharge/{id}/edit', 'SettingController@rechargeShow');
    $router->put('/setting/recharge/save_img', 'SettingController@save_img');

    //股票配置
    $router->post('/stock/stocklist/import/shares','StockController@import');
    $router->get('/stock/stocklist/import','StockController@import_shares');
    $router->get('/stock/stocklist','StockController@index');
    $router->get('/stock/stocklist/{id}/edit', 'StockController@edit');
    $router->get('/stock/stocklist/create', 'StockController@create');
    $router->post('/stock/stocklist/create_save', 'StockController@create_save');
    $router->put('/stock/stocklist/edit_save', 'StockController@edit_save');
    $router->delete('/stock/stocklist/{id}', 'StockController@delete');
    
    //提款操作编辑
    // $router->resource('storage', 'StorageController');
    // $router->resource('procedure', 'ProcedureController');
    // $router->resource('commission', 'CommissionController');

    //实盘管理
    $router->get('/actual/count','ActualController@count');
    $router->get('/actual/{type}','ActualController@index');

    //模拟大赛管理
    $router->get('/simmanage/{type}', 'SimmanageController@index');
    $router->get('/simmanage/simcloseout','SimmanageController@simcloseout');
    $router->post('/simmanage/pingcang/{tactics}','SimmanageController@pingcang');
    $router->get('/simmanage/pingcang/{tactics}','SimmanageController@pingcangCreate');

});
