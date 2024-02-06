// Create a new Date object and assign it to the variable myDate
let myDate = new Date()

// Log the Date object to the console
console.log(myDate); // Outputs: current date and time, e.g., "2024-03-22T14:56:59.120Z"

// Convert the Date object to a string and log it to the console
console.log(myDate.toString()); // Outputs: current date and time in a readable string format, e.g., "Tue Mar 22 2024 10:56:59 GMT-0400 (Eastern Daylight Time)"

// Convert the Date object to a string in the format: "Weekday Month Day Year" and log it to the console
console.log(myDate.toDateString()); // Outputs: current date in the format "Weekday Month Day Year", e.g., "Tue Mar 22 2024"

// Convert the Date object to a string using the current locale's conventions and log it to the console
console.log(myDate.toLocaleString()); // Outputs: current date and time in a format that depends on the locale, e.g., "3/22/2024, 10:56:59 AM"

// Create a new Date object for January 23, 2024 and assign it to the variable myCreatedDate
let myCreatedDate = new Date(2023, 0, 23)

// Convert the Date object to a string in the format: "Weekday Month Day Year" and log it to the console
console.log(myCreatedDate.toDateString());

// Create a new Date object for November 5, 2024 and assign it to the variable newDate
let newDate = new Date("2024-11-05");

// Convert the Date object to a string using the current locale's conventions and log it to the console
console.log(newDate.toLocaleString()); // Outputs: "11/5/2024, 12:00:00 AM" (this output may vary depending on the locale)
 



// Create a new Date object for November 15, 2024 and assign it to the variable newDate
// let newDate = new Date("2024-11-15");

// Get the current timestamp and assign it to the variable myTimeStamp
// Get the current timestamp (number of milliseconds since January 1, 1970 00:00:00 UTC) and assign it to the variable myTimeStamp
let myTimeStamp = Date.now();

// Log the current timestamp to the console
console.log(myTimeStamp); // Outputs: 1634234567890 (this output will vary each time the code is run)

// Convert the Date object to a string in the format "Weekday Month Day Year" and log it to the console
console.log(newDate.toDateString()); // Outputs: "Fri Nov 15 2024"

// Get the timestamp corresponding to the Date object and log it to the console
console.log(newDate.getTime()); // Outputs: 1715616000000

// Now if we want this output in second then

// console.log(newDate.now()/1000);   this method gives output in second but also gives desimals so


// Using Math in Dates

//the code you provided will log the current timestamp in seconds. The Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC. By dividing this by 1000, we convert it to seconds. The Math.floor() function is used to round down to the nearest whole number, effectively removing the decimal.

console.log(Math.floor(Date.now()/1000));



// let newDateOne = new Date()
// console.log(newDateOne);
// console.log(newDateOne.getMonth());
// console.log(newDateOne.getDay());
// console.log(newDateOne.getFullYear());

let newDateOne = new Date() // Creates a new Date object with the current date and time
console.log(newDateOne); // Outputs the current date and time

console.log(newDateOne.getMonth()); // Outputs the current month (0-11, where 0 is January and 11 is December)

console.log(newDateOne.getDay()); // Outputs the current day of the week (0-6, where 0 is Sunday and 6 is Saturday)

console.log(newDateOne.getFullYear().toString()); // Outputs the current year

//. ONE EXAMPLE 

console.log(`${newDateOne.getMonth()} is my birthday month.`);   
// output : 1 is my birthday month. (0-11, where 0 is January and 11 is December)

//To get the month in string format, you can use an array of month names and get the month name using the getMonth() method. Here is how you can do it:
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(`${months[newDateOne.getMonth()]} is my birthday month.`);

// This line of code uses the toLocaleString method on the newDate object
// The 'default' argument is used to specify the locale to use for the formatting. 'default' means the system's locale
// The object passed as the second argument specifies options for the formatting. Here, we're specifying that we want the weekday to be formatted
// The result is a string representing the current day of the week in long format (e.g., "Monday", "Tuesday", etc.)
newDate.toLocaleString('default', {
    weekday: "long"
})