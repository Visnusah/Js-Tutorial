// If statement
// Comparison operators: <, >, <=, >=, ==, !=, ===

// Define the temperature variable
const temperature = 50;

// Check if the temperature is exactly 49
// === is used to check the value and the type of the variable
if (temperature === 49) {
    console.log(`It's too hot today!`); // This won't be executed
} else {
    console.log(`It's good temperature today!`); // Output: It's good temperature today!
}

// Define the score_01 variable
const score_01 = 200;

// Check if the score is greater than 100
if (score_01 > 100) {
    const power = "fly_01"; // Declare and assign 'power' variable
    console.log(`User Power : ${power}`); // Output: User Power : fly_01
}

// Output the 'power' variable outside the block scope
console.log(`User Power : ${power}`); // Throws a ReferenceError because 'power' is not defined outside the block

/** */

// Define the score_02 variable
const score_02 = 300;

// Check if the score is greater than 100
if (score_02 > 100) {
    var power = "fly_02"; // Declare and assign 'power' variable using 'var'
    console.log(`User Power : ${power}`); // Output: User Power : fly_02
}

// Output the 'power' variable outside the block scope
console.log(`User Power : ${power}`); // Output: User Power : fly_02 (var is function-scoped)


const balance_01 = 1000;
if (balance_01 > 500) console.log(`You have enough money to buy a new phone!`),
console.log(`You have enough money again!`); // don't do this in real life code 😅

// multiple statements in if block

const balance_02 = 1000;

if (balance_02 < 500) {
    console.log(`you have less than 500`);
} else if (balance_02 < 750) {
    console.log(`you have less than 750`);
}
else if (balance_02 < 200) {
    console.log(`you have less than 200`);
} else {
    console.log(`you have more than 750`);
}

const userLoggedIn = true
const debitCard = true
const emailVerified = true
const loggedInFromGoogle = true


// Logical AND operator and OR operator
// AND is used to check if all the conditions are true
// OR is used to check if any of the conditions are true

if (userLoggedIn && debitCard && emailVerified && 2==2) { // this is used to check if all the conditions are true (AND)
    console.log(`Welcome to the website!`);
} else {
    console.log(`Please log in to continue!`);
}

if (loggedInFromGoogle || debitCard || 2 == 3) { // this is used to check if any of the conditions are true (OR)
    console.log(`Welcome to the website!`);
} else {
    console.log(`Please log in to continue!`);
}

// Nullish coalescing operator (??) : null undefined
// if i will not want null or undefined to be assigned to the variable then i can use nullish coalescing operator 
let val1;
val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15 // It will return 10 because null is not defined. It will return 15 if the null is defined before 10.

console.log(val1); // this is used to check if the value is null or undefined


// Ternary operator
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 100 ? console.log(`I will buy the ice tea`) : console.log(`I will not buy the ice tea`)

