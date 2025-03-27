// Operators in JavaScript

// 1. Arithmetic Operators: Used for mathematical calculations

let x = 10;
let y = 5;

console.log("Arithmetic Operators:");
console.log("x + y =", x + y); // Addition: 15
console.log("x - y =", x - y); // Subtraction: 5
console.log("x * y =", x * y); // Multiplication: 50
console.log("x / y =", x / y); // Division: 2
console.log("x % y =", x % y); // Modulus (remainder): 0
console.log("x ** y =", x ** y); // Exponentiation (x to the power of y): 100000
console.log("x++ =", x++); // Post-increment (returns x, then increments): 10 (then x becomes 11)
console.log("++x =", ++x); // Pre-increment (increments x, then returns x): 12
console.log("y-- =", y--); // Post-decrement: 5 (then y becomes 4)
console.log("--y =", --y); // Pre-decrement: 3

// 2. Comparison Operators: Used for comparing values

let a = 10;
let b = "10";
let c = 15;

console.log("\nComparison Operators:");
console.log("a == b =", a == b); // Loose equality (value equality, type coercion): true
console.log("a === b =", a === b); // Strict equality (value and type equality): false
console.log("a != b =", a != b); // Loose inequality: false
console.log("a !== b =", a !== b); // Strict inequality: true
console.log("a > c =", a > c); // Greater than: false
console.log("a < c =", a < c); // Less than: true
console.log("a >= 10 =", a >= 10); // Greater than or equal to: true
console.log("a <= 10 =", a <= 10); // Less than or equal to: true

// 3. Logical Operators: Used for combining or modifying boolean values

let p = true;
let q = false;

console.log("\nLogical Operators:");
console.log("p && q =", p && q); // Logical AND: false
console.log("p || q =", p || q); // Logical OR: true
console.log("!p =", !p); // Logical NOT: false

// 4. Assignment Operators: Used for assigning values to variables

let z = 20;

console.log("\nAssignment Operators:");
console.log("z =", z); // 20
z += 5; // z = z + 5
console.log("z += 5 =", z); // 25
z -= 3; // z = z - 3
console.log("z -= 3 =", z); // 22
z *= 2; // z = z * 2
console.log("z *= 2 =", z); // 44
z /= 4; // z = z / 4
console.log("z /= 4 =", z); // 11
z %= 3; // z = z % 3
console.log("z %= 3 =", z); // 2
z **= 2; // z = z ** 2
console.log("z **= 2 =", z); // 4

// 5. Ternary Operator (Conditional Operator): A shorthand for if...else

let age = 20;
let canVote = age >= 18 ? "Yes" : "No";

console.log("\nTernary Operator:");
console.log("Can vote:", canVote); // "Yes"

// 6. Nullish Coalescing Operator (??): Returns the right-hand side operand when the left-hand side operand is null or undefined.

let nullValue = null;
let undefinedValue = undefined;
let defaultValue = "Default";

console.log("\nNullish Coalescing Operator:");
console.log(nullValue ?? defaultValue); // "Default"
console.log(undefinedValue ?? defaultValue); // "Default"
console.log(10 ?? defaultValue); // 10

// 7. Optional Chaining Operator(?.) : Returns undefined if an object is nullish or undefined (instead of throwing an error)
const myObject2 = {
  nested: {
    value: "hello"
  }
};

console.log("\nOptional Chaining Operator:");
console.log(myObject2?.nested?.value); // "hello"
console.log(myObject2?.nonExistent?.value); // undefined