import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { type } from "os";

/***  Basic Type ***/
let m: number;
m = 99;
let o: string;
o = "ram";
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

/***  Object Type ***/
type Person = {
  name: string;
  age: number;
};

let mahesh: Person = {
  name: "MAhesh",
  age: 78,
};
// let mahesha: Person = {
//   name: "MAhesh",
//   // if age is not define it show error
// };

/*** Optional Field ***/

type Student = {
  name: string;
  rollNo?: number; // we added ? here for optional
};

//need to add only name here
let Suhas: Student = {
  name: "Suhas",
};

/*** Array of object ***/
let lotsOfPeople = [];

/*** Union Type ***/
let n: string | number;

/*** Function Type ***/
let printLAstName: (name: string) => number; // return number
let printName: (name: string) => never; // "never" does't return anything "void" return undefined

/*** Unknown Type ***/
let personName: unknown;
personName = true; // we can pass anything here

/*** Interface Type ***/
interface Employee {
  emp_name: string;
  emp_id: number;
  emp_sal: number;
}

interface Person1 extends Employee {
  emp_address: string;
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
