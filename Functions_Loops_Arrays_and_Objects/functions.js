// Function Declarations
function add(a, b) {
    return a + b; 
}

console.log(add(5, 3)); 

// Function declarations are hoisted, meaning you can call them before they are defined in the code.
// function declarations are hoisted, meaning you can call them before they are defined in the code. 
console.log(multiply(5, 5));  

function multiply(x, y) {
    return x * y; 
}

// Function Expressions 
// A function expression defines a function inside an expression. The function can be named or anonymous.
const subtract = function(a, b) {
    return a - b; 
}; 

console.log(subtract(10, 5)); 

// named function expression 
const divide = function divideValues(a, b) {
    if (b === 0) {
        return "Cannot divide by zero."
    }
    return a / b; 
}; 

console.log(divide(20, 5)); 

// Anonymous function expression
const square = function(num) {
    return num * num; 
}; 

console.log(square(7)); 

// function expressions are not hoisted. you must define them before you call them.
// console.log(notDefined(5, 5));  
const notDefined = function(x, y) {
    return x + y; 
}

console.log(notDefined(5, 5));

// Arrow Functions (ES6)
// arrow functions provide a concise syntax for writing function expressions. they are always anonymous.
const power = (base, exponent) => {
    return Math.pow(base, exponent);
}; 

console.log(power(5, 3)); 

// if the arrow function has only one parameter, the parentheses can be omitted. 
const double = num => {
    return num * 2; 
}; 

console.log(double(6)); 

// If the arrow function body consists of a single expression, the curly braces and return keyword can be omitted.
const triple = num => num * 3; 

console.log(triple(4)); 


// Arrow functions do not bind their own 'this' value. they inherit the 'this' value from the surrounding scope (lexical 'this'). this is one of the main differences between arrow functions and regular functions.
const myObject = {
    value: 10, 
    regularFunction: function() {
        setTimeout(function() {
            console.log(this.value); 
        }, 100); 
    }, 
    arrowFunction: function() {
        setTimeout(() => {
            console.log(this.value); 
        }, 100); 
    }, 
}; 

// myObject.regularFunction(); 
// myObject.arrowFunction(); 

// Nested Function 
function makeGreeting(greeting) {
    function addName(name) {
        return greeting + " " + name + "!"; 
    }

    return addName; 
}

let sayHello = makeGreeting("Hello"); 

console.log(sayHello("Alice")); 
console.log(sayHello("Bob")); 

let sayGoodbye = makeGreeting("Goodbye"); 

console.log(sayGoodbye("Charlie")); 


