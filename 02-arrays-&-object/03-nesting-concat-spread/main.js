// nesting in array is basicaly having an array as index inside another array

// array inside an array
const fruits = ["apple", "orange"];
const berries = ["strawberry", "blueberry"];

fruits.push(berries);

console.log(fruits);

// nesting array

const allFruits = [fruits, berries];
console.log(allFruits);

// concat array using concat method

const oneToFive = [1, 2, 3, 4, 5];
const sixToTen = [6, 7, 8, 9, 10];

const x = oneToFive.concat(sixToTen); // combine one array to another array
console.log(x);

//spread Operator
// we will get same result like concat combine one array to another array

const y = [...oneToFive, ...sixToTen];
console.log(y);

// Flatten Arrays

const allNumbers = [1, 2, [3, 4], [5, 6], [7, 8]];
let flat = allNumbers.flat(); // flat method return a single array
console.log(flat);

//Static Method On Array Object

let arr;
arr = Array.isArray(fruits); // isArray check if array is array
console.log(arr);

arr = Array.from("123456"); // give us an array of value and elements on it
console.log(arr);

// Array Challenges

const array = [1, 2, 3, 4, 5, 6]; // Q1
//expected result array = [6,5,4,3,2,1,0]

array.reverse();
array.push(0);
console.log(array);

// Q2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
arr2.shift(); // remove the first element from arr2 using shift() method

const arr3 = arr1.concat(arr2); // then combine arr1 with arr2 and stored in arr3

console.log(arr3);
