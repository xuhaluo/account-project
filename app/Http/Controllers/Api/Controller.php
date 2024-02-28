<?php
/*
 本代码由 PHP代码加密工具 Xend(Build 5.00.08) 创建
 创建时间 2019-04-23 14:56:54
 技术支持 QQ:30370740 Mail:support@phpXend.com
 严禁反编译、逆向等任何形式的侵权行为，违者将追究法律责任
*/

namespace App\Http\Controllers\Api;use Illuminate\Http\Request;use Dingo\Api\Routing\Helpers;use App\Http\Controllers\Controller as BaseController;use Symfony\Component\HttpKernel\Exception\HttpException;class Controller extends BaseController{use Helpers;public function errorResponse($statusCode,$message=null,$code=0){$H2t0=new HttpException($statusCode,$message,null,[],$code);throw $H2t0;}}
?>