import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

// const name = "Mahesh";
// const time = new Date();
// const currentDate = new Date().toLocaleDateString();

render(
  <>
    <App />
  </>,

  document.getElementById("root")
);

/***Photo***/

// render(
//   <React.Fragment>
//     <h1 contentEditable="false">Hello my name is {name}</h1>
//     <p>
//       This is todays time
//       {` ${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}
//     </p>
//     <p>{` Todays date is ${currentDate}`}</p>

//     <img src="https://picsum.photos/200/300" alt="img" />
//   </React.Fragment>,
//   document.getElementById("root")
// );

/***WE ADD IMG*****/

// render(
//   <React.Fragment>
//     <h1 contentEditable="true">Hello my name is {name}</h1>
//     <p>
//       This is todays time
//       {` ${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}
//     </p>
//     <p>{` Todays date is ${currentDate}`}</p>

//     <img src="https://picsum.photos/200/300" alt="img" />
//   </React.Fragment>,
//   document.getElementById("root")
// );
