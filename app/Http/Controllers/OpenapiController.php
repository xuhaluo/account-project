<?php
/*
 �������� PHP������ܹ��� Xend(Build 5.00.08) ����
 ����ʱ�� 2019-04-23 14:56:54
 ����֧�� QQ:30370740 Mail:support@phpXend.com
 �Ͻ������롢������κ���ʽ����Ȩ��Ϊ��Υ�߽�׷����������
*/

namespace App\Http\Controllers;use App\Http\Controllers\Api\StockController;use Illuminate\Http\Request;use App\Http\Controllers\Controller;class OpenapiController extends Controller{public function index(){$code='GBPUSD,EURUSD,hf_NG,hf_CL';$prices=get_price_moneys($code);return $prices;}}
?>