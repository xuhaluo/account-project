<?php
namespace App\Transformers;

use App\Models\Tactics;
use League\Fractal\TransformerAbstract;
class TacticsTransformer extends TransformerAbstract
{
    protected $availableIncludes = ['user','shares'];

    public function transform(Tactics $tactics)
    {
        return [
            'id' => $tactics->id,
            'rate' => $tactics->rate,               // 收益率
            'price' => $tactics->price,             // 买价
            'deal_price' => $tactics->deal_money,   // 卖价
            'num' => $tactics->num,                 // 数量
            'profit_money' => round(($tactics->deal_money-$tactics->price)*$tactics->num,2), // 盈亏=交易总价-订单价格
            'created_time' => $tactics->created_at->format('m-d H:i'),
        ];
    }

    public function includeUser(Tactics $tactics)
    {
        return $this->item($tactics->user,new UserTransformer());
    }

    public function includeShares(Tactics $tactics)
    {
        return $this->item($tactics->shares,new SharesTransformer());
    }
}