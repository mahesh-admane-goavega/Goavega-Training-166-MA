import React from "react";
import { useSnapshot } from "valtio";
import { postStore } from "../../Store";
// type Props = {}

export const PostDetails = () => {
  const { selectedPost } = useSnapshot(postStore);

  return (
    <div>
      <h3>Hello</h3>
      <h1>{selectedPost?.id}</h1>
      <h1>{selectedPost?.title}</h1>
    </div>
  );
};
