<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('id');
            $table->tinyInteger('article_type_id')->comment('文章类型表id');
            $table->string('title')->comment('标题');
            $table->string('infor')->comment('简介');
            $table->text('content')->comment('正文');
            $table->string('issuer')->comment('发行方');
            $table->boolean('isshow')->default(true)->comment('是否展示');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
