<?php
use Illuminate\Support\Facades\Cache;
//废弃不用
function get_price($codes) {
    $cache_name = 'price_' . $codes;
        $url = 'http://hq.sinajs.cn/list=' . $codes;
        $ch = curl_init();
        $this_header = array("content-type: application/x-www-form-urlencoded; charset=UTF-8");
        curl_setopt($ch, CURLOPT_HTTPHEADER, $this_header);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        $output = curl_exec($ch);
        curl_close($ch);
        $output = mb_convert_encoding($output, 'utf-8', 'GBK,UTF-8,ASCII');
        $contents = explode(",", substr($output, strpos($output, '"') + 1));
        //交易时间
        if (date('H.i') >= '9.30' && date('H.i') <= '15.00' && date('w') >= 1 && date('w') <= 5) {
            $lifetime = 30;
        } else {
            if (date('H.i') > '9.30') {
                $time1 = mktime(9, 30, 0, date('m'), date('d') + 1);
            } else {
                $time1 = strtotime(date('Y-m-d 09:30:00'));
            }
            $lifetime = $time1 - time();
        }
    return $contents;
}
function get_price_moneys($codes) {
    $cache_name = 'price_' . $codes;
    $list = Cache::get($cache_name);
    if (empty($contents)) {
        $url = 'http://hq.sinajs.cn/list=' . $codes;
        $ch = curl_init();
        $this_header = array("content-type: application/x-www-form-urlencoded; charset=UTF-8");
        curl_setopt($ch, CURLOPT_HTTPHEADER, $this_header);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        $output = curl_exec($ch);
        curl_close($ch);
        $output = mb_convert_encoding($output, 'utf-8', 'GBK,UTF-8,ASCII');

        $contents = explode(",", substr($output, strpos($output, '"') + 1));
        $output = explode(";", $output);
        $output = str_replace("\n", "", $output);
        $list = [];
        array_pop($output);
        foreach ($output as $v) {
            $arr = [];
            $code = substr(explode("=", $v)[0], -8);
            $arr1 = explode(',', substr(explode("=", $v)[1], 1, -1));
            array_unshift($arr1, $code);
            $list[] = $arr1;
        }
        //交易时间
        if (date('H.i') >= '9.30' && date('H.i') <= '15.00' && date('w') >= 1 && date('w') <= 5) {
            $lifetime = 30;
        } else {
            if (date('H.i') > '9.30') {
                $time1 = mktime(9, 30, 0, date('m'), date('d') + 1);
            } else {
                $time1 = strtotime(date('Y-m-d 09:30:00'));
            }
            $lifetime = $time1 - time();
        }
        Cache::put($cache_name, $list,$lifetime);

    }

    return $list;
}
function str_rand($length = 32, $char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    if(!is_int($length) || $length < 0) {
        return false;
    }

    $string = '';
    for($i = $length; $i > 0; $i--) {
        $string .= $char[mt_rand(0, strlen($char) - 1)];
    }

    return $string;
}

/**
 * true 考虑交易时间段，不是节假日，但不在时间段也不交易
 * false  不考虑交易时间段，只要不是节假日就交易
 */
function isJiaoYi($type = true)
{
    $now = time();
    $date = date('Y-m-d',$now);

    $time1 = strtotime($date.' 09:30:00');
    $time2 = strtotime($date.' 11:27:00');
    $time3 = strtotime($date.' 13:00:00');
    $time4 = strtotime($date.' 14:58:00');
	
	
    if(isHoliday($date)){
		return false;
    }elseif($type){
        if($time1 <= $now && $now <= $time2){
            return true;
        }elseif($time3 <= $now && $now <= $time4){
            return true;
        }else{
            return false;
        }
    }
    return true;
}

/*// 是否节假日
function isHoliday($date = null)
{
    if(!$date) $date = date('Y-m-d');
    $weeks=date('w',strtotime($date));
    if($weeks == 0 || $weeks == 6){
        return true;
    }
    $param = date('Ymd',strtotime($date));
    return Cache::rememberForever("holidays_".$param,function() use ($param){
        $url = 'http://tool.bitefu.net/jiari/?d='.$param;
        $res = file_get_contents($url);
        if($res !== '0'){
            return true;
        }
        return false;
    });
    
}*/


// 是否节假日
function isHoliday($date = null)
{
    if(!$date) $date = date('Y-m-d');
    $weeks=date('w',strtotime($date));
    if($weeks == 0 || $weeks == 6){
        return true;
    }else{
		return false;	
	}
    $param = date('Ymd',strtotime($date));
   return Cache::rememberForever("holidays_".$param,function() use ($param){
        //$url = 'http://tool.bitefu.net/jiari/?d='.$param;
        //$res = file_get_contents($url);
        $url = "http://api.goseek.cn/Tools/holiday?date=".$param;
		$file = file_get_contents($url);
		$json = json_decode($file,true);
		
		if($json['data'] != '0'){
            return true;
        }
        return false;
    });
    
}





function getChildren($data,$pid = 0,$pidKey = 'pid',$idKey = 'id')
{
    $arr=array($pid);
    foreach ($data as $v) {
        if ($v->$pidKey == $pid) {
            $arr[]=$v->$idKey;
            $arr=array_merge($arr,getChildren($data,$v->id,$pidKey,$idKey));
        }
    }
    return array_unique($arr);
}

/**
 * 短信接口
 * $data = [
 *          'name' => config('sms.name'),
 *          'sign' => config('sms.sign'),
 *          'pwd' => config('sms.pwd'),
 *          'type' => config('sms.type'),
 *          'mobile' => $request->phone,
 *          'content' => '验证码：'.$verificationCode.'，请于'.config('sms.expire_time').'分钟内填写。如非本人操作，请忽略本短信。',
 *          'extno' => ''
 *       ];
 */
/*function sendSms($data = [])
{
    if(!is_array($data)){
        return false;
    }
    $params = '';
    foreach ($data as $key=>$value) {
        $params .= '&'.$key.'='.urlencode($value);
    }
    $params = trim($params,'&');
    $url = "http://api.duanxin123.cn/asmx/smsservice.aspx?".$params; //提交的url地址
    $str = file_get_contents($url);
  	//print_r($str);die;
    $con = substr($str, 0, 1 );  //获取信息发送后的状态
    if($con === '0'){
        return true;
    }else{
        return false;
    }
}*/




function sendSms($data = [])
{
    if(!is_array($data)){
        return false;
    }
   $smsuser = "libau";
   $smspass = "d41d8cd98f00b204e980";
   $content=$data['content'];
   $url="http://utf8.api.smschinese.cn/?Uid=".$smsuser."&Key=".$smspass."&smsMob=".$data['mobile']."&smsText=".$content;
   $file_contents = file_get_contents($url);
		
  if($file_contents > 0){
	  
	  return true;
  }else{
	  
	 return false;
  }
}






/**
 * ip2address
 */

function ip2address($ip)
{
    $url = "http://ip.taobao.com/service/getIpInfo.php?ip={$ip}";
    $jsonData = @file_get_contents($url);
    if($jsonData){
        $data = json_decode($jsonData);
        if(isset($data->code) && $data->code == 0){
            return $data->data->country.'-'.$data->data->region.'-'.$data->data->city;
        }
    }
    return '未知';
}

function is_idcard( $id ) 
{ 
    $id = strtoupper($id); 
    $regx = "/(^\d{15}$)|(^\d{17}([0-9]|X)$)/"; 
    $arr_split = array(); 
    if(!preg_match($regx, $id)) 
    { 
        return FALSE; 
    } 
    if(15==strlen($id)) //检查15位 
    { 
        $regx = "/^(\d{6})+(\d{2})+(\d{2})+(\d{2})+(\d{3})$/"; 
    
        @preg_match($regx, $id, $arr_split); 
        //检查生日日期是否正确 
        $dtm_birth = "19".$arr_split[2] . '/' . $arr_split[3]. '/' .$arr_split[4]; 
        if(!strtotime($dtm_birth)) 
        { 
        return FALSE; 
        } else { 
        return TRUE; 
        } 
    } 
    else      //检查18位 
    { 
        $regx = "/^(\d{6})+(\d{4})+(\d{2})+(\d{2})+(\d{3})([0-9]|X)$/"; 
        @preg_match($regx, $id, $arr_split); 
        $dtm_birth = $arr_split[2] . '/' . $arr_split[3]. '/' .$arr_split[4]; 
        if(!strtotime($dtm_birth)) //检查生日日期是否正确 
        { 
        return FALSE; 
        } 
        else
        { 
        //检验18位身份证的校验码是否正确。 
        //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。 
        $arr_int = array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); 
        $arr_ch = array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'); 
        $sign = 0; 
        for ( $i = 0; $i < 17; $i++ ) 
        { 
            $b = (int) $id{$i}; 
            $w = $arr_int[$i]; 
            $sign += $b * $w; 
        } 
        $n = $sign % 11; 
        $val_num = $arr_ch[$n]; 
        if ($val_num != substr($id,17, 1)) 
        { 
            return FALSE; 
        } //phpfensi.com 
        else
        { 
            return TRUE; 
        } 
        } 
    }
}

function loadX509Cert($path)
{
    try {
        $file = file_get_contents($path);
        if (!$file) {
            throw new \Exception('loadx509Cert::file_get_contents ERROR');
        }

        $cert = chunk_split(base64_encode($file), 64, "\n");
        $cert = "-----BEGIN CERTIFICATE-----\n" . $cert . "-----END CERTIFICATE-----\n";

        $res = openssl_pkey_get_public($cert);
        $detail = openssl_pkey_get_details($res);
        openssl_free_key($res);
        if (!$detail) {
            throw new \Exception('loadX509Cert::openssl_pkey_get_details ERROR');
        }
        return $detail['key'];
    } catch (\Exception $e) {
        throw $e;
    }
}

/**
 * 获取私钥
 * @param $path
 * @param $pwd
 * @return mixed
 * @throws Exception
 */
function loadPk12Cert($path, $pwd)
{
    try {
        $file = file_get_contents($path);
        if (!$file) {
            throw new \Exception('loadPk12Cert::file
					_get_contents');
        }

        if (!openssl_pkcs12_read($file, $cert, $pwd)) {
            throw new \Exception('loadPk12Cert::openssl_pkcs12_read ERROR');
        }
        return $cert['pkey'];
    } catch (\Exception $e) {
        throw $e;
    }
}

/**
 * 私钥签名
 * @param $plainText
 * @param $path
 * @return string
 * @throws Exception
 */
function sign($plainText, $path)
{
    $plainText = json_encode($plainText);
    try {
        $resource = openssl_pkey_get_private($path);
        $result = openssl_sign($plainText, $sign, $resource);
        openssl_free_key($resource);

        if (!$result) {
            throw new \Exception('签名出错' . $plainText);
        }

        return base64_encode($sign);
    } catch (\Exception $e) {
        throw $e;
    }
}

/**
 * 公钥验签
 * @param $plainText
 * @param $sign
 * @param $path
 * @return int
 * @throws Exception
 */
function verify($plainText, $sign, $path)
{
    $resource = openssl_pkey_get_public($path);
    $result = openssl_verify($plainText, base64_decode($sign), $resource);
    openssl_free_key($resource);

    if (!$result) {
        throw new \Exception('签名验证未通过,plainText:' . $plainText . '。sign:' . $sign, '02002');
    }

    return $result;
}

/**
 * 发送请求
 * @param $url
 * @param $param
 * @return bool|mixed
 * @throws Exception
 */
function http_post_json($url, $param)
{
    if (empty($url) || empty($param)) {
        return false;
    }
    $param = http_build_query($param);
    try {
        $ch = curl_init();//初始化curl
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $param);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        //正式环境时解开注释
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        $data = curl_exec($ch);//运行curl
        curl_close($ch);

        if (!$data) {
            throw new \Exception('请求出错');
        }

        return $data;
    } catch (\Exception $e) {
        throw $e;
    }
}

function post_json_data($url, $data_string) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json; charset=utf-8',
        'Content-Length: ' . strlen($data_string))
    );
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $data = curl_exec($ch);//运行curl
    curl_close($ch);
    return $data;
}

function parse_result($result)
{
    $arr = array();
    $response = urldecode($result);
    $arrStr = explode('&', $response);
    foreach ($arrStr as $str) {
        $p = strpos($str, "=");
        $key = substr($str, 0, $p);
        $value = substr($str, $p + 1);
        $arr[$key] = $value;
    }

    return $arr;
}

// 获取单个股票信息，bool为false尝试从缓存中读取
function getRealTimeInfo($code,$bool = true){
    if(!$bool){
        if(Cache::has('share_info_'.$code)){
            return Cache::get('share_info_'.$code);
        }
    }
    $response = [];
    $url = "http://qt.gtimg.cn/q={$code}";
    $res = @file_get_contents($url);
    if($res && strpos($res,'v_pv_none_match') === false){
        $res = iconv("gb2312", "utf-8//IGNORE",$res);
        $data = explode('~',$res);
        $response = [
            'name' => $data[1],
            'code' => $code,
            'current_price' => $data[3],                        //当前价格
            'yesterday_end_price' => $data[4],                  //昨收
            'today_begin_price' => $data[5],                    //今开
            'volume' => $data[6],                               //成交量
            'turnover' => $data[37]>10000?round($data[37]/10000,2).'亿':$data[37].'万',                            //成交额
            'outpan' => $data[7],                               //外盘
            'inpan' => $data[8],                                //内盘
            'zhenfu' => $data[43].'%',                          //振幅%
            'high' => $data[33],                                //最高
            'low' => $data[34],                                 //最低
            'market_value' => $data[45],                        //市值
            'circulation_market_value' => $data[44],            //流通市值
            'PEratio' => $data[39].'%',                         //市盈率
            'PBratio' => $data[46].'%',                         //市净率
            'up_value' => $data[31],                            //涨幅
            'up_ratio' => $data[32].'%',                        //涨幅%
        ];
        Cache::put('share_info_'.$code,$response,5);
    }
    return $response;
}

// 获取多个股票信息，直接从远程获取
function getRealTimeInfos($codes){
    $codesArr = explode(',',$codes);
    $response = [];
    $url = "http://qt.gtimg.cn/q={$codes}";
    $res = @file_get_contents($url);
    if($res && strpos($res,'v_pv_none_match') === false){
        $res = iconv("gb2312", "utf-8//IGNORE",$res);
        $datas = explode(PHP_EOL,trim($res));
        foreach($datas as $data){
            $data = explode('~',$data);
            preg_match('/^v_(\w+)=/',$data[0],$match);
            $code = $match[1];
            if(!in_array($code,$codesArr)){continue;}
            $response[$code] = [
                'name' => $data[1],
                'code' => $code,
                'current_price' => $data[3],                        //当前价格
                'yesterday_end_price' => $data[4],                  //昨收
                'today_begin_price' => $data[5],                    //今开
                'volume' => $data[6],                               //成交量
                'turnover' => $data[37]>10000?round($data[37]/10000,2).'亿':$data[37].'万',                            //成交额
                'outpan' => $data[7],                               //外盘
                'inpan' => $data[8],                                //内盘
                'zhenfu' => $data[43].'%',                          //振幅%
                'high' => $data[33],                                //最高
                'low' => $data[34],                                 //最低
                'market_value' => $data[45],                        //市值
                'circulation_market_value' => $data[44],            //流通市值
                'PEratio' => $data[39].'%',                         //市盈率
                'PBratio' => $data[46].'%',                         //市净率
                'up_value' => $data[31],                            //涨幅
                'up_ratio' => $data[32].'%',                        //涨幅%
            ];
            Cache::put('share_info_'.$code,$response[$code],5);
        }
    }
    return $response;
}

function checkCard($card_number)
{
    $url = "https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?_input_charset=utf-8&cardNo={$card_number}&cardBinCheck=true";
    $json = file_get_contents($url);
    $data = json_decode($json);
    if(!$data->validated){
        return false;
    }
    return $data;
}

function paraFilter($para) {
    $para_filter = array();
    foreach($para as $key=>$val){
        if($key == "sign" || $val == "")continue;
		else	$para_filter[$key] = $para[$key];
    }
	return $para_filter;
}

function argSort($para) {
	ksort($para);
	reset($para);
	return $para;
}
/**
 * 把数组所有元素，按照“参数=参数值”的模式用“&”字符拼接成字符串
 * @param $para 需要拼接的数组
 * return 拼接完成以后的字符串
 */
function createLinkstring($para) {
    $arg  = "";
    foreach($para as $key=>$val){
        $arg.=$key."=".$val."&";
    }
	//去掉最后一个&字符
	$arg = substr($arg,0,strlen($arg)-1);
	//file_put_contents("log.txt","转义前:".$arg."\n", FILE_APPEND);
	//如果存在转义字符，那么去掉转义
	if(get_magic_quotes_gpc()){$arg = stripslashes($arg);}
	//file_put_contents("log.txt","转义后:".$arg."\n", FILE_APPEND);
	return $arg;
}

function md5Sign($prestr, $key) {
	$prestr = $prestr ."&key=". $key;
	return md5($prestr);
}

function getHttpContent($url, $method = 'GET', $postData = array()) {
    $data = '';
    $user_agent = $_SERVER ['HTTP_USER_AGENT'];
    $header = array(
        "User-Agent: $user_agent"
    );
    if (!empty($url)) {
        try {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_HEADER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_TIMEOUT, 30); //30秒超时
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
            //curl_setopt($ch, CURLOPT_COOKIEFILE, $cookie_jar);
            if (strtoupper($method) == 'POST') {
                $curlPost = is_array($postData) ? http_build_query($postData) : $postData;
                curl_setopt($ch, CURLOPT_POST, 1);
                curl_setopt($ch, CURLOPT_POSTFIELDS, $curlPost);
            }
            $data = curl_exec($ch);
            curl_close($ch);
        } catch (Exception $e) {
            $data = '';
        }
    }
    return $data;
}

function getClientIP($type = 0, $adv = false) {
    global $ip;
    $type = $type ? 1 : 0;
    if ($ip !== NULL)
        return $ip[$type];
    if ($adv) {
        if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $arr = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
            $pos = array_search('unknown', $arr);
            if (false !== $pos)
                unset($arr[$pos]);
            $ip = trim($arr[0]);
        }elseif (isset($_SERVER['HTTP_CLIENT_IP'])) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (isset($_SERVER['REMOTE_ADDR'])) {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
    } elseif (isset($_SERVER['REMOTE_ADDR'])) {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    // IP地址合法验证
    $long = sprintf("%u", ip2long($ip));
    $ip = $long ? array(
        $ip,
        $long) : array(
        '0.0.0.0',
        0);
    return $ip[$type];
}

function Rsasign($data,$priKey) {
	//转换为openssl密钥，必须是没有经过pkcs8转换的私钥
    $res = openssl_get_privatekey($priKey);

	//调用openssl内置签名方法，生成签名$sign
    openssl_sign($data, $sign, $res,OPENSSL_ALGO_MD5);

	//释放资源
    openssl_free_key($res);
    
	//base64编码
	$sign = base64_encode($sign);
    return $sign;
}function randomFloat($min = 0, $max = 10){	$num = $min + mt_rand() / mt_getrandmax() * ($max - $min);	return sprintf("%.2f", $num);}