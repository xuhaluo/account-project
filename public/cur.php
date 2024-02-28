<?php


$curl = curl_init();
// 刚开始抓取了https://github.com,但是页面弹框，后来改用抓取支付宝首页测试
curl_setopt($curl, CURLOPT_URL, 'http://www.823pay.com/channel/payment');
// 设置header
curl_setopt($curl, CURLOPT_HEADER, 1);
// 设置cURL 参数，要求结果保存到字符串中还是输出到屏幕上
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
// 运行cURL，请求网页数据
$data = curl_exec($curl);
// 关闭cURL请求
curl_close($curl);
// 打印出抓取的测试数据

print_r($data);
?>