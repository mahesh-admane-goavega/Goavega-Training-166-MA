console.log("Welcome");

/************CALL-BACK FUNCTIONS************* */

// const sum = function (_calling) {
//   const myN = prompt("Enter your name");
//   callMe(myN);
// };

// function callMe(myName) {
//   console.log(`I am calling you ${myName}`);
// }
// sum(callMe);

/**#2*/
// function sum(a, b) {
//   alert(`sum of ${a} and ${b} is ${a + b}`);
// }

// function numbers(_sum) {
//   const a = Number(prompt("enter number 1: "));
//   const b = Number(prompt("enter number 2: "));
//   sum(a, b);
// }

// numbers(sum);

/************BIND FUNCTIONS************* */

// const students = {
//   firstName: "Mahesh",
//   lastName: "Admane",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const employee = {
//   firstName: "Tejas",
//   lastName: "Raut",
// };

// let fullName = students.fullName.bind(employee);
// console.log(fullName());

// document.querySelector("title").innerText = fullName();

// class students {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// class employee extends employee {
//   constructor(firstName, lastName, id) {
//     super(firstName, lastName);
//     this.id = id;
//   }
// }
// console.log(employee("mahesh", "admane", 98));
