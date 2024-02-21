// for...in
// Define an object 'myobject' with key-value pairs
const myobject = {
    Js: 'Javascript',
    cpp: 'C++',
    rb: 'Rubby',
    swift: 'swift by apple'
}

// For...in loop to iterate over object properties
for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
}

// Define an array 'programming'
const programming = ["js", "rb", "py", "java", "cpp"]

// For...in loop to iterate over array indices
for (const key in programming) {
    console.log(programming[key]); // Output: js, rb, py, java, cpp
}

// Define a Map 'map' and set key-value pairs
const map = new Map()
map.set ('NP', "Nepal")
map.set ('IN', "India")
map.set ('USA', "United States of America")
map.set ('NP', "Nepal") // Duplicates keys are not allowed in Map

// For...in loop cannot directly iterate over Map entries
// It iterates over Map properties, not its entries, so it won't execute as expected
for (const key in map) {
    console.log(key); // This will not produce the desired result
}
