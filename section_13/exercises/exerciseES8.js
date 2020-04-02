// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";

// it should look like this:
// '     ||<- Start line'
// '       🐢'
// '       🐇'

// // when you do:
// console.log(startLine);
// console.log(turtle.padStart(7));
// console.log(rabbit.padStart(7));

// // #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// // Read about what the second parameter does in padEnd and padStart
// turtle = turtle.trim().padEnd(9, "="); // it trims all the white space at the beginning and end. Then pads the end of the string with
// // however many '=' signs are needed to have a total of 9 spaces taken up
// console.log(turtle);

// #3) Get the below object to go from:
let obj = {
  my: "name",
  is: "Rudolf",
  the: "raindeer"
};
// to this:
// ("my name is Rudolf the raindeer");

obj = Object.entries(obj)
  .map(value => value.join(" "))
  .join(" ");

console.log(obj);
