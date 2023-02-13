import React from "react";

export default function Post(props) {
  console.log(props);
  return (
    <div className="post--box">
      <h1 className="post--title">
        Id: {props.id} {props.title}
      </h1>
      <p className="post--content">{props.body}</p>
      <div className="comment--box">
        <ion-icon className="c-icon" name="logo-wechat"></ion-icon>
      </div>
    </div>
  );
}
