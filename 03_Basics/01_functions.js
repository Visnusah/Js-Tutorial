// Output individual characters of the string "KAMLESH"
console.log("K"); // Output: K
console.log("A"); // Output: A
console.log("M"); // Output: M
console.log("L"); // Output: L
console.log("E"); // Output: E
console.log("s"); // Output: S
console.log("H"); // Output: H

console.log(" ");

// Define a function to output the characters of the string "KAMLEsH"
function Name(){
    console.log("K");
    console.log("A");
    console.log("M");
    console.log("L");
    console.log("E");
    console.log("s");
    console.log("H");
}

// Call the Name function
// Name()

//************** Function to Add Two Numbers ****************************//

// Define a function to add two numbers and output the result
function addTwonumber(num1, num2){
    console.log(num1 + num2);
}

// Call the addTwonumber function with arguments 2 and 3
addTwonumber(2, 3); // Output: 5

// Call the addTwonumber function with arguments 6 and 3 and store the result in the 'result' variable
const result = addTwonumber(6, 3);
console.log(result); // Output: undefined, as the function doesn't return any value

//************** Another Method to Declare a Function ****************************//

// Define a function to multiply two numbers and return the result
function multiply(num1, num2){
    let gunna = num1 * num2;
    return gunna;
    console.log("kamlesh"); // This line will not be executed
}

// Call the multiply function with arguments 2 and 5 and store the result in the 'abc' variable
const abc = multiply(2, 5);
console.log("Multiplication of two numbers:", abc); // Output: Multiplication of two numbers: 10

//************** Function to Add Numbers ****************************//

// Define a function to add two numbers and return the result
function addnumbers(number1, number2){
    return number1 + number2;
}

// Call the addnumbers function with arguments 2 and 8 and store the result in the 'output' variable
const output = addnumbers(2, 8);
console.log("Result:", output); // Output: Result: 10

//************** Function to Generate User Login Message ****************************//

// Define a function to generate a user login message
function loginUserMessage(username){
    return `${username} just logged in`;
}

// Uncomment to see the output
// console.log(loginUserMessage("kamlesh"));

//************** Function to Handle User Login ID ****************************//

// Define a function to handle user login ID
function loginId(id){
    if(id === undefined){
        console.log("Please enter the ID of the user");
        return;
    }
    return `${id} is logged in.`;
}

console.log(loginId()); // Output: Please enter the ID of the user
console.log(loginId("kamlesh")); // Output: kamlesh is logged in.

//************** Alternative Approach to Handle User Login ID ****************************//

// Define a function to handle user login ID using falsy check
function loginId(id){
    if(!id){
        console.log("Please enter the ID of the user");
        return;
    }
    return `${id} is logged in.`;
}

console.log(loginId()); // Output: Please enter the ID of the user
console.log(loginId("kamlesh")); // Output: kamlesh is logged in.

//************** Function to Calculate Cart Price ****************************//

// Define a function to calculate the cart price
function calculateCartPrice(value_1){
    return value_1;
}

// Uncomment to see the output
// console.log(calculateCartPrice(200, 300, 499));

//************** Function to Calculate Cart Price with Multiple Values ****************************//

// Define a function to calculate the cart price with multiple values
function calculateCartPrice_1(...value_2){
    return value_2;
}

// Uncomment to see the output
// console.log(calculateCartPrice_1(200, 300, 499));

//************** Function to Calculate Cart Price with Multiple Values and Fixed Parameters ****************************//

// Define a function to calculate the cart price with multiple values and fixed parameters
function calculateCartPrice_2(var1, var2, ...value_3){
    return value_3;
}

// Uncomment to see the output
// console.log(calculateCartPrice_2(200, 300, 499, 897, 123));

//************** Function to Handle User Object ****************************//

// Define a user object
const user = {
    username: "kamlesh",
    price: 213
}

// Define a function to handle user object
function handalobject(anyobject){
    console.log(`The name of the user is ${anyobject.username} and the price is ${anyobject.price}.`);
}

// Call the handalobject function with the 'user' object
handalobject(user); // Output: The name of the user is kamlesh and the price is 213.

// Call the handalobject function with a new object directly
handalobject({
    username: "Vishnu",
    price: 87
}); // Output: The name of the user is Vishnu and the price is 87.

//************** Function to Return Second Value from Array ****************************//

// Define an array
const myNewArray = [200, 300, 400, 488];

// Define a function to return the second value from the array
function returnsecondvalue(getArray){
    return getArray[1];
}

// Output the second value from 'myNewArray' and another array directly
console.log(`The array is ${returnsecondvalue(myNewArray)}`); // Output: The array is 300
console.log(`The array is ${returnsecondvalue([353, 56, 76567, 765])}`); // Output: The array is 56
