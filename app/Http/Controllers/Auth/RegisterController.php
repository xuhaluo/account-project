<?php
/*
 本代码由 PHP代码加密工具 Xend(Build 5.00.08) 创建
 创建时间 2019-04-23 14:56:54
 技术支持 QQ:30370740 Mail:support@phpXend.com
 严禁反编译、逆向等任何形式的侵权行为，违者将追究法律责任
*/

namespace App\Http\Controllers\Auth;use App\Models\User;use App\Http\Controllers\Controller;use Illuminate\Support\Facades\Validator;use Illuminate\Foundation\Auth\RegistersUsers;class RegisterController extends Controller{use RegistersUsers;protected $redirectTo='/home';public function __construct(){$this->middleware('guest');}protected function validator(array $data){return Validator::make($data,['name'=>'required|string|max:255','email'=>'required|string|email|max:255|unique:users','password'=>'required|string|min:6|confirmed',]);}protected function create(array $data){return User::create(['name'=>$data['name'],'email'=>$data['email'],'password'=>bcrypt($data['password']),]);}}
?>