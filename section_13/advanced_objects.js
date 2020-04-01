// Reference Type
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

object1.value = 17;

console.log("object1 === object2", object1 === object2);
console.log("object1.value", object1.value);
console.log("object2.value", object2.value);
console.log("object3.value", object3.value);

// Context vs Scope
// Scope is created when you see curly brackets
function b() {
  let a = a;
}

// Context tells you where you are within the object.
// 'this' is referring to whatever object are we in at 'this' moment.
console.log("this === window", this === window);

// function a() {
//   console.log(this);
// }
// a();

// OR

const object4 = {
  a: function() {
    console.log(this);
  }
};
object4.a();

// Instantiation: when you make a copy of an object and re-use the code;
class Player {
  constructor(name, type) {
    console.log("entering Player constructor...", this);

    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi my name is ${this.name} and I am type: ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type); // this passes in the name and type of Player class so we have access to that info.
    console.log("entering Wizard constructor...", this);
  }
  play() {
    console.log(`WEEEEEEEE! I am of type: ${this.type}`);
  }
}

const wizard1 = new Wizard("Taylor", "Healer");
const wizard2 = new Wizard("Cody", "Frost Mage");
