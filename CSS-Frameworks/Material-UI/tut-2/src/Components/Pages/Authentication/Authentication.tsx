import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { CommonButton } from "../../Common/CommonButton/CommonButton";
import { NotificationBell } from "../../Common/NotificationBell/NotificationBell";
import { BasicMenu } from "../../Common/BasicMenu/BasicMenu";
import Avatar from "@mui/material/Avatar";
import { Header } from "../../Header/Header";
import { BasicCard } from "../../Common/BasicCard/BasicCard";
import { SearchBar } from "../../Common/SearchBar/SearchBar";
import { Box } from "@mui/system";

import RefreshIcon from "@mui/icons-material/Refresh";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography/Typography";
import SpringModal from "../../Common/Modal/Modal";
import { UserManager } from "../../../Managers/UserManager";

import { useSnapshot } from "valtio";
import { userStore } from "../../../Stores/UserStore";
import { UserCard } from "../../Common/BasicCard/UserCard";

export const Authentication = () => {
  const users = useSnapshot(userStore);
  console.log("snap", users.user);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  //api fetch
  const loadUsers = async () => {
    await UserManager.getAllUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const getSearchBar = () => {
    const handleChange = (input: any) => {
      console.log(input);
    };

    const style = {
      wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "6px",
        paddingRight: "20px",
        height: "65px",
        backgroundColor: "#f9f9f9",
        borderBottom: "1px solid rgba(0,0,0,0.12)",
      },
      addUserButton: {
        fontSize: "1.05rem",
      },
    };

    return (
      <Box sx={style.wrapper}>
        <SpringModal colseHandle={handleClose} openHandle={open} />
        <SearchBar
          placeholder="Search by email address, phone number, or user UID"
          onChange={(event: any) => handleChange(event?.target.value)}
          serchBarWidth="720px"
        />
        <Box>
          <CommonButton
            sx={style.addUserButton}
            varient="contained"
            size="large"
            click={handleOpen}
          >
            Add User
          </CommonButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const getContent = () => {
    return (
      <Grid
        container
        spacing={12}
        // align="center"
        sx={{
          margin: "10px 10px",
          color: "rgba(0,0,0,0.6)",
          fontSize: "1.3rem",
          // justifyContent: "space-between",
          // display: "flex",
          gap: "35px",
          // flexWrap: "wrap",
        }}
      >
        {/* No more user found...! */}
        {users.user.map((data) => (
          <UserCard userData={data} />
        ))}
      </Grid>
    );
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        marginLeft: "320px",
        backgroundColor: "#eaeff1",
        padding: "48px 32px",
        minHeight: "calc(100vh-166px)",
        position: "relative",
      }}
    >
      <BasicCard cardHeader={getSearchBar()} content={getContent()} />
    </Grid>
  );
};
