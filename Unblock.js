/**
* @supported 90AD4EC2DD99
*/

let obj = JSON.parse($response.body)
obj["example"] = 0;
$done({body:JSON.stringify(obj)})
