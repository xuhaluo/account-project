<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\Api\WSController;

class ChangePrice extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'shijin:ChangePrice';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '修改实盘价格';

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
    public function handle(WSController $WSController)
    {
        $this->info('修改实盘价格执行开始');
        $WSController->Trade_QueryData();
        $this->info('修改实盘价格执行结束');
    }
}
