<?php
/*
 本代码由 PHP代码加密工具 Xend(Build 5.00.08) 创建
 创建时间 2019-04-23 14:56:54
 技术支持 QQ:30370740 Mail:support@phpXend.com
 严禁反编译、逆向等任何形式的侵权行为，违者将追究法律责任
*/

namespace App\Http\Controllers\Api;use App\Models\Follow;use Illuminate\Support\Facades\DB;use App\Models\User;use Auth;use Illuminate\Http\Request;use App\Http\Controllers\Controller;class FollowController extends Controller{public function store(Request $request){$user=Auth::user();$user_id=$user->id;$to_user_id=$request->to_user_id;$touserinfo=DB::table('users')->where('id',$to_user_id)->first();$follow=Follow::where('user_id',$user_id)->where('to_user_id',$to_user_id)->first();if($follow)goto H2tBodyx2;goto H2tNextx2;H2tBodyx2:$status=$follow->delete();if($status)goto H2tBodyx4;goto H2tNextx4;H2tBodyx4:DB::table('users')->where('id',$to_user_id)->update(['follower'=>$touserinfo->follower-1,]);return ['status'=>true,'msg'=>'取消关注成功'];goto H2tx3;H2tNextx4:return ['status'=>false,'msg'=>'取消关注失败'];H2tx3:goto H2tx1;H2tNextx2:$status=Follow::create(['user_id'=>$user_id,'to_user_id'=>$to_user_id]);if($status)goto H2tBodyx6;goto H2tNextx6;H2tBodyx6:DB::table('users')->where('id',$to_user_id)->update(['follower'=>$touserinfo->follower+1,]);return ['status'=>true,'msg'=>'关注成功'];goto H2tx5;H2tNextx6:return ['status'=>false,'msg'=>'关注失败'];H2tx5:H2tx1:}public function following(){$user=Auth::user();$user_id=$user->id;$follow=DB::table('follows')->where('user_id',$user_id)->pluck('to_user_id');if($follow)goto H2tBodyx8;goto H2tNextx8;H2tBodyx8:$data=DB::table('users')->whereIn('user_id',$follow)->select('name','tacticsnum','winrate','yieldrate','intro');return ['status'=>true,'data'=>$data];goto H2tx7;H2tNextx8:return ['status'=>false,'data'=>'暂无数据'];H2tx7:}}
?>