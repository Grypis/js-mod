/* const user = {
  username: 'Viktor',
  showName() {
    //sdsdasdd
    console.log(user.username);
  },
};
user.showName(); */

/* const user = {
  username: 'Viktor',
  showName() {
    console.log(this.username);
  },
};
user.showName(); */

/* const pizzaPalace = {
  pizzas: ['Smoked', 'Four meats'],

  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },

  order(pizzaName) {
    if (this.checkPizza(pizzaName)) {
      return `Order accepted, preparing «${pizzaName}» pizza`;
    } else {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }
  },
};
console.log(pizzaPalace.order('Smoked')); //"Order accepted, preparing «Smoked» pizza" */

/* function foo() {
  console.log(this);
}
foo(); // window
 */

/* const user = {
  username: 'Poly',
  showThis() {
    console.log(this);
  },
};
user.showThis(); // {username: 'Poly', showThis: f} */

/* 'use strict';

function showThis() {
  console.log('this in showThis: ', this);
}
const user = {
  username: 'Poly',
};
user.showContext = showThis;
user.showContext();
showThis();
 */

//! foo.call(thisArg, arg1, arg2, ...)

/* function greet(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}`);
}
const mango = {
  username: 'Mango',
  room: 27,
};
const poly = {
  username: 'Poly',
  room: 191,
};
greet.call(mango, 'Welcome');
greet.call(poly, 'Aloha');
 */

//! foo.apply(thisArg, [arg1m arg2, ...])

/* function greet(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}`);
}
const mango = {
  username: 'Mango',
  room: 27,
};
const poly = {
  username: 'Poly',
  room: 191,
};
greet.apply(mango, ['Welcome']);
greet.apply(poly, ['Aloha']);
 */

//! const boundFoo = foo.bind(thisArg, arg1, arg2, ...AbortController)

'use strict';
/* const customer = {
  username: 'Jacob',
  sayHello() {
    console.log(`Hello, ${this.username}!`);
  },
};
customer.sayHello();
const greet = customer.sayHello.bind(customer);
greet(); */

/* const customer = {
  firstName: 'Jacob',
  lastName: 'Mercer',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
function makeMessage(callback) {
  const username = callback();
  console.log(`Processing an application from ${username}`);
}
makeMessage(customer.getFullName.bind(customer));
 */

/* const showThis = () => {
  console.log('this in showThis: ', this);
};
const user = {
  username: 'Mango',
};
user.showContext = showThis;
user.showContext(); */

/* const hotel = {
  username: 'Resort hotel',
  showThis() {
    const foo = () => {
      console.log('this in foo: ', this);
    };
    foo();
    console.log('this in showThis: ', this);
  },
};
hotel.showThis(); */

/* const showThis = () => {
  console.log('This in showThis: ', this);
};
showThis.call({ username: 'Mango' });
showThis.apply({ username: 'Mango' });
const boundShowThis = showThis.bind({ username: 'Mango' });
boundShowThis(); */

/* const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Mango';
console.log(dog);
console.log(dog.name);
console.log(dog.legs);
 */

/* const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};
const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;
console.log(parent.hasOwnProperty('surname'));
console.log(child.hasOwnProperty('surname')); */

//! objA.isPrototypeOf(objB)

/* const customer = {
  username: 'Jacob',
};
const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Mango';
console.log(dog);
console.log(animal.isPrototypeOf(dog));
console.log(dog.isPrototypeOf(animal));
console.log(customer.isPrototypeOf(dog)); */

/* const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Mango';
console.log(dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.hasOwnProperty('name'));
console.log(dog.hasOwnProperty('legs')); */

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Mango';
for (const key in dog) {
  console.log(key);
}
