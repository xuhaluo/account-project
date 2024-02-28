<?php

namespace App\Admin\Extensions;
use Encore\Admin\Grid\Exporters\AbstractExporter;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\User;
class ChargeExpoter extends AbstractExporter
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
                        if($keyName == 'status'){
                            if($value == 0){
                                $value = '等待处理';
                            }else if($value == 1){
                                $value = '处理成功';
                            }else if($value == 2){
                                $value = '处理失败';
                            }
                        }
                        if($keyName == 'type'){
                            if($value == '1'){
                                $value = '充值';
                            }else if($value == '2'){
                                $value = '创建订单';
                            }else if($value == '3'){
                                $value = '平仓';
                            }else if($value == '4'){
                                $value = '后台操作';
                            }else if($value == '5'){
                                $value = '提现';
                            }else if($value == '6'){
                                $value = '追加信用金';
                            }else if($value == '7'){
                                $value = '返佣';
                            }else if($value == '8'){
                                $value = '递延费';
                            }
                        }
                        if($keyName=='level'){
                            switch ($value){
                                case 0:$value = '';
                                    break;
                                case 1:$value = '一级代理';
                                    break;
                                case 2:$value = '二级代理';
                                    break;
                                case 3:$value = '三级代理';
                                    break;
                                default:$value = '';
                            }
                        }
                        //充值总额
                        if($keyName == 'total_charge_money'){
                            $value = collect($item['charges'])->where('status',1)->whereIn('type',[1,4])->sum('money');
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
                        if($keyName == 'user.pid'){
                            $find=User::find($item['user']['pid']);
                            if($find){
                                $value = $find->name;
                            }else{
                                $value =  '';
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
