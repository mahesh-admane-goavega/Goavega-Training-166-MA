import React from "react";
import { commentType } from "../../Model";

interface Props {
  comment: commentType;
}

export const CommentItem = (props: Props) => {
  return (
    <li className="list-group-item">
      <p className="comment-name">{props.comment.name}</p>
      <p>{props.comment.body}</p>
    </li>
  );
};
