/* const book = {
  title: 'The last kingdom',
  author: 'Bernard Corwell',
  genres: ['historical prose', 'adventure'],
  public: true,
  rating: 8.38,
};
console.log(book);
 */

/* const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
}; */

/* const user = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: {
        country: 'Jamaica',
        city: 'Ocho Rios'
    },
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
}; */

/* const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};
 */

/* const book = {
  title: 'The last kingdom',
  author: 'Bernard Corwell',
  genres: ['historical prose', 'adventure'],
  public: true,
  rating: 8.38,
};
const bookTitle = book.title;
console.log(bookTitle); // 'The last kingdom'
const bookGenres = book.genres;
console.log(bookGenres); // ['historical prose', 'adventure']
const bookPrice = book.price;
console.log(bookPrice); // undefined */

/* const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};
const aptRating = apartment.rating;
console.log(aptRating);
const aptDescr = apartment.descr;
console.log(aptDescr);
const aptPrice = apartment.price;
console.log(aptPrice);
const aptTags = apartment.tags;
console.log(aptTags);
 */

/* const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: {
    country: 'Jamaica',
    city: 'Ocho Rios',
  },
  hobbies: ['swimming', 'music', 'sci-fi'],
};
const location = user.location;
console.log(location); // {country: 'Jamaica', city: 'Ocho Rios'}
const country = user.location.country;
console.log(country); // 'Jamaica'
const hobbies = user.hobbies;
console.log(hobbies); // ['swimming', 'music', 'sci-fi']
const firstHobby = user.hobbies[0];
console.log(firstHobby); // 'swimming'
const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3 */

/* const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};
const ownerName = apartment.owner.name;
console.log(ownerName);
const ownerPhone = apartment.owner.phone;
console.log(ownerPhone);
const ownerEmail = apartment.owner.email;
console.log(ownerEmail);
const numberOfTags = apartment.tags.length;
console.log(numberOfTags);
const firstTag = apartment.tags[0];
console.log(firstTag);
const lastTag = apartment.tags[2];
console.log(lastTag); */

/* const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};
console.log(book.title); // 'The Last Kingdom'
console.log(book['title']); // 'The Last Kingdom'
console.log(book.genres); // ['historical prose', 'adventure']
console.log(book['genres']); // ['historical prose', 'adventure']
const propKey = 'author';
console.log(propKey);
console.log(book.propKey); // undefined
console.log(book[propKey]); // 'Bernard Cornwell' */

/* const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};
const aptRating = apartment['rating'];
console.log(aptRating);
const aptDescr = apartment['descr'];
console.log(aptDescr);
const aptPrice = apartment['price'];
console.log(aptPrice);
const aptTags = apartment['tags'];
console.log(aptTags); */

/* const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};
book.rating = 9;
book.isPublic = false;
book.genres.push('drama');
console.log(book.rating); // 9
console.log(book.isPublic); // false
console.log(book.genres); // ['historical prose', 'adventure']
 */

/* const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};
apartment.rating = 4.7;
console.log(apartment.rating);
apartment.owner.name = 'Henry Sibola';
console.log(apartment.owner.name);
apartment.tags.push('trusted');
console.log(apartment.tags);
apartment.price = 5000; */

/* const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};
book.pageCount = 836;
book.originalLanguage = 'en';
book.translations = ['ua', 'pl'];
book.price = {
  hardcover: 39,
  softcover: 29,
};
console.log(book.pageCount); // 836
console.log(book.originalLanguage); // 'en'
console.log(book.translations); // ['ua', 'pl'] */

/* const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};
apartment.area = 60;
console.log(apartment.area);
apartment.rooms = 3;
console.log(apartment.rooms);
apartment.location = {
  country: 'Jamaica',
  city: 'Kingston',
};
console.log(apartment.location); */

/* const name = 'Henry Sibola';
const age = 25;
const user = {
  name: name,
  age: age,
};
console.log(user.name); // 'Henry Sibola'
console.log(user.age); // 25
 */

/* const name = 'Henry Sibola';
const age = 25;
const user = {
  name,
  age,
};
console.log(user.name); // 'Henry Sibola'
console.log(user.age); // 25 */

/* const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];
const product = {
  name,
  price,
  image,
  tags,
}; */

/* const propName = 'name';
const user = {
  age: 25,
};
user[propName] = 'Henry Sibola';
console.log(user.name); // 'Henry Sibola' */

/* const emailInputName = 'email';
const passwordInputName = 'password';
const credentials = {
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',
};
console.log(credentials); */

/* for (key in object) {
  // інструкції
} */

/* const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  gebres: ['historical prose', 'adventure'],
  rating: 8.38,
};
for (const key in book) {
  console.log(key); // ключ
  console.log(book[key]); // Значення властивості з таким ключем
} */

/* const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
for (let key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}
console.log(keys);
console.log(values); */

/* const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']
for (const key of keys) {
  console.log(key); // Ключ
  console.log(book[key]); // Значення властивості
} */

/* const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);
console.log(keys);
for (const key of keys) {
  values.push(apartment[key]);
}
console.log(values); */

/* function countProps(object) {
  const keys = Object.keys(object);
  return keys.length;
}
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); */

/* const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ["title", "author", "rating"]
const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38] */

/* const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys = Object.keys(apartment);
console.log(keys);
const values = Object.values(apartment);
console.log(apartment);
 */

/* function countTotalSalary(salaries) {
  let totalSalary = 0;
  const salaryValues = Object.values(salaries);
  for (const salary of salaryValues) {
    totalSalary += salary;
  }
  return totalSalary;
}
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330 */

/* const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Shekley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
];
for (const book of books) {
  console.log(book); // об'єкт книги
  console.log(book.title); // Назва
  console.log(book.author); // Автор
  console.log(book.rating); // Рейтинг
} */

/* const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];
const hexColors = [];
const rgbColors = [];
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
console.log(hexColors); // ['#f44336', '#2196f3', '#4caf50', '#ffeb3b']
console.log(rgbColors); // ['244,67,54', '33,150,243', '76,175,80', '255,235,59'] */

/* const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
for (let key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}
console.log(keys);
console.log(values); */

/* const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
  },
  {
    title: 'The Dream of a Ridiculuos Man',
    author: 'Fyodor Dostoevsky',
  },
];
const authorToSearchFor = 'Robert Shevcley';
for (const book of books) {
  if (book.author === authorToSearchFor) {
    console.log(book);
    console.log(book.title);
    console.log(book.rating);
  }
} */

/* function getProductPrice(productName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  for (const product of products) {
    if (productName === product.name) {
      return product.price;
    }
  }
  return null;
}
console.log(getProductPrice('Radar')); // 1300
console.log(getProductPrice('Engine')); */

/* const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.2,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 9,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 6.8,
  },
];
const titles = [];
for (const book of books) {
  titles.push(book.title);
}
console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"] */

/* const books = [
  { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.2 },
  { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 9 },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 6.8,
  },
];
let totalRating = 0;
for (const book of books) {
  totalRating += book.rating;
}
console.log(totalRating);
const avarageRaring = totalRating / books.length;
console.log(avarageRaring); // 8 */

/* function getAllPropValues(propName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  const values = [];
  for (const product of products) {
    if (product[propName] !== undefined) {
      values.push(product[propName]);
    }
  }
  return values;
}
console.log(getAllPropValues('price')); // [1300, 2700, 400, 1200]
console.log(getAllPropValues('name')); // ["Radar", "Scanner", "Droid", "Grip"] */

/* function calculateTotalPrice(productName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  for (let product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
    return `Product ${productName} not found!`;
  }
}
console.log(calculateTotalPrice('Radar')); // 5200 */

/* const books = ['The Lat Kingdom', 'Dream Guardian'];
function getBooks() { }
function addBook() { } */

/* const obj = {
  method(value) {
    console.log(`I'm a method with ${value}!`);
  },
};
obj.method(5); // "I'm a method with 5!"
obj.method(10); // "I'm a method with 10!" */

/* const bookShelf = {
  books: ['The last Kingdom', 'Dream Guardian'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book - ${bookName}`;
  },
};
console.log(bookShelf.getBooks()); // поверне "Returning all books"
console.log(bookShelf.addBook('New book 1')); // поверне "Adding book New book 1"
console.log(bookShelf.addBook('New book 2')); // поверне "Adding book New book 2" */

/* const atTheOldToad = {
  potions: [],
  getPotions() {
    return 'List of all available potions';
  },
  addPotion(potionName) {
    return `Adding ${potionName}`;
  },
};
console.log(atTheOldToad.addPotion('Invisibility')); */

/* const bookShelf = {
  books: ['The Last Kingdom', 'The Mist'],
  getBook() {
    console.log(this);
  },
};
console.log(bookShelf.getBook()); // {books: ["The Last Kingdom", "The Mist"], getBooks: f} */

/* const bookShelf = {
  books: ['The Last Kingdom', 'The Mist'],
  getBook() {
    return this.books;
  },
};
console.log(bookShelf.getBook()); // ["The Last Kingdom", "The Mist"] */

/* const atTheOldToad = {
  potions: ['Speed potion', 'Stone skin'],
  getPotions() {
    return this.potions;
  },
};
console.log(atTheOldToad.getPotions()); */

/* const bookShelf = {
  books: ['The Last Kingdom'],
};
bookShelf.books.push('The Mist');
console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"] */

/* const bookShelf = {
  books: ['The Last Kingdom'],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
};
console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook('The Mist');
bookShelf.addBook('Dream Guardian');
console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"] */

/* const atTheOldToad = {
  potions: ['Speed potion', 'Stone skin'],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    this.potions.push(potionName);
  },
};
console.log(atTheOldToad.addPotion('Invisibility')); // ["Speed potion", "Stone skin", "Invisibility"] */

/* const bookShelf = {
  books: [
    {
      title: 'The Last kingdom',
      rating: 8,
    },
    {
      title: 'The mist',
      rating: 6,
    },
  ],
  getBook() {
    return this.books;
  },
  addBook(newBook) {
    this.books.push(newBook);
  },
};
bookShelf.addBook({ title: 'Dream Guardian', rating: 9 }); */

/* const bookShelf = {
  books: [
    {
      title: 'The Last kingdom',
      rating: 8,
    },
    {
      title: 'The mist',
      rating: 6,
    },
  ],
  getAvarageRating() {
    let totalRating = 0;
    for (const book of this.books) {
      totalRating += book.rating;
    }
    return totalRating / this.books.length;
  },
};
console.log(bookShelf.getAvarageRating()); // 7 */

/* const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;
    for (const potion of this.potions) {
      totalPrice += potion.price;
    }
    return totalPrice;
  },
};
console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 })); */

/* const bookShelf = {
  books: [
    { title: 'The Last Kingdom', rating: 8 },
    { title: 'The Mist', rating: 6 },
  ],
  changeRating(bookName, newRating) {
    for (const book of this.books) {
      if (book.title === bookName) {
        book.rating = newRating;
      }
    }
  },
};
bookShelf.changeRating('The Mist', 9);
bookShelf.changeRating('The Last Kingdom', 4); */

/* function multiply(a, b) {
  console.log(a, b);
}
multiply(1, 2); // 1 2
multiply(1, 2, 3); // 1 2
multiply(1, 2, 3, 4); // 1 2 */

/* function multiply(a, b) {
  console.log(arguments);
}
multiply(1, 2); // псевдомасив [1, 2]
multiply(1, 2, 3); // псевдомасив [1, 2, 3]
multiply(1, 2, 3, 4); // псевдомасив [1, 2, 3, 4] */

/* function multiply(...args) {
  console.log(args);
}
multiply(1, 2); // [1, 2]
multiply(1, 2, 3); // [1, 2, 3]
multiply(1, 2, 3, 4); // [1, 2, 3, 4] */

/* function add(...args) {
  return args.reduce(function (sum, current) {
    return sum + current;
  }, 0);
}
console.log(add(15, 27)); // 42 */

/* function multiply(first, second, ...args) {
  console.log(first, second, args);
}
multiply(1, 2); // 1 2
multiply(1, 2, 3); // 1 2 [3]
multiply(1, 2, 3, 4); // 1 2 [3, 4] */

/* function addOverNum(value, ...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    if (args[i] > value) {
      sum += args[i];
    }
  }
  return sum;
}
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // 71 */

/* const num = Math.max(14, -34, 3, 75, 11);
console.log(num); // 75 */

/* const temps = [14, -34, 3, 75, 11];
console.log(...temps); // 14 -34 3 75 11
console.log(Math.max(...temps)); // 75 */

/* function getExtremeScores(scores) {
  return {
    best: Math.max(...scores),
    worth: Math.min(...scores),
  };
}
console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); // { best: 93, worst: 17 } */

/* const temps = [14, -4, 25, 8, 11];
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11] */

/* const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18] */

/* const fisrt = { propsA: 5, propB: 10 };
const second = { propsC: 15 };
const third = { ...fisrt, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 } */

/* const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };
const third = { ...first, ...second };
console.log(third); //  { propA: 5, propB: 10, propC: 15, propD: 20 }
const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 } */

/* const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };
const third = { propB: 20, ...first, ...second };
console.log(third); // {propB: 10, propA: 5, propC: 15}
const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // {propA: 5, propB: 20, propC: 15}
const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // {propA: 5, propB: 20, propC: 15} */
