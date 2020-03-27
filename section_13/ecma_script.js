// Destructuring
const obj = {
  player: 'Bobby',
  experience: 100,
  wizardLevel: true
};

// Now we can use these in our code base.
const { player, experience } = obj;
let { wizardLevel } = obj;

// Object Properties:
// --- Useful for calculating a value in place of a property
// const name = 'jon snow';
// const obj2 = {
//   [name]: 'hello',
//   [1 + 2]: 'hihi'
// };

const a = 'simon',
  b = true,
  c = {};

// This object will be created with the property as the variable and the value as the variable's value
const obj3 = { a, b, c };

// TEMPLATE STRINGS
const name = 'Cody';
const age = 28;
const pet = 'Layla';
// const greeting = `Hello ${name2}, you seem to be doing well. You are ${age -
//   5} arent you? Oh wait no, you are ${age}, I remember your birthday party!`;

function greet(name = 'Taylor', age = '31', pet = 'King') {
  return `Hello ${name}, your ${age}st birthday was so much fun and your dog ${pet} is adorable!`;
}

console.log(greet(name, age, pet));

// SYMBOL
// Symbols create totally unique identifiers for the variable. Even if they are the same value, they will never equal eachother because it is unique. Great for property IDs for an object.
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('bar');

console.log(`Comparing does sym2 === sym3?: ${sym2 === sym3}`); // this returns FALSE

// ARROW FUNCTIONS
const add = (a, b) => a + b;
