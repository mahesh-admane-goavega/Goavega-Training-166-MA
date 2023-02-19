import React from "react";
import { useSnapshot } from "valtio";
import { PostManager } from "../../Managers/PostManager";
import { postType } from "../../Model";
import { postStore } from "../../Store";
import { PostItem } from "./PostItem";

// type Props = {};

export const PostList = () => {
  const { posts } = useSnapshot(postStore);

  const loadPost = async () => {
    await PostManager.getAll();
  };

  React.useEffect(() => {
    loadPost();
  }, []);

  return (
    <ul>
      {posts.map((i) => (
        <PostItem post={i} />
      ))}
      <li>Hello</li>
      <li>Ok</li>
    </ul>
  );
};
