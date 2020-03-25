// let button = document.getElementsByTagName('button');

// button[0].addEventListener('click', function(e) {
//   console.log('click');
// });
// button[0].addEventListener('mouseenter', function(e) {
//   console.log('Entered button');
// });
// button[0].addEventListener('mouseleave', function(e) {
//   console.log('Left the button');
// });

//-----------------------------------------------
let button = document.getElementById('enter');
let input = document.getElementById('userinput');
let ul = document.querySelector('ul');
let count = 0;

function inputLength() {
  return input.value.length;
}
function createListElement() {
  let li = document.createElement('li');
  let delete_button = document.createElement('button');
  delete_button.setAttribute('id', 'delete');

  li.appendChild(document.createTextNode(input.value));
  delete_button.appendChild(document.createTextNode('x'));
  li.appendChild(delete_button);

  delete_button.addEventListener('click', function() {
    delete_button.parentElement.classList.toggle('done');
  });
  ul.appendChild(li);

  input.value = '';
  count++;
}
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function addListAfterEnter(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}
function deleteListAfterClick() {}

button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterEnter);
