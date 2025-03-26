// click events 
const button = document.getElementById("myButton"); 

const message = document.getElementById("message"); 

// button.addEventListener("click", function() {
//     message.textContent = "Button clicked!"; 
// }); 


// Input Events 
const inputField = document.getElementById("myInput"); 
const outputParagraph = document.getElementById("output"); 

// inputField.addEventListener("input", function(event) {
//     outputParagraph.textContent = event.target.value; 
// }); 

// keydown and keyup Events
// inputField.addEventListener('keydown', function(event) {
//     outputParagraph.textContent = `Key: ${event.key}, Code: ${event.code}`; 
// }); 

// focus and blur Events
inputField.addEventListener('focus', function() {
    message.textContent = "Input field is focused."; 
}); 

inputField.addEventListener("blur", function() {
    message.textContent = "Input field lost focus."; 
}); 


