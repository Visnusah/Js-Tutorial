// Function to add a language to the list
function addLanguage(langName){
    // Create a new <li> element
    const li = document.createElement('li');
    // Set the inner HTML of the <li> element to the language name
    li.innerHTML = `${langName}`
    // Append the <li> element to the list with class 'language'
    document.querySelector('.language').appendChild(li)
}

// Uncomment the below lines to test the addLanguage function
// addLanguage("python")
// addLanguage("typescript")


// Function to add a language to the list with better optimization
function addoptiLanguage(langName) {
    // Create a new <li> element
    const li = document.createElement('li');
    // Append a text node with the language name to the <li> element
    li.appendChild(document.createTextNode(langName))
    // Append the <li> element to the list with class 'language'
    document.querySelector('.language').appendChild(li)
}

// Add languages using the optimized function
addoptiLanguage("golang")
addoptiLanguage("python")
addoptiLanguage("typescript")
addoptiLanguage("golang")

// Select the second language in the list and edit its value
const secondLang = document.querySelector("li:nth-child(2) ")
// Uncomment the below line to edit the second language using innerHTML
// secondLang.innerHTML = "Mojo" // Use innerHTML method (not optimized)

// Edit the second language using the replaceWith method
const newli = document.createElement('li')
newli.textContent = "Mojo"
secondLang.replaceWith(newli)

// Edit the first language using outerHTML
const firstLan = document.querySelector("li:first-child")
firstLan.outerHTML = "<li>typescript</li>"

// Remove the last language from the list
const lastLang = document.querySelector('li:last-child')
lastLang.remove()