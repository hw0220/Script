/**
 * @supported 90AD4EC2DD99
 */
let obj = JSON.parse($response.body)
obj["90AD4EC2DD99"] = 0;
$done({body:JSON.stringify(obj)})
