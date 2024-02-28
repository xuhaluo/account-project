<?php
	$rs=$_GET['url'];
	
	$gourl = "alipays://platformapi/startapp?saId=10000007&qrcode=".urlencode($rs);
	
	header("Location: ".$gourl); 


?>