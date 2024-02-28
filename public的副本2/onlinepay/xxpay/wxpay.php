<?php
header("Content-type: text/html; charset=utf-8");
include('./mysql/DbMysql.class.php');
$config = include('./mysql/config.php');
$db = new DbMysql($config);
$db->connect(true);
	
$pay_orderid=trim($_GET['pay_orderid']);
$pay_orderid=htmlspecialchars($pay_orderid);


$note=trim($_GET['note']);
$note=htmlspecialchars($note);

$pay_callbackurl=$_GET['pay_callbackurl'];

if(empty($note) || empty($pay_orderid) || empty($pay_callbackurl)){
	exit("参数丢失");	
}

//链接数据库

$sql="SELECT * FROM charges WHERE order_no='".$pay_orderid."' and status=0  LIMIT 1";
$czinfo=$db->getOne($sql);
if(empty($czinfo)){
	exit("订单已经支付或订单不存在");		
}

$db->query("UPDATE charges SET note='".$note."',pay_type='5' WHERE order_no='".$pay_orderid."' ");


?>



<!DOCTYPE html>
<html class="ui-page-login">

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<title>微信扫码提交成功</title>
		<link href="css/mui.min.css" rel="stylesheet" />
		<link href="css/style.css" rel="stylesheet" />
		<script src="js/jquery-1.10.2.min.js" type="text/javascript"></script>
		<script src="layer_mobile/layer.js" type="text/javascript"></script>
		<style>
			.area {
				margin: 20px auto 0px auto;
			}
			
			.mui-input-group {
				margin-top: 10px;
			}
			
			.mui-input-group:first-child {
				margin-top: 20px;
			}
			
			.mui-input-group label {
				width: 35%;
			}
			
			.mui-input-row label~input,
			.mui-input-row label~select,
			.mui-input-row label~textarea {
				width: 63%;
			}
			
			.mui-checkbox input[type=checkbox],
			.mui-radio input[type=radio] {
				top: 6px;
			}
			
			.mui-content-padded {
				margin-top: 25px;
			}
			
			.mui-btn {
				padding: 10px;
			}
			
			.link-area {
				display: block;
				margin-top: 25px;
				text-align: center;
			}
			
			.spliter {
				color: #bbb;
				padding: 0px 8px;
			}
			
			.oauth-area {
				position: absolute;
				bottom: 20px;
				left: 0px;
				text-align: center;
				width: 100%;
				padding: 0px;
				margin: 0px;
			}
			
			.oauth-area .oauth-btn {
				display: inline-block;
				width: 50px;
				height: 50px;
				background-size: 30px 30px;
				background-position: center center;
				background-repeat: no-repeat;
				margin: 0px 20px;
				/*-webkit-filter: grayscale(100%); */
				border: solid 1px #ddd;
				border-radius: 25px;
			}
			
			.oauth-area .oauth-btn:active {
				border: solid 1px #aaa;
			}
			
			.oauth-area .oauth-btn.disabled {
				background-color: #ddd;
			}
			
			.aalp{ width:20px !important; float:none !important; margin-top:11px !important;}
			.aap{ float:none !important; width:20% !important; padding:0px !important;}
			#note p{ margin:0px !important; padding:0px !important;}
		</style>

	</head>

	<body>
		<header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">提交成功</h1>
		</header>
		<div class="mui-content">
			
            	
            	
				<div class="mui-input-row" style="text-align:center; margin:20px 0px;">
					
					请扫描图中二维码进行充值
				</div>
				
                <div class="mui-input-row" style="text-align:center">
					
					<img src="./wx.jpg" width="200" height="200">
				</div>
                
            
				
			<div class="mui-content-padded">
				<button type="button" class="mui-btn mui-btn-block mui-btn-primary mmbtn">点击返回</button>
				
				</div>
				</form>
			</div>
			<div class="mui-content-padded oauth-area">

			</div>
		</div>
        
      <div id="note" style="display:none;">
      	<p style="font-size:16px; font-weight:bold; color:#F00; margin:0px;">转入说明</p>
      	<p style="margin:0px;">工作日2小时未收到账的</p>
        <p style="margin:0px;">请联系电话客服</p>
        <p style="margin:0px;">为你处理</p>
       
      
      </div>  
        
	<script>
  
  
    $(function(){
		$(".mmbtn").click(function(){
		 		window.location.href="<?php echo $pay_callbackurl;?>";
		 
		 })
	
		
		
		
		
  	layer.open({
   	 content: $("#note").html()
    ,btn: '确定'
  	});
  
		
		
		
			
	})
  

	
	
	</script>
	</body>

</html>






