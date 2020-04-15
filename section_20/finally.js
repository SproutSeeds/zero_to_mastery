const fetch = require("node-fetch");

// finally
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((response) => response.json());
  })
)
  .then((results) => {
    // throw Error;
    console.log(results);
  })
  .catch(() => console.log("error"))
  .finally(() => console.log("extra"));
