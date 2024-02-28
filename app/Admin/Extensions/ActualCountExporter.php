<?php

namespace App\Admin\Extensions;

use Encore\Admin\Grid\Exporters\AbstractExporter;
use Maatwebsite\Excel\Facades\Excel;

class ActualCountExporter extends AbstractExporter
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
                        if($keyName=='total_buy_num'){
                            $item['total_buy_num']=collect($item['tactics'])->whereIn('is_entrust',[1,2,3,6,7])->where('buy_orderId','>',0)->sum('num');
                        }
                        if($keyName=='total_sell_num'){
                            $item['total_sell_num']=collect($item['tactics'])->whereIn('is_entrust',[3])->where('sell_orderId','>',0)->sum('num');
                        }
                        if($keyName=='now_num'){
                            $item['now_num']=collect($item['tactics'])->whereIn('is_entrust',[1,2,7])->where('buy_orderId','>',0)->sum('num');
                        }
                        if($keyName=='buy_count'){
                            $item['buy_count']=collect($item['tactics'])->whereIn('is_entrust',[1,2,3,6,7])->where('buy_orderId','>',0)->count();
                        }
                        if($keyName=='sell_count'){
                            $item['sell_count']=collect($item['tactics'])->whereIn('is_entrust',[3])->where('sell_orderId','>',0)->count();
                        }
                        if($keyName=='tactics_buy_count'){
                            $item['tactics_buy_count']=collect($item['tactics'])->where('buy_orderId','>',0)->count();
                        }
                        if($keyName=='tactics_sell_count'){
                            $item['tactics_sell_count']=collect($item['tactics'])->where('sell_orderId','>',0)->count();
                        }
                        $arr[] = array_get($item, $keyName);
                    }
                    return $arr;
                });
                $sheet->rows(collect([$head])->merge($rows));

            });

        })->export('xls');
    }
}