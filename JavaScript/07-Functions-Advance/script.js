'use strict';

/* LEC 1 */

// const bookings = [];
// const createBooking = function (
//   flightNumber,
//   numPassanger = 1,
//   price = 1299 * numPassanger
// ) {
//   const booking = {
//     flightNumber,
//     numPassanger,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('Ik98', 2, 2598);
// createBooking('YT65', 9);

/******************lEC-2*******************/

// const flight = 'LH123';
// const mahesh = {
//   firstName: 'Mahesh',
//   passport: 182772839,
// };

// const checkIn = function (flightNumber, passanger) {
//   (flightNumber = 'LH343'),
//     (passanger.firstName = 'Mr. ' + passanger.firstName);

//   if (passanger.passport === 182772839) {
//     alert('Check in');
//   } else {
//     alert('Passport is Wrong');
//   }
// };

// checkIn(flight, mahesh);
// console.log(flight);
// console.log(mahesh);

/******************lEC-3*******************/

// const onWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// console.log(onWord('MAHESH'));

// const upperFisrWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

/*** Higher Order function ***/
// const transform = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transferd String: ${fn(str)}`);
//   console.log(`Transfered Methods: ${fn.name}`);
// };

// transform('JavaScript is a very fun language', upperFisrWord);
// transform('JavaScript is a very fun language', onWord);

/*********lEC-4 Function Returning Function*******/

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('heyy');

// greeterHey('Mahesh');
// greeterHey('Johnas');

// greet('hello')('rohit');
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('hi')('jai');

/*********lEC-5 The Call and Apply Methods *******/

// const AirIndia = {
//   airLine: 'AirIndia',
//   code: 'AI',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airLine} flight ${this.code}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.code}${flightNum} `, name });
//   },
// };

// AirIndia.book(234, 'Mahesh Admane');
// AirIndia.book(635, 'Ravi Jadhav');
// console.log(AirIndia);

/*********lEC-6 Clouser in Java script *******/

// const outerFun = (a, b) => {
//   const innerFun = (a, b) => {
//     console.log(`Sum is ${a + b}`);
//   };
//   innerFun(a, b);
// };
// outerFun(2, 2);

// setTimeout(function () {
//   console.log('Timer');
// }, 5000);

const currunciesUnique = new Set(['USD, Rupees, EUR']);
currunciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${key}`);
});
