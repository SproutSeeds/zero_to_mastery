// Solve the below problems:

// // #1) Check if this array includes the name "John".
// const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];
// console.log("Does this array include John?", dragons.includes("john"));

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];
const name_with_john = dragons.filter(name => name.includes("John"));
console.log(name_with_john);

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power_100 = x => x ** 100;
console.log(power_100(2));

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
console.log("2000 to the power of 100 (2000^100):", power_100(2000));
console.log(
  "Is the max value that can be printed in javascript, any larger bigger than this number will be represented as infinity\n",
  Number.MAX_VALUE
);
