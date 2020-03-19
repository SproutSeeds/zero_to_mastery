const readline = require("readline");

var a = 34;
var b = 21;
a = 2;

// what is the answer here?
console.log(`\nA+B is equal to: ${a + b}\n`);
// What is c equal to?
var c;
console.log(`C is equal to: ${c}\n`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("What is your first name? ", function(firstName) {
  rl.question("What is your last name? ", function(lastName) {
    console.log(`Your name is ${firstName} ${lastName}.`);
    rl.close();
  });
});
rl.on("close", function() {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});
