// structure of for loop
// for (let index = 0; index < Array.length; index++){
//  const element = Array[index];
// }

// To print 0 to 9 in loop 
for (let i = 0; i < 10; i++){
    const element = i;
    console.log(`The loop: ${element}`);
}

console.log("\n"); // for spacing

// To print 0 to 10 in loop and print the first prime number (Use of if inside for loop)
for (let i = 0; i <= 10; i++){
    const element = i;
    if (element == 2){
// you want to print this line instead of i = 3 (fourth index) then use break and continue keyword read below in ln 114.
        console.log(`↓ This is the first prime number`); 
    }
    console.log(`${element}`);
}

console.log("\n"); // for spacing

/*  1. Nested for loop
    2. we can use same variable name multiple loops in one file becaese they are in different scope(
    Like global scope and block scope{}) but we can't use same variable name in same loop although in nested loop
    3. i is outer loop and j is inner loop
*/

for (let i = 0; i <= 5; i++){
    console.log(`\nOuter lopp value ${i}\n`);  // If outer loop true once then inner loop will run 10 times
    for(let j = 0; j <= 10; j++){ // If outer loop true once then inner loop will run 10 times
        console.log(`Inner loop value ${j}`);
    }

}

// Nested for loop
// To better understand the nested loop we can the code below
for(let i = 0; i <= 10; i++){
    console.log(`\nOuter lopp value ${i}\n`);
    for(let j = 0; j <= 10; j++){
        console.log(`Inner loop value ${j}\t and outer loop ${i}`);
    }
}

// Simple calculation of multiplication table using nested for loop

for(let i = 0; i <= 10; i++){
    console.log(`\nOuter lopp value ${i}\n`);
    for(let j = 0; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }

}

// Using loop to print the array
// Don't use i <= newArray.length because it will print the undefined value at the end of the array


let newArray = [3, 5, 7, 11, 13]
console.log(`The length of the Array is ${newArray.length}\n`);  

for (let i = 0; i < newArray.length; i++) {     /* newArray.lenght is 5 so it will run 5 times
 if we use i <= newArray.length then it will run 6 times and print the undefined value at the end of the array */
    const element = newArray[i];

    console.log(`${element}`);
    
}

// break and continue
// break is used to stop the loop when the condition is true if we want to stop the loop when the condition is true then we use break keyword
// continue is used to skip the current iteration and continue with the next iteration

for (let i = 1; i < 20; i++) {
    if( i == 3){
        console.log(`Detected value 3`);
        break;
    }
    console.log(`The value of i is ${i}`);
    
}

// Another example of break

for (let i = 1; i < 20; i++) {
    if( i == 3){
        console.log(`Detected value 3`);
        break;
    }
    if(i == 5){
        console.log(`Detected value 5`);  // it will not print the value 5 because the loop will stop at 3
        break;
    }
    console.log(`The value of i is ${i}`); // it will also not print because the loop will stop at 3
    
}

// continue

for (let i = 1; i < 20; i++) {
    if( i == 3){
        console.log(`Detected value ${i}`);
        continue
    }
    console.log(`The value of i is ${i}`);
    
}

// Another example for ln 18.  
for (let i = 0; i <= 10; i++){
    const element = i;
    if (element == 2){
        console.log(`${element} is the First Prime Number.`);
        continue;
    }
    console.log(`${element}`);
}