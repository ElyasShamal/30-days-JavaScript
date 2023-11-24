// what is String
// A string in programming is a sequence of characters that can include letters, numbers, symbols, and spaces. In JavaScript, a string must be enclosed in single quotes ('), double quotes ("), or backticks (`)

let name = "Elyas";
let myAge = 24;

let text = "Hello. my name is " + name + " and i am " + myAge + " years old";

console.log(text);

// Template Literals  es6 update

text = `Hello, my name ${name} and i am ${myAge} years old`;

console.log(text);

// string properties and methods

const sayHi = "Hello World";
x = sayHi.length; // length of charecters
x = sayHi[0]; // access key or index
console.log(x);

x = typeof sayHi; // check type of string
console.log(x);

x = sayHi.__proto__; // check all avilable methods for strings
console.log(x);

x = sayHi.toUpperCase(); // change srting toUpperCase()
console.log(x);

x = sayHi.toLowerCase(); // change string toLowerCase()
console.log(x);

x = sayHi.charAt(0); // access the first value in string
console.log(x);

// find the index or key of string

x = sayHi.indexOf("W"); // way to find index or key of a string using .indexOf()
console.log(x);

// Substring()  take to numbers start and end in letters and return those latters
// and if we add one number it will start from that number and retrun the rest

x = sayHi.substring(0, 5); //
console.log(x); // Output:  hello

x = sayHi.substring(6); // add one number it will letters that are after 7
console.log(x);

// Slice in string
// its lite SubString() but i slice we can add -1 numbers too
// is a bit more flexible, and it accepts negative values for the start and end parameters, which can be used to extract characters from the end of the string.
x = sayHi.slice(0, 5);
console.log(x, "i am From slice");

x = sayHi.slice(-11, -6); // -1 numbers
console.log(x);

// what is trim() ?
// trim() remove whitespace from text

let alltext = "                      i am a web developer"; // with all whiteSpaces
console.log(alltext);

alltext = alltext.trim();
console.log(alltext);

// replace
// take two numbers old text and new text

let FullName = "Elyas Shamal";
console.log(FullName); // outputs : Elyas shamal

let changeName = FullName.replace("Elyas", "Mohammad");
console.log(changeName); // "Elyas" changed to Mohammad  output : Mohammmad Shamal

//.include()
// fint if the text have that letter or word

let myJob = "Web Developer"; // have D
let ifInclude = myJob.includes("D"); // added to include() to chec k
console.log(ifInclude); // outputs : true
