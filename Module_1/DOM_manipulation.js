// selecting elements 
// the first step in manipulating the DOM is selecting the elements you want to work with. 
const paragraph = document.getElementById("myParagraph"); 
console.log(paragraph); 

// changing text content 
paragraph.textContent = "Hello World!"; 

// changing html content 
const changeContent = document.getElementById("myParagraph"); 
changeContent.innerHTML = "<p>Change <b>Content</b></p>."; 

// Adding Elements 
const list = document.getElementById("myList"); 
const newItem = document.createElement("li"); 
newItem.textContent = "Item 3"; 
list.appendChild(newItem); 


// removing elements 
const myList = document.getElementById("myList");
const itemToRemove = document.getElementById("removeMe"); 
list.removeChild(itemToRemove);  

