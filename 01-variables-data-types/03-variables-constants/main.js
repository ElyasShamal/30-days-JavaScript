//What is variables ?

// variables are containers for storing data or values for later use
// or variable is a box for holding data

// How to declear variables ?

// we can declear a variable using  var, let, const

// var ?
// The var keyword was used in all JavaScript code from 1995 to 2015 and have scope and Hoisting issues
//Reassignment: Unlike const, variables declared with Var can be reassigned.

var myName = "Elyas"; // declear myName variable using var and assign it to "Elyas"
console.log(myName);

//Reassignment:
myName = "shamal"; //reassign myName variable to value of "shamal"
console.log(myName);

// let ?
// The let keyword was added to JavaScript in 2015. have Block Scope and Temporal Dead Zone
// Variables declared with let are hoisted to the top of the block, but they are not initialized until the actual declaration statement. Accessing the variable before the declaration results in a ReferenceError.
////Reassignment: Unlike const, variables declared with let can be reassigned.

let firstName = "Elyas"; // declear firstName variable using let and assign it to "Elyas"
console.log(firstName);

//Reassignment:
firstName = "john"; //reassign firstName variable to value of "john"
console.log(firstName);

// Accessing the variable before the declaration results in a ReferenceError.
// console.log(lastName); // ReferenceError
// let lastName = "petar";

// const ?
// The const keyword was added to JavaScript in 2015.
// The primary purpose of const is to declare variables that are meant to be constants.
// Once a value is assigned to a const variable, it cannot be reassigned. and have blocking scop like Let

// const name ;  declarations must be initialized

const fullName = "Elyas shamal";
console.log(fullName);

// fullName = "john";  // typeError
// console.log(fullName);

if (true) {
  const blockScoped = "I'm block-scoped";
}
console.log(blockScoped); // Error: blockScoped is not defined

// When to Use var, let, or const?

// 1. Always use const if the value should not be changed

// 2. Always use const if the type should not be changed (Arrays and Objects)

// 3. Only use let if you can't use const and the value is changable

// 4. Only use var if you MUST support old browsers.

/*

JavaScript Identifiers
All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (name and Name are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.

*/

// declear multiple variables in one line using let

let a, b, c; // declear 3 variable in one line
a = 10;
b = 20;
c = 30;
console.log(c);

// declear multiple variables in one line using const

// const d,e,f   error must be initialized

const d = 40,
  f = 50,
  e = 60;
console.log(e);
