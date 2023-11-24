let x;

x = 5 + "5"; // outputs: 55 string

console.log(x, typeof x);

//

x = 5 + Number("5");

console.log(x, typeof x); // outputs : 10  number

// same case with and diferent outputs *

x = 5 * "5"; // javascript convert string to number in multipliaction
console.log(x, typeof x); // outputs : 25 number
