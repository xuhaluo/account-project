<?php
/*
 本代码由 PHP代码加密工具 Xend(Build 5.00.08) 创建
 创建时间 2019-04-23 14:56:54
 技术支持 QQ:30370740 Mail:support@phpXend.com
 严禁反编译、逆向等任何形式的侵权行为，违者将追究法律责任
*/

namespace App\Http\Controllers\Api;use Illuminate\Http\Request;use Illuminate\Support\Facades\DB;class ProceduresController extends Controller{public function show(){$procedure=DB::table('procedures')->select('cangfei','diyanfei')->first();if($procedure)goto H2tBodyx2;goto H2tNextx2;H2tBodyx2:return ['status'=>true,'data'=>$procedure];goto H2tx1;H2tNextx2:return ['status'=>false,'msg'=>'手续费不存在'];H2tx1:}}
?>