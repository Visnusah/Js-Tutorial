//***************** Array *****************

// Define an array named myArray with four elements: 83, 81, 123, 12
const myArray = [83, 81, 123, 12];

// Define an array named myHeros with three elements: "ironman", "spiderman", "antman"
const myHeros = ["ironman", "spiderman", "antman"];

// Define an array named myArr2 using the Array constructor with four elements: 3, 5, 7, 9
const myArr2 = new Array(3, 5, 7, 9);

// Print the contents of myArray to the console
console.log(myArray); // Output: [83, 81, 123, 12]

// Print the first element of myArray to the console (arrays in JavaScript are zero-indexed)
console.log(myArray[0]); // Output: 83

//***************** Array methods *****************

// Add the element 11 to the end of myArr2
myArr2.push(11);

// Add the element 13 to the end of myArr2
myArr2.push(13);

// Remove the last element from myArr2
myArr2.pop();  // for removing 13
myArr2.pop();  // for removing 11

// Add the element 11 to the beginning of myArr2
myArr2.unshift(11);

// Remove the first element from myArr2
myArr2.shift();

// Check if myArr2 includes the element 2 and print the result to the console
console.log(myArr2.includes(2)); // Output: false

// Find the index of the element 5 in myArr2 and print it to the console
console.log(myArr2.indexOf(5)); // Output: 1 (index of 5 in the array)

// Join all elements of myArr2 into a string separated by commas and assign it to newArr
const newArr = myArr2.join(",");

// Print the contents of myArr2 to the console
console.log(myArr2); // Output: [3, 5, 7, 9, 11]

// Print the value of newArr to the console
console.log(newArr); // Output: "3,5,7,9,11" (a string with elements separated by commas)

// Print the data type of myArr2 to the console
console.log(typeof myArr2); // Output: object

// Print the data type of newArr to the console
console.log(typeof newArr); // Output: string



//***************** slice, splice *****************


// Print "A" and the contents of myArr2 to the console
console.log("A", myArr2); // Output: A [9, 11, 13]

// Create a new array myn1 by slicing elements from index 1 to index 2 (not including index 3) from myArr2
const myn1 = myArr2.slice(1, 3);
// Note: The slice method returns a new array containing the selected elements.

// Print "SLICE" and the contents of myn1 to the console
console.log("SLICE", myn1); // Output: SLICE [11, 13]

// Print "B" and the contents of myArr2 to the console
console.log("B", myArr2); // Output: B [9, 11, 13]

// Remove elements from index 1 to index 3 (not including index 4) from myArr2 and store them in myn2
const myn2 = myArr2.splice(1, 3);
// Note: The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// Print "SPLICE" and the contents of myn2 to the console
console.log("SPLICE", myn2); // Output: SPLICE [11, 13]

// Print "C" and the contents of myArr2 to the console
console.log("C", myArr2); // Output: C [9]
