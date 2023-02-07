import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD-OLD";
  } else if (props.country === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.img} className="card--img" />
      <div className="info">
        <div className="card--stats">
          <img className="card--star" src="./star.png" />
          <span>{props.rating}</span>
          <span className="gray"> ({props.reviewCount})</span>
          <span className="gray">{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p>
          <span className="bold">From ${props.price}</span>/ person
        </p>
      </div>
    </div>
  );
}
