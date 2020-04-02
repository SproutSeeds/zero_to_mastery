const padStart_example = "Turtle".padStart(10); // adds 10 spaces to the beginning of the string
console.log(padStart_example);

const padEnd_example = "Turtle".padEnd(10); // adds 10 spaces to the end of the string
console.log(padEnd_example);

const fun = (a, b, c, d) => {
  console.log(a);
};

fun(1, 2, 3, 4);

// Object.values;
// Object.entries;
// Object.keys;

let obj = {
  username0: "Santa",
  username1: "Rudolph",
  username2: "Mr.Grinch"
};

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]); // will pring the key ie. 'username0' and the value by passing key into the obj obj[key] ie. 'Santa'
});

Object.values(obj).forEach(value => console.log(value));
Object.entries(obj).forEach((value, index) =>
  console.log(`Entry #${index}`, value)
);

const new_obj = Object.entries(obj).map(value => {
  return value[1] + value[0].replace("username", "");
});
console.log(new_obj);
