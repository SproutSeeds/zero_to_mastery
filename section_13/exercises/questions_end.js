let array = [1, 2, 3, 4, 5];
let target = 4;

function question_1() {
  let array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
  array.sort();
  console.log(array);
  let final_array = [];
  let input = [];

  array.forEach((value, i) => {
    if (array[i] === array[i + 1]) {
      input.push(array[i]);
    } else if (array[i] === array[i - 1]) {
      input.push(array[i]);
      final_array.push(input);
      input = [];
    } else {
      final_array.push(array[i]);
    }
  });

  console.log(final_array);
}

// Question2
//Write a javascript function that takes an array of numbers and a target number.
//The function should find two different numbers in the array that,
//when added together, give the target number.

// Need to loop through the array and splice one position of the array.
// let that be the number you choose to start with.
// loop through the array again seeing if that first spliced number + one of these
// values equals the target number.
function question_2(array, target) {
  let array_without_value = [];
  let final_array;
  let value;

  array.forEach((val, i) => {
    value = val;
    array_without_value = array.filter((num) => num !== val);

    for (num of array_without_value) {
      if (num + value === target) {
        final_array = [num, value];
      }
    }
  });

  console.log(final_array);
  return final_array;
}

// convert hex to rgb
function question_3(r, g, b) {
  function component_to_hex(c) {
    let hex = c.toString(16); // this toString method will create a hexadecimal version of the 'c' string.
    return hex.length === 1 ? "0" + hex : hex;
  }
  function rgb_to_hex(r, g, b) {
    return (
      "#" + component_to_hex(r) + component_to_hex(g) + component_to_hex(b)
    );
  }
  return rgb_to_hex(r, g, b);
}

// ------------QUESTION FUNCTION CALLS--------------
// question_1();
// question_2(array, target);
// console.log(question_3(0, 89, 255));
