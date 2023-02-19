import React from "react";
import { postType } from "../../Model";

type Props = {
  post: postType;
};

export const PostItem = ({ post }: Props) => {
  return (
    <li>
      ({post.id}) {post.title}
    </li>
  );
};
