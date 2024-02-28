<?php

namespace App\Console;

use App\Console\Commands\Tactics;
use App\Http\Controllers\Api\WSController;
use App\Http\Controllers\Api\CrontabController;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Log;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Tactics::class
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        //file_put_contents(dirname(__FILE__).'/stop.txt',date('Y-m-d H:i:s')."\n",FILE_APPEND);
        // $schedule->command('inspire')
        //          ->hourly();
        // $schedule->call(function(){
        //     $controller=new WSController();
        //     $controller->Trade_QueryData();
        // })->everyMinute();
		
	
		
		
        //定时收取递延费,（不足发送短信提醒）
        $schedule->call(function(){
            $controller=new CrontabController();
            $controller->isDiyan(false);
			file_put_contents(dirname(__FILE__).'/stop.txt',date('Y-m-d H:i:s')."----\n",FILE_APPEND);
        })->dailyAt('14:00');

        //危险股票,（平仓）
        $schedule->call(function(){
            $controller=new CrontabController();
            $controller->dangerPingcang();
        })->dailyAt('14:50');

        //达到最大天数,（平仓）
        $schedule->call(function(){
            $controller=new CrontabController();
            $controller->maxDayPingcang();
        })->dailyAt('14:50');

        //不递延,（平仓）
        $schedule->call(function(){
            $controller=new CrontabController();
            $controller->notDiyan();
        })->dailyAt('14:50');

        //定时收取递延费,（不足平仓）
        $schedule->call(function(){
            $controller=new CrontabController();
            $controller->isDiyan(true);
        })->dailyAt('14:55');

        //通过递延费判断是否发送短信,这里排除模拟点买
        $schedule->call(function(){
            $controller=new CrontabController();
            $controller->diyanfeiSms();
        })->dailyAt('14:55');
        
        $schedule->call(function(){
            //file_put_contents(dirname(__FILE__).'/cron.txt',date('Y-m-d H:i:s'),FILE_APPEND);
        })->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
