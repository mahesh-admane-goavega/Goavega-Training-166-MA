import React from "react";
import { useSnapshot } from "valtio";
import { UserManager } from "../../Managers/UserManager";
import { userType } from "../../Model";
import { userStore } from "../../Store";

interface Props {
  user: userType;
}

const UserItem = ({ user }: Props) => {
  const { selectedUser } = useSnapshot(userStore);
  const isSelectedUser = selectedUser?.id === user.id;

  const userClick = () => {
    UserManager.selectUser(user);
  };

  return (
    <li
      className={`list-group-item  ${isSelectedUser ? "active" : ""} `}
      onClick={userClick}
    >
      {user.name}
    </li>
  );
};

export default UserItem;
