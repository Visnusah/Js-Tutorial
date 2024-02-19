// truthy values are the values that are not falsy
const userEmail_01 = "kamlesh@gmail.com"

if (userEmail_01) {
    console.log(`Got the email for 01!`);
} else {
    console.log(`Please enter the email for 01!`);
}

// falsy values are the values that are not truthy in this case the falsy values are
// 0, "", null, undefined, NaN, BigInt, false, and -0 
const userEmail_02 = ""

if (userEmail_02) {
    console.log(`Got the email for 02!`);
} else {
    console.log(`Please enter the email for 02!`);
}

// truthy valaues are [], {}, " " . And  {--> " " the value inside "value" is truthy values like " " in this case there is space here.}

const userEmail_03 = []

if (userEmail_03) {
    console.log(`Got the email for 03!`);
} else {
    console.log(`Please enter the email for 03!`);
}


// " " is truthy value

const userEmail_04 = " "

if (userEmail_04) {
    console.log(`Got the email for 02!`);
} else {
    console.log(`Please enter the email for 02!`);
}

// to check array is empty or not

const userArray_04 = []
if (userArray_04.length === 0) {
    console.log(`The array is empty!`);
} else {
    console.log(`The array is not empty!`);
}

// to check object is empty or not
// use of keys in object to check the object is empty or not

const newobject = {
    name: "kamlesh",
    fullName: "kamlesh kumar sah",
    age: 21
}

if (Object.keys(newobject).length == 0){
    console.log(`The object is empty!`);
} else {
    console.log(`The obeject is not empty!`);
}

// Only for reminder how to access the object value in object
console.log(newobject.name);
console.log(newobject["name"]);
// console.log(newobject[fullName]); // Access the "fullName" property using square bracket notation (dot notation won't work due to the space) --> read 02_basics/03_objects.js
console.log(newobject["fullName"]);

