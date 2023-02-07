/* 1. STRICT MODE */

// "use strict";

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log("I can Drive :D");

/************************************************************/
/* 2. FUNCTIONS */

// function myFun() {
//   console.log("My name is mahesh");
// }

// myFun();
// myFun();
// myFun();

// function fruitProcessor(apple, oranges) {
//   // console.log(apple, oranges);
//   const juice = `Juice  with ${apple} Apples and ${oranges} Oranges.`;
//   return juice;
// }

// const myJuice = fruitProcessor(8, 1);
// console.log(myJuice);
// console.log(fruitProcessor(2, 3));

// function calAge(birtYear) {
//   return 2022 - birtYear;
// }

// const myAge = calAge(2000);
// console.log(`${myAge} is my age`);

/************************************************************/
// /* ANONYMOUS FUNCTION */

// const age = function (birtYear) {
//   return 2022 - birtYear;
// };

// const age2 = age(2003);
// console.log(`${age2} is my age`);

/************************************************************/
/* ARROW FUNCTION */

// const calAge3 = (birthYear) => 2022 - birthYear;

// const myAge3 = calAge3(2008);
// console.log(`My age is ${myAge3}`);

// const yearOfRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirementAge = 65 - age;
//   // return retirementAge;

//   return `${firstName} retires in ${retirementAge} years.`;
// };

// console.log(yearOfRetirement(2000, "Mahesh"));
// console.log(yearOfRetirement(2003, "Vikram"));

/************************************************************/
/* FUNCTION INSIDE FUNCTION */

// function fruitsCutter(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apple, oranges) {
//   // console.log(apple, oranges);

//   const applePieces = fruitsCutter(apple);
//   const orangePieces = fruitsCutter(oranges);

//   const juice = `Juice  with ${applePieces} Pieces of Apples and ${orangePieces} pieces of Oranges.`;
//   return juice;
// }

// const myJuice = fruitProcessor(2, 1);
// console.log(myJuice);
// console.log(fruitProcessor(2, 3));

// const age2 = function calAge(birthYear) {
//   return 2022 - birthYear;
// };

// const yearOfRetirement = function (birthYear, firstName) {
//   const age = age2(birthYear);
//   const retirementAge = 65 - age;
//   // return retirementAge;

//   return `${firstName} retires in ${retirementAge} years.`;
// };

// console.log(yearOfRetirement(2000, "Mahesh"));

/************************************************************/
/* ARRAYS */

// const frinds = ["mahesh", "kishor", "Tejas"];
// console.log(frinds);

// const years = new Array(1900, 1947, 2000, 2021, 2023);
// console.log(years);

// //add new elements
// years.push(3002);
// console.log(years);

// // add element in first index
// years.unshift(9000);
// console.log(years);

// // remove last index element
// years.pop();
// console.log(years);

// // remove first index element
// years.shift();
// console.log(years);

// // Return Index of that perticular element
// console.log(years.indexOf(2000));

// // It show include or not
// console.log(years.includes(1947)); // True
// console.log(years.includes(123)); // False

/************************************************************/
/* OBJECTS */

// const myData = {
//   firstName: "Mahesh",
//   lastName: "Admane",
//   age: 2022 - 2000,
// };
// console.log(myData);

// console.log(myData.firstName);
// console.log(myData["age"]);

// myData.State = "Maharashtra";
// myData["Twitter"] = "@MaheshA";

// console.log(myData);

// const option = prompt("What you want to know firstName, lastName and age?");

// if (myData[option]) {
//   console.log(myData[option]);
// } else {
//   console.log("This is the wrong Value");
// }

/************************************************************/
/* OBJECT METHODS */

// const myData = {
//   firstName: "Mahesh",
//   lastName: "Admane",
//   birthYear: 2000,
//   state: "Maharashtra",
//   twitter: "@MaheshA",
//   frinds: ["Amol", "Kiran", "Rahul"],
//   hasDrivingLicense: true,

// isLicense: function () {
//   if (this.hasDrivingLicense) {
//     return "a";
//   } else {
//     return "no";
//   }
// },
/************************************************************/
/* CODING CHALLANGE */

//   calcAge: function () {
//     console.log(this);
//     return 2022 - this.birthYear;
//   },

//   getSummary: function () {
//     return `${this.firstName} is ${myData.calcAge()} year old and he has ${
//       this.hasDrivingLicense ? "a" : "no"
//     } driving license. `;
//   },
// };

// console.log(myData.getSummary());
// console.log(myData["calcAge"](2003));

/************************************************************/

/* FOR LOOP */

// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weight repetition ${i}.`);
// }

// let bucket = ["mango", "banana", "Orange"];

// for (let j = 0; j <= bucket.length - 1; j++) {
//   console.log(bucket[j]);
// }

// for (let k = bucket.length - 1; k >= 0; k--) {
//   console.log(bucket[k]);
// }
// let k = 1;
// while (k <= 10) {
//   console.log(`${k}`);
//   k++;
// }

/**************************************************************/
