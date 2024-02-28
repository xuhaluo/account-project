<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdminUser extends Model
{
    protected $table = 'admin_users';

    public function user1(){
        return $this->belongsTo(User::class,'agent_id','id');
    }
}
