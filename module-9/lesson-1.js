//! ============================================
/* const dog = {
  name: 'Mango',
  age: 3,
  isGoodBoy: true,
};

const json = JSON.stringify(dog);
console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}' */

//! ============================================
/* const dog = {
  name: 'Mango',
  age: 3,
  isGoodBoy: true,
  bark() {
    console.log('Woof!');
  },
};

const json = JSON.stringify(dog);
console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}' */

/* const json = JSON.stringify(() => console.log('Well'));
console.log(json); // undefined */

//! ============================================
/* console.log(JSON.parse('5'));
console.log(JSON.parse('false'));
console.log(JSON.parse('null')); */

//! ============================================
/* const json = '{"name":"Mango","age":3,"isGoodBoy":true}';

const dog = JSON.parse(json);
console.log(dog);
console.log(dog.name); */

//! ============================================
/* const data = JSON.parse('Well');
console.log('Not'); // Error */

//! ============================================
/* const data = JSON.parse('{username: "Mango"}');
console.log(data); // Error */

//* ============================================
try {
  //Code that may throw a runtime erro
} catch (error) {
  // Error handling
}

//! ============================================
/* try {
  const data = JSON.parse('Well');
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

console.log('Fine'); */

//! ============================================
/* console.log('not');
cos value = 5; */

//! ============================================
// console.log(localStorage);

/* localStorage.setItem('ui-theme', 'light');
console.log(localStorage);
 */

//! ============================================
const setting = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem('settings', JSON.stringify(setting));
