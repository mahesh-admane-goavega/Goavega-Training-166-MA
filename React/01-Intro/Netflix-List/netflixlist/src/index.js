import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Cards from "./Cards";
import Sdata from "./Sdata";

// console.log(Sdata[0].title);

function ncard(val) {
  return (
    <Cards
      key={val.id}
      imgsrc={val.imgsrc}
      categ={val.categ}
      title={val.title}
      link={val.link}
    />
  );
}

ReactDOM.render(
  //prettier-ignore
  <>
    {Sdata.map(ncard)}
  </>,
  document.getElementById("root")
);
