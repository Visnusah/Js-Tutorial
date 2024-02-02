// primitive 

// 7 types : String, Number, Boolean, null, undifined, symbol, BigInt

const score = 100. // datatype of score is number printed by typeof 
const scoreValue = 100.3

const isLoggenIn = false // datatype of isLoggenIn is boolean printed by typeof 
const outsideTemp = null  // null not 0
let userEmail;  // undefined  //let userEmail = undefined {Both are same but different method}


/********* Example of symbol (primitive datatype). ***********/

const id = Symbol('123') // datatype of id is symbol printed by typeof 
const anotherid = Symbol('123')


console.log(id == anotherid);  // false because these are not same or equal
 
const bigNumber = 2329876298346290520936509237n    // if you use n in the last of the  large number then automatically assigned as BigInt Datatype

// datatype of bigNumber is BigInt printed by typeof 

// Reference  (Non primitive)

// Array, Objects, Functions


const heros = ["kamlesh", "dipendra", "rabin"]      //Array
// // datatype of heros is object printed by typeof 

// Objests one method
let myObj = {
    name: "kamlesh",
    age: 23,
}

// Objects another method

{
    name: "Kamlesh";
    age: 20;
}

// Functions

const myfunction = function(){
    console.log("Hello World");

}

console.log(typeof id);

