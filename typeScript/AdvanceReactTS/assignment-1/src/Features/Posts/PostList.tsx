import React from "react";
import { useSnapshot } from "valtio";
import { PostManager } from "../../Managers/PostManager";
import { postType } from "../../Model";
import { postStore } from "../../Store";
import { PostItem } from "./PostItem";

// type Props = {};

export const PostList = () => {
  const { posts } = useSnapshot(postStore);

  return (
    <>
      <h2 className="mt-5">Post-List</h2>
      <ul className="p-5">
        {posts.map((i) => (
          <PostItem post={i} />
        ))}
      </ul>
    </>
  );
};
