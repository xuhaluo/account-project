<?php

use Illuminate\Support\Facades\DB;

    //返佣接口(仅平仓时调用)
    function rebate($tactics){
        // $user_id = $request['user_id'];
        // $diyanfei = $request['diyanfei'];
        // $jiancangfei = $request['jiancangfei'];
        // $order_no = $request['order_no'];
        $user_id = $tactics->user_id;
        $diyanfei = $tactics->count_diyanfei;
        $jiancangfei = $tactics->cangfei;
        $order_no = $tactics->order_no;
        $shouyirate = $tactics->rate;
        // $users = DB::table('users')->where('id',$user_id)->first();
        $users = $tactics->user;
        //该订单收益率
        // $shouyirate = $request['rate'];
        //总收益率

        // $yieldrates = DB::table('tactics')->where('tactics.order_status',1)->where('user_id',$user_id)->where('is_analog','1')->sum('rate');
        // $allcounts = DB::table('tactics')->where('tactics.order_status',1)->where('user_id',$user_id)->where('is_analog','1')->count('id');
        // if($allcounts > 0){
        //     $yieldrate = $yieldrates/$allcounts;
        // }else{
        //     $yieldrate = 0;
        // }
        //总本金
        $allcorpus = $users->total_corpus;
        if($allcorpus > 0){
            $yieldrate = $users->total_profit/$allcorpus;
        }else{
            $yieldrate = 0;
        }
        //找出该用户对应1级代理
        $parentUsers = parentUsers($user_id);
      	ksort($parentUsers);
      	$allcounts = [];
      	foreach($parentUsers as $k=>$parentUser){
          	if($k == 1){
            	$allcounts[$k]['diyanfei'] = $diyanfei * $parentUser->deferredrate / 100;
            	$allcounts[$k]['jiancangfei'] = $jiancangfei * $parentUser->synthesizerate / 100;
            }else{
            	$allcounts[$k]['diyanfei'] = $allcounts[$k-1]['diyanfei'] * $parentUser->deferredrate / 100;
            	$allcounts[$k]['jiancangfei'] = $allcounts[$k-1]['jiancangfei'] * $parentUser->synthesizerate / 100;
              	
              	$allcounts[$k-1]['diyanfei'] = $allcounts[$k-1]['diyanfei'] - $allcounts[$k]['diyanfei'];
              	$allcounts[$k-1]['jiancangfei'] = $allcounts[$k-1]['jiancangfei'] - $allcounts[$k]['jiancangfei'];
            }
        }
      	DB::beginTransaction();
		try{
            foreach($parentUsers as $k=>$parentUser){
                $money = array_sum($allcounts[$k]);
                $updatedata = array(
                    //返还的佣金
                    'total_commission'=>$parentUser->total_commission+$money,
                    'money'=>$parentUser->money+$money,
                );
                $result = DB::table('users')->where('id',$parentUser->id)->update($updatedata);
                $chargesadd = array(
                    'user_id'=>$parentUser->id,
                    'order_no'=>$order_no,
                    'type'=>'7', //返佣为7
                    'money'=>$money,
                    'status'=>'1',
                    'info'=>$parentUser->name.'用户返佣'.$money.'元',
                );
                DB::table('charges')->insert($chargesadd);
            }
            $userupdate = array(
                //策略数
                'tacticsnum'=>$users->tacticsnum+1,
                //赢的次数
                'winsum'=>$shouyirate>0?$users->winsum+1:$users->winsum,
                //总收益率
                'yieldrate'=>round($yieldrate * 100,2).'%',
              );
            //用户策略
            DB::table('users')->where('id',$user_id)->update($userupdate);
        	DB::commit();
          	return ['status'=>200,'msg'=>'佣金返利成功'];
        }catch (\Exception $e ){
          	DB::rollback();
          	return ['status'=>300,'msg'=>'佣金返利失败'];
        }
    }

	//返佣接口(仅平仓时调用)
    function rebateBak($tactics){
        // $user_id = $request['user_id'];
        // $diyanfei = $request['diyanfei'];
        // $jiancangfei = $request['jiancangfei'];
        // $order_no = $request['order_no'];
        $user_id = $tactics->user_id;
        $diyanfei = $tactics->diyanfei;
        $jiancangfei = $tactics->cangfei;
        $order_no = $tactics->order_no;
        $shouyirate = $tactics->rate;
        // $users = DB::table('users')->where('id',$user_id)->first();
        $users = $tactics->user;
        //该订单收益率
        // $shouyirate = $request['rate'];
        //总收益率

        // $yieldrates = DB::table('tactics')->where('tactics.order_status',1)->where('user_id',$user_id)->where('is_analog','1')->sum('rate');
        // $allcounts = DB::table('tactics')->where('tactics.order_status',1)->where('user_id',$user_id)->where('is_analog','1')->count('id');
        // if($allcounts > 0){
        //     $yieldrate = $yieldrates/$allcounts;
        // }else{
        //     $yieldrate = 0;
        // }
        //总本金
        $allcorpus = $users->total_corpus;
        if($allcorpus > 0){
            $yieldrate = $users->total_profit/$allcorpus;
        }else{
            $yieldrate = 0;
        }
        //找出该用户对应1级代理
        $user_pid = isfirstagency($user_id);
        $userinfo = DB::table('users')->where('id',$user_pid)->first();
        //总费用 = 递延费+综合费（建仓费）
        // $allcounts = $diyanfei*$userinfo->deferredrate+$jiancangfei*$userinfo->deferredrate;
        $allcounts = $diyanfei*0.7+$jiancangfei*0.7;
        $updatedata = array(
            //返还的佣金
            'total_commission'=>$userinfo->total_commission+$allcounts,
            'money'=>$userinfo->money+$allcounts,
        );
        $userupdate = array(
            //策略数
            'tacticsnum'=>$users->tacticsnum+1,
            //赢的次数
            'winsum'=>$shouyirate>0?$users->winsum+1:$users->winsum,
            //总收益率
            'yieldrate'=>round($yieldrate * 100,2).'%',
        );
        //用户策略
        DB::table('users')->where('id',$user_id)->update($userupdate);
        $result = DB::table('users')->where('id',$userinfo->id)->update($updatedata);
        $chargesadd = array(
            'user_id'=>$userinfo->id,
            'order_no'=>$order_no,
            'type'=>'7', //返佣为7
            'money'=>$allcounts,
            'status'=>'1',
            'info'=>$userinfo->name.'用户返佣'.$allcounts.'元',
        );
        DB::table('charges')->insert($chargesadd);
        if($result){
            return ['status'=>200,'msg'=>'佣金返利成功'];
        }else{
            return ['status'=>300,'msg'=>'佣金返利失败'];
        }
    }

    //判断该用户上级代理是否是一级代理
    function isfirstagency($user_id){
        $user = DB::table('users')->where('id',$user_id)->first();
        $piduser = DB::table('users')->where('id',$user->pid)->first();
        //判断上级是否是1级，否则最多可能为3级
        if($piduser->level == '1'){
            return $piduser->id;
        }else{
            $piduser1 = DB::table('users')->where('id',$piduser->pid)->select('id','pid','level')->first();
            //判断上级是否为1级，否则为2级
            if($piduser1->level == '1'){
                return $piduser1->id;
            }else{
                //最多到这，为1级代理
                $piduser2 = DB::table('users')->where('id',$piduser1->pid)->select('id','pid','level')->first();
                return $piduser2->id;
            }
        }
    }

	function parentUsers($user_id){
      	$pusers = [];
        $user = DB::table('users')->where('id',$user_id)->first();
        $piduser = DB::table('users')->where('id',$user->pid)->first();
        //判断上级是否是1级，否则最多可能为3级
      	$pusers[$piduser->level] = $piduser;
        if($piduser->level == '1'){
          	return $pusers;
        }else{
            $piduser1 = DB::table('users')->where('id',$piduser->pid)->first();
			$pusers[$piduser1->level] = $piduser1;
            //判断上级是否为1级，否则为2级
            if($piduser1->level == '1'){
              	return $pusers;
            }else{
                //最多到这，为1级代理
                $piduser2 = DB::table('users')->where('id',$piduser1->pid)->first();
              	$pusers[$piduser2->level] = $piduser2;
              	return $pusers;
            }
        }
    }

?>