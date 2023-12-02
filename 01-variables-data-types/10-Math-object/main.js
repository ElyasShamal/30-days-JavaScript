// Math Object

// In JavaScript, the Math object is a built-in object that provides mathematical functions and constants.
// It is not a constructor like some other objects in JavaScript, such as Array or Date.

let x;
x = Math.sqrt(9);
console.log(x);

//Math.abs(x): Returns the absolute value of a number x.
//Math.round(x): Rounds a number to the nearest integer.
//Math.floor(x): Rounds a number down to the nearest integer.
//Math.ceil(x): Rounds a number up to the nearest integer.

//Math.exp(x): Returns the value of e raised to the power of x.
//Math.log(x): Returns the natural logarithm (base e) of a number.
//Math.pow(x, y): Returns the result of raising x to the power of y.

//Math.random(): Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).

x = Math.ceil(4.1); // round the number up

console.log(x);

x = Math.floor(4.9);
console.log(x); // round the number down

x = Math.round(4.4); // output 4
console.log(x);

x = Math.round(4.6);
console.log(x); // outputs 5  // round the number to neareast number

x = Math.pow(2, 4); // 2 the power of 4
console.log(x);

x = Math.min(2, 4, 8);
console.log(x); // return the lowest number or min number

x = Math.max(10, 12, 23); // return the max number
console.log(x);

x = Math.random(); // return random between 0 and 1
console.log(x);

x = Math.floor(Math.random() * 11);

console.log(x);

let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 50);

let c = a + b;
let d = a - b;
let e = a * b;
let r = a % b;
let f = a / b;

console.log(`${a} + ${b} = `, c);
console.log(`${a} - ${b} = `, d);
console.log(`${a} * ${b} = `, e);
console.log(`${a} % ${b} = `, r);
console.log(`${a} / ${b} = `, Math.round(f));
