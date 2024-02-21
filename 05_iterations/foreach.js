// Using forEach method to iterate over an array

// Define an array 'conding' with programming language names
const conding = ["js", "ruby", "java", "python"];

// Iterate over each element of the 'conding' array using forEach method and output the element
conding.forEach(function (code) { // Using anonymous function as callback
    console.log(`${code}`);
});

// Define another array 'conding_01'
const conding_01 = ["ruby", "js", "py", "cpp"];

// Iterate over each element of the 'conding_01' array using forEach method and output the element
conding_01.forEach((item) => { // Using arrow function as callback
    console.log(`${item}`);
});

// Define an array 'language'
const language = ["py", "js", "Cpp"];

// Define a function 'Printme' to print the array elements from array 'language'
function Printme(codingLang) {
    console.log(`${codingLang}`);
}

// Iterate over each element of the 'language' array using forEach method and call the 'Printme' function for each element
language.forEach(Printme);

// Iterate over each element of the 'language' array using forEach method and output the element, index, and array itself
language.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

// Access properties and values of objects in 'myCoding' array using forEach method
const myCoding = [
    {
        languagename: "javascript",
        extension: "js"
    },
    {
        languagename: "python",
        extension: "py"
    },
    {
        languagename: "Rubby",
        extension: "rb"
    }
];

// Iterate over each object in 'myCoding' array using forEach method and output the 'languagename' property of each object
myCoding.forEach((list) => {
    console.log(list.languagename);
});