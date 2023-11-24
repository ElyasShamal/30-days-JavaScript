//What is variables ?

// variables are containers for storing data or values for later use
// or variable is like a box for holding data

// How to declear variables ?

// we can declear a variable using  var, let, const

// var ?
// The var keyword was used in all JavaScript code from 1995 to 2015 and have scope and Hoisting issues
//Reassignment: Unlike const, variables declared with Var can be reassigned.

var myName = "Elyas"; // declear firstName variable using var and assign it to "Elyas"
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
