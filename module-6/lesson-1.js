/* const user = {
  username: 'Viktor',
  showName() {
    //sdsdasdd
    console.log(user.username);
  },
};
user.showName(); */

/* const user = {
  username: 'Viktor',
  showName() {
    console.log(this.username);
  },
};
user.showName(); */

/* const pizzaPalace = {
  pizzas: ['Smoked', 'Four meats'],

  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },

  order(pizzaName) {
    if (this.checkPizza(pizzaName)) {
      return `Order accepted, preparing «${pizzaName}» pizza`;
    } else {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }
  },
};
console.log(pizzaPalace.order('Smoked')); //"Order accepted, preparing «Smoked» pizza" */

/* function foo() {
  console.log(this);
}
foo(); // window
 */

/* const user = {
  username: 'Poly',
  showThis() {
    console.log(this);
  },
};
user.showThis(); // {username: 'Poly', showThis: f} */

'use strict';

function showThis() {
  console.log('this in showThis: ', this);
}
const user = {
  username: 'Poly',
};
user.showContext = showThis;
user.showContext();
showThis();
