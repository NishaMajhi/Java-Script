// 4 ways to define variable
//const, let, var, automatically

const accountId = 12134546;
let accountEmail = "abc@gmail.com"
var accountPassword = "123456"
accountCity = "Rudrapur"

console.table([accountId, accountEmail, accountPassword, accountCity]);

// accountId = 12340987  //can't change constant value
accountEmail = "hello@google.com"
accountPassword = "9528"
accountCity = "hyderabad"

console.table([accountId, accountEmail, accountPassword, accountCity]);
