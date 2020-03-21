let user = {
  name: "cody",
  age: 34,
  hobby: "webdev",
  isMarried: false,
  //METHOD EXAMPLE (function inside an object)
  shout: function() {
    console.log("AHHHH!!");
  }
};

let list = ["apple", "banana", "orange"];

console.log(user, list);

let userList = [
  {
    username: "steven",
    password: "security"
  },
  {
    username: "codina",
    password: "bossSauce"
  }
];

console.log("NOTES--------------\n");
console.log("Cannot set property to null object");
