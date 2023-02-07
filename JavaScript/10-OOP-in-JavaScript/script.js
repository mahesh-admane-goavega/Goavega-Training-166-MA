// 'use strict';

// const Persons = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

/**It can not accept new properties in it  */
// persons.nationality = 'england';

/**For that we use prototype  */
// Persons.prototype.nationality = 'Indian';

// johnas = new Persons('John', 1998);
// mahesh = new Persons('Mahesh', 2000);
// jack = new Persons('Jack', 2013);

// console.log(johnas);

// Prototype
// console.log(Persons.prototype);
// Persons.prototype.calcAge = function () {
//   console.log(
//     `age of ${this.firstName} is ${2021 - this.birthYear} and nationality is ${
//       this.nationality
//     }`
//   );
// };

// johnas.calcAge();
// jack.calcAge();
// mahesh.calcAge();

// console.log(johnas.__proto__ === Persons.prototype);

// console.log(Persons.prototype.isPrototypeOf(mahesh)); //true
// console.log(Persons.prototype.isPrototypeOf(Persons)); //false
// console.log(johnas.species);

// const arr = [1, 1, 1, 4, 5];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.uniqueValue = function () {
//   return [...new Set(this)];
// };
// console.log(arr.uniqueValue());

// const marks = [73, 73, 62, 91, 63];
// console.log(marks.__proto__ === Array.__proto__);

// Array.prototype.unique = function () {
//   return new Set(this);
// };

// console.log(marks.unique());

// class personCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2023 - this.birthYear);
//     // console.log(`${this.firstName} is ${this.age} year old.`);
//   }
// }

// const Mahesh = new personCl('Mahesh', 2000);
// const Rahul = new personCl('Rahul', 2012);
// console.log(Mahesh);

// personCl.prototype.greet = function () {
//   console.log(`heyy ${this.firstName}`);
// };

// Mahesh.greet();

/***********OPPS***************/

// class Employee {
//   constructor(Experience, Role, eName, Id) {
//     this.Experience = Experience;
//     this.Role = Role;
//     this.eName = eName;
//     this.Id = Id;
//   }

//   findMyLanguage() {
//     if (this.Experience > 6) {
//       return 'Java';
//     } else {
//       return 'PHP';
//     }
//   }

//   static multNumbers(a, b) {
//     console.log(a * b);
//   }
// }

// const mahesh = new Employee(8, 'SE', 'Mahesh', 66);
// console.log(mahesh);
// console.log(mahesh.findMyLanguage());
// Employee.multNumbers(7, 7);

// class Technical extends Employee {
//   constructor(Experience, Role, eName, Id, gitId, ratingTech) {
//     super(Experience, Role, eName, Id);
//     this.gitId = gitId;
//     this.ratingTech = ratingTech;
//   }
// }

// const amit = new Technical(4, 'AE', 'Amit Mishra', 24, 'amit45', 7);
// console.log(amit);
// Technical.multNumbers(98, 1);
// console.log(amit.findMyLanguage());

/*************GETTER AND SETTERS***************/

// const account = {
//   owner: 'John',
//   movement: [43, 84, 22, 40],

//   get latest() {
//     return this.movement;
//   },

//   set latest(mov) {
//     return this.movement.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 39;
// console.log(account.latest);

/*************OBJRCT.CREATE()***************/

// const personIn = {
//   firstName: 'Mahesh',
//   intro: function () {
//     console.log(`${this.firstName} is my name.`);
//   },
// };

// const me = Object.create();
// me.firstName = 'Rajesh';
// console.log(personIn.intro());

/************* INHERITANCE BETWEEN "CLASSES" Throgh ES6***************/

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, division) {
    super(firstName, lastName);
    this.age = age;
    this.division = division;
  }

  intro() {
    console.log(
      `my name is ${this.firstName} ${this.lastName} my age is ${this.age} and my division is ${this.division}`
    );
  }
}

const mahesh = new Student('Mahesh', 'a', 24, 'B');
const rajesh = new Student('Rajesh', 'r', 32, 'A');
console.log(mahesh.firstName);

mahesh.intro();
rajesh.intro();
