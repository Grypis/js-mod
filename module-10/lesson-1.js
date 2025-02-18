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

/* const isSuccess = true;

// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

// Registering promise callbacks
promise
  .then(value => {
    console.log(value); // "Success! Value passed to resolve function"
  })
  .catch(error => {
    console.log(error); // "Error! Error passed to reject function"
  }); */

//! ====================================
/* promise
  .then(value => {})
  .catch(error => {})
  .finally(() => {}); */

//! ====================================
/* const isSuccess = true;

//Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Seccess!');
    } else {
      reject('Error!');
    }
  }, 2000);
});

//Registering promise callbacks
promise
  .then(value => console.log(value))
  .catch(error => console.log(error))
  .finally(() => console.log('Promise setteled')); */

//! ====================================
/* const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  }); */

//! ====================================
/* const fetchUserFromServer = (username, onSeccess, onError) => {
  console.log(`Fetching data for ${username}`);

  setTimeout(() => {
    const isSuccess = true;

    if (isSuccess) {
      onSeccess('success value');
    } else {
      onError('error');
    }
  }, 2000);
};

fetchUserFromServer(
  'Mango',
  user => console.log(user),
  error => console.error(error),
); */

/* const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        resolve('success value'); // значенням параметра resolve буде колбек-функція методу then()
      } else {
        reject('error'); // значенням параметра reject буде колбек-функція методу catch()
      }
    }, 2000);
  });
};

fetchUserFromServer('Mango')
  .then(user => console.log(user))
  .catch(error => console.error(error)); */

//! ====================================
/* new Promise(resolve => resolve('success')).then(value =>
  console.log(value).catch(error => console.log(error)),
); */

/* Promise.resolve('success').then(value =>
  console.log(value).catch(error => console.log(error)),
); */

/* new Promise((resolve, reject) => reject('error'))
  .then(value => console.log(value))
  .catch(error => console.log(error)); */

/* Promise.reject('error')
  .then(value => console.log(value))
  .catch(error => console.log(error)); */

//! ====================================
/* const makeGreeting = (guestName, onSuccess, onError) => {
  if (!guestName) {
    onError('Guest name must not be empty');
  } else {
    onSuccess(`Welcome ${guestName}`);
  }
};

makeGreeting(
  'Mango',
  greeting => console.log(greeting),
  error => console.error(error),
); */

/* const makeGreeting = guestName => {
  return new Promise((resolve, reject) => {
    if (!guestName) {
      reject('Guest name must not be empty');
    } else {
      resolve(`Welcome ${guestName}`);
    }
  });
};

makeGreeting('Mango')
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error)); */

/* const makeGreeting = guestName => {
  if (!guestName) {
    return Promise.reject('Guest name must not be empty');
  } else {
    return Promise.resolve(`Welcome ${guestName}`);
  }
};

makeGreeting('Mango')
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error)); */

//! ====================================
/* const makePromise = ({ value, delay, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
};

// makePromise({
//   value: 'Some value',
//   delay: 2000,
//   shouldResolve: true,
// });

makePromise({ value: 'A', delay: 1000 }).then(value =>
  console.log(value).catch(error => console.log(error)),
);
 */

/* new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Fulfilled A');
  }, 1000);
})
  .then(value => console.log(value))
  .catch(error => console.log(error)); */

//! ====================================
//* Promise.all([promise1, promise2, promise3, ...])

/* const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(values => console.log(values))
  .catch(error => console.log(error)); */

/* const p1 = Promise.resolve(1);
const p2 = Promise.reject('Rejected promise 2');
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(values => console.log(values))
  .catch(error => console.log(error)); */

//! ====================================
//* Promise.allSetteled([promise1, promise2, promise3, ...])

/* const p1 = Promise.resolve(1);
const p2 = Promise.reject('Rejected promise 2');
const p3 = Promise.resolve(3);

Promise.allSettled([p1, p2, p3]).then(values => console.log(values)); */

//! ====================================
//* Promise.race([promise1, promise2, promise3, ...])

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 2000);
});

Promise.race([p1, p2])
  .then(value => console.log(value))
  .catch(error => console.log(error));
