<?php

namespace App\Console\Commands;

use App\Http\Controllers\Api\TacticsController;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class Tactics extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tatics:deal';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
    public function handle()
    {
       $tactic = new TacticsController();
       $tactic->deal();
    }
}
