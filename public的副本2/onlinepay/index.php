<?php
header("Content-type: text/html; charset=utf-8");
$pay_orderid=$_GET['pay_orderid'];
$pay_amount=$_GET['pay_amount'];
$pay_callbackurl=$_GET['pay_callbackurl'];
if(empty($pay_orderid) || empty($pay_amount)){
	exit("参数丢失");	
}
?>

<!DOCTYPE html>
<html class="ui-page-login">

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<title>选择支付通道</title>
		<link href="css/mui.min.css" rel="stylesheet" />
		<link href="css/style.css" rel="stylesheet" />
		<script src="xxpay/js/jquery-1.10.2.min.js" type="text/javascript"></script>

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
				width: 40%;
			}
			
			.mui-input-row label~input,
			.mui-input-row label~select,
			.mui-input-row label~textarea {
				width: 58%;
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
		</style>

	</head>

	<body>
		<header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">确认支付</h1>
		</header>
		<div class="mui-content">
			<form id='login-form' class="mui-input-group" method="get" action="pay.php">
            	<input id='pay_callbackurl' name='pay_callbackurl' type="hidden" class="mui-input-clear mui-input"  readonly value="<?php echo $pay_callbackurl;?>">
            
				<div class="mui-input-row">
					<label>订单号</label>
					<input id='pay_orderid' name='pay_orderid' type="text" class="mui-input-clear mui-input" placeholder="订单号" readonly value="<?php echo $pay_orderid;?>">
				</div>
				<div class="mui-input-row">
					<label>订单金额(元)</label>
					<input id='pay_amount' name='pay_amount' type="text" class="mui-input-clear mui-input" placeholder="订单金额" value="<?php echo $pay_amount;?>" readonly>
				</div>
				
				<div class="mui-input-row" style="height:auto;">
					<label>选择支付方式</label>
					
                    
                 
                    <input type="radio" value="11" name="pay_type" class="aalp" id="x2"  checked="checked"><label for="x2" class="aap">支付宝</label>
                   
                </div>
                
              
                 
              <div class="mui-input-row rowname" style="height:auto;">
					<label>备注</label>
					<input id='note' name='note' type="text" class="mui-input-clear mui-input" placeholder="姓名+手机号" value="">
                   
                    
				</div>      
			
				
                <div class="mui-input-row rowname" style="height:auto;">
				
					<p style=" color:#F00; font-weight:bold; font-size:18px; width:100%; line-height:40px;">温馨提示：充值时请在备注栏填写姓名+手机号，否则将不会到账，如有忘填请联系客服审核，谢谢合作。</p>
				</div>  
                
                
			<div class="mui-content-padded">
				<button type="button" class="mui-btn mui-btn-block mui-btn-primary mmbtn">确认支付</button>
				
				</div>
				</form>
			</div>
			<div class="mui-content-padded oauth-area">

			</div>
		</div>
	<script>
  
  
    $(function(){
		$(".mmbtn").click(function(){
		 
			$(".mmbtn").attr("disabled", "true");
			$("#login-form").submit();	 
		 
		 })
			
	})
  
	 
	
	/*
	 function changePay(pname){
            
			document.getElementById('xinyongka1').style.display='none';
			document.getElementById('xinyongka2').style.display='none';
           
           if(pname=='CREDITCARD'){
               document.getElementById('xinyongka1').style.display='';
			   document.getElementById('xinyongka2').style.display='';
            }
           
        }
	*/
	
		$(".aalp").click(function(){
				var pay_type = $("input[type=radio]:checked").val();
				$(".bankcode").hide();
				$(".rowname").hide();
				
				/*if(pay_type == '0202'){
					$(".bankcode").show();
						
				}*/
				if(pay_type == '11' || pay_type == '12'){
					$(".rowname").show();
						
				}
				
				
		})
		
	
	
	
	</script>
	</body>

</html>