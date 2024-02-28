<?php
/*
 本代码由 PHP代码加密工具 Xend(Build 5.00.08) 创建
 创建时间 2019-04-23 14:56:54
 技术支持 QQ:30370740 Mail:support@phpXend.com
 严禁反编译、逆向等任何形式的侵权行为，违者将追究法律责任
*/

namespace App\Http\Controllers\Api;use App\Models\Announcement;use Illuminate\Http\Request;use App\Transformers\ArticleTransformer;use App\Transformers\ArticleTypeTransformer;class ArticleController extends Controller{public function articles($articleType){$articles=Announcement::where('type',$articleType)->where('is_del','0')->orderBy('id','desc')->paginate(20);return $this->response->paginator($articles,new ArticleTransformer(true));}public function article($article){$article=Announcement::find($article);return $this->response->item($article,new ArticleTransformer());}public function information(){$url="http://stock.10jqka.com.cn/thsgd/realtimenews.js?_=1551844760897";$data=file_get_contents($url);$data=iconv("gb2312","utf-8//IGNORE",$data);return $data;}}
?>