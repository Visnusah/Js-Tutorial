// If statement
// Comparison operators: <, >, <=, >=, ==, !=, ===

// Define the temperature variable
const temperature = 50;

// Check if the temperature is exactly 49
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