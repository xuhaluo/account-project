<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Charge extends Model
{
    protected $guarded = [];
    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');
    }
    
    public function bankcard()
    {
        return $this->belongsTo(Bankcard::class,'card_id','id');
    }

    public function tactics()
    {
        return $this->belongsTo(Tactics::class,'order_no','order_no');
    }

    public function charge()
    {
        return $this->belongsTo(Charge::class,'id','id');
    }
    public function charges()
    {
        return $this->belongsTo(Charge::class,'id','id');
    }
}
