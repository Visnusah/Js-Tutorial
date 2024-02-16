// Declare three variables using different declarations
// Global scope
let variable1 = 10; // 'variable1' is declared using let
const variable2 = 20; // 'variable2' is declared using const
var variable3 = 30; // 'variable3' is declared using var

// Output the values of the variables
// console.log(variable1); // Output: 10
// console.log(variable2); // Output: 20
// console.log(variable3); // Output: 30

// Block scope inside --> {}
if(true){
    let variable4 = 10; // 'variable4' is declared using let within the block
    const variable5 = 20; // 'variable5' is declared using const within the block
    var variable6 = 30; // 'variable6' is declared using var within the block
}

// Attempt to access variables declared within the block scope (outside the block)
// console.log(variable4); // Output: ReferenceError: variable4 is not defined
// console.log(variable5); // Output: ReferenceError: variable5 is not defined
// console.log(variable6); // Output: 30 (var has function scope, so it's accessible outside the block)

//****************************//


// Declare a variable 'newVar1' and assign it a value of 300
let newVar1 = 300;

// Block scope with variables declared using let and const
if (true) {
    // Declare a new variable 'newVar1' within the block and assign it a value of 10 (local scope)
    let newVar1 = 10;
    // Declare a constant 'newVar3' within the block and assign it a value of 30 (local scope)
    const newVar3 = 30;
    // Uncomment to see the output, but it's commented out currently
    // console.log("INNER: ", newVar1);
}

// Uncomment to see the output, but it's commented out currently
// console.log(newVar1);

//****************************//

// Nested scope within functions
function newFunction() {
    // Declare a constant 'userName' and assign it a value of "Kamlesh" within the function scope
    const userName = "Kamlesh";

    function AnotherFunction() {
        // Declare a constant 'website' and assign it a value of "Youtube" within the function scope
        const website = "Youtube";
        // Output the value of 'website' and 'userName' from the outer function scope
        console.log(website); // Output: Youtube
        console.log(userName); // Output: Kamlesh
    }
    // Call the 'AnotherFunction', but it's commented out currently
    // AnotherFunction();
}

// Call the 'newFunction', but it's commented out currently
// newFunction();

//****************************//

// Nested block scopes
if (true) {
    // Declare a constant 'username' and assign it a value of "kamlesh" within the block scope
    const username = "kamlesh";

    if (username === "kamlesh") {
        // Declare a constant 'website' and assign it a value of " youtube.com" within the nested block scope
        const website = " youtube.com";
        // Uncomment to see the output, but it's commented out currently
        // console.log(username + website);
    }
}

//****************************//

// Function declaration hoisting
console.log(addOne(4)); // Output: 5

// Define a function 'addOne' that adds 1 to the argument 'num'
function addOne(num){
    return num + 1;
}

console.log(addOne(5)); // Output: 6

//****************************//

// Function expression
// console.log(addTwo(8)); // Throws an error because 'addTwo' is not yet defined

// Define a constant 'addTwo' using function expression and assign it an anonymous function that adds 2 to the argument 'num'
const addTwo = function (num) {
    return num  + 2;
}

console.log(addTwo(8)); // Output: 10
