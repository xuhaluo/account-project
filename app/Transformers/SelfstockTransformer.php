<?php
namespace App\Transformers;
use App\Models\Selfstock;
use League\Fractal\TransformerAbstract;

class SelfstockTransformer extends TransformerAbstract
{
    public function transform(Selfstock $selfstock)
    {
        return [
            'id' => $selfstock->id,
            'code' => $selfstock->code,
            'user_id' => $selfstock->user_id
        ];
    }
}