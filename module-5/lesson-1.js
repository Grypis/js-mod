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

/* array.method(callback(currentValue, index, array));
 */

/* Array.method((item, adx, arr) => {
  // логіка
}); */

/* array.method(item => {
  //
})  */

/* array.map((elem, idx, arr) => {
    //
  })  */

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

/* array.flatMap((elem, idx, arr) => {
  //
}); */

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
