// Define an array containing Marvel heroes
const marvel_heros = ["Thor", "Ironman", "Spiderman"];

// Define an array containing DC heroes
const dc_heros = ["Superman", "Batman", "Flash"];

// Add the entire array dc_heros as a single element at the end of marvel_heros
marvel_heros.push(dc_heros);

// Print the contents of marvel_heros to the console
console.log(marvel_heros);
// Output: ["Thor", "Ironman", "Spiderman", ["Superman", "Batman", "Flash"]]

// Print the element at index 3 of marvel_heros to the console
console.log(marvel_heros[3]);
// Output: ["Superman", "Batman", "Flash"]

const newMarvel_heros = ["Thor", "Ironman", "Spiderman"];
const newDc_heros = ["Superman", "Batman", "Flash"];

// Concatenate newMarvel_heros and newDc_heros arrays and store the result in allHeos
// The concat() method is used to concatenate the newMarvel_heros and newDc_heros arrays into a new one array allHeos.
const allHeros = newMarvel_heros.concat(newDc_heros);

// Print the contents of allHeos to the console
console.log(allHeros);
// Output: ["Thor", "Ironman", "Spiderman", "Superman", "Batman", "Flash"]

// Create a new array allNewHeros by spreading the elements of marvel_heros and dc_heros arrays
// The push() method is used to add the entire dc_heros array as a single element at the end of the marvel_heros array, resulting in nested array
const allNewHeros = [...newMarvel_heros, ...newDc_heros];

// Print the contents of allNewHeros to the console
console.log(allNewHeros);
// Output: ["Thor", "Ironman", "Spiderman", "Superman", "Batman", "Flash"]

// Define an array containing nested arrays
const newArray = [1, 2, 3, [4, 5, 6], 7, [2, 4, 5, [1, 3]]];

// Print the contents of newArray to the console
console.log(newArray);
// Output: [1, 2, 3, [4, 5, 6], 7, [2, 4, 5, [1, 3]]]
// Explanation: The array contains numbers and nested arrays.

// Flatten the nested arrays in newArray using the flat() method with Infinity depth
const allNewArray = newArray.flat(Infinity);

// Print the flattened array to the console
console.log(allNewArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 2, 4, 5, 1, 3]
// Explanation: The flat() method flattens all nested arrays in newArray into a single array.

// Check if 2, 3, 4 is an array and print the result to the console
console.log(Array.isArray(2, 3, 4)); // Output: false
// Explanation: Array.isArray() returns false because it only accepts one argument, and 2, 3, 4 are not passed as an array.

// Check if "kamlesh" is an array and print the result to the console
console.log(Array.isArray("kamlesh")); // Output: false
// Explanation: "kamlesh" is a string, not an array, so Array.isArray() returns false.

// Check if [2, 3, 4] is an array and print the result to the console
console.log(Array.isArray([2, 3, 4])); // Output: true
// Explanation: [2, 3, 4] is an array, so Array.isArray() returns true.

// Create an array from a string "kamlesh" using Array.from() method
console.log(Array.from("kamlesh")); // Output: ["k", "a", "m", "l", "e", "s", "h"]
// Explanation: Array.from() converts the string into an array of characters.

// Display the array of characters in a table format
console.table(Array.from("kamlesh"));
// Output:
// ┌─────────┬─────────┐
// │ (index) │ Values  │
// ├─────────┼─────────┤
// │    0    │   'k'   │
// │    1    │   'a'   │
// │    2    │   'm'   │
// │    3    │   'l'   │
// │    4    │   'e'   │
// │    5    │   's'   │
// │    6    │   'h'   │
// └─────────┴─────────┘
// Explanation: The characters are displayed in a table format.

// Create an array from an object using Array.from() method
console.log(Array.from({ name: "kamlesh" }));
// Output: []
// Explanation: Since the provided object is not iterable, Array.from() returns an empty array.

/** In JavaScript, the Array.from() method creates a new array from an iterable object or an array-like object.
However, the provided object { name: "kamlesh" } is not an iterable object, and it doesn't have a length property,
which is required for objects to be considered array-like. */

// Define variables score1, score2, and score3
let score1 = 100;
let score2 = 200;
let score3 = 300;

// Create an array of scores using Array.of() method
console.log(Array.of(score1, score2, score3));
// Output: [100, 200, 300]
// Explanation: Array.of() creates a new array with the specified elements.


