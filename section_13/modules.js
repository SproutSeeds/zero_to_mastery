// ---------------IIFE--------------------
//immediately invoked function execution

//js1 first javascript file loaded as a script tag.
// let myApp = {}

//js2 second javascript file loaded as a script tag
// (function () { // making a function like this forces it to be evaluated and executed immediately.
//   myApp.add = function (a, b) { // And this would add the function as a method to myApp object.
//     return a + b;
//   };
// })();

// ----------------CommonJS + Browserify------------------- Browserify bundles javascript files
// js1 add.js
module.exports = function add(a, b) {
  // doing this syntax, we can now add this js file functionality to another file
  return a + b;
};

// js2
let add = require("./add"); // this is the syntax to add the javascript file (called add.js)
// exported module functionality to the variable add.

// --------------------ES6 + Webpack2--------------------- 
//Webpack bundles javascript files by traversing the dependency tree which are the export and import tags into a 
// single file or multiple files depending on your needs

//js1 file
export const add = (a, b) => a + b; // you can export multiple functions here.
// or
export default function add() { // default export such as this will only export one function.
  return a + b;
}

//js2 file
import { add } from "./add"; // this will simply grab the 'add' function from the js1 file instead of all the contents.
// or
import add from "./add";
