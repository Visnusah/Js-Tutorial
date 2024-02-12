// Singleton
// Object.create
// Object literals

// Define a symbol
const mysym = Symbol("key1");

// Define an object using object literal notation
const jsUser = {
    name: "kamlesh",
    "full name": "kamlesh kumar sah",
    [mysym]: "mykey1",
    age: 20,
    location: "kathmandu",
    email: "kamlesh@gmail.com",
    isLoggenIn: false,
    lastLoginDay: ["Monday", "Tuesday"]
};

// Print the data type of jsUser to the console
console.log(typeof jsUser); // Output: object

// Access the email property using dot notation and square bracket notation
console.log(jsUser.email); // Output: "kamlesh@gmail.com"
console.log(jsUser["email"]); // Output: "kamlesh@gmail.com"

// Access the "full name" property using square bracket notation (dot notation won't work due to the space)
console.log(jsUser["full name"]); // Output: "kamlesh kumar sah"

// Access the property with the symbol key
console.log(jsUser[mysym]); // Output: "mykey1"
console.log(typeof jsUser[mysym]); // Output: string

// Update the email property
jsUser.email = "kamlesh@new.com";
console.log(jsUser); // Output: Updated jsUser object with the modified email

// Define a method inside jsUser object
jsUser.greetingOne = function () {
    console.log(`Hello JsUser, here is ${this.name}`);
};

// Call the greetingOne method
console.log(jsUser.greetingOne()); // Output: "Hello JsUser, here is kamlesh"

// Define another object using object literal notation
const otherObject = {
    name: "dipendra",
    email: "dipendra@gmai.com",
    age: 19
};

// Object.freeze(otherObject)


// Attempt to modify the age property of otherObject (if Object.freeze() is uncommented, it will throw an error)


otherObject.age = 20;
console.log(otherObject.age); // Output: 20

// Define a method inside otherObject (if Object.freeze() is uncommented, it will throw an error)

otherObject.greetingTwo = function () {
    console.log(`hello otherObject, here is, ${this.name}`);
};

// Call the greetingTwo method
console.log(otherObject.greetingTwo()); // Output: "hello otherObject, here is, dipendra"
