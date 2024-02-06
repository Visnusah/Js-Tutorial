// +++++++++++++

// type : (1) stack (permitive), (2) Heap (Non-primitive)

// Stack

let myYoutubeName = "It'TechnicalHacks"

let anotherName = myYoutubeName

anotherName = "ProgramProdigy"

console.log(myYoutubeName);  // It'stechnicalHacks

console.log(anotherName); // ProgramProdigy

// Heap


// Define an object userOne with properties email and contact
let userOne = {
    email: "sahk@gmail.com", // userOne's email
    contact: 98129293293, // userOne's contact number
};

// Assign userOne to userTwo, so they both point to the same object
let userTwo = userOne;

// Change the email property of userTwo
userTwo.email = "Change@gmail.com";

// Log the email property of userOne, which has been changed through userTwo
console.log(userOne.email); // Outputs: Change@gmail.com

// Log the email property of userTwo
console.log(userTwo.email); // Outputs: Change@gmail.com
