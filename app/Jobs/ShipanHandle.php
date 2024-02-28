<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Models\Tactics;
use App\Models\Charge;
use App\Http\Controllers\Api\WSController;
use App\Http\Controllers\Api\TacticsController;

class ShipanHandle implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $tactic;
    protected $OType;
    protected $price;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Tactics $tactic,$OType,$price)
    {
        $this->tactic = $tactic;
        $this->OType = $OType;
        $this->price = $price;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $WSController = new WSController();
        $order = [
            'order_id' => $this->tactic->id,
            'count' => $this->tactic->num,
            'code' => $this->tactic->code,
            'price' => $this->price,
            'OType' => $this->OType
        ];
        \Log::info('队列执行开始------'.$this->tactic->id.'-------'.$this->tactic->order_status.'-------'.$this->OType.'-------'.date('Y-m-d H:i:s'));
        // if($this->tactic->order_status == 1){
        //     return;
        // }
        $res = $WSController->Trade_CommitOrder($order);
        if($res['status'] == false){
            \Log::info('实盘操作失败');
            if($this->OType == 1){  // 买入失败,撤销订单
                $TacticsController = new TacticsController();
                $TacticsController->revokeTactic($this->tactic->id);
            }elseif($this->OType == 2){
                $this->tactic->update(['pingcang_type' => '','is_entrust' => 1]);
                // dispatch(new ShipanHandle($this->tactic,2,$this->price));
            }
        }else{
            \Log::info('实盘操作成功');
        }
        \Log::info('队列执行结束------'.$this->tactic->id.'-------'.$this->OType.'-------'.date('Y-m-d H:i:s'));
    }
}
