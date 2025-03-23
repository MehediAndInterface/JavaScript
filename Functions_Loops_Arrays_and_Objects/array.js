// JavaScript Array Methods: push(), pop(), map(), filter()

// 1. push(): adds one or more elements to the end of an array and returns the new length of the array.
let fruits = ["apple", "banana", "orange"]; 
console.log("Initial array:", fruits); 

let newLength = fruits.push("grape", "kiwi"); 
console.log("Array after push:", fruits); 
console.log("New Length:", newLength)

// 2. pop(): removes the last element from an array and returns that element. 
let lastFruit = fruits.pop(); 
console.log("Array after pop:", fruits); 
console.log("Removed element:", lastFruit); 

// 3. map(): creates a new array populated with the results of calling a provided function on every element in the calling array.  
let numbers = [1, 2, 3, 4, 5]; 

let squaredNumbers = numbers.map(function(number) {
    return number * number; 
}); 

console.log("Original numbers:", numbers); 
console.log("Square Numbers:", squaredNumbers); 

// Using arrow functions 
let doubledNumbers = numbers.map(number => number * 2); 
console.log("Doubled numbers:", doubledNumbers); 

// 4. filter(): creates a new array with all elements that pass the test implemented by the provided function.
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0; 
}); 

console.log("Even numbers:", evenNumbers); 

// using arrow functions 
let oddNumbers = numbers.filter(number => number % 2 !== 0); 
console.log("Odd Numbers:", oddNumbers); 

// example combining map and filter 
let products = [
    {
        name: 'laptop', 
        price: 1200
    }, 
    {
        name: 'phone', 
        price: 800
    }, 
    {
        name: 'tablet', 
        price: 300
    }, 
    {
        name: 'keyboard', 
        price: 100
    }, 
]; 

let expensiveProductNames = products.filter(product => product.price > 500).map(product => product.name); 


console.log("Expensive product names:", expensiveProductNames); 
