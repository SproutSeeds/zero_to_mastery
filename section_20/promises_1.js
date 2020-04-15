const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("we are in the resolve");
  } else {
    reject("We are rejecting!!");
  }
});

const promise_2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "We in Promise_2 and it feels good man.");
});

const promise_3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "We in Promise_3 and Might I say... I like it.");
});

const promise_4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "We in Promise_4 and DAYYUM BOI HE THICC!");
});

Promise.all([promise, promise_2, promise_3, promise_4]).then((values) =>
  console.log(values)
);

// promise
//   .then((result) => result + "!")
//   .then((result_2) => result_2 + "?")
//   .catch(() => console.log("error"))
//   .then((result_3) => {
//     console.log(result_3 + "!");
//   });
