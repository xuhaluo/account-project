<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SmsLog extends Model
{
    protected $table = 'sms_log';

    protected $fillable = ['phone','type','ip','area','code','created_at'];

    public $timestamps = false;
}
