import React from "react";

const Cards = (props) => {
  return (
    <React.Fragment>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="myImage" className="card_img" />
          <div className="cardInfo">
            <span className="card_category">{props.categ}</span>
            <h3 className="card_title">{props.title}</h3>

            <a href={props.link} target="_blank">
              <button className="btn">Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
