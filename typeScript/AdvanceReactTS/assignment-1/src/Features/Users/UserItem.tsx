import React from "react";
import { UserManager } from "../../Managers/UserManager";
import { userType } from "../../Model";

interface Props {
  user: userType;
}

const UserItem = ({ user }: Props) => {
  const userClick = () => {
    UserManager.selectUser(user);
    console.log(user);
  };

  return (
    <li className="list--item" onClick={userClick}>
      ({user.id}) {user.name}
    </li>
  );
};

export default UserItem;
