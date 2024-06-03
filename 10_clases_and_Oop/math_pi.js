// console.log(Math.PI);
// const kk = Math.PI = 3.14;
// console.log(Math.PI);
// console.log(kk);
//********************************************************************************************************************************
// This script demonstrates various JavaScript operations related to object properties and descriptors.

// Retrieve and log the property descriptor of Math.PI
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// Define a books object with properties and a method
const books = {
  name: "Discrete Mathematics",
  price: 1435,
  isAvailable: true,
  orderBook: function () {
    console.log(`Book is not available`);
  },
};

// Log the entire books object
console.log(books);

// Retrieve and log the property descriptor for the 'name' property of the books object
console.log(Object.getOwnPropertyDescriptor(books, "name"));

// Uncomment to make the 'name' property of books non-writable, non-enumerable, and non-configurable
// Object.defineProperty(books, 'name', {
//   writable: false,
//   enumerable: false,
//   configurable: false
// });

// Loop through all entries in the books object and log each key-value pair
for (let [key, value] of Object.entries(books)) {
  console.log(`${key}: ${value}`);
}

//********************************************************************************************************************************
// Loop through all entries in the books object, skipping methods, and log each key-value pair
for (let [key, value] of Object.entries(books)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}
