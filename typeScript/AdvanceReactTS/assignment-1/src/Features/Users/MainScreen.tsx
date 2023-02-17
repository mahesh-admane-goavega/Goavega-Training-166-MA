import React from "react";
import UserDetails from "./UserDetails";
import UserList from "./UserList";

const MainScreen = () => {
  return (
    <div>
      <div>
        <UserList />
      </div>
      <div>
        <UserDetails />
      </div>
    </div>
  );
};

export default MainScreen;
