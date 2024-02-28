<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bankcard extends Model
{
    protected $fillable = ['user_id','name','card_type','id_card','card_number','card_name','card_address','tel'];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');
    }
}
