<?php
/*
 �������� PHP������ܹ��� Xend(Build 5.00.08) ����
 ����ʱ�� 2019-04-23 14:56:54
 ����֧�� QQ:30370740 Mail:support@phpXend.com
 �Ͻ������롢������κ���ʽ����Ȩ��Ϊ��Υ�߽�׷����������
*/

namespace App\Http\Controllers;use Illuminate\Http\Request;class HomeController extends Controller{public function __construct(){$this->middleware('auth');}public function index(){dd(isJiaoYi());return view('home');}}
?>