<?php

namespace App\Admin\Extensions;

use Encore\Admin\Grid\Exporters\AbstractExporter;
use Maatwebsite\Excel\Facades\Excel;

class DealExpoter extends AbstractExporter
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
                        if($keyName == 'order_status'){
                            if($value == 0){
                                $value = '持仓';
                            }elseif($value == 1){
                                $value = '平仓';
                            }
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