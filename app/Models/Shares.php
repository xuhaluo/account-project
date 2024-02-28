<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shares extends Model
{
    public function tactics()
    {
        return $this->hasMany(Tactics::class,'code','code');
    }
}
