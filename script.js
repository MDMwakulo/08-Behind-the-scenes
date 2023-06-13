'use strict';

/*
// Scoping in Practice
function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creting NEW variable with same name as outer scope's variable
      const firstName = 'Jonas';

      // Reassigning outer scope's variable
      const output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Durell';
calcAge(1995);
// console.log(age);
// printAge();
*/

// Hoisting and Temporal Dead Zone (TDZ) in Practice
/*
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Durell';
let job = 'student';
const year = 1995;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3)); // undefined(2,3) --> Uncaught TypeError: addArrow is not a function

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

// The this Keyword in Practice
/*
// console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  // console.log(this);
};
calcAge(1996);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  // console.log(this);
};
calcAgeArrow(1980);

const durell = {
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};
durell.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = durell.calcAge;
matilda.calcAge();

const f = durell.calcAge;
f();
*/

// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const durell = {
  firstName: 'Durell',
  year: 1996,
  calcAge: function () {
    // console.log(this);
    console.log(2023 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}.`);
  },
};
durell.greet();
durell.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
