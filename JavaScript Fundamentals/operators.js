// JavaScript Operators 

// 1. Arithmetic Operators 
// used for performing mathematical calculations 

let x = 10; 
let y = 5; 

console.log("Addition:", x + y); 
console.log("Subtraction:", x - y); 
console.log("Multiplication:", x * y); 
console.log("Division:", x / y); 
console.log("Remainder (Modulus):", x % y); 
console.log("Exponentiation:", x ** y); 
console.log("Increment: ", ++x); 
console.log("Increment: ", ++x); 

// 2. Assignment Operator. 
// used for assigning values to variables. 
let a = 10; 
a += 5; 
console.log("Addition assignment:", a); 
console.log("Subtraction Assignment:", a -= 5);
console.log("Division assignment:", a /= 5); 
console.log("Remainder assignment:", a %= 2); 
a += 5; 
// console.log(a); 
console.log("Exponentiation assignment:", a **= 2); 

// 3. Comparison Operators: 
// used for comparing values. they return a boolearn (true or false). 
let p = 10; 
let q = "10"; 

console.log("Equal to:", p == q); 
console.log("Strict equal to:", p === q); 
console.log("Not equal to:", p != q); 
console.log("Strict not equal to:", p !== q); 
console.log("Greater than:", p > 10); 
console.log("Less than:", p < 15); 
console.log("Greater than or equal to:", p >= 10); 
console.log("Less than or equal to:", p <= 10); 

// 4. Logical Operators 
// used for combining or negating boolean values. 
let r = true; 
let s = false; 

console.log("Logical AND:", r && s); // false 
console.log("Logical OR:", r || s); // true 
console.log("Logical NOT:", ! r); // false 

// 5. Bitwise Operators 
// used for performing operations on individual bits of number. They are less commonly used. 
let t = 5; // 0101 in binary 
let u = 3; // 0011 in binary 

console.log("Bitwise AND:", t & u); // 1 (0001)
console.log("Bitwise OR:", t | u); // 7 (0111)
console.log("Bitwise XOR:", t ^ u); // 6 (0110)
console.log("Bitwise NOT:", ~t); // -6 (inverts all bits)
console.log("Left shift:", t << 1); // 10 (01010)
console.log("Right shift:", t >> 1); // 2 (0010)
console.log("Zero-fill right shift:", t >>> 1); // 2 (0010)

// 6. Conditional (Ternary) Operator: 
// a shorthand for an if-else statement.
let age = 20; 
let canVote = age >= 18 ? "Yes" : "No"; 
console.log("Can Vote:", canVote); 




