// Simplest Calculator

const num1 = +prompt("First number:"); 
const operator = prompt("Operator (+, -, *, /):"); 
const num2 = +prompt("Second number:"); 

if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
    let result; 

    if (operator === "+") result = num1 + num2; 
    if (operator === "-") result = num1 - num2; 
    if (operator === "*") result = num1 * num2; 
    if (operator === "/") {
        result = num2 === 0 ? "Error": num1 / num2; 
    }
    
    alert("Result: " + result); 
} else {
    alert("Invalid operator"); 
}
