<?php
/*
 �������� PHP������ܹ��� Xend(Build 5.00.08) ����
 ����ʱ�� 2019-04-23 14:56:54
 ����֧�� QQ:30370740 Mail:support@phpXend.com
 �Ͻ������롢������κ���ʽ����Ȩ��Ϊ��Υ�߽�׷����������
*/

namespace App\Http\Controllers\Api;use Illuminate\Http\Request;use Dingo\Api\Routing\Helpers;use App\Http\Controllers\Controller as BaseController;use Symfony\Component\HttpKernel\Exception\HttpException;class Controller extends BaseController{use Helpers;public function errorResponse($statusCode,$message=null,$code=0){$H2t0=new HttpException($statusCode,$message,null,[],$code);throw $H2t0;}}
?>