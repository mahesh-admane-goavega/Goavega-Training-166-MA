import React, { useState } from "react";

function Para() {
  const state = useState();
  const [cnt, setCount] = useState(5);
  console.log(state);

  const IncNum = () => {
    setCount(cnt + 5);
  };

  return (
    <>
      <p>
        It's used for building interactive user interfaces and web applications
        quickly and efficiently with significantly less code than you would with
        vanilla JavaScript. In React, you develop your applications by creating
        reusable components that you can think of as independent Lego blocks.
      </p>
      <h1>{cnt}</h1>
      <button onClick={IncNum}>Click me</button>
    </>
  );
}

export default Para;
