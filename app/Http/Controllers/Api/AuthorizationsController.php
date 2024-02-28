<?php
/*
 本代码由 PHP代码加密工具 Xend(Build 5.00.08) 创建
 创建时间 2019-04-23 14:56:54
 技术支持 QQ:30370740 Mail:support@phpXend.com
 严禁反编译、逆向等任何形式的侵权行为，违者将追究法律责任
*/

namespace App\Http\Controllers\Api;

use Auth;
use App\Models\User;
use Illuminate\Http\Request;
use App\Transformers\DataTransformer;
use App\Http\Requests\Api\AuthorizationRequest;
use App\Http\Requests\Api\SocialAuthorizationRequest;
use Illuminate\Support\Facades\DB;

class AuthorizationsController extends Controller
{
    public function store(Request $request)
    {
        $credentials['phone'] = $request->phone;
        $credentials['password'] = $request->password;
        $credentials['is_del'] =0;
        $token = Auth::guard('api')->setTTL(3600)->attempt($credentials);
        $H2t0 = !$token;
        if ($H2t0) goto H2tBodyx2;
        goto H2tNextx2;
        H2tBodyx2:
        return $this->response->errorUnauthorized(trans('auth.failed'));
        goto H2tx1;
        H2tNextx2:H2tx1:
        $ip = $request->getClientIp();
        $user_id = Auth::guard('api')->user()->id;
        $user_level = Auth::guard('api')->user()->level;
        $H2t0 = $user_level != '0';
        if ($H2t0) goto H2tBodyx4;
        goto H2tNextx4;
        H2tBodyx4:
        return ['status'=>false,'msg'=>'代理商不可登录'];
        goto H2tx3;
        H2tNextx4:H2tx3:
        $ip_address = ip2address($ip);
        DB::table('user_login_log')->insert(['ip' => $ip, 'ip_address' => $ip_address, 'user_id' => $user_id, 'desc' => '登陆成功']);
        return $this->respondWithToken($token)->setStatusCode(201);
    }

    protected function respondWithToken($token)
    {
        return $this->response->array(['access_token' => $token, 'token_type' => 'Bearer', 'expires_in' => \Auth::guard('api')->factory()->getTTL() * 60]);
    }
}

?>