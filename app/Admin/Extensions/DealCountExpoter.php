<?php

namespace App\Admin\Extensions;

use Encore\Admin\Grid\Exporters\AbstractExporter;
use Maatwebsite\Excel\Facades\Excel;

class DealCountExpoter extends AbstractExporter
{
    protected $tableName;
    protected $head = [];
    protected $body = [];

    public function __construct($tableName,$head,$body){
        $this->tableName = $tableName;
        $this->head = $head;
        $this->body = $body;
    }

    public function export()
    {
        Excel::create($this->tableName, function($excel) {

            $excel->sheet($this->tableName, function($sheet) {
                $head = $this->head;
                $body = $this->body;
                // 这段逻辑是从表格数据中取出需要导出的字段
                $rows = collect($this->getData())->map(function ($item) use ($body) {
                    foreach ($body as $keyName){
                        $value = array_get($item, $keyName);
                        switch($keyName){
                            case 'tactics_count':
                                $value = count($item['tactics']);
                                break;
                            case 'tactics_sum':
                                $value = array_sum(array_map(function($v){
                                    return $v['create_money'];
                                },$item['tactics']));
                                break;  
                            case 'xingyongjin_sum':
                                $value = array_sum(array_map(function($v){
                                    return $v['xingyongjin'];
                                },$item['tactics']));
                                break;  
                            case 'deal_money_sum':
                                $value = array_sum(array_map(function($v){
                                    return $v['deal_money'];
                                },$item['tactics']));
                                break;  
                            case 'diyanfei_sum':
                                $value = array_sum(array_map(function($v){
                                    return $v['diyanfei'];
                                },$item['tactics']));
                                break;    
                            case 'return_money':
                                $value = array_sum(array_map(function($v){
                                    return $v['return_money'];
                                },$item['tactics']));
                                break;   
                        }
                        $arr[] = $value;
                    }
                    return $arr;
                });
                $sheet->rows(collect([$head])->merge($rows));

            });

        })->export('xls');
    }
}