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

/* const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Mango';
for (const key in dog) {
  console.log(key);
} */

/* const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Mango';
for (const key in dog) {
  if (dog.hasOwnProperty(key)) {
    console.log(key);
  }
} */

/* const animal = { legs: 4 };
const dog = Object.create(animal);
dog.name = 'Mango';
console.log(Object.keys(dog));
console.log(Object.values(dog));
for (const key of Object.keys(dog)) {
  console.log(key);
} */

/* const objC = { c: 'objC prop' };
const objB = Object.create(objC);
objB.b = 'objB prop';
const objA = Object.create(objB);
objA.a = 'objA prop';
console.log(objA);
console.log(objB);
console.log(objC); */

/* const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish',
};
const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;
// Object.setPrototypeOf(parent, ancestor);
const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;
// Object.setPrototypeOf(child, parent);
console.log(ancestor.hasOwnProperty('heritage')); */

/* const objB = {
  b: 'objB prop',
};
const objA = Object.create(objB);
objA.a = 'objA prop';
console.log(objA); */

/* const baseSalary = 30000;
const overtime = 10;
const rate = 20;
const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};
console.log(getWage(baseSalary, overtime, rate)); */

/* const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};
console.log(employee.getWage()); */

//! class User {}

/* class User {}
const mango = new User();
console.log(mango);
const poly = new User();
console.log(poly); */

/* class Car {}
new Car();
 */

/* class User {
  constructor() {
    console.log('constructor call');
  }
}
const mango = new User();
console.log(mango); */

/* class User {
  constructor(name, email) {
    console.log(name, email);
  }
}
const mango = new User('Mango', 'mango@mail.com');
console.log(mango); */

/* class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
const mango = new User('Mango', 'mango@mail.com');
console.log(mango);
const poly = new User('Poly', 'poly@mail.com');
console.log(poly); */

/* class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
console.log(new Car('Audi', 'Q3', 36000));
 */

/* class User {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }
}
const mango = new User({
  name: 'Mango',
  email: 'mango@mail.com',
});
console.log(mango); */

/* class Car {
  constructor(props) {
    this.brand = props.brand;
    this.model = props.model;
    this.price = props.price;
  }
}
console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 })); */

/* class User {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }
  getEmail() {
    return this.email;
  }
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}
const mango = new User({
  name: 'Mango',
  email: 'mango@mail.com',
});
console.log(mango.getEmail());
mango.changeEmail('new@mail.com');
console.log(mango.getEmail()); */

/* class Car {
  constructor(params) {
    this.brand = params.brand;
    this.model = params.model;
    this.price = params.price;
  }
  getPrice() {
    return this.price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
}
 */

/* class User {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }
  getEmail() {
    return this.email;
  }
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}
console.log(User.prototype);

const mango = new User({
  name: 'Mango',
  email: 'mango@mail.com',
});
console.log(mango.getEmail()); */

/* class User {
  name;
  #email;
  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }
}
const mango = new User({
  name: 'Mango',
  email: 'mango@mail.com',
});
console.log(mango.name);
// console.log(mango.#email); */

/* class User {
  name;
  #email;
  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }
  getEmail() {
    return this.#email;
  }
  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}
const mango = new User({
  name: 'Mango',
  email: 'mango@mail.com',
});
console.log(mango.getEmail());
mango.changeEmail('mango@supermail.com');
console.log(mango.getEmail()); */

/* class Car {
  model;
  price;
  #brand;
  constructor(params) {
    this.#brand = params.brand;
    this.model = params.model;
    this.price = params.price;
  }

  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}
console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 })); */

/* class User {
  name;
  #email;
  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }
  getEmail() {
    return this.#email;
  }
  changeEmail(newEmail) {
    if (this.#validateEmail(newEmail)) {
      this.#email = newEmail;
    } else {
      console.log('Invalid email format');
    }
  }
  #validateEmail(email) {
    return email.includes('@');
  }
}
const mango = new User({
  name: 'Mango',
  email: 'mango@mail.com',
});
mango.changeEmail('newmail.com');
mango.changeEmail('new@mail.com');
console.log(mango.getEmail());
// mango.#validateEmail('test'); */

/* class User {
  #mail;
  constructor(params) {
    this.name = params.name;
    this.#mail = params.email;
  }
  get email() {
    return this.#mail;
  }
  set email(newEmail) {
    if (newEmail === '') {
      console.log('Error');
      return;
    }
    this.#mail = newEmail;
  }
}
const mango = new User({
  name: 'Mango',
  email: 'mango@mail.com',
});
console.log(mango.email);
mango.email = 'mango@supermail.com';
console.log(mango.email); */

/* class Car {
  #brand;
  #model;
  #price;

  constructor(params) {
    this.#brand = params.brand;
    this.#model = params.model;
    this.#price = params.price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
} */

/* class MyClass {
  static myProp = 'value';
}
console.log(MyClass.myProp);
const inst = new MyClass();
console.log(inst.myProp); */

/* class User {
  static roles = {
    admin: 'admin',
    editor: 'editor',
    basic: 'basic',
  };
  #email;
  #role;
  constructor(params) {
    this.#email = params.email;
    this.#role = params.role || User.roles.basic;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}
const mango = new User({
  email: 'mango@mail.com',
  role: User.roles.admin,
});
console.log(mango.role);
mango.role = User.roles.editor;
console.log(mango.role); */

/* class Car {
  static maxPrice = 50000;
  #price;
  constructor(params) {
    this.#price = params.price;
  }
  get price() {
    return this.#price;
  }
  set price(newPrice) {
    if (newPrice > Car.maxPrice) {
      return;
    } else {
      this.#price = newPrice;
    }
  }
}
const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000
audi.price = 49000;
console.log(audi.price); // 49000
audi.price = 51000;
console.log(audi.price); // 49000 */

/* class MyClass {
  static myMethod() {
    console.log('A static method');
  }
}
MyClass.myMethod(); */

/* class User {
  static #takenEmails = [];
  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }
  #email;
  constructor(params) {
    this.#email = params.email;
    User.#takenEmails.push(params.email);
  }
}
const mango = new User({ email: 'mango@mail.com' });
console.log(User.isEmailTaken('poly@mail.com'));
console.log(User.isEmailTaken('mango@mail.com')); */

/* class Car {
  static #maxPrice = 50000;

  constructor(params) {
    this.price = params.price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
 */

/* class Parent {}
class Child extends Parent {} */

/* class User {
  #email;
  constructor(email) {
    this.#email = email;
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }
}
class ContentEditor extends User {}
const editor = new ContentEditor('mango@mail.com');
console.log(editor);
console.log(editor.email); */

/* class User {
  constructor(name) {
    this.name = name;
  }
}

class Admin extends User {
  static role = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };
}
console.log(Admin.role.BASIC); // "basic"
console.log(Admin.role.SUPERUSER); // "superuser" */

/* class User {
  #email;
  constructor(email) {
    this.#email = email;
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }
}
class ContentEditor extends User {
  constructor(params) {
    super(params.email);
    this.post = params.post;
  }
}
const editor = new ContentEditor({
  email: 'mango@mail.com',
  posts: [],
});
console.log(editor);
console.log(editor.email); */
