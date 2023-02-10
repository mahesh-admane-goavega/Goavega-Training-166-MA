import React from "react";

export default function Post(props) {
  console.log(props);
  return (
    <div className="post--box">
      <h1 className="post--title">{props.title}</h1>
      <p className="post--content">{props.body}</p>
    </div>
  );
}
