// Variables
// variables are containers for storing data values. in javascript, we use keywords like var, let and const to declare variables. each keywords has different scoping rules and behaviors. 
var myName = "Alice"; 
let age = 30; 
const pi = 3.14150; 

console.log(myName); 
console.log(age); 
console.log(pi); 

age = 31; 
console.log(age); 

// let: allows you to reassign the value 
// const: don't allows you to reassign the value 

// Data Types
// javascript has several built-in data types, which can be categorized as primitive and non-primitive. primitive data types represent simple values, while non-primitive data types represent more complex structures. 
let greeting = "hello, javascript"
let count = 10; 
let isTrue = true; 
let myVarriable; 
let emptyValue = null; 

// operators 
// operators are symbols that perform operations on values. 
let x = 10; 
let y = 5; 

console.log(x + y); 
console.log(x > y); 
console.log(x == 10); 
console.log(x && y > 0); 

x += 5; 
console.log(x); 

// control flow 
// control flow statements determine the order in which code is executed. they allow you to make decision and repeat blocks of code based on conditions. 
let personAge = 20;

if (age >= 18) {
    console.log("You are an adult."); 
}
else {
    console.log("You are a minor.")
}

for (let i = 0; i < 3; i ++) {
    console.log(i); 
}