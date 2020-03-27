// TERNARY OPERATOR
function isUserValid(bool) {
  return bool;
}

let answer = isUserValid(true) ? 'You may enter!' : 'Access Denied!';
let automatedAnswer =
  'Your account # is ' + (isUserValid(false) ? '1234' : 'not available');

function condition() {
  if (isUserValid) {
    return 'You may enter';
  } else {
    return 'access denied';
  }
}

let answer2 = condition();
