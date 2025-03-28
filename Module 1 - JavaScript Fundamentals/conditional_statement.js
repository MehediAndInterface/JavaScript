// if: executes a block of code if a condition is true 
let age = 20; 

if (age >= 18) {
    console.log("You are eligible to vote."); 
}

// if... else: executes one block of code if the condition is true, and another if it's false 
let temperature = 25; 

if (temperature > 30) {
    console.log("It's a hot day!"); 
} else {
    console.log("It's not too hot today.")
}

// if...else if...else: executes different blocks of code for multiple conditions
let score = 75; 

if (score >= 90) {
    console.log("A grade"); 
} else if (score >= 80) {
    console.log("B grade"); 
} else if (score >= 70) {
    console.log("C grade"); 
} else if (score >= 60) {
    console.log("D grade"); 
} else {
    console.log("F grade"); 
}

// switch: execute different blocks of code based on the value of an expression 
let day = "Wednesday"; 

switch(day) {
    case "Monday":
        console.log("It's Monday."); 
        break; 
    case "Tuesday":
        console.log("It's Tuesday."); 
        break; 
    case "Wednesday":
        console.log("It's Wednesday."); 
        break; 
    case "Thursday":
        console.log("It's Thursday.");
        break
    case "Friday":
        console.log("It's Friday."); 
        break; 
    default:
        console.log("It's a weekend.") 
}

// example with numbers and fallthrough 
let num = 2; 

switch(num) {
    case 1: 
        console.log("One"); 
        break; 
    case 2: 
        console.log("Two"); 
    case 3: 
        console.log("Three"); 
        break; 
    default:
        console.log("Something else");     
}


