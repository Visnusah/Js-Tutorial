
// For...of loop
// A loop specifically designed for iterating over arrays, strings, and other iterable objects

// Define an array 'arr'
const arr = [3, 5, 7, 11];

// Iterate over each element of the 'arr' array and output the element
for (const index of arr) {
    console.log(`${index}`);
}

// Define a string 'greetings'
const greetings = "Hello world!";

// Iterate over each character of the 'greetings' string and output the character
for (const greet of greetings ) {
    console.log(`Each char is: ${greet}`);
}

// Maps ***********
// Define a new Map 'map'
const map = new Map();

// Set key-value pairs in the map
map.set ('NP', "Nepal");
map.set ('IN', "India");
map.set ('USA', "United States of America");
map.set ('NP', "Nepal"); // Duplicates keys are not allowed, so this doesn't add a new entry

// Iterate over each key-value pair in the 'map' using destructuring and output the key and value
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// Define an object 'myobject'
const myobject = {
    'name' : 'kamlesh',
    'age' : 21,
    'email' : 'kamleshdemo@gmail.com'
}

// Objects are not directly iterable in the for...of loop
// Uncommenting this code will throw a TypeError: myobject is not iterable

/* In JavaScript, regular objects like `myobject` are not directly iterable 
because they do not implement the Iterable protocol required for objects to 
be looped over using `for...of`. Unlike arrays or strings, which have a defined 
order and built-in mechanisms for iteration, plain objects lack this capability. 
To loop over the properties of an object, you typically use `for...in` loop or methods
like `Object.entries()`, as they provide mechanisms for accessing object properties. */

// Code: 👩🏻‍💻 here ⇣

for (const [key, value] of myobject) {
    console.log(key, ':-', value);  // This will not produce the desired result
}
