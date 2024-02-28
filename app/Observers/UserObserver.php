<?php

namespace App\Observers;

use App\Models\User;

class UserObserver
{
    public function creating(User $user)
    {
        // if(!$user->code && $user->level > 0){
        //     $user->code = static::findAvailableCode();
        //     if(!$user->code) return false;
        // }
    }

    public static function findAvailableCode()
	{
		for($i = 0;$i < 10;$i++){
			$code = str_rand(6,'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'); //数字与大写字母
			if(!User::where('code',$code)->exists()){
				return $code;
			}
		}
		\log::warning('find user code failed');
		return false;
	}
}