import React, { useState } from "react";
import "./App.css";
import InputFeild from "./Components/InputFeild";
import { Todo } from "./Model";
import TodoList from "./Components/TodoList";

// /***  Basic Type ***/
// let m: number;
// m = 99;
// let o: string;
// o = "ram";
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];

// /***  Object Type ***/
// type Person = {
//   name: string;
//   age: number;
// };

// let mahesh: Person = {
//   name: "MAhesh",
//   age: 78,
// };
// // let mahesha: Person = {
// //   name: "MAhesh",
// //   // if age is not define it show error
// // };

// /*** Optional Field ***/

// type Student = {
//   name: string;
//   rollNo?: number; // we added ? here for optional
// };

// //need to add only name here
// let Suhas: Student = {
//   name: "Suhas",
// };

// /*** Array of object ***/
// let lotsOfPeople = [];

// /*** Union Type ***/
// let n: string | number;

// /*** Function Type ***/
// let printLAstName: (name: string) => number; // return number
// let printName: (name: string) => never; // "never" does't return anything "void" return undefined

// /*** Unknown Type ***/
// let personName: unknown;
// personName = true; // we can pass anything here

// /*** Interface Type ***/
// interface Employee {
//   emp_name: string;
//   emp_id: number;
//   emp_sal: number;
// }

// interface Person1 extends Employee {
//   emp_address: string;
// }

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todo);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
