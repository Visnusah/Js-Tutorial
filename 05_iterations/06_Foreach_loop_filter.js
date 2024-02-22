const coding = ["js", "rubby", "python", "cpp"]

const variable_Name_01 =  coding.forEach( (item_Name) => {
    console.log(item_Name);
    return item_Name; // foreach loop doesnot return any values so always it gives undifined
})
// console.log(variable_Name_01);


//************** *///************** *///************** *///************** */
// basics of filter
//filtering arrays using .filter method and single lined arrow function

// Define an array of numbers
const myNums = [3, 5, 7, 9, 11, 13, 17]

// Filter the numbers in the array that are greater than 5 using the .filter method and an arrow function
const newNumbs = myNums.filter((num)=> num > 5)

// Output the filtered numbers that are greater than 5
console.log(newNumbs); // output in array is executed
console.log(`${newNumbs}`); // output in strings is executed 


//************** *///************** *///************** *///************** */

// Filter the numbers in the array that are greater than 5 using the .filter method and a function with explicit return (if you used block scope then you need to used return keyword )
const newprimeNum = myNums.filter( (primeNum) =>  {
   return primeNum > 5
})

// Output the filtered numbers that are greater than 5
console.log(newprimeNum);  

//************** *///************** *///************** *///************** */

const myNums_01 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumber = []
const anotherNum = []

myNums_01.forEach( (num) => {
    if(num > 5){
        newNumber.push(num)
    } else {
        kk.push(num)
    }
})

console.log(newNumber);
console.log(anotherNum);


//************** *///************** *///************** *///************** */

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


const userBooks = books.filter( (bk) => bk.genre === 'Fiction')
console.log(userBooks);
  
  // if you use scope => {} in arrow function then use return keyword
const newUserBook_list = books.filter((bk) => {return bk.publish > 2000})
console.log(newUserBook_list);

//************** *///************** *///************** *///************** */
 // practice //

const newLimitedUser = books.filter((bok) => bok.publish > 1900 && bok.genre === "History")
console.log(newLimitedUser);