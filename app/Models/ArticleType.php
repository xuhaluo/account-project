<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ArticleType extends Model
{
    // protected $table = 'article_typesss';

    protected $fillable = ['type'];

    public function articles()
    {
        return $this->hasMany(Article::class);
    }
}
