<?php
namespace App\Transformers;
use App\Models\Shares;
use League\Fractal\TransformerAbstract;
class SharesTransformer extends TransformerAbstract
{
    public function transform(Shares $shares)
    {
        return [
            'id' => $shares->id,
            'name' => $shares->name,
            'code' => $shares->code
        ];
    }
}