<?php
namespace App\Transformers;

use App\Models\ArticleType;
use League\Fractal\TransformerAbstract;
class ArticleTypeTransformer extends TransformerAbstract
{
    public function transform(ArticleType $articleType)
    {
        return [
            'id' => $articleType->id,
            // 'article_type' => $articleType->article_type
            'type' => $articleType->type,
        ];
    }
}