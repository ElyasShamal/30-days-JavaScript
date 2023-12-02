// primitive data types

// string,  Number, Boolean, null, undefined, Symbol BigInt

// WHAT IS STRING ?
// string is Sequence of characters Must be in single double or backtick quotes
// single qoutes ' '
// double qoutes " "
// backticks  ` `

let myName = "elyas"; //string width double qoutes
let myLastName = `shamal`; // string with backticks

// WHAT IS NUMBER ?
// Number represents numeric values, including integers and floating-point numbers.

let score = 100; // asign the value of 100 to variable of score

let myFloat = 10.5; // float-point

//what is boolean
// Boolean is logical entity it can be either true of false

let isRaining = true;

if (isRaining) {
  console.log("Take an umbrella");
} else {
  console.log("Enjoy the weather");
}

// WHAT IS A NULL ?
//  In JavaScript, null is a primitive value that represents the intentional absence of any object value.

let myVar = null;

//WHAT IS UNDEFINED ?
// undefined is a variable that has not been defined or assigned

let myScore;
console.log(myScore); // output undefined

// WHAT IS SYMBOl ?
// build in object whose constructor return a unique symbol  introduced in ECMAScript 6 (ES6).

// WHAT IS BIGINT ?
//BigInt is number that is greater then the number type can handle

const bigIntValue = 9007199254740991n;
const result = bigIntValue * 2n;
console.log(result);

// reference type (object)

// what is  reference type ?
// is a non primitive value and when it assigned to a variable the variable value is given a reference to that value

// object literal , array and function are all reference type

//how we can get type of a varibale ?
//we can get that using typeof

let myNumber = 200;
console.log(myNumber, typeof myNumber); // Output Number

let fullName = "elyas shamal";
console.log(fullName, typeof fullName); // output String

let bool = false;
console.log(typeof bool, bool); // output boolean

let temp = 87.4;
console.log(temp, typeof temp);

// Data type

// primative type : stored directly in the stuck where it accessed from
// string, number , boolean, Null, symbol, BigInt

// reference type
// stored in heap and accessed by reference
// array, function, objects
