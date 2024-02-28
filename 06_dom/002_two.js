// Selecting the element with class 'parent'
const parentNew = document.querySelector('.parent')

// Output the parent element
console.log(parentNew);

// Output the child elements of the parent element
console.log(parentNew.children);

// Output the second child element of the parent element
console.log(parentNew.children[1]);

// Output the HTML content of the second child element
console.log(parentNew.children[1].innerHTML);

// Loop through each child element of the parent and output its HTML content
for (let i = 0; i < parentNew.children.length; i++) {
    console.log(parentNew.children[i].innerHTML);
}

// Change the color of the third child element of the parent
parentNew.children[2].style.color = 'orange';

// Output the first and last child elements of the parent
console.log(parentNew.firstElementChild);
console.log(parentNew.lastElementChild);

// Selecting an element with class 'day'
const dayOne = document.querySelector('.day')

// Output the selected element
console.log(dayOne);

// Output the parent element of the selected element
console.log(dayOne.parentElement);

// Output the next sibling of the parent element of the selected element
console.log(dayOne.parentElement.nextSibling);

// Output all nodes (including text nodes) of the parent element
console.log("NODES: ", parentNew.childNodes);
