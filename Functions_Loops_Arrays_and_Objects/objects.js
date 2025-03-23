// JavaScript Objects: Defining properties, methods, and using the 'this' keyword 

// 1. defining an object with properties and methods 
const person = {
    firstName: 'Alice', 
    lastName: "Johnson", 
    age: 30, 
    city: "New York", 

    // Method to get fullname
    fullName: function() {
        return this.firstName + " " + this.lastName; 
    }, 

    // method to introduce the person
    introduce: function() {
        return `Hello, my name is ${this.fullName()} and I am ${this.age} years old. I live in ${this.city}.`; 
    }, 

    // Method to add a pet. 
    addPet: function(petName) {
        this.pet = petName; 
    }, 

    // method to return pet 
    getPet: function() {
        return this.pet; 
    }
}; 

// 2. accessing properties 
console.log(person.firstName); 
console.log(person["lastName"])

// 3. calling methods 
console.log(person.fullName()); 
console.log(person.introduce()); 

// 4. using the 'this' keyword 
// 'this' refers to the object that the method is called on. in the 'fullName' method, 'this' refers to the 'person' object. 

// 5. modifying properties 
person.age = 31; 
console.log(person.age); 

person.addPet("Buddy"); 
console.log(person.getPet()); 

// 6. adding new properties and methods dynamically 
person.job = "Software Engineer"; 

person.greet = function(otherPerson) {
    return `Hello ${otherPerson}, I am ${this.firstName}.`; 
}; 

console.log(person.job); 
console.log(person.greet("Bob")); 

// 7. object literals with shorthand notation (ES6)
const name = "Charlie"; 
const age = 25; 

const anotherPerson = {
    name, 
    age, 
    sayHello() {
        return `Hi, I'm ${this.name}.`; 
    }
}; 

console.log(anotherPerson.name); 
console.log(anotherPerson.sayHello()); 

// 8. Objects and 'this' in different context. 
function myFunc() {
    console.log(this); 
}

myFunc(); 

const myObj = {
    myMethod: function() {
        console.log(this); 
    }
}; 

myObj.myMethod(); 

const myOtherObject = {
    myArrowMethod: () => {
        console.log(this); 
    }
}; 

myOtherObject.myArrowMethod(); 

// 9. Object constructor function 
function Car(make, model, year) {
    this.make = make; 
    this.model = model; 
    this.year = year; 
    this.getCarDetails = function() {
        return `${this.year} ${this.make} ${this.model}`; 
    }
}

const myCar = new Car("Toyota", "Camry", 2020); 
console.log(myCar.getCarDetails()); 



