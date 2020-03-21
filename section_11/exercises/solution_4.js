const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your age? ", function(age) {
  if (age < 18) {
    console.log("Sorry you are too young to drive this car.");
  } else {
    console.log("Powering on! Enjoy the ride!");
  }
  rl.close();
});
rl.on("close", function() {
  console.log("\nStream closed.");
  process.exit(0);
});
