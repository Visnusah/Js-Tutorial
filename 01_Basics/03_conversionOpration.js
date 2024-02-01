
//**************************** Conversion ***********************************
let RollNon = undefined

console.log(typeof RollNon);
console.log(typeof (RollNon));  

let ValueInNumber = Number(RollNon)

console.log(typeof ValueInNumber);
console.log(ValueInNumber);


// NaN --> NOt A Number --> It is Type of it's language it will be fixed after learned deep!                   
 // 0 --> If you put undefined in let RollNon then output will be 0 it will also be fixed after some some when you will use library

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;



let isLoggedIn = "Kamlesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Kamlesh" => true

let someNumber = 33

let somestring = String(someNumber)

console.log(typeof somestring); 

// *********************************** Operation ****************************


// let value = 13
// let negValue = -value
// console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%3);   ==> This operation is mostly used in crytogaraphy and many more algo..


let str1 = "Hello"
let str2 = " Kamlesh"

let str3 = str1 + str2

// console.log(str3);


// console.log("1" + 2);
// console.log(1+ "2");
// console.log("1" + 2 + 2);  //--> Now It's different
// console.log(1 + 1 + "2");  // And Now it's totally different

// console.log(2 + 3 * 4 % 4);  // --> This type of operation is only for exam because it's not used in real life projects.


// console,console.log(+true);
// console.log(+"");



// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2   // this type of methode is good for being cool coder but don't use in real life projects in company because it reduces the code readblity and many more.

// let gameCounter = 100

// ++gameCounter;   //prefix value
// gameCounter++;   //posttfix value
// console.log(gameCounter);


// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
