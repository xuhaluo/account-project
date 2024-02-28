<?php
/*
 �������� PHP������ܹ��� Xend(Build 5.00.08) ����
 ����ʱ�� 2019-04-23 14:56:54
 ����֧�� QQ:30370740 Mail:support@phpXend.com
 �Ͻ������롢������κ���ʽ����Ȩ��Ϊ��Υ�߽�׷����������
*/

namespace App\Http\Controllers\Auth;use App\Models\User;use App\Http\Controllers\Controller;use Illuminate\Support\Facades\Validator;use Illuminate\Foundation\Auth\RegistersUsers;class RegisterController extends Controller{use RegistersUsers;protected $redirectTo='/home';public function __construct(){$this->middleware('guest');}protected function validator(array $data){return Validator::make($data,['name'=>'required|string|max:255','email'=>'required|string|email|max:255|unique:users','password'=>'required|string|min:6|confirmed',]);}protected function create(array $data){return User::create(['name'=>$data['name'],'email'=>$data['email'],'password'=>bcrypt($data['password']),]);}}
?>