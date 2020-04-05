// const a = 1;
// const b = 2;
// const c = 300;
// every time you use a place in memory, this is using part of the memory heap.
// If you dont clean up your memory heap, you will overload it.

// const one = () => {
//   const two = () => {
//     console.log("4");
//   };
//   two();
// };

// one();

// Now it starts removing the call stack. "first in last out." -- top gets run first.
//console.log('4'); places on stack third
// two(); placed on stack second
// one(); placed on stack first
//Call Stack
// Some languages have multi-threaded call stacks.
// javascript is a single threaded threaded environment.
// multithreaded environment means there could be issues with "deadlocking".
// Yes, javascript is a single threaded language that can be non-blocking through asynchronous tasks.

// CREATE A REAL STACK OVERFLOW
// This can be done with recursion.
// RangeError: Maximum call stack size exceeded
// function foo() {
//   foo();
// }
// foo();

// Asynchronous Functionality
console.log("1");
setTimeout(() => {
  console.log("2");
}, 2000);
console.log("3");

//8. the callback consisted of ... console.log('2'); It runs!
//7. NOW! We move the callback into the call stack from the event loop
//2. set timeout is second, it triggers the WEB API...
//1. console.log("1"); -- pops off immediately after executing
//Call Stack--------------------------

//3. Once set timeout triggers the WEB API, and after the alloted time given by the code,
// it says hey! We are ready for our callback function.
//WEB API----------------------------

//5. Once that time is up within the WEB API, the callback executable function defined by the code
// is added to the callback queue.
//Callback Queue---------------------

//6. The event loop is constantly looping to check "is the call stack empty?" then... "do we have any callbacks that
// need to be handled? If so, we can throw something in there!"
//Event Loop------------------------

//onClick, onLoad, onDone
// Element.addEventListener("click", () => console.log("click")); 
