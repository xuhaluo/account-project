<?php
/*
 �������� PHP������ܹ��� Xend(Build 5.00.08) ����
 ����ʱ�� 2019-04-23 14:56:54
 ����֧�� QQ:30370740 Mail:support@phpXend.com
 �Ͻ������롢������κ���ʽ����Ȩ��Ϊ��Υ�߽�׷����������
*/

namespace App\Http\Controllers\Auth;use App\Http\Controllers\Controller;use Illuminate\Foundation\Auth\AuthenticatesUsers;class LoginController extends Controller{use AuthenticatesUsers;protected $redirectTo='/home';public function __construct(){$this->middleware('guest')->except('logout');}}
?>