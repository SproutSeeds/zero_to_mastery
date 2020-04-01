// Closure Example
const first = () => {
  const greet = "hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
// newFunc();

// Closures: a function ran. The function executed. It's never going to execute again.
// But it is going to remember there are references to those variables. So the child scope
// always has access to the parent scope.

// Currying Example
const multiply = (a, b) => {
  a * b;
};
const curriedMultiply = a => b => a * b;
const multiplyBy3 = curriedMultiply(3);
console.log(multiplyBy3(6));

// Compose Example
const compose = (f, g) => a => f(g(a));

// AVOID SIDE EFFECTS, shoot for functional purity.

// Creating functions that always return something and have less or Zero side effects
// creates something called deterministic, which means no matter what goes through the
// function input it will always return the same value.
var a = 1;
function b() {
  a = 2;
}
