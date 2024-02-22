
// Define an array 'Nums' with numbers from 1 to 10
const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using the map() method to transform each element of 'Nums' by adding 10
const Mynum = Nums.map((number) => number + 10);
console.log(Mynum); // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//************** *///************** *///************** *///************** */

// Chaining map() method to perform multiple transformations
const mynum_01 = Nums.map((number) => number * 10 ).map((number) => number +1);
// console.log(mynum_01); // Output: [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]

//************** *///************** *///************** *///************** */

// Another method of chaining map() method using multiple lines
const mynum_02 = Nums
                .map((number) => number * 10)
                .map((number) => number +1);

console.log(mynum_02); // Output: [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]

//************** *///************** *///************** *///************** */

// Using filter() method after chaining map() to filter out elements greater than 50
const mynum_03 = Nums
                .map((number) => number * 10)
                .map((number) => number +1)
                .filter((number) => number > 50);

console.log(mynum_03); // Output: [51, 61, 71, 81, 91, 101]
