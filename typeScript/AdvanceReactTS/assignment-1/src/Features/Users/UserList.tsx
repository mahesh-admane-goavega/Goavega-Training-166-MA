import React from "react";
import { UserManager } from "../../Managers/UserManager";
import { userStore } from "../../Store";
import { useSnapshot } from "valtio";
import UserItem from "./UserItem";

const UserList = () => {
  const { users } = useSnapshot(userStore);

  const loadUser = async () => {
    await UserManager.getAllUsers();
  };

  React.useEffect(() => {
    loadUser();
  }, []);
  return (
    <ul>
      {users.map((i) => (
        <UserItem user={i} />
      ))}
    </ul>
  );
};

export default UserList;
