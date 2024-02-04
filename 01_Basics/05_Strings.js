const name = "kamlesh"      // Simple method to declare a string
const repoCont = 6          // Simple method to declare a string

// console.log(name + repoCont + " anythings");  // This is outadated syntax so don't use this syntax  to print!!

console.log(`Hello My name is ${name} and my repo count is ${repoCont}.`);  // Use backticks to print strings ,, this moder syntax!!

// --> Hello My name is kamlesh and my repo count is 6.

const gameName = new String('KamleshGM') // Best method to declare string in js.

console.log(gameName); //KamleshGM

console.log(typeof gameName);  // Object

console.log(gameName[0]);  // we access all kay values of gameName


console.log(gameName.__proto__);  // access prototype

// --> {} , Because This is empty object in this case!!

console.log(gameName.length); // To calculate the lenght of the string

console.log(gameName.toUpperCase()); 


console.log(gameName.indexOf('l')); // Find the index number of the given character { Start from 0 to ....}
// --> 3
console.log(gameName.charAt(7));  // Find the Character of the given index number 
// --> G

const newGameName = gameName.substring(0, 2)

console.log(newGameName);


