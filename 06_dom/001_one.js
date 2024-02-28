// Selecting the element with id 'title'
const title_name = document.getElementById('title')

// Changing the background color and text color of the element with id 'title'
title_name.style.backgroundColor = 'red'
title_name.style.color = 'white'

// Accessing different properties of the element with id 'title'
title_name.textContent // Retrieves the text content of the element
title_name.innerText // Retrieves the text content of the element, excluding hidden text
title_name.innerHTML // Retrieves the HTML content of the element, including any child elements

// Selecting elements using querySelector
document.querySelector('h2') // Selects the first <h2> element in the document
document.querySelector('#title') // Selects the element with id 'title'
document.querySelector('.heading') // Selects the element with class 'heading'
document.querySelector('input[type="password"]') // Selects input element with type 'password'

// Selecting and styling a <ul> element and its child <li> element
const myul = document.querySelector('ul')
const myli = document.querySelector('li')

// Styling the <li> element
myli.style.backgroundColor = 'red'
myli.style.color = 'white'
myli.style.fontSize = '2rem'
myli.style.borderRadius = '9px'
myli.style.padding = '15px'
myli.style.margin = '15px'

// Selecting multiple <li> elements and styling them using forEach loop
const templist = document.querySelectorAll('li')

// Styling individual <li> elements
templist[1].style.color = 'green'
templist[2].style.color = 'yellow'

// Styling all <li> elements using forEach loop
templist.forEach((newli) => {
    newli.style.backgroundColor = 'gray'
    newli.style.margin = '20px'
    newli.style.padding = '10px'
    newli.style.borderRadius = '15px'
})

// Selecting elements by class name and styling them
const tempNameList = document.getElementsByClassName('list-items')

// Converting HTMLCollection to Array and styling each element
const arrTempNameList = Array.from(tempNameList)
arrTempNameList.forEach((temparr) => (temparr.style.color = 'orange'))
