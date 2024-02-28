<?php
/*
 本代码由 PHP代码加密工具 Xend(Build 5.00.08) 创建
 创建时间 2019-04-23 14:56:54
 技术支持 QQ:30370740 Mail:support@phpXend.com
 严禁反编译、逆向等任何形式的侵权行为，违者将追究法律责任
*/

namespace App\Http\Controllers;use Illuminate\Http\Request;class HomeController extends Controller{public function __construct(){$this->middleware('auth');}public function index(){dd(isJiaoYi());return view('home');}}
?>