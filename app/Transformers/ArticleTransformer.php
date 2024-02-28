<?php
namespace App\Transformers;

// use App\Models\Article;
// use App\Models\ArticleType;
use App\Models\Announcement;
use League\Fractal\TransformerAbstract;
class ArticleTransformer extends TransformerAbstract
{
    private $simple;

    public function __construct($simple = false)
    {
        $this->simple = $simple;
    }

    public function transform(Announcement $article)
    {
        $data = [
            'id' => $article->id,
            // 'article_type_id' => $article->article_type_id,
            'type' => $article->type,
            'title' => $article->title,
            // 'infor' => $article->infor,
            'announcement' => $article->announcement,
            // 'admin_id' => $article->admin_id,
            'source' => $article->source,
            // 'issuer' => $article->issuer,
            'admin_id' => $article->admin_id,
            'is_del' => $article->is_del,
            'created_at' => $article->created_at->toDateTimeString(),
            'updated_at' => $article->updated_at->toDateTimeString(),
        ];
        if(!$this->simple){
            $data['content'] = $article->content;
        }
        return $data;
    }
}