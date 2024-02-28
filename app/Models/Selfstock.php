<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Selfstock extends Model
{
    protected $fillable = [
        'user_id','code','name'
    ];
}
