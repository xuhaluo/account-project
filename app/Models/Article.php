<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    public function articleType()
    {
        return $this->belongsTo(ArticleType::class);
    }
}
