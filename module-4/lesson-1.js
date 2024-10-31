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

const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};

console.log(keys);
console.log(values);
