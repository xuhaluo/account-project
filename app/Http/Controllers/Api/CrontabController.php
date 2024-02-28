<?php
/*
 本代码由 PHP代码加密工具 Xend(Build 5.00.08) 创建
 创建时间 2019-04-23 14:56:54
 技术支持 QQ:30370740 Mail:support@phpXend.com
 严禁反编译、逆向等任何形式的侵权行为，违者将追究法律责任
*/

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\Shares;
use App\Models\Tactics;
use App\Models\User;
use App\Models\Diyanfei;
use App\Models\Setting;
use App\Models\Charge;
use App\Http\Controllers\Api\TacticsController;
use App\Jobs\sendNoticeSms;

class CrontabController extends Controller
{
    public function notDiyan()
    {
        $res = isJiaoYi(true);
        if ($res) goto H2tBodyx2;
        goto H2tNextx2;
        H2tBodyx2:
        $today = Carbon::today();
        $tactics = Tactics::where("is_sell", 1)->where('created_at', '<', $today)->where('order_status', 0)->whereIn('is_entrust', [1, 6, 7, 99])->with(['user' => function ($query) {
            $query->lockForUpdate();
        }])->lockForUpdate()->get();
        $ip = '127.0.0.1';
        $codes = $tactics->pluck('code')->unique();
        $codes = $codes->implode(',');
        $goods = getRealTimeInfos($codes);
        $H2t0 = new TacticsController();
        $tacticsController = $H2t0;
        foreach ($tactics as $tactic) {
            if (isset($goods[$tactic->code])) goto H2tBodyx4;
            goto H2tNextx4;
            H2tBodyx4:
            $good = $goods[$tactic->code];
            goto H2tx3;
            H2tNextx4:
            continue 1;
            H2tx3:
            $tacticsController->pingcang($tactic, $good, '不递延平仓');
        }
        goto H2tx1;
        H2tNextx2:H2tx1:
    }

    public function isDiyan($type = true)
    {
        $res = isJiaoYi();
        if ($res) goto H2tBodyx6;
        goto H2tNextx6;
        H2tBodyx6:
        $today = Carbon::today();
        $diyanfei_base = Setting::where('code', 'diyanfei_base')->first();
        $tactics = Tactics::where("is_sell", 2)->where('created_at', '<', $today)->where('order_status', 0)->whereIn('is_entrust', [1, 6, 7, 99])->with(['user' => function ($query) {
            $query->lockForUpdate();
        }, 'diyanfeis' => function ($query) use ($today) {
            $query->where('date', $today->toDateString());
        }])->lockForUpdate()->get();
        $codes = $tactics->pluck('code')->unique();
        $codes = $codes->implode(',');
        $goods = getRealTimeInfos($codes);
        $ip = '127.0.0.1';
        $smss = [];
        $H2t0 = new TacticsController();
        $tacticsController = $H2t0;
        foreach ($tactics as $tactic) {
            $H2t0 = !$tactic->diyanfeis;
            if ($H2t0) goto H2tBodyx8;
            goto H2tNextx8;
            H2tBodyx8:
            $H2t0 = $tactic->is_analog == 0;
            if ($H2t0) goto H2tBodyxa;
            goto H2tNextxa;
            H2tBodyxa:
            $H2t0 = $tactic->user->money >= $tactic->diyanfei;
            if ($H2t0) goto H2tBodyxc;
            goto H2tNextxc;
            H2tBodyxc:
            DB::beginTransaction();
            try {
                $charge = Charge::create(['user_id' => $tactic->user->id, 'order_no' => $tactic->order_no, 'type' => 8, 'money' => 0 - (float)$tactic->diyanfei, 'before_balance' => $tactic->user->money, 'after_balance' => $tactic->user->money - (float)$tactic->diyanfei, 'status' => 1, 'is_analog' => 0, 'info' => "用户【" . $tactic->user->id . "|" . $tactic->user->phone . "】账户扣除递延费" . $tactic->diyanfei . "元", 'create_ip' => $ip]);
                $diyanfei = Diyanfei::create(['order_no' => $tactic->order_no, 'user_id' => $tactic->user_id, 'date' => Carbon::today(), 'diyanfei' => $tactic->diyanfei, 'is_analog' => 0]);
                $tactic->user->decrement('money', $tactic->diyanfei);
                $tactic->increment('count_diyanfei', $tactic->diyanfei);
                DB::commit();
            } catch (\Exception $e) {
                DB::rollback();
            }
            goto H2txb;
            H2tNextxc:
            if ($type) goto H2tBodyxf;
            goto H2tNextxf;
            H2tBodyxf:
            $tacticsController->pingcang($tactic, [], '递延余额不足平仓');
            goto H2txe;
            H2tNextxf:
            $smss[$tactic->user->phone] = ['name' => config('sms.name'), 'sign' => config('sms.sign'), 'pwd' => config('sms.pwd'), 'type' => config('sms.type'), 'mobile' => $tactic->user->phone, 'content' => '您的 ' . $tactic->user->phone . ' 账户余额已不足以缴纳今日的递延费，请及时充值,否则将会在14:50自动平仓！', 'extno' => ''];
            H2txe:H2txb:
            goto H2tx9;
            H2tNextxa:
            $H2t0 = $tactic->is_analog == 1;
            if ($H2t0) goto H2tBodyxg;
            goto H2tNextxg;
            H2tBodyxg:
            $H2t0 = $tactic->user->analog_money >= $tactic->diyanfei;
            if ($H2t0) goto H2tBodyxi;
            goto H2tNextxi;
            H2tBodyxi:
            DB::beginTransaction();
            try {
                $charge = Charge::create(['user_id' => $tactic->user->id, 'order_no' => $tactic->order_no, 'type' => 8, 'money' => 0 - (float)$tactic->diyanfei, 'before_balance' => $tactic->user->analog_money, 'after_balance' => $tactic->user->analog_money - (float)$tactic->diyanfei, 'status' => 1, 'is_analog' => 1, 'info' => "用户【" . $tactic->user->id . "|" . $tactic->user->phone . "】模拟账户扣除递延费" . $tactic->diyanfei . "元", 'create_ip' => $ip]);
                $diyanfei = Diyanfei::create(['order_no' => $tactic->order_no, 'user_id' => $tactic->user_id, 'date' => Carbon::today(), 'diyanfei' => $tactic->diyanfei, 'is_analog' => 1]);
                $tactic->user->decrement('analog_money', $tactic->diyanfei);
                $tactic->increment('count_diyanfei', $tactic->diyanfei);
                DB::commit();
            } catch (\Exception $e) {
                DB::rollback();
            }
            goto H2txh;
            H2tNextxi:
            $tacticsController->pingcang($tactic, [], '递延余额不足平仓');
            H2txh:
            goto H2tx9;
            H2tNextxg:H2tx9:
            goto H2tx7;
            H2tNextx8:H2tx7:
        }
        foreach ($smss as $k => $v) {
            sendSms($v);
        }
        goto H2tx5;
        H2tNextx6:H2tx5:
    }

    public function diyanfeiSms()
    {
        $res = isJiaoYi();
        if ($res) goto H2tBodyxl;
        goto H2tNextxl;
        H2tBodyxl:
        $today = Carbon::today();
        $users = User::with(['tactics' => function ($query) use ($today) {
            $query->where('is_analog', 0)->where("is_sell", 2)->where('created_at', '<', $today)->where('order_status', 0)->whereIn('is_entrust', [1, 6, 7, 99])->lockForUpdate();
        }])->lockForUpdate()->get();
        $codes = $users->mapWithKeys(function ($item) {
            return $item->tactics->map(function ($item, $key) {
                return $item;
            });
        })->pluck('code')->unique()->implode(',');
        $goods = getRealTimeInfos($codes);
        $smss = [];
        foreach ($users as $user) {
            $diyanfeis = $user->tactics->sum('diyanfei');
            $H2t0 = $diyanfeis > $user->money;
            if ($H2t0) goto H2tBodyxn;
            goto H2tNextxn;
            H2tBodyxn:
            $smss[$user->phone] = ['name' => config('sms.name'), 'sign' => config('sms.sign'), 'pwd' => config('sms.pwd'), 'type' => config('sms.type'), 'mobile' => $user->phone, 'content' => '您的 ' . $user->phone . ' 账户余额已不足以缴纳下个交易日的系统递延费，请及时充值,否则将会在下个交易日14:40自动平仓！', 'extno' => ''];
            goto H2txm;
            H2tNextxn:H2txm:
        }
        foreach ($smss as $k => $v) {
            sendSms($v);
        }
        goto H2txk;
        H2tNextxl:H2txk:
    }

    public function stopLosePingcang()
    {
        $res = isJiaoYi();
        if ($res) goto H2tBodyxp;
        goto H2tNextxp;
        H2tBodyxp:
        $H2t0 = new TacticsController();
        $tacticsController = $H2t0;
        $tactics = Tactics::with(['shares', 'user'])->where('order_status', 0)->where('created_at', '<', Carbon::today())->whereIn('is_entrust', [1, 6, 7, 99])->lockForUpdate()->get();
        $codes = $tactics->pluck('code')->unique();
        $codes = $codes->implode(',');
        $goods = getRealTimeInfos($codes);
        $maxDay = Setting::where('code', 'chicang_max_day')->first();
        foreach ($tactics as $tactic) {
            if (isset($goods[$tactic->code])) goto H2tBodyxr;
            goto H2tNextxr;
            H2tBodyxr:
            $good = $goods[$tactic->code];
            goto H2txq;
            H2tNextxr:
            continue 1;
            H2txq:
            $H2t0 = $tactic->min_price >= $good['current_price'];
            $H2t2 = (bool)$H2t0;
            $H2t3 = !$H2t2;
            if ($H2t3) goto H2tBodyxu;
            goto H2tNextxu;
            H2tBodyxu:
            $H2t1 = $tactic->max_price <= $good['current_price'];
            $H2t2 = (bool)$H2t1;
            goto H2txt;
            H2tNextxu:H2txt:
            if ($H2t2) goto H2tBodyxv;
            goto H2tNextxv;
            H2tBodyxv:
            $H2t0 = $tactic->min_price >= $good['current_price'];
            if ($H2t0) goto H2tBodyxx;
            goto H2tNextxx;
            H2tBodyxx:
            $pingcang_type = '止损平仓';
            goto H2txw;
            H2tNextxx:
            $pingcang_type = '止盈平仓';
            H2txw:
            $H2t0 = $tactic->is_add == 2;
            $H2t2 = (bool)$H2t0;
            if ($H2t2) goto H2tBodyx11;
            goto H2tNextx11;
            H2tBodyx11:
            $H2t1 = $tactic->created_at > Carbon::today()->subDays($maxDay->value - 1);
            $H2t2 = (bool)$H2t1;
            goto H2txz;
            H2tNextx11:H2txz:
            if ($H2t2) goto H2tBodyx12;
            goto H2tNextx12;
            H2tBodyx12:
            $H2t0 = $tactic->is_analog == 0;
            if ($H2t0) goto H2tBodyx14;
            goto H2tNextx14;
            H2tBodyx14:
            $H2t0 = $tactic->user->money < $tactic->xingyongjin;
            if ($H2t0) goto H2tBodyx16;
            goto H2tNextx16;
            H2tBodyx16:
            $tacticsController->pingcang($tactic, $good, $pingcang_type);
            goto H2tx15;
            H2tNextx16:
            $tacticsController->addXinYongJin($tactic, $good);
            H2tx15:
            goto H2tx13;
            H2tNextx14:
            $H2t0 = $tactic->is_analog == 1;
            if ($H2t0) goto H2tBodyx17;
            goto H2tNextx17;
            H2tBodyx17:
            $H2t0 = $tactic->user->analog_money < $tactic->xingyongjin;
            if ($H2t0) goto H2tBodyx19;
            goto H2tNextx19;
            H2tBodyx19:
            $tacticsController->pingcang($tactic, $good, $pingcang_type);
            goto H2tx18;
            H2tNextx19:
            $tacticsController->addXinYongJin($tactic, $good);
            H2tx18:
            goto H2tx13;
            H2tNextx17:H2tx13:
            goto H2txy;
            H2tNextx12:
            $tacticsController->pingcang($tactic, $good, $pingcang_type);
            H2txy:
            goto H2txs;
            H2tNextxv:H2txs:
        }
        goto H2txo;
        H2tNextxp:H2txo:
    }

    public function dangerPingcang()
    {
        $res = isJiaoYi();
        if ($res) goto H2tBodyx1b;
        goto H2tNextx1b;
        H2tBodyx1b:
        $H2t0 = new TacticsController();
        $tacticsController = $H2t0;
        $shares = Shares::where('is_danger', 1)->where('set_danger_time', '<', Carbon::today())->with(['tactics' => function ($query) {
            $query->with(['user'])->where('order_status', 0)->where(function ($query) {
                $query->whereIn('is_entrust', [1, 6, 7, 99]);
            });
        }])->lockForUpdate()->get();
        $codes = $shares->implode('code', ',');
        $goods = getRealTimeInfos($codes);
        foreach ($shares as $share) {
            if (isset($goods[$share->code])) goto H2tBodyx1d;
            goto H2tNextx1d;
            H2tBodyx1d:
            $good = $goods[$share->code];
            goto H2tx1c;
            H2tNextx1d:
            continue 1;
            H2tx1c:
            foreach ($share->tactics as $tactic) {
                $tacticsController->pingcang($tactic, $good, '危险股票平仓');
            }
        }
        goto H2tx1a;
        H2tNextx1b:H2tx1a:
    }

    public function maxDayPingcang()
    {
        $res = isJiaoYi();
        if ($res) goto H2tBodyx1f;
        goto H2tNextx1f;
        H2tBodyx1f:
        $H2t0 = new TacticsController();
        $tacticsController = $H2t0;
        $maxDay = Setting::where('code', 'chicang_max_day')->first();
        $tactics = Tactics::with(['user'])->where('order_status', 0)->where('created_at', '<', Carbon::today()->subDays($maxDay->value - 1))->whereIn('is_entrust', [1, 6, 7, 99])->lockForUpdate()->get();
        $codes = $tactics->pluck('code')->unique()->implode(',');
        $goods = getRealTimeInfos($codes);
        foreach ($tactics as $tactic) {
            if (isset($goods[$tactic->code])) goto H2tBodyx1h;
            goto H2tNextx1h;
            H2tBodyx1h:
            $good = $goods[$tactic->code];
            goto H2tx1g;
            H2tNextx1h:
            continue 1;
            H2tx1g:
            $tacticsController->pingcang($tactic, $good, '最大持仓天数平仓');
        }
        goto H2tx1e;
        H2tNextx1f:H2tx1e:
    }

    public function shipanSettle()
    {
        $H2t0 = new TacticsController();
        $tacticsController = $H2t0;
        $tactics = Tactics::with(['shares', 'user'])->where('is_entrust', 3)->where('is_settle', 0)->lockForUpdate()->get();
        foreach ($tactics as $tactic) {
            $tacticsController->shipanSettle($tactic);
        }
    }
}

?>