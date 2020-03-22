let id_content = document.getElementById('first');
let class_content = document.getElementsByClassName('second');

// Query selector selects the first item that it finds
let query_tag_first_instance = document.querySelector('h1');

// Query selector ALL selects all of them
let query_tag_ALL = document.querySelectorAll('li');

// Query selecting all with comma separated values
let query_multiple_tag_ALL = document.querySelectorAll('li, h1');

// Query selecting with set attribute
let set_attribute_selector = document
  .querySelector('li')
  .setAttribute('random', '1000');

// Query Selecting with get attribute
let get_attribute_selector = document
  .querySelector('li')
  .getAttribute('random');

// Query selecting with setting style
let first_h1_tag = document.querySelector('h1');
// Adding a class name to the query selected tag
first_h1_tag.className = 'coolTitle';

// Query Selecting, return class list
let first_tag_instance_class_list = document.querySelector('li').classList;

// Query Selecting add class to li
document.querySelector('li').classList.add('coolTitle');

// Query Selecting remove class from li
document.querySelector('li').classList.remove('coolTitle');

// Query Selecting add class to li (line-through)
document.querySelector('li').classList.add('done');

// Query selecting TOGGLE, reverts back to previous state based on "attribute given to toggle function"
document.querySelector('li').classList.toggle('done');

// INNER HTML -- DANGER!
document.querySelector('h1').innerHTML = '<strong>!!!!</strong>';

// Query selector .parent element
let second_li_item = document.querySelectorAll('li')[1];
let second_li_item_parent = second_li_item.parentElement;

// Query selector BODY children
let body_children = document.querySelectorAll('li')[1].parentElement
  .parentElement.children;

console.log('id content: first ', id_content);
console.log('class content: second ', class_content);
console.log('tag selector: first instance of ', query_tag_first_instance);
console.log('tag selector: ALL of them', query_tag_ALL);
console.log(
  'tag selector: ALL of them, comma separated',
  query_multiple_tag_ALL
);
console.log('Query selector with get attribute: ', get_attribute_selector);
console.log(
  'Query Selector, return Class List of first instance of tag: ',
  first_tag_instance_class_list
);

console.log('second li item: ', second_li_item);
console.log('parent of second li item: ', second_li_item_parent);
console.log('Body children: ', body_children);

// Always Cache selectors in variables
