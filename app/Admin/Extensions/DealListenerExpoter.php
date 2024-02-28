<?php

namespace App\Admin\Extensions;

use Encore\Admin\Grid\Exporters\AbstractExporter;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\User;
use App\Models\Shares;

class DealListenerExpoter extends AbstractExporter
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
                        if($keyName == 'agent'){
                            $value = $item['user']['pid']?User::find($item['user']['pid'])->name:'';
                        }
                        if($keyName == 'shares_name'){
                            $value = Shares::where('code',$item['tactics']['code'])->first()->name;
                        }
                        if($keyName == 'business_direction'){
                            $value = $item['type'] == 2?'买入':'卖出';
                        }
                        if($keyName == 'deal_money'){
                            $value = $item['type'] == 2?$item['tactics']['price']:$item['tactics']['deal_money'];
                        }
                        if($keyName == 'deal_time'){
                            $value = $item['type'] == 2?$item['tactics']['created_at']:$item['tactics']['deal_time'];
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