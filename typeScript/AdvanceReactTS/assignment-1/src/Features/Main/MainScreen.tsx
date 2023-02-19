import React from "react";
import { PostList } from "../Posts/PostList";
import UserDetails from "../Users/UserDetails";
import UserList from "../Users/UserList";

const MainScreen = () => {
  return (
    <div>
      <div>
        <UserList />
      </div>
      <div>
        <UserDetails />
      </div>
      <div>
        <PostList />
      </div>
    </div>
  );
};

export default MainScreen;
