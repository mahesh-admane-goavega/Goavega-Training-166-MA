import React from "react";
import { useSnapshot } from "valtio";
import { CommentManager } from "../../Managers/CommentManager";
import { PostManager } from "../../Managers/PostManager";
import { postType } from "../../Model";
import { postStore } from "../../Store";

type Props = {
  post: postType;
};

export const PostItem = ({ post }: Props) => {
  const { selectedPost } = useSnapshot(postStore);
  const isSelectedPost = selectedPost?.id === post.id;

  const selectPost = () => {
    PostManager.selectPost(post);
  };

  return (
    <li
      className={`list-group-item ${isSelectedPost ? "active" : ""}`}
      id="list-item"
    >
      <>
        <div onClick={selectPost} className="card">
          <div className="card-body" id="post--title">
            {post.title}
          </div>
        </div>
        <div className="card-body">{post.body}</div>
      </>
    </li>
  );
};
