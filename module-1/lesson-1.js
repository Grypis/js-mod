"use strict";
// console.log("Hello world!");
// console.log("Value");
// console.log("JS is Awesome");
// console.log(10);

// const age = 20;
// console.log(age);

// const username = "Mango";
// console.log(username);

// let username = "Mango";
// console.log(username);

// username = "Oliver";
// console.log(username);

// const age = 20;
// console.log(age);
// const salary = 241.1;
// console.log(salary);

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// const quantity = 17;
// console.log(typeof quantity);
// const message = "JavaScript is awesome!";
// console.log(typeof message);
// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen);
// let username;
// console.log(typeof username);
// let status = null;
// console.log(typeof status);

// const x = 5;
// const y = 10;
// console.log(x + y);

// const a = 7;
// const b = 5;
// console.log(a - b);

// const c = 4;
// const d = 5;
// console.log(c + d);
// console.log(c - d);
// console.log(c * d);
// console.log(c / d);
// console.log(c % d);
// console.log(c ** d);

// let age = 25;
// age = age + 1;
// console.log(age);

// let age = 25;
// age += 1;
// console.log(age);

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;
// Change code below this line
// a += 2;
// console.log(a);
// b -= 4;
// console.log(b);
// c *= 3;
// console.log(c);
// d /= 10;
// console.log(d);

// Tasks from js redactor
// const productName = "Droid";
// const pricePerItem = 2000;

// let productName = "Droid";
// let pricePerItem = 2000;
// productName = "Repair droid";
// console.log(productName);
// pricePerItem = 3500;
// console.log(pricePerItem);

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// ===========================================
// Рядки

// const message = "Mango " + "is" + " happy";
// console.log(message);

// const age = 25;
// const message = "Mango is " + age + " years old";
// console.log(message);

// console.log("Mango" + 55);
// console.log("Mango" + true);

// console.log(1 + "2");
// console.log(1 + "2" + 4);
// console.log(1 + 2 + "4");

// const username = "Poly";
// // const message = "Welcome " + username + "!";
// const message = `Welcome ${username}!`;
// console.log(message);

// console.log(String(5));
// console.log(String(true));
// console.log(String(false));
// console.log(String(null));
// console.log(String(undefined));

// console.log("5" + 3);
// console.log("5" + true);
// console.log("5" + false);
// console.log("5" + null);
// console.log("5" + undefined);

// const guestName = "Mango";
// const roomNumber = 207;
// // const greeting =
// //   "Welcome " + guestName + ", your room number is " + roomNumber + "!";
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}! `;
// console.log(greeting);

// const productName = "Droid";
// const pricePerItem = 3500;
// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = `${pricePerDroid * orderedQuantity + deliveryFee}`;
// console.log(totalPrice);
// const message = `You ordered droids worth ${totalPrice} credits`;
// console.log(message);

// const productName = "Repair droid";
// console.log(productName.length);
// console.log("Repair droid".length);

// const username = "Poly";
// const message = `Username ${username} is ${username.length} characters long`;
// console.log(message);

// const product = "Repair droid";
// console.log(product[0]);
// console.log(product[5]);
// console.log(product[11]);

// const product = "Repair droid";
// const lastElementIndex = product.length - 1;
// console.log(product[lastElementIndex]);

// const product = "Repair droid";
// console.log(product[product.length - 1]);

// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// console.log(courseTopicLength);
// const firstElement = courseTopic[0];
// console.log(firstElement);
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(lastElement);

// let product = "Droid";
// console.log(product);
// product = "DrOid";
// console.log(product);

// ===================================
// Оператори порівняння

// const a = 2;
// const b = 5;
// console.log(a > b);
// console.log(b > a);
// console.log(a >= b);
// console.log(b >= a);
// console.log(a < b);
// console.log(b < a);
// console.log(a <= b);
// console.log(b <= a);

// const age = 16;
// const isAdult = 18 <= age;
// console.log(isAdult);

// console.log(5 == 5);
// console.log(5 == 3);
// console.log(5 != 5);
// console.log(5 != 3);

// console.log(5 === 5);
// console.log(5 === "5");
// console.log(5 !== "5");
// console.log(5 !== 5);
// console.log(1 === true);
// console.log(1 !== true);

const correctPassword = "jqueryismyjam";
const userPassword = "mangodab3st";
const isValid = correctPassword === userPassword;
console.log(isValid);
