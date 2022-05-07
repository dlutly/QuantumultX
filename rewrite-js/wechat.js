***************************
QuantumultX:
[rewrite_local]
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/dlutly/QuantumultX/main/rewrite-js/Wechat.js

[mitm]
hostname = mp.weixin.qq.com
***************************
var obj = JSON.parse($response.body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
delete obj.appid;
$done({body: JSON.stringify(obj)}); 
