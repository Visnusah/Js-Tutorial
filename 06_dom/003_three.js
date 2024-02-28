// Creating a new <div> element
const div = document.createElement('div')

// Output the created <div> element
console.log(div);

// Setting class name, id, and title attributes for the <div> element
div.className = "main" // Set class name
div.id = "myId" // Set id to a string
div.id = Math.random() // Overwriting id with a random number (float)
div.id = Math.round(Math.random() * 10 + 1) // Overwriting id with a rounded random number between 1 and 10
div.setAttribute("title", "Generated-Title") // Set 'title' attribute using setAttribute()

// Setting inline styles for the <div> element
div.style.backgroundColor = "orange" // Set background color
div.style.padding = "12px" // Set padding
div.style.fontSize = "1.3rem" // Set font size
div.style.fontFamily = "monospace" // Set font family
div.style.borderRadius = "9px" // Set border radius

// Adding HTML content to the <div> element
div.innerHTML = "kahewk" // Set HTML content

// Creating a text node and appending it to the <div> element
const addText = document.createTextNode("chai aur code") // Create text node
div.appendChild(addText) // Append text node to <div>

// Appending the <div> element to the body of the document
document.body.appendChild(div) // Append <div> to body
