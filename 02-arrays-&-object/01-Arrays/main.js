// what is Array ?
// Array is a special type of object and a data structure in javaScript that stores multile values
// and arrays are mutable its means you change the value of an array

// literial array
const numbers = [12, 56, 4, 34, 23]; // this is called array literal

x = numbers[0]; // access array using index
console.log(numbers);

// Array constructor
const fruits = new Array("apple", "grape", "orange", "banana");
console.log(fruits);

let myFavoriate = `My Favoriate fruite is ${fruits[0]}`;
console.log(myFavoriate);

// array also can contain different data types

let mixedArray = ["string", 5, null, undefined, true];
console.log(mixedArray);

// for access the length of array we can use length property

let arraylength = [12, 23, 45, 65, 67, 78, 89];
console.log(arraylength.length); //

let length = arraylength.length;
console.log(length); // now length of array is 7 but change the length

arraylength.length = 2;
console.log(arraylength); // now length of array is 2 and only show the numbers from the array

const allFavorateFruits = ["apple", "orange", "peer", "strawberray", "grape"];
//change array item using index

allFavorateFruits[3] = "banana";
console.log(allFavorateFruits);
