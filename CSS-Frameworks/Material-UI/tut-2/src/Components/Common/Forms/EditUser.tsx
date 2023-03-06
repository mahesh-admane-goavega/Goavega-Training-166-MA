import Box from "@mui/material/Box/Box";
import React, { useState } from "react";
// import { FormControlUnstyled } from "@mui/base";
import TextField from "@mui/material/TextField";
import { CommonButton } from "../CommonButton/CommonButton";
import { Button } from "@mui/material";
import { UserManager } from "../../../Managers/UserManager";

type Props = {};

export const EditUser = ({ userData }: any) => {
  const [name, setName] = useState(userData.attributes.Full_Name);
  const [email, setEmail] = useState(userData.attributes.Email);
  const [role, setRole] = useState(userData.attributes.Role);

  const onSubmit = () => {
    const data = {
      id: userData.id,
      Full_Name: String(name),
      Role: String(role),
      Email: String(email),
    };
    UserManager.updateUser(data);
  };
  return (
    <>
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "44ch" },
        }}
      >
        <TextField
          size="small"
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          sx={{}}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          size="small"
          id="outlined-basic"
          label="Role"
          variant="outlined"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </Box>
      <CommonButton
        onClose
        click={onSubmit}
        sx={{ ml: 18, mt: 2 }}
        varient="contained"
      >
        Save
      </CommonButton>
    </>
  );
};
