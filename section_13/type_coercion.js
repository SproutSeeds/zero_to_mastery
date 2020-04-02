let expression1 = 1 == "1";
let expression2 = 1 == true;
let expression3 = -0 === +0;
let expression4 = Object.is(-0, +0);
let expression5 = NaN === NaN;
let expression6 = Object.is(NaN, NaN);

if (1) {
  console.log("1 == true");
}

console.log(expression6);
