function checkDriverAge(age) {
  if (age < 18) {
    console.log("You are too young to drive!");
  } else {
    console.log("Power on! Drive on! Be cool human.");
  }
}

let checkDriverAge2 = function(age) {
  if (age < 18) {
    console.log("You are too young to drive!");
  } else {
    console.log("Power on! Drive on! Be cool human.");
  }
};

checkDriverAge(17);
checkDriverAge2(17);
