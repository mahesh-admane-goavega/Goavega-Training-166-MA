import React from "react";
import { CommentList } from "../Comments/CommentList";
import { NewPostInput } from "../Posts/NewPostInput";
import { PostList } from "../Posts/PostList";
import UserDetails from "../Users/UserDetails";
import UserList from "../Users/UserList";

const MainScreen = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <UserList />
        <CommentList />
      </div>
      <div className="col-md-8">
        <UserDetails />
        <NewPostInput />
        <PostList />
      </div>
    </div>
  );
};

export default MainScreen;
