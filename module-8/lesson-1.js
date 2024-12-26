/* const box = document.querySelector('.box');

box.addEventListener('click', function (e) {
  console.log(e.target); // Елемент, на якому відбулась подія click
}); */

//! ====================================================

/* const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output');

colorPalette.addEventListener('click', selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomHexColor();
    const item = document.createElement('button');
    item.type = 'button';
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add('item');
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
} */

//! ====================================================
/* console.log(_.sum([4, 2, 8, 6]));
console.log(_.shuffle([1, 2, 3, 4]));
 */

/* const instance = basicLightbox.create(
  `
	<h1>Not closable</h1>
	<p>It's not possible to close this lightbox with a click.</p>
`,
  {
    closable: false,
  },
); */

//! ====================================================
/* const user = {
  name: 'Jacob',
  age: 32,
};

console.log(user.name);
console.log(user.age);

const { name, age } = user;
console.log(name);
console.log(age); */

//! ====================================================
/* const book = {
  title: 'The last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

const { title, author, genres, inPublic, rating } = book;

const accessType = book.isPublic ? 'public' : 'private';
// const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access!`;

const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;
console.log(message); */

//! ====================================================
/* const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
};

const {
  title,
  author,
  coverImage = 'https://via.placeholder.com/640/480',
} = book;
console.log(title);
console.log(coverImage); */

//! ====================================================
/* const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
console.log(title);
console.log(bookAuthor);
console.log(isPublic);
console.log(bookRating); */

//! ====================================================
/* const book = {
  title: 'The Last Kingdom',
  coverImage:
    'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
};

const {
  title,
  coverImage: bookCoverImage = 'https://via.placeholder.com/640/480',
} = book;
console.log(title);
console.log(bookCoverImage); */

//! ====================================================
/* const book = {
  title: 'The Dream of a Ridiculous Man',
};

const {
  title,
  coverImage: bookCoverImage = 'https://via.placeholder.com/640/480',
} = book;
console.log(title);
console.log(bookCoverImage); */

//! ====================================================
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
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(`до деструктиризації = ${book.rating}`);
}

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}

for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
} */

//! ====================================================
/* function printUserInfo(user) {
  console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
} */

/* printUserInfo({
  name: 'Alice',
  age: 25,
  hobby: 'dancing',
}); */

/* function printUserInfo(user) {
  const { name, age, hobby } = user;
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
} */

/* function printUserInfo({ name, age, hobby }) {
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
} */
