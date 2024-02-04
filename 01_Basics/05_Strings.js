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


const newGameName = gameName.substring(0, 4)  
// K->0, a->1, m->2, l->3, e->4, s->5, h->6, G->7 and M->8
// Start from 0 index and end in 4th index, without include 4th index
// 
console.log(newGameName);
// => kaml {Output}


const newString = gameName.slice(2, -4)    
// Start from 2nd index which is m  and stop at -4 which is s but doesn't include -4th index.
console.log(newString);


const newStringOmne = "   Kamlesh  "
// remove extra space from characters:
//  =>kamlesh
console.log(newStringOmne.trim());

const url = "https://sahkamlesh.com.np/home%20page"

console.log(url.replace('%20','-'));
//  => https://sahkamlesh.com.np/home-page

console.log(url.includes("kamlesh"));   // To find any character in given url or groups of characters, output is in boolean
//  => true


const nameList = new String("Kittu-Tinu-Bhutiya-Bhutka")


// split method

console.log(nameList.split("-"));       //  

console.table(nameList.split("-")); // view in table form of arrays by doing slpit

// declare arrays from given string -->[String("Kittu-Tinu-Bhutiya-Bhutka")]

const newList = nameList.split("-")

console.table(newList);
console.log(nameList);
console.log(newList);