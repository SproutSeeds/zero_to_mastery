const fetch = require("node-fetch");

// ASYNC AWAIT

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((resp) => resp.json()))
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
    () => {
      console.log("DOing the next thing here!");
    };
  } catch (error) {
    console.log(error);
  }
};
getData();

// async function playerStart() {
//   const firstMove = await movePlayer(100, "Left");
//   await movePlayer(400, "Left");
//   await movePlayer(10, "Right");
//   await movePlayer(30, "Left");
// }

// async function fetchUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   console.log(data);
// }

// fetchUsers();
