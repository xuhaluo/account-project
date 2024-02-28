<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Auth;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements  JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function charges()
    {
        return $this->hasMany(Charge::class);
    }
    public function tactics()
    {
        return $this->hasMany(Tactics::class);
    }
  	public function real_tactics()
    {
    	return $this->hasMany(Tactics::class)->where('is_analog',0);
    }
    public function simcontests(){
        return $this->hasOne(Simcontests::class,'user_id','id');
    }
    public function level_lower()
    {
        return $this->hasMany(User::class,'pid','id');
    }

    public function level_upper()
    {
        return $this->belongsTo(User::class,'pid','id');
    }

    public function bankcard()
    {
        return $this->hasMany(Bankcard::class,'user_id','id');
    }

    public function follows()
    {
        return $this->hasMany(Follow::class);
    }
}
