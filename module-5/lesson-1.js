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
