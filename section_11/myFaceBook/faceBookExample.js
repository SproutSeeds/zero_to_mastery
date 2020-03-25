let database = [
  {
    username: 'Cody',
    password: 'superSecret'
  },
  {
    username: 'Robert',
    password: '123'
  },
  {
    username: 'Taylor',
    password: 'borkok'
  }
];

let newsFeed = [
  {
    username: 'Bobby',
    timeLine: 'Blazing Sadle!'
  },
  {
    username: 'Carol',
    timeline: 'Link to Carols Cook Book: Best Recipes in all PNW!'
  },
  {
    username: 'Connie',
    timeline: 'Ive got the best dress for you to wear on your next fall day!'
  }
];

function isUserValid(username, password) {
  for (let i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert('Sorry wrong user/pass.');
  }
}

let userNamePrompt = prompt("What's your username?");
let password = prompt("What's your password?");

signIn(userNamePrompt, password);
