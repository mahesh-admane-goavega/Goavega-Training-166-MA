import React from "react";
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

export const Authentication = () => {
  const getSearchBar = () => {
    const handleChange = (input: any) => {
      console.log(input);
    };
    const addUser = () => {
      console.log("Clicked");
    };

    const style = {
      wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "20px",
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
            onClick={addUser}
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
      <Typography
        align="center"
        sx={{
          margin: "40px 16px",
          color: "rgba(0,0,0,0.6)",
          fontSize: "1.3rem",
        }}
      >
        No more user found...!
      </Typography>
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

/*


*/
