import React from "react";
import { UserManager } from "../../Managers/UserManager";
import { userStore } from "../../Store";
import { useSnapshot } from "valtio";
import UserItem from "./UserItem";

const UserList = () => {
  const { users } = useSnapshot(userStore);

  // console.log("This my users", JSON.parse(JSON.stringify(users)));
  console.log(users);
  const loadUser = async () => {
    await UserManager.getAllUsers();
  };

  React.useEffect(() => {
    loadUser();
  }, []);
  return (
    <>
      <h2>All-Users</h2>
      <ul className="list-group">
        {users.map((i) => (
          <UserItem user={i} />
        ))}
      </ul>
    </>
  );
};

export default UserList;
