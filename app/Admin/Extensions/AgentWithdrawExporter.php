<?php

namespace App\Admin\Extensions;

use Encore\Admin\Grid\Exporters\AbstractExporter;
use Maatwebsite\Excel\Facades\Excel;

class AgentWithdrawExporter extends AbstractExporter
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
                            if($keyName=='status'){
                                switch ($item['status']){
                                    case 0:$item['status']= '待处理';
                                        break;
                                    case 1:$item['status']= '已通过';
                                        break;
                                    case 2:$item['status']= '已拒绝';
                                        break;
                                    default:$item['status']= '待处理';
                                }
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
