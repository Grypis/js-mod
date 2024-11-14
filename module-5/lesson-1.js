/* function greet(name) {
  return `Welcome ${name}`;
}
console.log(greet('Mango'));
console.log(greet); */
/* function makePizza() {
  return 'Your pizza is being prepared, please wait.';
}
const result = makePizza();
const pointer = makePizza;
console.log(pointer);
console.log(result);
 */
/* function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}
registerGuest('Mango', greet);
registerGuest('Mango', notify); */
/* function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}
console.log(makeMessage('Ultracheese', deliverPizza));
console.log(makeMessage('Royal Grand', makePizza)); */
/* function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

registerGuest('Mango', function greet(name) {
  console.log(`Welcome ${name}!`);
});

registerGuest('Poly', function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}); */
/* function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza('Royal Grand', function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}`);
});

makePizza('Ultracheese', function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});
 */
/* array.forEach(function callback(element, index, array) {}); */
/* const numbers = [5, 10, 15, 20, 25];
for (let i = 0; i < numbers.length; i++) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
}); */
/* function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (index) {
    totalPrice += index;
  });

  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4])); */
// function filterArray(numbers, value) {}
/* function classicAdd(a, b, c) {
  return a + b + c;
}

const arrowAdd = (a, b, c) => {
  return a + b + c;
} */
/* const add = (a, b, c) => {
  return a + b + c;
} */
/* const add = a => {
  return a + 5;
} */
/* const greet = () => {
  console.log('Hello!');
};
greet(); */
/* function calculateTotalPrice(quantity, pricePerItem) {
  return quantity * pricePerItem;
} */
/* const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};
console.log(calculateTotalPrice(5, 100));
 */
/* const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};
 */
/* const add = (a, b, c) => a + b + c;
console.log(add(2, 3, 454)); */
/* function classicADd(a, b, c) {
  return a + b + c;
}

const add = (a, b, c) => a + b + c; */
/* const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

console.log(calculateTotalPrice(2, 3)); */
/* const add = (...args) => {
  console.log(args);
};
add(1, 2, 3); */
/* const numbers = [5, 10, 15, 20, 25];
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});
numbers.forEach((number, index) => {
  console.log(`Index ${index}, value${number}`);
}); */
/* const numbers = [5, 10, 15, 20, 25];
const logMessage = (numbers, index) => {
  console.log(`Index ${index}, value ${numbers}`);
};
numbers.forEach(logMessage); */
/* const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => {
    totalPrice += item;
  });

  return totalPrice;
};
console.log(calculateTotalPrice([12, 85, 37, 4])); */
/* const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * value;
  }
};
const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
console.log(numbers); */
/* const pureMultiply = (array, value) => {
  const newArray = [];
  array.forEach(element => {
    newArray.push(element * value);
  });
  return newArray;
};
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);
console.log(numbers);
console.log(doubledNumbers); */
/* function changeEven(numbers, value) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
  }
  return newArray;
} */
/* const changeEven = (numbers, value) => {
  const newArray = [];
  numbers.forEach(element => {
    newArray.push(element + value);
  });
  return newArray;
};
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)) */

//! array.method(callback(currentValue, index, array));

/* Array.method((item, adx, arr) => {
  // логіка
}); */

/* array.method(item => {
  //
})  */

//! array.map((elem, idx, arr) => {})

/* const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase);
const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase);
console.log(planets); */

/* const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
const planetsLengths = planets.map(planet => planet.length);
console.log(planetsLengths); */

/* const students = [
  {
    name: 'Mango',
    score: 83,
  },
  {
    name: 'Poly',
    score: 59,
  },
  {
    name: 'Ajax',
    score: 37,
  },
  {
    name: 'Kiwi',
    score: 94,
  },
  {
    name: 'Houston',
    score: 64,
  },
];
const names = students.map(student => student.name);
console.log(names); */

/* const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const titles = books.map(book => book.title);
console.log(titles); */

//! array.flatMap((elem, idx, arr) => {});

/* const students = [
  {
    name: 'Mango',
    courses: ['math', 'physics'],
  },
  {
    name: 'Poly',
    courses: ['science', 'math'],
  },
  {
    name: 'Kiwi',
    courses: ['physics', 'biology'],
  },
];
const mappedCourses = students.map(student => student.courses);
console.log(mappedCourses);
const flattenedCourses = students.flatMap(student => student.courses);
console.log(flattenedCourses); */

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

/* const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

const getUserEmails = users => {
  return users.map(user => user.email);
};
console.log(getUserEmails(users)); */

//! array.filter((elem, idx, arr) => { });

/* const values = [51, -3, 27, 21, 68, 42, -37];
const positiveValue = values.filter(value => value >= 0);
console.log(positiveValue);
const negativeValues = values.filter(value => value < 0);
console.log(negativeValues);
const bigValues = values.filter(value => value > 1000);
console.log(bigValues);
console.log(values); */

/* const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(evenNumbers);
console.log(oddNumbers); */

/* const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  {
    name: 'Mango',
    score: 83,
  },
  {
    name: 'Poly',
    score: 59,
  },
  {
    name: 'Ajax',
    score: 37,
  },
  {
    name: 'Kiwi',
    score: 94,
  },
  {
    name: 'Houston',
    score: 64,
  },
];
const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best);
const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst);
const average = students.filter(
  student => student.score >= LOW_SCORE && student.score < HIGH_SCORE,
);
console.log(average); */

/* const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = 'Bernard Cornwell';

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);
console.log(topRatedBooks);
console.log(booksByAuthor); */

/* const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, 'brown')); */

//! array.find((elem, idx, arr) => {})

/* const colorPickerOprions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];
const blue = colorPickerOprions.find(option => option.label === 'blue');
console.log(blue);
 */

/* const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);
console.log(bookWithTitle);
console.log(bookByAuthor);
 */

//! array.every((elem, idx, arr) => {})

/* const plus = [1, 2, 3, 4, 5].every(value => value >= 0);
console.log(plus);
const minus = [1, 2, 3, 4, -11, 5].every(value => value >= 0);
console.log(minus); */

// const products = [
//   {
//     name: 'apple',
//     quantity: 2,
//   },
//   {
//     name: 'orange',
//     quantity: 5,
//   },
//   {
//     name: 'plum',
//     quantity: 0,
//   },
// ];
// const hasEveryProduct = products.every(product => product.quantity > 0);
// console.log(hasEveryProduct);

/* const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];
const isEveryUserActive = users => {
  return users.every(user => user.isActive);
};
console.log(isEveryUserActive(users)); */

//! array.some((elem, idx, arr) => {});

/* const plus = [1, 2, 3, 4, 5].some(value => value >= 0);
console.log(plus);
const minus = [1, 2, 3, 4, -11, 5].some(value => value > 0);
console.log(minus);
const totalMinus = [1, 23, 4, 5, 6, 7].some(value => value < 0);
console.log(totalMinus); */

//! array.reduce((previousValue, elem, idx, arr) => {}, initialValue)

/* const total = [2, 7, 3].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);
console.log(total); */

/* const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
const totalPlayTime = playtimes.reduce((previousValue, playtime) => {
  return previousValue + playtime;
}, 0);
console.log(totalPlayTime);
const averagePlayTime = totalPlayTime / playtimes.length; */

/* const students = [
  {
    name: 'Mango',
    score: 83,
  },
  {
    name: 'Poly',
    score: 59,
  },
  {
    name: 'Ajax',
    score: 37,
  },
  {
    name: 'Kiwi',
    score: 94,
  },
  {
    name: 'Houston',
    score: 64,
  },
];
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);
const avarageScore = totalScore / students.length;
console.log(avarageScore); */

/* const players = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];

const totalTime = players.reduce((total, player) => {
  return total + player.playtime;
}, 0);
console.log(totalTime);

const totalAveragePlaytimePerGame = totalTime / players.length;
console.log(totalAveragePlaytimePerGame); */

//! array.toSorted();

/* const scores = [61, 19, 74, 35, 92, 56];
const ascScores = scores.toSorted();
console.log(scores);
console.log(ascScores); */

/* const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
];
const ascendingReleaseDates = releaseDates.toSorted();
console.log(ascendingReleaseDates);
const alphabeticalAuthors = authors.toSorted();
console.log(alphabeticalAuthors); */

//! array.toSorted((a, b) => {})

/* const scores = [61, 19, 74, 35, 92, 11, 56];
const ascScores = scores.toSorted((a, b) => a - b);
console.log(ascScores);
const desScores = scores.toSorted((a, b) => b - a);
console.log(desScores); */

/* const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);
console.log(ascendingReleaseDates);
const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
console.log(descendingReleaseDates); */

//! firstString.locacCompare(secondString)

/* console.log('a'.localeCompare('b'));
console.log('b'.localeCompare('a'));
console.log('a'.localeCompare('a'));
console.log('b'.localeCompare('b')); */

/* const students = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];
const inAlpOrder = students.toSorted((a, b) => a.localeCompare(b));
console.log(inAlpOrder);
const inRevOrder = students.toSorted((a, b) => b.localeCompare(a));
console.log(inRevOrder); */

/* const authors = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
  'Howard Lovecraft',
];
const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));
console.log(authorsInAlphabetOrder);
const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));
console.log(authorsInReversedOrder); */

/* const students = [
  {
    name: 'Mango',
    score: 83,
  },
  {
    name: 'Poly',
    score: 59,
  },
  {
    name: 'Ajax',
    score: 37,
  },
  {
    name: 'Kiwi',
    score: 94,
  },
];
const inAscScoreOrder = students.toSorted(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score,
);
console.log(inAscScoreOrder);
const inDesScoreOrder = students.toSorted(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score,
);
console.log(inDesScoreOrder);
const inApl = students.toSorted((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name),
);
console.log(inApl);
 */

/* const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    rating: 7.94,
  },
  {
    title: 'Enemy of God',
    author: 'Bernard Cornwell',
    rating: 8.67,
  },
];
const sortedByAuthorName = books.toSorted((a, b) =>
  a.author.localeCompare(b.author),
);
console.log(sortedByAuthorName);
const sortedByReversedAuthorName = books.toSorted((a, b) =>
  b.author.localeCompare(a.author),
);
console.log(sortedByReversedAuthorName);
const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);
console.log(sortedByAscendingRating);
const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);
console.log(sortedByDescentingRating);
 */

const students = [
  { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
  { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
  { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
  { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
];
/* const sortedByAscScore = students.toSorted((a, b) => a.score - b.score);
console.log(sortedByAscScore);
const names = sortedByAscScore.map(student => student.name);
console.log(names); */

/* const names = students
  .toSorted((a, b) => a.score - b.score)
  .map(student => student.name);
console.log(names); */

const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((courses, index, array) => array.indexOf(courses) === index)
  .toSorted((a, b) => a.localeCompare(b));
console.log(uniqueSortedCourses);
