// What is data type conversion

//data type conversion is the process of converting a value from one data type to another.

//Convert string to a number

let totalAmount = "500"; // string
console.log(totalAmount, typeof totalAmount); // output string

// we can convert string to number in 3 ways
totalAmount = parseInt(totalAmount); // first way change string using parseInt() to number
totalAmount = +totalAmount; // sec way to convert string to number
totalAmount = Number(totalAmount); // 3rd way to convert string to number using Number()

console.log(totalAmount, typeof totalAmount); // output totalAmount is number

// convert Number to string
let amount = 100; // number
console.log(amount, typeof amount); // number

amount = amount.toString(); // convert the number to string using .toString() method
amount = String(amount); // another way for convert the number to string

console.log(amount, typeof amount); //string

//change string to decimal
let myFloat = "99.9";
console.log(myFloat, typeof myFloat); //output srting

myFloat = +myFloat; // convert string to decimal
console.log(myFloat, typeof myFloat);
myFloat = parseFloat(myFloat); // convert string to float
myFloat = parseInt(myFloat); // convert string to number without float
console.log(myFloat, typeof myFloat);

//convert number to boolean

let num = 0;
num = Boolean(num);
console.log(num); // output false

let num2 = 1;
num2 = Boolean(num2);
console.log(num2); // output true
