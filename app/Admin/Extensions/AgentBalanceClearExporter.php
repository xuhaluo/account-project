<?php

namespace App\Admin\Extensions;

use Encore\Admin\Grid\Exporters\AbstractExporter;
use Maatwebsite\Excel\Facades\Excel;

class AgentBalanceClearExporter extends AbstractExporter
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
                            if($keyName=='type'){
                                switch ($item['type']){
//                                    case 1:$item['type']= '充值';
//                                        break;
//                                    case 2:$item['type']= '创建订单';
//                                        break;
//                                    case 3:$item['type']= '平仓';
//                                        break;
//                                    case 4:$item['type']= '后台操作';
//                                        break;
                                    case 5:$item['type']= '提现';
                                        break;
//                                    case 6:$item['type']= '追加信用金';
//                                        break;
                                    case 7:$item['type']= '返佣';
                                        break;
                                    default:$item['type']= '';
                                }
                            }
                            $arr[] = array_get($item, $keyName);
                        }
                        return $arr;
                    }catch (\Exception $e){
                        echo $e->getMessage().'--'.$e->getLine();
                    }

                });
//                print_r($bodyRows);die;
                $rows = collect([$head])->merge($bodyRows);
                $sheet->rows($rows);

            });

        })->export('xls');
    }
}
