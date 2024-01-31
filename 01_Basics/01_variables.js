const accountId = 144553
let accountEmail = "Kamlesh@gmai.com"
var accountPassword = "12345"
accountCity = "Kathmandu"

// accountId = 2  {Double slash is used for comments in one line}
accountEmail = "Hitest@gmail.com"
accountPassword = "09394"
accountCity = "Janakpur"
let accountState;

/*
 Prefer not to use var because of issue in block scope and functional scope
*/

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

// Other methode for print multiple variables


console.table([accountEmail, accountId, accountPassword, accountCity, accountState])