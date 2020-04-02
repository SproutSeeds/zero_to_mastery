// .flat() will flaten one level at its default setting, passing in '2' will flatten two levels.
const numbers = [1, [2, 3, [4, 5]], 6];
console.log(numbers.flat(2));

// .flat() will clean up the array and remove those empty indexes
const names = [
  ["bob", "cody"],
  ["taylor", "carol"]
];
console.log(".flat() on names array:", names.flat());

// .flatMap() will do something for each item is flattened

let new_names_array = names.flatMap(names => names + "bar");
console.log(new_names_array);

let new_numbers_array = numbers.flatMap(number => number + "Wild");
console.log(new_numbers_array);

const useremail_1 = "          johnny@business.org".trimStart();
const useremail_2 = "Donald@business.org           ".trimEnd();
const useremail_3 = "     TRIMDonald@business.org           ".trim().length;

console.log(useremail_1);
console.log(useremail_2);
console.log(useremail_3);


const userProfiles =[['commanderTom', 23]]