<?php

namespace App\Admin\Extensions;

use App\Models\User;
use Encore\Admin\Grid\Exporters\AbstractExporter;
use Maatwebsite\Excel\Facades\Excel;

class UserExporter extends AbstractExporter
{
    protected $head = [];
    protected $body = [];
    protected $title = '';

    public function __construct($title,$head, $body){
        $this->title=$title;
        $this->head = $head;
        $this->body = $body;
    }

    public function export()
    {
        Excel::create($this->title, function($excel) {

            $excel->sheet($this->title, function($sheet) {

                // 这段逻辑是从表格数据中取出需要导出的字段
                $head = $this->head;
                $body = $this->body;
                $bodyRows = collect($this->getData())->map(function ($item)use($body) {
                    foreach ($body as $keyName){
                        if($keyName=='is_freeze'){
                            if($item['is_freeze']==1){
                                $item['is_freeze']='冻结';
                            }else{
                                $item['is_freeze']='正常';
                            }
                        }
                        if($keyName=='level'){
                            switch ($item['level']){
                                case 0:$item['level']= '';
                                    break;
                                case 1:$item['level']= '一级代理';
                                    break;
                                case 2:$item['level']= '二级代理';
                                    break;
                                case 3:$item['level']= '三级代理';
                                    break;
                                default:$item['level']= '';
                            }
                        }
                        if($keyName=='pid'){
                            $find=User::find($item['pid']);
                            if($find){
                                $item['pid']= $find->phone;
                            }else{
                                $item['pid']= '';
                            }
                        }
                        $arr[] = array_get($item, $keyName);
                    }
                    return $arr;
                });
                $rows = collect([$head])->merge($bodyRows);
                $sheet->rows($rows);

            });

        })->export('xls');
    }
}
