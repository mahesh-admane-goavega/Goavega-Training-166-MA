import React from "react";

/*
    
*/
export default function DropdownComp(props) {
  return (
    <a myid={props.id} onClick={props.onClick}>
      User {props.id}
    </a>
  );
}
