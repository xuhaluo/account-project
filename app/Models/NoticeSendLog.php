<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NoticeSendLog extends Model
{
    protected $table = 'notice_send_log';

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
