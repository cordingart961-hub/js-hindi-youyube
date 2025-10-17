const accountId = 14423;
let accountEmail = 'abc123@gmail.com';
var  accountPassword = '1234';
accountCity = 'pratapgarh';
let accountState;

//accountId = 2 //not allowed

accountEmail = "anu12@gmail.com";
accountPassword = '1111';
accountCity = 'kunda';


console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
