<?php

namespace App\Admin\Extensions;

use Encore\Admin\Grid\Exporters\AbstractExporter;
use Maatwebsite\Excel\Facades\Excel;

class AgentExporter extends AbstractExporter
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
                            if($keyName=='deferredrate'){
                                $item['deferredrate']=$item['deferredrate'].'%';
                            }
                            if($keyName=='synthesizerate'){
                                $item['synthesizerate']=$item['synthesizerate'].'%';
                            }
                            if($keyName=='total_charge_money'){
                                $item['total_charge_money']=collect($item['charges'])->where('status',1)->whereIn('type',[1,4])->sum('money');
                            }
                            if($keyName=='total_tactics_money'){
                                $item['total_tactics_money']=collect($item['tactics'])->sum('create_money');
                            }
                            if($keyName=='position_return_money'){
                                $item['position_return_money']=collect($item['tactics'])->where('order_status',0)->sum('return_money');
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
                            if($keyName=='diyanfei'){
                                $item['diyanfei']=collect($item['tactics'])->where('order_status',0)->sum('diyanfei');
                            }
                            if($keyName=='tactics_count'){
                                $item['tactics_count']=collect($item['tactics'])->where('order_status',0)->count();
                            }
                            if($keyName=='level_lower'){
                                $item['level_lower']=collect($item['level_lower'])->where('level',0)->count();
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
