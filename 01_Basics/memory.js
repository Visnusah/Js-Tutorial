// +++++++++++++

// type : (1) stack (permitive), (2) Heap (Non-primitive)

// Stack

let myYoutubeName = "It'TechnicalHacks"

let anotherName = myYoutubeName

anotherName = "ProgramProdigy"

console.log(myYoutubeName);  // It'stechnicalHacks

console.log(anotherName); // ProgramProdigy

// Heap


let userOne = {
    email: "sahk@gmail.com",
    contact: 98129293293,
}

let userTwo = userOne
userTwo.email = "Change@gmail.com"

console.log(userOne.email);  // Change@gmail.com
console.log(userTwo.email); // Change@gmail.com
