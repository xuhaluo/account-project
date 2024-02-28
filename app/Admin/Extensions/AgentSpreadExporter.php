<?php

namespace App\Admin\Extensions;

use Encore\Admin\Grid\Exporters\AbstractExporter;
use Maatwebsite\Excel\Facades\Excel;

class AgentSpreadExporter extends AbstractExporter
{
    protected $head = [];
    protected $body = [];
    protected $title = [];
    public function __construct($title,$head, $body){
        $this->title = $title;
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
                    try {
                        foreach ($body as $keyName){
                            if($keyName=='is_freeze'){
                                if($item['is_freeze']==1){
                                    $item['is_freeze']='冻结';
                                }else{
                                    $item['is_freeze']='正常';
                                }
                            }
//                            if($keyName=='commission_balance'){
//                                $item['commission_balance']=0;
//                            }
                            if($keyName=='deferredrate'){
                                $item['deferredrate']=$item['deferredrate'].'%';
                            }
                            if($keyName=='synthesizerate'){
                                $item['synthesizerate']=$item['synthesizerate'].'%';
                            }
                            if($keyName=='url'){
                                $item['url']='http://192.168.0.123:8080/#/loginRegistrat/registrat?code='.$item['code'];
                            }
                            $arr[] = array_get($item, $keyName);
                        }
                        return $arr;
                    }catch (\Exception $e){
                        echo $e->getMessage().'--'.$e->getLine();
                    }

                });
                $rows = collect([$head])->merge($bodyRows);
                $sheet->rows($rows);

            });

        })->export('xls');
    }
}
