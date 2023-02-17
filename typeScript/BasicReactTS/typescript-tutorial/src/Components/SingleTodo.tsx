import React, { useState, useRef, useEffect } from "react";
import { Todo } from "../Model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import TodoList from "./TodoList";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  //States for the Edit
  const [edit, setEdit] = useState(false);
  const [edittodo, setEdittodo] = useState(todo.todo);

  //Done
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  //Delete
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };
  //Edit
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: edittodo } : todo))
    );
    setEdit(false);
  };

  const inptRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inptRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos--single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inptRef}
          value={edittodo}
          onChange={(e) => setEdittodo(e.target.value)}
          className="todos--single--text"
        />
      ) : todo.isDone ? (
        <s className="todos--single--text">{todo.todo}</s>
      ) : (
        <span className="todos--single--text">{todo.todo}</span>
      )}

      <div className="icon--box">
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
