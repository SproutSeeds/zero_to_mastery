const fs = require("fs");

fs.readFile("./hello.txt", (error, data) => {
  console.time("timer");
  if (error) {
    console.log("error!");
  }
  console.log("Async", data.toString("utf8"));
  console.timeEnd("timer");
});

// const file = fs.readFileSync("./hello.txt");

// console.log("2", file.toString());

// fs.writeFile("bye.txt", "Sad to see you go", (err) => {
//   if (err) console.log(err);
// });

// Delete File
// fs.unlink("./bye.txt", (err) => {
//   if (err) console.log(err);
//   console.log("Inception");
// });
