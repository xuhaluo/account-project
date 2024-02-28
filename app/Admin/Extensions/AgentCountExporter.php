<?php

namespace App\Admin\Extensions;

use Encore\Admin\Grid\Exporters\AbstractExporter;
use Maatwebsite\Excel\Facades\Excel;

class AgentCountExporter extends AbstractExporter
{
    protected $head = [];
    protected $body = [];
    protected $title = '';
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
                            if($keyName=='deferredrate'){
                                $item['deferredrate']=$item['deferredrate'].'%';
                            }
                            if($keyName=='synthesizerate'){
                                $item['synthesizerate']=$item['synthesizerate'].'%';
                            }
                            if($keyName=='total_charge_money'){
                                $item['total_charge_money']=collect($item['charges'])->where('status',1)->whereIn('type',[1,4])->sum('money');
                            }
                            if($keyName=='clear_return_money'){
                                $item['clear_return_money']=collect($item['tactics'])->where('order_status',1)->sum('return_money');
                            }
                            if($keyName=='count_deal_money'){
                                $item['count_deal_money']=collect($item['tactics'])->sum('count_deal_money');
                            }
                            if($keyName=='count_diyanfei'){
                                $item['count_diyanfei']=collect($item['tactics'])->sum('count_diyanfei');
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
