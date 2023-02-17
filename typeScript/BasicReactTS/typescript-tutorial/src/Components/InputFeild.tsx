import React, { useRef } from "react";
import "./Style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        value={todo}
        type={"input"}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a Task"
        className="input--box"
      />
      <button className="input--submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputFeild;
