//! if (condition) {
//!   //код, який виконується, якщо умова(condition) істинна
//! }

/* let price1 = 0;
const subscription1 = "pro";
if (subscription1 === "pro") {
  price1 = 100;
}
console.log(price1); //100

let price2 = 0;
const subscription2 = "free";
if (subscription2 === "pro") {
  price2 = 100;
}
console.log(price2); //0 */

/* function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  }
}
console.log(checkAge(20));
console.log(checkAge(17));
console.log(checkAge(10));
console.log(checkAge(30)); */

//! if (condition) {
//!     //код, який виконується, якщо умова істинна
//! } else {
//!     //код, який виконується, якщо умова хибна
//! }

/* const grade = 85;
if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}

const grades = 40;
if (grades >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
} */

/* function checkStorage(available, ordered) {
  if (available >= ordered) {
    return "Order is processed, our manager will contact you";
  } else {
    return "Not enough goods in stock!";
  }
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));
 */

//! if (condition_1) {
//!     //код, який виконується, якщо умова (condition_1) істинна
//! } else if (condition_2) {
//!   //код, який виконується, якщо умова (condition_2) істинна
//! } else if (condition_3) {
//!   //код, який виконується, якщо умова (condition_3) істинна
//! } else {
//!  //код, який виконується, якщо умова всі умови хибні
//! }

/* const grade = 85;
if (grade >= 90) {
  console.log("Perfectly");
} else if (grade >= 80) {
  console.log("Good");
} else if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactory");
} */

/* function checkStorage(available, ordered) {
  if (available >= ordered) {
    return "The order is accepted, our manager will contact you";
  } else if (available <= ordered) {
    return "Your order is too large, there are not enough items in stock!";
  } else {
    return "There are no products in the order!";
  }
} */

/* function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "There are no products in the order!";
  } else if (available <= ordered) {
    return "Your order is too large, there are not enough items in stock!";
  } else {
    return "The order is accepted, our manager will contact you";
  }
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0)); */
