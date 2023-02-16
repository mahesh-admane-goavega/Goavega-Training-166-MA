import React, { useState } from "react";
import Post from "./Post";
import User from "./User";
import { proxy, useSnapshot } from "valtio";

export type userType = {
  id: number;
  name: string;
  username: string;
};

export type PostType = {
  id: number;
  title: string;
  body: string;
};

function PostApp() {
  const [users, setUsers] = useState<userType[]>([]);
  const [posts, setPosts] = useState<PostType[]>([]);
  /* for single user it contain single object of array*/
  const [user, setUser] = useState<userType[]>([]);
  const [userId, setUserId] = useState<string>("");

  //creating proxy
  // const state = proxy({
  //   Users: users,
  //   Posts: posts,
  // });

  // const snap = useSnapshot(state);

  // Getting for ALl Users
  const loadUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: userType[]) => {
        setUsers(data);
      });
  };

  // const state = proxy({
  //   post: fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data: userType[]) => {
  //       setUser(data);
  //     }),
  // });

  // Getting Selected User
  const loadUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users?id=" + userId)
      .then((res) => res.json())
      .then((data: userType[]) => {
        setUser(data);
      });
  };

  // Getting Selected User Post
  const loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
      .then((res) => res.json())
      .then((d: PostType[]) => {
        setPosts(d);
      });
  };

  // const selectUser = (id: number) => {
  //   console.log("Clicked" + id);
  // };

  React.useEffect(() => {
    loadUsers();
  }, []);

  React.useEffect(() => {
    loadPosts();
    loadUser();
  }, [userId]);

  return (
    <div>
      <p>Post List </p>
      <select
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      >
        {users.map((user) => (
          <option value={user.id}>
            ({user.id}) {user.name}
          </option>
        ))}
      </select>
      <User user={user} />
      <Post allpost={posts} />
    </div>
  );
}

export default PostApp;
