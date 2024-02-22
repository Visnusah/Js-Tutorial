// Loop from 0 to 10 using a while loop
let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index++     // Increment index by 1
}
/* output:

Value of index is 0
Value of index is 1
Value of index is 2
Value of index is 3
Value of index is 4
Value of index is 5
Value of index is 6
Value of index is 7
Value of index is 8
Value of index is 9
Value of index is 10
*/


console.log(`\n`);

// Loop from 0 to 10 with a step of 2 using a while loop
let i = 0
while (i <= 10) {
    console.log(`Value of i is ${i}`);
    i = i + 2     // Increment i by 2
}

/* output:

Value of i is 0
Value of i is 2
Value of i is 4
Value of i is 6
Value of i is 8
Value of i is 10
*/

// Loop through an array and print its values using a while loop
let myArray = ['kamlesh', "tuntun", "visnu"]
let arr = 0
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr++
}

/* output:
value is kamlesh
value is tuntun
value is visnu
*/

// do-while loop
// Loop from 0 to 10 using a do-while loop
let score = 0
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

/* output:
Score is 0
Score is 1
Score is 2
Score is 3
Score is 4
Score is 5
Score is 6
Score is 7
Score is 8
Score is 9
Score is 10
 
*/

// Executes a block of code at least once, and then repeats the loop as long as a specified condition evaluates to true

let score_01 = 11; // Initialize the score variable with a value of 11

do {
    console.log(`Score is ${score_01}`); // Output the current score
    score_01++; // Increment the score by 1
} while (score_01 <= 10); // The loop continues as long as the score is less than or equal to 10

// Since the initial value of 'score_01' is already greater than 10, the loop will not execute
// Therefore, there will be no output


// output : score is 11