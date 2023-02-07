import React from "react";

export default function Hero(props) {
  return (
    <div id="container">
      <div class="product-details">
        <div className="location--details">
          <img className="location--img" src="./placeholder.png" />
          <h1 className="country--title">{props.location}</h1>
          <a className="see-location" href={props.url}>
            See Location
          </a>
        </div>

        <h4 className="information">{props.title}</h4>
        <div className="dates">
          <span className="start--date">{props.startDate}</span>
          <span className="end--date">{props.endDate}</span>
        </div>

        <p class="information">{props.desc}</p>
      </div>

      <div class="product-image">
        <img className="main--img" src={props.src} alt="" />
      </div>
    </div>
  );
}
