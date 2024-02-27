// This code is for practicing only do all the it yourself in your personal browser

// document.getElementById();

document.getElementById('title')
document.getElementById('title').id
document.getElementById('title').class
document.getElementById('title').getAttribute('id')
document.getElementById('title').setAttribute('class', 'replaced heading')

const title_name = document.getElementById('title')


title_name.style.backgroundColor = 'red'
title_name.style.color = 'white'



// difference between textContent, innerHTML, innerText

title_name.textContent
title_name.innerText
title_name.innerHTML

title_name.getElementsByClassName('heading')


document.querySelector('h2')
document.querySelector('#title')
document.querySelector('.heading')
document.querySelector('input[type="password"]')



document.querySelector('ul')
const myul = document.querySelector('ul')

document.querySelector('li')
const myli = document.querySelector('li')

myli.style.backgroundColor = 'red'
myli.style.color = 'white'
myli.style.fontSize = '2rem'
myli.style.borderRadius = '9px'
myli.style.padding = '15px'
myli.style.margin = '15px'


//************** *///************** *///************** *///************** */

document.querySelectorAll('li')

const templist = document.querySelectorAll('li') // gives output as a array but actually it is nodelists not a array inside nodelist there is no by default .map method in browser

// it's look like a array not a array but it's feactures are like array
templist[1].style.color = 'green' 
templist[2].style.color = 'yellow'

// Use of Foreach loop for practicing

templist.forEach( (l) => (l.style.backgroundColor = 'gray',
                            l.style.margin = '20px'
))








