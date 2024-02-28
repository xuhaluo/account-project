<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    protected $table = 'announcement';

    public function admin()
    {
        return $this->belongsTo(AdminUser::class,'admin_id','id');
    }

}
