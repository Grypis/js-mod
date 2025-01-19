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

const btn = document.querySelector('.btn');

const onClick = () => {
  const timerId = setTimeout(() => {
    console.log('I love async JS!');
  }, 2000);
  console.log(timerId);
};

btn.addEventListener('click', onClick);
