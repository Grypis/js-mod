/* const fruits = ["apple", "plum", "pear", "orange"];
console.log(fruits); */

//! arrayName[index]
/* const planets = ["Earth", "Mars", "Venus"];
console.log(planets[0]); // 'Earth'
console.log(planets[1]); // 'Mars'
console.log(planets[2]); // 'Venus'
 */

/* const planets = ["Earth", "Mars", "Venus"];
const firstElement = planets[0];
console.log(firstElement); // 'Earth'
console.log(planets[3]); // undefined */

/* const fruits = ["apple", "plum", "pear", "orange"];
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];
console.log(firstElement, secondElement, lastElement);
 */

/* const planets = ["Earth", "Mars", "Venus", "Uranus"];
planets[0] = "Jupiter";
planets[2] = "Neptune";
console.log(planets);
 */

/* 
const fruits = ['apple', 'plum', 'pear', 'orange'];
fruits[1] = 'peach';
fruits[3] = 'banana';
console.log(fruits); */

/* const planets = ['Earth', 'Mars', 'Venus'];
console.log(planets.length); // 3 */

/* const planets = ['Earth', 'Mars', 'Venus'];
if (planets.length >= 3) {
  console.log('3 or more elements');
} else {
  console.log('3 or less elements');
}

const refr = planets.length >= 3 ? '3 or more elements' : '3 or less elements';
console.log(refr);
 */

/* function getOrderQuantity(order) {
  return order.length;
}
console.log(getOrderQuantity(['apple', 'peach', 'pear', 'banana'])); // 4
console.log(getOrderQuantity(['apple', 'banana'])); // 2 */

/* const planets = ['Earth', 'Mars', 'Venus'];
const lastElementIndex = planets.length - 1;
console.log(planets[lastElementIndex]); // 'Venus' */

// console.log('Hello world!');

/* function getLastElementMeta(array) {
  return [array.length - 1, array[array.length - 1]];
}
console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana'])); // [3, "banana"];
console.log(getLastElementMeta(['apple', 'peach', 'pear'])); // [2, "pear"];
 */

/* function getExtremeElements(array) {
  const firstElement = array[0];
  const lastElement = array[array.length - 1];
  return [firstElement, lastElement];
}
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(['Earth', 'Mars', 'Venus'])); */

/* let a = 5;
let b = a;
console.log(a); // 5
console.log(b); // 5
// Присвоєння за значенням, у пасм'яті буде створено ще
// одну ячейку, в яку буде скопійовано значення 5

// Змінемо значення а
a = 10;
console.log(a); // a
console.log(b); // 5 значення b не змінилось, оскількт це окрема копія
 */

/* const a = ['Mango', 'Poly'];
const b = a;
console.log(a); // ['Mango', 'Poly'];
console.log(b); // ['Mango', 'Poly'];
a[1] = 'Jacob';
console.log(a); // ["Mango", "Jacob"];
console.log(b); // ["Mango", "Jacob"];
b[0] = 'Ajax';
console.log(a); // ["Ajax", "Jacob"]
console.log(b); // ["Ajax", "Jacob"] */

/* const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false
console.log([] === []); // false */

/* const array = [1, true, 'Poly'];
console.log(String(array)); // '1, true, Poly'
console.log(array + '5'); // '1, true, Poly5' */

/* console.log(Number([])); // 0
console.log(Number([1])); // 1
console.log(Number([1, 2, 3])); // NaN */

/* const emptyArray = [];
const nonEmptyArray = [1, 2, 3];
console.log(Boolean(emptyArray)); // true
console.log(Boolean(nonEmptyArray)); // true
if (emptyArray) {
  console.log('if is in progress');
} else {
  console.log('else is not performed');
}
if (nonEmptyArray) {
  console.log('if is in progress');
} else {
  console.log('else is not performed');
} */

/* const words = ['JavaScript', 'is', 'amazing'];
console.log(words.join('')); // 'JavaScriptisamazing'
console.log(words.join(' ')); // 'JavaScript is amazing'
console.log(words.join('-')); // 'JavaScript-is'amazing' */

/* function transformString(string) {
  const words = string.split('_');
  return words.join('-');
}
console.log(transformString('price_per_droid'));
console.log(transformString('user_age')); */

/* function getLength(array) {
  return array.join('').length;
}

console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train'])); // 22
console.log(getLength(['M', 'a', 'n', 'g', 'o'])); // 8 */

/* const name = 'Mango';
const letters = name.split('');
console.log(letters); // ["M", "a", "n", "g", "o"]

const message = 'JavaScript essential';
const words = message.split(' ');
console.log(words); // ["JavaScript", "essentials"]

const slug = 'amazing-french-recipes';
const slugParts = slug.split('-');
console.log(slugParts); // ["amazing", "french", "recipes"]
 */

/* function calculateEngravingPrice(message, pricePerWord) {
  return message.split(' ').length * pricePerWord;
}
console.log(calculateEngravingPrice('JavaScript is in my blood', 10)); // 50
console.log(calculateEngravingPrice('JavaScript is in my blood', 20)); // 100 */

/* const planets = ['Earth', 'Mars', 'Jupiter', 'Saturn'];
console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Jupiter', 'Saturn']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
const result = planets.slice(1, 3);
console.log(result); // ["Mars", "Venus"]
console.log(planets.slice()); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]
console.log(planets.slice(1)); // ["Mars", "Venus", "Jupiter", "Saturn"]
console.log(planets.slice(2)); // ["Venus", "Jupiter", "Saturn"]
console.log(planets.slice(-2)); // ["Jupiter", "Saturn"] */

/* const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
const firstTwoEls = fruits.slice(0, 2);
console.log(firstTwoEls);
const nonExtremeEls = fruits.slice(1, 4);
console.log(nonExtremeEls);
const lastThreeEls = fruits.slice(-3);
console.log(lastThreeEls);
 */

/* const firstArray = ['Mercury', 'Venus'];
const secondArray = ['Mars', 'Jupiter'];
const thirdArray = ['Saturn', 'Neptune'];
const result = firstArray.concat(secondArray);
console.log(firstArray); // ["Mercury", "Venus"];
console.log(secondArray); // ["Mars", "Jupiter"];
console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];
console.log(firstArray.concat(thirdArray, secondArray));
// ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ]; */

/* const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];
const allClients = oldClients.concat(newClients);
console.log(allClients); */

/* const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Poly'];
console.log(clients.indexOf('Poly')); // 2
console.log(clients.indexOf('Mongong')); // -1 */

/* function getSlice(array, value) {
  let index = array.indexOf(value);
  if (index === -1) {
    return [];
  } else {
    return array.slice(0, index + 1);
  }
}
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly')); // ["Mango", "Poly"]
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax')); // ["Mango", "Poly", "Ajax"]
 */

/* const planets = ['Earth', 'Mars', 'Venus'];
planets.push('Jupiter');
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter'] */

/* const tags = [];
for (let i = 0; i < 3; i++) {
  tags.push(`tag-${i}`);
}
console.log(tags); // ["tag-0", "tag-1", "tag-2"] */

/* function createArrayOfNumbers(min, max) {
  let array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}
console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17] */

/* const planets = ['Earth', 'Mars', 'Venus'];
for (let i = 0; i < planets.length; i++) {
  console.log(planets[i]);
} */

/* function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    total += order[i];
  }
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4])); //138
 */

/* const planets = ['Earth', 'Mars', 'Venus'];
console.log(planets.includes('Earth')); // true
console.log(planets.includes('Saturn')); // false */

/* const fruits = ['apple', 'banana', 'orange'];
if (fruits.includes('banana')) {
  console.log('has banana');
} else {
  console.log('does not has banana');
} */

/* function checkStorage(storage, item) {
  const lowerCaseStorage = storage.map(i => i.toLowerCase());
  const index = lowerCaseStorage.indexOf(item.toLowerCase());
  if (index !== -1) {
    return `${storage[index]} is available to order!`;
  } else {
    return 'Sorry! We are out of stock!';
  }
}
checkStorage(['apple', 'plum', 'pear'], 'plum'); // "plum is available to order!" */

/* function getCommonElements(array1, array2) {
  const commonElements = [];
  for (let element of array1) {
    if (array2.includes(element)) {
      commonElements.push(element);
    }
  }
  return commonElements;
}
console.log(getCommonElements([1, 2, 3], [2, 4])); // 2
 */

/* const planets = ['Earth', 'Mars', 'Venus'];
for (const planet of planets) {
  console.log(planet);
} */

/* function calculateTotalPrice(order) {
  let total = 0;
  for (const item of order) {
    total += item;
  }
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4])); // 138 */

/* function sum(a, b) {
  console.log(arguments);
  return a + b;
}
sum(2, 5); */

/* function multiply() {
  let total = 1;
  for (const arg of arguments) {
    total *= arg;
  }
  return total;
}
console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120 */

/* function foo() {
  // У змінній args буде повноцінний масив з усіх аршументів
  const args = Array.from(arguments);
  return args.join('-');
}
console.log(foo(1, 2, 3)); // Поверне "1-2-3" */

/* function greet(username = 'Guest') {
  return `Hello, ${username}`;
}
console.log(greet('Jacob')); // "Hello, Jacob!"
console.log(greet()); // 'Hello, Guest!' */

/* function count(from, to, step = 1) {
  console.log(`from: ${from}, to: ${to}, step: ${step} `);

  for (let i = from; i <= to; i += step) {
    //
  }
}
console.log(count(1, 15, 4)); // "from: 1, to: 15, step: 4"; */

/* const multiply = function (x, y, z) {
  console.log(x * y * z);
};
multiply(4, 5, 6);
 */

/* const globalValue = 10;
console.log(globalValue); // 10
function foo() {
  console.log(globalValue); // 10
}
for (let i = 0; i < 5; i++) {
  console.log(globalValue); // 10

  if (i === 2) {
    console.log(globalValue); // 10
  }
} */

/* function fnA() {
  console.log('Log inside fnA function before calling fnB');
  fnB();
  console.log('Log inside fnA function after fnB call');
}
function fnB() {
  console.log('Log inside fnB function');
}
console.log('Log before calling fnA');
fnA();
console.log('Log after calling fnA');
// "Log before calling fnA"
// "Log inside fnA function before calling fnB"
// "Log inside fnB function"
// "Log inside fnA function after fnB call"
// "Log after calling fnA" */
