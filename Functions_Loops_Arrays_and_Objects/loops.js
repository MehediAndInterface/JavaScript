// JavaScript Loops: for, while, do-while, and forEach

// 1. for loop: executes a block of code a specified number of times. 
// basic for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i); 
}

// looping through an array
const numbers = [1, 2, 3, 4, 5]; 
for (let i = 0; i < numbers.length; i++) {
    console.log("Number:", numbers[i]); 
}

// 2. while loop: executes a block of code as long as a condition is true. 
// basic while loop 
let count = 0; 
while (count < 3) {
    console.log("Count:", count); 
    count++; 
}

// looping until a certain condition is met 
let randomNumber = Math.random(); 
while (randomNumber < 0.8) {
    console.log("Random number:", randomNumber); 
    randomNumber = Math.random(); 
}
console.log("Random number is now >= 0.8: ", randomNumber);

// 3. do-while loop: executes a block of code at least once, and then repeats as long as a condition is true
// basic do-while loop
let j = 0; 
do {
    console.log("J:", j); 
    j++; 
} while (j < 3); 

// ensuring at least one execution 
let k = 5; 
do {
    console.log("K:", k); 
    k++; 
} while (k < 3); 

// forEach loop: executes a provided function once for each array element. 
// basic forEach loop 
const colors = ['red', 'green', 'blue']; 
colors.forEach(function(color) {
    console.log("Color:", color); 
}); 

// forEach with index and array
colors.forEach(function(color, index, array) {
    console.log(`Color at index ${index} is ${color}. Array: ${array}`); 
}); 

// forEach using arrow function 
numbers.forEach(number => console.log(number * 2)); 

// Break and Continue 
// break: terminates the loop immediately 
for(let i = 0; i < 10; i++) {
    if (i === 5) {
        break; 
    }
    console.log(i); 
}

// continue: skips the current iteration and continues with the next one
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; 
    }
    console.log(i); 
}

// nested loops: one loop inside another
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`i: ${i}, j: ${j}`); 
    }
}

// JS Loops in a Nutshell
// for (count)
for (let i = 0; i < 3; i++) {
    console.log(i); 
}

// while (condition)
let i = 0; 
while (i < 3) {
    console.log(i++); 
}

// forEach (arrays)
[1, 2, 3].forEach(n => console.log(n));