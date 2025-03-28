// array: arrays in js are ordered lists of values. they can hold any data types (numbers, strings, objects, even other arrays.)
// empty array
let empty = []; 

// array of numbers 
let numbers = [10, 20, 30, 40, 50]; 

// array of strings 
let names = ["Alice", "Bob", "Charlie"]; 

// array of mixed types 
let mixed = [1, "hello", true, {key: "value"}]; 

// array of arrays 
let matrix = [[1, 2], [3, 4]]; 

console.log(empty); 
console.log(numbers); 
console.log(names); 
console.log(mixed); 
console.log(matrix); 

let myHobbies = ["programming", "sleeping", "cricket"]; 
let mixedData = [10, "Mehedi", true]; 
let listOfLists = [[1, 2, 3], [4, 5, 6]]

// Accessing and Modifying Elements in JavaScript arrays.
let colors = ["red", "green", "blue", "yellow"]; 

console.log(colors[0]); 
console.log(colors[2]); 
console.log(colors[3]); 
console.log(colors[4]); 

// modifying elements 
colors[1] = "purple"; 
console.log(colors); 

colors[0] = 100; 
console.log(colors); 

// adding elements to arrays 
let fruits = ["apple", "banana"]
console.log(fruits); 

// push()
// Adds one or more elements to the end of an array.
fruits.push("orange"); 
console.log(fruits); 

// add multiple items 
fruits.push("grape", "kiwi"); 
console.log(fruits); 

// unshift():
// Adds one or more elements to the beginning of an array.
fruits.unshift("mango"); 
console.log(fruits); 

// add multiple items
fruits.unshift("lemon", "berry");
console.log(fruits);  

// splice():
// A versatile method that can add or remove elements at any index.
fruits.splice(2, 0, "pear"); 
console.log(fruits); 

fruits.splice(4, 0, "watermelon", "melon"); 
console.log(fruits); 

