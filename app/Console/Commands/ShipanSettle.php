<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\Api\CrontabController;

class ShipanSettle extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'shijin:ShipanSettle';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '实盘结算';

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
        $this->info('实盘结算开始');
        $CrontabController->ShipanSettle();
        $this->info('实盘结算结束');
    }
}
