// Advanced Arrays

const array = [1, 2, 10, 16];
const double_array = [];
const new_array = array.forEach(num => {
  double_array.push(num * 2);
});
console.log("ForEach", double_array);

// Map
const mapArray = array.map(num => num * 2);
console.log("Mapped Array", mapArray);

// Filter
const filterArray = array.filter(num => num > 5);
console.log("Filter Array", filterArray);

// Reduce: Define the accumulator after the return statement, ie. '5', this will add to the total of the array.
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 5);
console.log("Reduce Array", reduceArray);

// These are all examples of function purity.
