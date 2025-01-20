//! ===================================
//* Sinchrone
/* console.log('First log');
console.log('Second log');
console.log('Third log'); */

//! ===================================
//* A-Sinchrone
/* console.log('First log');
setTimeout(() => {
  console.log('Second log');
}, 2000);
console.log('Third log'); */

//! ===================================
//? const timerId = setTimeout(callback, delay, arg1, arg2, ...);

/* const btn = document.querySelector('.btn');

const onClick = () => {
  const timerId = setTimeout(() => {
    console.log('I love async JS!');
  }, 2000);
  console.log(timerId);
};

btn.addEventListener('click', onClick); */

//! ====================================
/* const greet = () => {
  console.log('Hello!');
};

const timerId = setTimeout(greet, 3000);
// clearTimeout(timerId);
clearInterval(timerId) */

//! ====================================
/* const date = new Date();
console.log(date); */

/* const data = new Date('2030-03-16');
console.log(data); */

// console.log(new Date('2030'));

// console.log(new Date(2030, 2, 16, 14, 25, 0, 0));

// console.log(new Date(0));

/* const date = new Date();
console.log(date.getTime()); */

//! ====================================
// console.log(Date.now());

/*
const startTime = Date.now();

for (let i = 0; i <= 100; i += 1) {
  console.log(i);
}

const endTime = Date.now();
const elapsedTime = endTime - startTime;
console.log(`Elapsed time: ${elapsedTime} ms`); */

//! ====================================
/* const data = new Date('March 26, 2030');
console.log('Date: ', data);

console.log('Day: ', data.getDate());

data.setMinutes(50);
console.log(data); */

//! ====================================
//* const promise = new Promise((resolve, reject) => {});
