<?php
/*
 �������� PHP������ܹ��� Xend(Build 5.00.08) ����
 ����ʱ�� 2019-04-23 14:56:54
 ����֧�� QQ:30370740 Mail:support@phpXend.com
 �Ͻ������롢������κ���ʽ����Ȩ��Ϊ��Υ�߽�׷����������
*/

namespace App\Http\Controllers\Api;use Illuminate\Http\Request;use App\Http\Controllers\Controller;class IndexController extends Controller{public function index(){$this->getprice('sh601006');}public function getprice($code){$contents=get_price($code);return array('status'=>true,'info'=>$contents,'code'=>$code);}}
?>