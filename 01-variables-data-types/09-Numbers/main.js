let num = 5;

console.log(num, typeof num);

x = num.toString();
console.log(x, typeof x); // convert number to string

// how to get lenght of a number

// number doesnt have any lenght property but can convert number to string then we can use lenght property

let number = 1000000;
let stringNumber = number.toString().length; // access the lenght of the number
console.log(stringNumber);

number.valueOf(); // get the value of the number

console.log(number);

let floatNumber = 5.789;
let fixedNumber = floatNumber.toFixed(1);
console.log(fixedNumber); // addjest the float point numbers
