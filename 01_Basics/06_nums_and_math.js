// ++++++++++++++++++++++++++ NUMBER ++++++++++++++++++++++++++
/** 
const score = 200       //Method to declare the number!
console.log(score);


const balace = new Number(100)      // Best method to declare the Number in js
console.log(balace);
console.log(typeof balace);     //object

console.log(balace.toString().length);

// => 3 
console.log(typeof balace);     //object


console.log(balace.toFixed(2));
// => 100.00


const otherNumber = 23.5234
console.log(otherNumber.toPrecision(2));
// => 24
console.log(otherNumber.toPrecision(4));
// => 23.52
console.log(otherNumber.toPrecision(1));
//2e+1      output in complex number

const hundres = 1000000
console.log(hundres.toLocaleString());      //1,000,000
console.log(hundres.toLocaleString('en-IN'));      //10,00,000

*/

// ++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++
 

console.log(Math);

console.log(Math.abs(-7));  // It convert negative number to positive not for changing positive to negative

console.log(Math.round(23.42));         //23
console.log(Math.round(23.52));         //24

console.log(Math.ceil(7.3));  //=>8  // upper value from 7
console.log(Math.floor(7.3)); // => 7// Lower value from 7

console.log(Math.min(43,5,34,2,5,2,53,2,1,3,336,56)); // MINIMUM NUmber
console.log(Math.max(43,5,34,2,5,2,53,2,1,3,336,56)); //MAXIMUM NUMBER


console.log(Math.random());     // round method gives values between 0 and 1 
console.log((Math.random()*10)+1);      // Round gives values  values between 0 & 1 
                            //SO MULTIPLY by 10 to take 2 digits and pluse 1 for if it's value is 0.12....(something)

console.log((Math.floor(Math.random()*10)+1));
console.log((Math.ceil(Math.random()*10)+1));
console.log((Math.round(Math.random()*10)+1));


const min = 10
const max = 20

console.log(Math.random() * (max - min + 1) + min);






