//? element.querySelector(selector);
/* const item = document.querySelector('.list-item');
console.log(item); */

//? element.querySelectorsAll(selector)
/* const listItems = document.querySelectorAll('.list-item');
console.log(listItems); */

/* const link = document.querySelector('.link');
console.log(link.href); // https://goit.global/
link.href = 'https://neo.goit.global/';
console.log(link.href); */

/* const el = document.querySelector('.text');
const nested = document.querySelector('.sub-text');
console.log(el.textContent);
console.log(nested.textContent);
el.textContent = 'Username: Poly';
console.log(el.textContent); */

/* const link = document.querySelector('.link');
console.log(link.classList); */

// const hasActiveClass = link.classList.contains('is-active'); // true
// const hasActiveClass = link.classList.contains('title'); // false
// console.log(hasActiveClass);

/* const link = document.querySelector('a');
const hasActiveClass = link.classList.contains('title'); // false
console.log(hasActiveClass); */

/* link.classList.add('special');
console.log(link.classList); */

/* link.classList.remove('is-active');
console.log(link.classList);
 */

/* link.classList.toggle('is-active');
console.log(link.classList); */

/* link.classList.replace('special', 'regular');
console.log(link.classList); */

/* const button = document.querySelector('.btn');
button.style.backgroundColor = 'teal';
button.style.fontSize = '24px';
button.style.textAlign = 'center';
console.log(button.style);
 */

// const image = document.querySelector('.image');
/* console.log(image.hasAttribute('src'));
console.log(image.hasAttribute('href')); */
// console.log(image.getAttribute('alt'));
/* image.setAttribute('alt', 'Amazing nature');
console.log(image.getAttribute('alt')); */
/* image.removeAttribute('alt');
console.log(image.hasAttribute('alt')); */

/* const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action);

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action);

saveBtn.dataset.action = 'update';
saveBtn.dataset.role = 'admin';
console.log(saveBtn.dataset.action);
console.log(saveBtn.dataset.role); */

//? document.createElement(tagName)
/* const heading = document.createElement('h1');
heading.classList.add('title');
heading.textContent = 'This is a heading';
console.log(heading);
heading.prepend(firstItem); */

/* const image = document.createElement('img');
image.src = 'https://picsum.photos/id/11/320/240';
image.alt = 'Nature';
console.log(image); */

/* const heading = document.createElement('h1');
heading.classList.add('title');
heading.textContent = 'This is a heading';

// Створюємо дочірній елемент
const firstItem = document.createElement('span');
firstItem.textContent = 'This is the first item';

// Додаємо дочірній елемент до heading
heading.prepend(firstItem);

// Додаємо heading до body
document.body.prepend(heading);

console.log(heading); */

/* const text = document.querySelector('text');
text.remove(); */

//? element.insertAdjacentHTML(position, string)
