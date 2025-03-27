// Data Types in JavaScript

// 1. Strings: Textual data
let myString = "Hello, world!";
let anotherString = 'This is also a string.';
let templateString = `You can use template literals for ${myString}`; //Backticks are used here.

console.log(myString);
console.log(anotherString);
console.log(templateString);

// 2. Numbers: Numeric data (integers and floating-point numbers)
let myInteger = 42;
let myFloat = 3.14;
let negativeNumber = -10;

console.log(myInteger);
console.log(myFloat);
console.log(negativeNumber);

// 3. Booleans: Logical values (true or false)
let myBooleanTrue = true;
let myBooleanFalse = false;

console.log(myBooleanTrue);
console.log(myBooleanFalse);

// 4. Arrays: Ordered collections of data
let myArray = [1, 2, 3, "four", true]; // Elements can be of different types
let emptyArray = [];

console.log(myArray);
console.log(myArray[0]); // Accessing the first element (index 0)
console.log(emptyArray);

// 5. Objects: Collections of key-value pairs
let myObject = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

console.log(myObject);
console.log(myObject.name); // Accessing the 'name' property
console.log(myObject["age"]); //Alternative way to access the 'age' property

// 6. Null: Represents the intentional absence of any object value
let myNull = null;

console.log(myNull);

// 7. Undefined: Represents a variable that has been declared but not assigned a value
let myUndefined;

console.log(myUndefined);

// 8. Symbols (less common, but important): Introduced in ES6, used for unique identifiers
let mySymbol = Symbol("description");
let anotherSymbol = Symbol("description");

console.log(mySymbol === anotherSymbol); // false, symbols are always unique.

// 9. BigInt (for very large integers): Introduced in ES2020
let bigIntValue = 9007199254740991n; // Add 'n' to the end

console.log(bigIntValue);

// typeof operator: used to determine the data type of a variable
console.log(typeof myString);    // "string"
console.log(typeof myInteger);   // "number"
console.log(typeof myBooleanTrue); // "boolean"
console.log(typeof myArray);     // "object" (arrays are objects in JavaScript)
console.log(typeof myObject);    // "object"
console.log(typeof myNull);       // "object" (a historical quirk)
console.log(typeof myUndefined);  // "undefined"
console.log(typeof mySymbol);    // "symbol"
console.log(typeof bigIntValue); // "bigint"