// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  }
];

// //Create an array using forEach that has all the usernames with a "!" to each of the usernames
// const newArray = [];
// array.forEach(obj => newArray.push(`${obj.username}!`));
// console.log(newArray);

// //Create an array using map that has all the usernames with a "? to each of the usernames
// const newArray = array.map(obj => `${obj.username}?`);
// console.log(newArray);

// //Filter the array to only include users who are on team: red
// const newArray = array.filter(obj => obj.team === "red");
// console.log(newArray);

// //Find out the total score of all users using reduce
// const scoreTotal = array.reduce(
//   (accumulator, obj) => accumulator + obj.score,
//   0
// );
// console.log(scoreTotal);

// // (1), what is the value of i? // Index of the array at each num that is passed into the map function.
// // (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//   return num * 2;
// });

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
  user.items = user.items.map(item => {
    return item + "!";
  });
  return user;
});
console.log(answer);
