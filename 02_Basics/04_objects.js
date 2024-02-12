
// Create an object using constructor notation
const user1 = new Object();

// Since no properties are added to user1 object, it remains empty
console.log(user1); // Output: {}


// Create an object using object literal notation
const user2 = {};

// Add properties to user2 object
user2.id = "123abc";
user2.name = "Kamlesh";
user2.age = "20";
user2.email = "kamlesh@gmail.com";
user2.isLoggedIn = false;

// Define a new object newUser with nested objects
const newUser = {
    email: "one@gmail.com",
    fullName: {
        userfullname: {
            userFirstName: "kamlesh",
            userLastName: "Shah"
        }       
    }
}

// Access properties of newUser object using dot notation
console.log(newUser.fullName); // Output: { userfullname: { userFirstName: 'kamlesh', userLastName: 'Shah' } }
console.log(newUser.fullName.userfullname); // Output: { userFirstName: 'kamlesh', userLastName: 'Shah' }
console.log(newUser.fullName.userfullname.userFirstName); // Output: 'kamlesh'
console.log(newUser.fullName?.userfullname.userFirstName); // Output: 'kamlesh'

// Define multiple objects
const obj1 = { name1: "a", email1: "a@gmai.com" };
const obj2 = { name2: "a", email2: "b@gmai.com" };
const obj3 = { name3: "a", email3: "c@gmai.com" };
const obj4 = { name4: "a", email4: "d@gmai.com" };

// Combine objects using object literal notation
const obj5 = { obj1, obj2, obj3 };
console.log(obj5);

// Combine objects using Object.assign() method
const obj6 = Object.assign(obj1, obj2);
console.log(obj6); // Output: { name1: "a", email1: "b@gmai.com", name2: "a", email2: "b@gmai.com" }
console.log(obj1); // Output: { name1: "a", email1: "b@gmai.com", name2: "a", email2: "b@gmai.com" }

// Create a new object by merging objects using Object.assign() method
const obj7 = Object.assign({}, obj1, obj2);
console.log(obj1); // Output: { name1: "a", email1: "b@gmai.com", name2: "a", email2: "b@gmai.com" }
console.log(obj7); // Output: { name1: "a", email1: "b@gmai.com", name2: "a", email2: "b@gmai.com" }

// Create a new object by spreading properties of objects using spread operator
const obj8 = { ...obj3, ...obj4 };
console.log(obj8); // Output: { name3: "a", email3: "c@gmai.com", name4: "a", email4: "d@gmai.com" }

// Define an array of objects
const newObject = [
    { name1: "a", email1: "new1@gmai.com" },
    { name1: "a", email1: "new2@gmai.com" }
];

// Access a property of an object inside the array
console.log(newObject[1].email1); // Output: "new2@gmai.com"

// Print user2 object in a table format
console.table(user2);

// Get an array of user2 object keys
console.log(Object.keys(user2));

// Get an array of user2 object values
console.log(Object.values(user2));

// Get an array of arrays containing [key, value] pairs of user2 object
console.log(Object.entries(user2));


//******************** Objects destructuring and JSON API ********************

const course = {
    coursename : "FUllStack Developer",
    price : "2109",
    courseInstructor : "Kamlesh_Shah"

}


// console.log(course.courseInstructor);
const {courseInstructor} = course
console.log(courseInstructor);

const {coursename: shortname} = course
console.log(shortname);

// This is like JSON file, it is also shown as array only for intro!!

// {
//     "name" : "kamleshshah",
//     "courseName" : "WEBsite degign",
//     "price" : "free"
// }


// [
//     {},
//     {},
//     {}
// ]
