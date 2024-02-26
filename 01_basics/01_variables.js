const accountId = 144553
let accountEmail= "upadhayaypavitra@gmail.com"
var accountPassword = "123456"
accountCity = "Bhopal"
let accountState;

// accountId = 2

accountEmail = "pavitrau@gmail.com"
accountPassword = "212131"
accountCity = "Indore"

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
