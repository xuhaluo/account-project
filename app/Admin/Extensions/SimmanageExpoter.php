<?php

namespace App\Admin\Extensions;
use Encore\Admin\Grid\Exporters\AbstractExporter;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\User;
class SimmanageExpoter extends AbstractExporter
{
    protected $tableName;
    protected $head = [];
    protected $body = [];

    public function __construct($tableName,$head,$body){
        $this->tableName = $tableName;
        $this->head = $head;
        $this->body = $body;
    }

    public function export(){
        Excel::create($this->tableName, function($excel) {
            $excel->sheet($this->tableName, function($sheet) {
                $head = $this->head;
                $body = $this->body;
                // 这段逻辑是从表格数据中取出需要导出的字段
                $rows = collect($this->getData())->map(function ($item) use ($body) {
                    foreach ($body as $keyName){
                        $value = array_get($item, $keyName);
                        //判断持仓还是平仓
                        if($keyName == 'order_status'){
                            if($value == 0){
                                $value = '持仓';
                            }elseif($value == 1){
                                $value = '平仓';
                            }
                        }
                        //充值总额
                        if($keyName == 'total_charge_money'){
                            $value = collect($item['charges'])->where('status',1)->whereIn('type',[1,4])->sum('money');
                        }
                        //模拟总创建金额
                        if($keyName=='total_create_money'){
                            $item['total_tactics_money']=collect($item['tactics'])->sum('create_money');
                        }
                        //追加信用金
                        if($keyName=='add_credit'){
                            $value = 0;
                        }
                        //提现总额
                        if($keyName == 'total_deposit_money'){
                            $value = collect($item['charges'])->where('stauts',1)->whereIn('type',5)->sum('money');
                        }
                        //清算盈亏
                        if($keyName=='clear_return_money'){
                            $value = collect($item['tactics'])->where('order_status',1)->sum('return_money');
                        }
                        //交易综合费
                        if($keyName=='count_deal_money'){
                            $value = collect($item['tactics'])->sum('count_deal_money');
                        }
                        //递延费
                        if($keyName == 'count_diyanfei'){
                            $value = collect($item['tactics'])->sum('count_diyanfei');
                        }
                        if($keyName=='position_return_money'){
                            $value = collect($item['tactics'])->where('order_status',0)->sum('return_money');
                        }
                        if($keyName=='clear_return_money'){
                            $value = collect($item['tactics'])->where('order_status',1)->sum('return_money');
                        }
                        if($keyName=='count_deal_money'){
                            $value = collect($item['tactics'])->sum('count_deal_money');
                        }
                        //冻结信用金
                        if($keyName=='frost_xinyongjin'){
                            // $value = $item['tactics']['frost_xinyongjin'];
                            $value = collect($item['tactics'])->where('frost_xinyongjin',0)->count();
                        }
                        if($keyName=='diyanfei'){
                            $value = collect($item['tactics'])->where('order_status',0)->sum('diyanfei');
                        }
                        if($keyName=='tactics_count'){
                            $value = collect($item['tactics'])->where('order_status',0)->count();
                        }
                        //报名时间
                        if($keyName=='apply_time'){
                            $value = $item['simcontests']['apply_time'];
                        }
                        if($keyName=='ranking'){
                            $value = $item['simcontests']['ranking'];
                        }
                        //胜率
                        if($keyName=='rate'){
                            $getres = $item['wintime']/$item['tradetime']*100;
                            $getres = sprintf("%.2f", $getres);
                            $value = $getres."%";
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
