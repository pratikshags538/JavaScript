const accID = 12445
let email = "abc@gmail.com"
var accPassword = "hello"
accountCity = "Jaipur"

// accID = 2
// console.log(accID)      //cannot change the value of a const

email = "xyz@gmail.com"
accPassword = "world"
accountCity = "Nagpur"

// var not used anymore because of block scope issue

console.table([email, accPassword, accountCity])