<?php
header("Content-type: text/html; charset=utf-8");
$pay_orderid=$_GET['pay_orderid'];
$pay_amount=$_GET['pay_amount'];
$pay_callbackurl=$_GET['pay_callbackurl'];
$pay_type=$_GET['pay_type'];
if(empty($pay_orderid) || empty($pay_amount) || empty($pay_type) || empty($pay_callbackurl)){
	exit("参数丢失");	
}



if($pay_type == '1' || $pay_type == '2' || $pay_type == '3'){
	$jupurl='http://'.$_SERVER['HTTP_HOST'].'/onlinepay/8pay/pay.php?pay_orderid='.$pay_orderid.'&pay_amount='.$pay_amount.'&pay_type='.$pay_type.'&pay_callbackurl='.$pay_callbackurl;


}elseif($pay_type == 'QWJ_QUICK' || $pay_type == '7001'){
	
	$jupurl='http://'.$_SERVER['HTTP_HOST'].'/onlinepay/jrpay/pay.php?pay_orderid='.$pay_orderid.'&pay_amount='.$pay_amount.'&pay_type='.$pay_type.'&pay_callbackurl='.$pay_callbackurl;

		
}elseif($pay_type == '11'){
	if(empty($_GET['note']) || !isset($_GET['note'])){
		exit("请输入备注！");	
	}
	if($pay_amount < 10 || $pay_amount > 20000){
		exit("金额在10-20000之间");	
	}
	$note=htmlspecialchars($_GET['note']);
	$jupurl='http://'.$_SERVER['HTTP_HOST'].'/onlinepay/xxpay/zfbpay.php?note='.$note.'&pay_orderid='.$pay_orderid.'&pay_callbackurl='.$pay_callbackurl;
	

}elseif($pay_type == '12'){
	if(empty($_GET['note']) || !isset($_GET['note'])){
		exit("参数丢失#1");	
	}
	if($pay_amount < 10 || $pay_amount > 20000){
		exit("金额在10-20000之间");	
	}
	$note=htmlspecialchars($_GET['note']);
	$jupurl='http://'.$_SERVER['HTTP_HOST'].'/onlinepay/xxpay/wxpay.php?note='.$note.'&pay_orderid='.$pay_orderid.'&pay_callbackurl='.$pay_callbackurl;
	

}



header("Location: ".$jupurl); 
exit;
	

?>