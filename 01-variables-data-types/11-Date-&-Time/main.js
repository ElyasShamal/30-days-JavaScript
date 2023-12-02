//  In JavaScript, the Date object is used to work with dates and times.
//  It provides methods for creating, formatting, and manipulating dates.
//  Here's an overview of how to work with dates and times in JavaScript using the Date object:

let dateAndTime = new Date(); // Todays date
console.log(dateAndTime);

dateAndTime = new Date(2024, 0, 1, 12, 21, 1); // if we pass numbers its 0 index for mounths 0 for jan and 1 for feb
console.log(dateAndTime);

dateAndTime = new Date("2023-10-10"); // if we use string for date its 1 for jan and 2 for feb
console.log(dateAndTime);

dateAndTime = new Date();
console.log(dateAndTime);

dateAndTime = dateAndTime.getTime(); // get the time as a number
console.log(dateAndTime);

dateAndTime = new Date(1701480782076); // create new date
console.log(dateAndTime);

let x = new Date();

let currentYear = x.getFullYear(); // get the current year
console.log(currentYear);

let currentMonth = x.getMonth() + 1; // get the current month
console.log(currentMonth);

let currentDay = x.getDay(); // get the day
console.log(currentDay);

let currentDate = x.getDate(); // get the day of the month

console.log(currentDate);

// Time

let currentTime = x.getHours(); // get the hour
console.log(currentTime);

let a = x.getMinutes();
let b = x.getSeconds();
let c = x.getMilliseconds();
console.log(c);

let h;

d = new Date();

h = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
console.log(h);

// using api

h = Intl.DateTimeFormat("en-us").format(d); // convert the date based the country
console.log(h);

// h = d.toLocaleString("dafault", { month: "long" /* short or long */ });
// console.log(h);

h = d.toLocaleString("dafault", {
  weekday: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  timezone: "America/New_york",
});

console.log(h);
