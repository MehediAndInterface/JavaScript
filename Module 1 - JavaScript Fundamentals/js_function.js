//  defining functions 
function greet() {
    console.log("Hello, World!"); 
}
greet(); 

// function parameters and return values 
function greeting(name) {
    console.log("Hello, " + name + "!"); 
}

greeting("Alice"); 
greeting("Bob"); 

// return values 
function add(a, b) {
    return a + b; 
}

let sum = add(5, 3); 
console.log(sum); 

// scope 
// global scope: variables declared outside of any function have global scope. they can be accessed from anywhere in your code. 
// local scope (function scope): variables declared inside a function have local scope. they can only be accessed within that function 
let globalVar = "Global"; 

function myFunction() {
    let localVar = "Local"; 
    console.log(globalVar); 
    console.log(localVar); 
}

myFunction(); 
console.log(globalVar); 
// console.log(localVar); 

// function expressions and anonymous functions 
let sayHello = function() {
    console.log("Hello!"); 
}; 

sayHello(); 

// anonymous functions 
let anonymousAdd = function(a, b) {
    return a + b; 
}; 

console.log(anonymousAdd(10, 5)); 

// Arrow Functions 
// (parameters) => {
//     // function body
//     return value; // optional
//   };

// function expression: 
let funAdd = function(a, b) {
    return a + b; 
}; 

// arrow function equivalent
let addArrow = (a, b) => {
    return a + b; 
}; 
console.log(funAdd(5, 2)); 
console.log(addArrow(5, 2)); 

// example with one parameter 
// let square = x => x * x;
let square = (x) => {
    return x * x; 
}
console.log(square(4)); 

// example with no parameters 
let sayHi = () => console.log("Hi!"); 

sayHi(); 

// higher order functions 
let numbers = [1, 2, 3, 4, 5]; 

let squaredNumbers = numbers.map(function(number) {
    return number * number; 
}); 

console.log(squaredNumbers); 
// using arrow function 
let squaredNumbersArrow = numbers.map(number => number * number); 
console.log(squaredNumbersArrow); 

// filter(): the filter() method is another higher-order function. it takes a function as an argument and returns a new array containing only the elements that pass the test implemented by the provided function. 
let evenNumber = numbers.filter(function(number) {
    return number % 2 === 0; 
}); 
console.log(evenNumber); 

// using arrow function
let evenNumberArrow = numbers.filter(number => number % 2 === 0); 
console.log(evenNumber); 

// setTimeout(): the setTimeout() function is a built-in higher-order function that schedules a function to be executed after a specified delay. 
setTimeout(function() {
    console.log("This messages appears after 2 seconds."); 
}, 2000);  