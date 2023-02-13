import React from "react";

export default function DropdownComp(props) {
  return (
    <p myid={props.id} onClick={props.onClick}>
      User {props.id}
    </p>
  );
}
