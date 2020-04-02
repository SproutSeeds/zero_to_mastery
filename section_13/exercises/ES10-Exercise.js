// Solve the below questions:

// // #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
// const array = [[1], [2], [3], [[[4]]], [[[5]]]];
// let new_array = array.flat(2);
// console.log(new_array);

// // #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
// const greeting = [
//   ['Hello', 'young', 'grasshopper!'],
//   ['you', 'are'],
//   ['learning', 'fast!']
// ];
// let greeting_new_array = greeting.flatMap(value => value.join(' '));
// console.log(greeting_new_array);

// //#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
// let new_array = greeting.flatMap(value => value.join(' ')).join(' ');
// console.log(new_array);

// //#4 Turn the trapped 3 number into: [3]
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
// let unlocked_3 = trapped.flat(Infinity);
// console.log(unlocked_3);

// //#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
// const userEmail3 = '     cannotfillemailfo  rmcorrectly@gmail.com   ';

// let user_email3_clean = userEmail3.replace(/ /g, '');
// console.log(user_email3_clean);

// //#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 };

let user_array = Object.entries(users); // Object to an array!!!!  Praise ES10!
console.log(user_array);

// #7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

let new_user_array = user_array.map(value => [value[0], value[1] * 2]);
console.log(new_user_array);

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

let new_user_object = Object.fromEntries(new_user_array);
console.log(new_user_object);
