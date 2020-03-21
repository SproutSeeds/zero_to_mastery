let todos = [
  'clean room',
  'brush teeth',
  'exercise',
  'study javascript',
  'eat healthy'
];
let todosImportant = [
  'clean room!',
  'brush teeth!',
  'exercise!',
  'study javascript!',
  'eat healthy!'
];

let length = todos.length;

// For Loop
// for (let i = 0; i < length; i++) {
//   todos.pop();
// }

// While Loop
// let counterOne = 10;
// while (counterOne > 0) {
//   console.log(counterOne);
//   counterOne--;
// }

// Do Loop  ---  (This will execute the code first then check the condition before it repeats.)
// let counterTwo = 10;
// do {
//   console.log(counterTwo);
//   counterTwo--;
// } while (counterTwo > 0);

// For each
// todos.forEach(function(todo, i) {
//   console.log(todo, i);
// });

function logTodos(todo, i) {
  console.log(todo, i);
}
todos.forEach(logTodos);
todosImportant.forEach(logTodos);
