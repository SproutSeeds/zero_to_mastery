let a = 5;
let b = a;

b++;

console.log(a);
console.log(b);

let obj1 = { name: "Cody", age: 28 };

// assigning the reference of obj1 to obj2, DOES NOT COPY, references a single location.
let obj2 = obj1;

// change age on this object in memory
obj2.age++;
console.log(obj1);
console.log(obj2);

let c = [1, 2, 3, 4, 5];
// assign all values of C to D.
let d = [].concat(c);

d.push(1212);

console.log("d array", d);
console.log("c array", c);

let obj = { a: "a", b: "b", c: { deepProp: "try and copy me" } };
let obj_clone = Object.assign({}, obj);
let obj_clone_2 = { ...obj };
let deep_clone = JSON.parse(JSON.stringify(obj));

obj.c.deepProp = "CHANGED";

console.log(obj);
console.log(obj_clone);
console.log(obj_clone_2);
console.log(deep_clone);
