import React from "react";
import { useSnapshot } from "valtio";
import { commentStore } from "../../Store";
import { PostDetails } from "../Posts/PostDetails";
import { CommentItem } from "./CommentItem";

// type Props = {}

export const CommentList = () => {
  const { comments } = useSnapshot(commentStore);
  console.log(comments);

  return (
    <>
      <h2 className="mt-4">Comments ({comments.length})</h2>
      <ul>
        {comments.map((i) => (
          <CommentItem comment={i} />
        ))}
      </ul>
    </>
  );
};
