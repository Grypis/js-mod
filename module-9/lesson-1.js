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
/* try {
  //Code that may throw a runtime erro
} catch (error) {
  // Error handling
}
 */
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
/* const setting = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem('settings', JSON.stringify(setting)); */

//! ============================================
/* const savedTheme = localStorage.getItem('ui-theme');
console.log(savedTheme);

const savedItem = localStorage.getItem('key-hz');
console.log(savedItem); */

//! ============================================
/* const setting = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem('settings', JSON.stringify(setting));

const savedSetting = localStorage.getItem('settings');
console.log(savedSetting);
const parsedSettings = JSON.parse(savedSetting);
console.log(parsedSettings); */

//! ============================================
/* localStorage.setItem('ui-theme', 'dark');
console.log(localStorage.getItem('ui-theme'));
// localStorage.removeItem;
localStorage.removeItem('ui-theme');
console.log(localStorage.getItem('ui-theme')); */

//! ============================================
/* localStorage.setItem('ui-theme', 'light');
localStorage.setItem('notif-level', 'mute');

console.log(localStorage);

localStorage.clear();
console.log(localStorage); */

//! ============================================
// console.log(sessionStorage);

/* sessionStorage.setItem('user-id', '123');
sessionStorage.setItem(
  'tickets',
  JSON.stringify({ from: 'Lviv', to: 'Kyiv', quantity: 2 }),
);
console.log(sessionStorage);

const userId = sessionStorage.getItem('user-id');
console.log(userId);
const tickets = JSON.parse(sessionStorage.getItem('tickets'));
console.log(tickets);

sessionStorage.removeItem('tickets');
console.log(sessionStorage);

sessionStorage.clear();
console.log(sessionStorage); */

//! ============================================
/* const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const localStorageKey = 'example-message';

textarea.value = localStorage.getItem(localStorage) ?? '';

form.addEventListener('input', evt => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  form.reset();
}); */

//! ============================================
