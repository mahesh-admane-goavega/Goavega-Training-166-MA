import React from "react";
import { useSnapshot } from "valtio";
import { userStore } from "../../Store";

const UserDetails = () => {
  const { selectedUser } = useSnapshot(userStore);
  console.log(selectedUser);
  return (
    <div>
      <h1>User Details</h1>
      <h1>{selectedUser?.name}</h1>
      <h1>{selectedUser?.email}</h1>
    </div>
  );
};

export default UserDetails;
