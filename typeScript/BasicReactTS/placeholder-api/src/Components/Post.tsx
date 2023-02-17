import { PostType } from "./PostApp";

type Props = {
  allpost: PostType[];
};

const Post = (props: Props) => {
  return (
    <div className="post--box-main">
      {props.allpost.map((item) => (
        <div className="post--box">
          <p className="post--title">{item.title}</p>
          <p className="post--body">{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
