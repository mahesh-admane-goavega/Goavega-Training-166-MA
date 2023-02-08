import React from "react";

export default function Dies(props) {
  const style = {
    backgroundColor: props.isHeld ? "#59E391" : "#ffe4c4",
  };

  return (
    <div style={style} onClick={props.holdDice} className="dies">
      <h2 className="die--num">{props.value}</h2>
    </div>
  );
}
