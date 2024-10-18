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

/* const grade = 85;
const message = grade >= 70 ? "Satisfactorily" : "Unsatisfactorily";
console.log(message); */

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

//! <condition> ? <expression if condition is true> : <expression if condition is false>

/* let type;
const age = 20;
if (age >= 20) {
  type = "adult";
} else {
  type = "child";
}
console.log(type); */

/* const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); */

/* const a = 5;
const b = 10;
let biggerNumber;
if (a > b) {
  biggerNumber = a;
} else {
  biggerNumber = b;
}
console.log(biggerNumber); */

/* const a = 5;
const b = 10;
const biggerNumber = a > b ? a : b;
 */

/* function checkPassword(password) {
  const correctPassword =
    "jqueryismyjam" === password
      ? "Access granted"
      : "Access denied, wrong password!";
  return correctPassword;
}
console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("angul4r1sl1f3")); */

//! switch (expression) {
//!   case value1:
//!     // код, що виконується, якщо вираз (expression) дорівнює value1
//!     break;
//!   case value2:
//!   // код, що виконується, якщо вираз (expression) дорівнює value2
//!     break
//!  //...
//!   default:
//!   // код, що виконується, якщо вираз (expression) не відповідає жодному значенню
//! }

/* const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apple selected");
    break;
  case "banana":
    console.log("Banana selected");
    break;
  case "orange":
    console.log("Orange selected");
  default:
    console.log("The fruit is unknown");
} */

/* const day = 3;
switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("This is a working day");
    break;
  case 6:
  case 7:
    console.log("It is a day off");
    break;
  default:
    console.log("Invalid");
} */

/* function getSubscriptionPrice(type) {
  switch (type) {
    case "starter":
      return 0;
      break;
    case "professional":
      return 20;
      break;
    case "organization":
      return 50;
      break;
    default:
      return `Invalid subscription type!`;
  }
}
console.log(getSubscriptionPrice("starter"));
console.log(getSubscriptionPrice("random"));
 */

/* //! Глобальна змінна
const value = "I`m a global variable";
if (true) {
  // Можна звернутися до глобальної змінної
  console.log(value); // "I`m a global variable"
}
// Можна звернутися до глобальної змінної
console.log(value); // "I`m a global variable"
 */

/* if (true) {
  // Локальна змінна
  const value = "I`m a local variable";
  console.log(value); // "I`m a local variable"
}
// Помилка: локальну змінну нре видно за межами блоку
console.log(value); // ReferenceError: value is not defined
 */

/* const globalVar = "Global";
console.log(globalVar); // Доступ до globalVar з глобальної області видимості
// Немає доступу до aVar, bVar і cVar
if (true) {
  const aVar = "A";
  console.log(globalVar); // Доступ до GlobalVariable з блоку A
  console.log(aVar); // Доступ до aVar з блоку A
  // Немає доступу до bVar і cVar
  if (true) {
    const bVar = "B";
    console.log(globalVar); // Доступ до globalVariable з блоку B
    console.log(aVar); // Доступ до aVar з блоку B
    console.log(bVar);
    console.log(bVar); // Доступ до bVar з блоку B
    // Немає доступу до cVar
  }
}
console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// Немає доступу до aVar, bVar і cVar
if (true) {
  const cVar = "C";
  console.log(globalVar); // Доступ до globalVar з блоку C
  console.log(cVar); // Доступ до cVar з блоку C
  // Немає доступу до aVar і bVar
}
console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// Немає доступу до aVar, bVar і cVar */

//! Логічні значення
/* console.log(Boolean(true));
console.log(Boolean(false)); */

//! Числа
/* console.log(Boolean(NaN)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(0)); //false
console.log(Boolean(3.14)); //true
console.log(Boolean(-10)); //true
 */

/* if (null) {
  console.log("Block if");
} else {
  console.log("Block else");
} */

/* const ternar = null ? console.log("Block if") : console.log("Block else"); */

/* if (0) {
  console.log("Block if");
} else {
  console.log("Block else");
} */

/* const ternar = 0 ? console.log("Block if") : console.log("Block else"); */

//! Рядки
/* console.log(Boolean("")); //false
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true */

/* if ("") {
  console.log("Block if");
} else {
  console.log("Block else");
} */

/* const ternar = "" ? console.log("Block if") : console.log("Block else"); */

/* if ("batman") {
  console.log("Block if");
} else {
  console.log("Block else");
}

const ternar = "batman" ? console.log("Block if") : console.log("Block else"); */
//!========================================
//! expression1 && expression2

/* console.log("hello" && 5); // 5
console.log(5 && "hello"); // "hello"
console.log("mango" && "poly"); // "poly"
console.log("poly" && "mango"); // "mango"
console.log(3 && true); // true
console.log(true && 3); // 3
 */

/* console.log("hello" && 0); // 0
console.log(0 && "hello"); // 0
console.log(3 && false); // false
console.log(false && 3); // false
console.log(0 && ""); // 0
console.log("" && 0); // "" */
