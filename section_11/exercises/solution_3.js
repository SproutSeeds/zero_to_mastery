const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is the first number? ", function(firstNumber) {
  rl.question("What is the second number? ", function(secondNumber) {
    console.log(
      `The sum total of first and second number is: ${Number(firstNumber) +
        Number(secondNumber)}`
    );
    rl.close();
  });
});

rl.on("close", function() {
  console.log("\nStream closed. Thank you.");
  process.exit(0);
});
