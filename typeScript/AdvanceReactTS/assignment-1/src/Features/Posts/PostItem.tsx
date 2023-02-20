import React from "react";
import { CommentManager } from "../../Managers/CommentManager";
import { PostManager } from "../../Managers/PostManager";
import { postType } from "../../Model";
// import "bootstrap/js/src/collapse.js";
// import "../node_modules/jquery/dist/jquery.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

type Props = {
  post: postType;
};

export const PostItem = ({ post }: Props) => {
  const selectPost = () => {
    PostManager.selectPost(post);
  };

  return (
    <li className="list-group-item" id="list-item">
      <div>
        <div onClick={selectPost} className="card">
          <div className="card-body" id="post--title">
            {post.title}
          </div>
        </div>
        <div className="card-body">{post.body}</div>
      </div>
    </li>
  );
};
