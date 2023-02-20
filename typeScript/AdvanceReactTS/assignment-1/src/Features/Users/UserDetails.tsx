import React from "react";
import { useSnapshot } from "valtio";
import { userStore } from "../../Store";

const UserDetails = () => {
  const { selectedUser } = useSnapshot(userStore);
  return (
    <div className="border border-primary mt-4">
      <h2>User Details</h2>
      <br />
      <p>
        Name: {selectedUser === undefined ? "Name of User" : selectedUser?.name}
      </p>
      <p>
        Email:{" "}
        {selectedUser === undefined ? "Email Id of user" : selectedUser?.email}
      </p>
    </div>
  );
};

export default UserDetails;
