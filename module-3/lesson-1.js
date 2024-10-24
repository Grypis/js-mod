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
