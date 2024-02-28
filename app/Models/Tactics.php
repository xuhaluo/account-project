<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tactics extends Model
{
    protected $fillable = ['user_id','code','price','multiple','max_price','min_price','cangfei',
        'diyanfei','order_no','xingyongjin','order_status','create_money','is_sell','is_add','is_analog','num','count_xingyongjin','profit','platform_profit','pingcang_type','deal_time','return_money','is_entrust','commission','rate','deal_money','count_deal_money','is_settle','process_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function shares()
    {
        return $this->belongsTo(Shares::class,'code','code');
    }

    public function diyanfeis()
    {
        return $this->belongsTo(Diyanfei::class,'order_no','order_no');
    }
  
  	public function xingyongjin_appends()
    {
    	return $this->hasMany(Charge::class,'order_no','order_no')->select('order_no','money','created_at')->where('type',6);
    }
}
