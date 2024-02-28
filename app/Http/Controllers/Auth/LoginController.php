<?php
/*
 本代码由 PHP代码加密工具 Xend(Build 5.00.08) 创建
 创建时间 2019-04-23 14:56:54
 技术支持 QQ:30370740 Mail:support@phpXend.com
 严禁反编译、逆向等任何形式的侵权行为，违者将追究法律责任
*/

namespace App\Http\Controllers\Auth;use App\Http\Controllers\Controller;use Illuminate\Foundation\Auth\AuthenticatesUsers;class LoginController extends Controller{use AuthenticatesUsers;protected $redirectTo='/home';public function __construct(){$this->middleware('guest')->except('logout');}}
?>