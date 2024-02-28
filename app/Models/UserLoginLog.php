<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserLoginLog extends Model
{
    protected $table = 'user_login_log';

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
