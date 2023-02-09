import React from "react";

export default function Questions(props) {
  // console.log(allQue);

  props.incorect.push(props.correct);
  let x = Math.floor(Math.random() * 4 + 1);
  console.log(props.incorect[x]);

  return (
    <div className="que--box">
      <h2 className="que--title">{props.que}</h2>
      <div className="que--ansbox">
        <button className="que--btn">{props.incorect[3]}</button>
        <button className="que--btn">{props.incorect[0]}</button>
        <button className="que--btn">{props.incorect[1]}</button>
        <button className="que--btn">{props.incorect[2]}</button>
      </div>
      <hr />
    </div>
  );
}
