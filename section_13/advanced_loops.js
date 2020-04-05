const basket = ['apples', 'oranges', 'grapes'];
const detailed_basket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
};

// for of
// Iterating over iterable.  (arrays, strings)
console.log('------FOR OF--------');
for (item of basket) {
  console.log(item);
}

console.log('------FOR IN LOOP-------');

// for in - properties
// Enumerating - objects
for (item in detailed_basket) {
  console.log(item); // item is the property from the detailed_basket object.
}
