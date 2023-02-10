import React from "react";
import Post from "./Post";

export default function UserData(props) {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + props.uData.id)
      .then((resp) => resp.json())
      .then((data) => setPost(data));
  }, [props.uData.id]);

  const card = post.map((item) => {
    console.log(item);
    return <Post title={item.title} body={item.body} />;
  });

  return (
    <div>
      <div className="user--data">
        <h2 className="user--name">Name: {props.uData.name}</h2>
        <h2 className="user--name">UserName: {props.uData.username}</h2>
        <div>
          <h2 className="user--name">Mail:{props.uData.email}</h2>
        </div>
      </div>
      {card}
    </div>
  );
}
