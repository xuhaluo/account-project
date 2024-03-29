<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\Api\WSController;

class QueryOrder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'shijin:QueryOrder';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '订单状态价格修改';

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
        $this->info('订单提交开始');
        $WSController->Trade_QueryData();
    }
}
