//For debugging purposes, you can call the console.log() method in the browser to display data.

console.log(100);

console.log("Hello from javaScript");

console.error("Alert");

console.warn("warning"); //

console.table({ name: "Elyas", email: "fake@gmail.com" }); //display data as table

console.group("table"); // table is name of group
console.log("Hello from javaScript");

console.error("Alert");

console.warn("warning"); //

console.table({ name: "Elyas", email: "fakeEmail@gmail.com" });

console.groupEnd(); // end of the group

// adding style to the console

let style =
  "padding: 20px; font-size: 25px; background-color: black; color:white";

console.log("%c Hello World", style);
