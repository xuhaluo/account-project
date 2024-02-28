<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\Api\CrontabController;

class Pingcang extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'shijin:pingcang';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '每秒监控止损线进行平仓操作';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle(CrontabController $CrontabController)
    {
        $this->info('平仓执行开始');
        $CrontabController->stopLosePingcang();
        $this->info('平仓执行结束');
    }
}
