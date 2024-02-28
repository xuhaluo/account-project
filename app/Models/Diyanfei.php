<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Diyanfei extends Model
{
    protected $fillable = ['order_no','user_id','date','diyanfei','is_analog'];

    public $timestamps = false;

    public function tactics()
    {
        return $this->belongsTo(Tactics::class,'order_no','order_no');
    }
}
