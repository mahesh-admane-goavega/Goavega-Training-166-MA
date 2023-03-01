import React from "react";
import Grid from "@mui/material/Grid";
import { CommonButton } from "../../Common/CommonButton/CommonButton";
import { NotificationBell } from "../../Common/NotificationBell/NotificationBell";
import { BasicMenu } from "../../Common/BasicMenu/BasicMenu";

export const Authentication = () => {
  return (
    <Grid item xs={8}>
      This is authentication page
      <NotificationBell
        anchorEl={"anchorEl"}
        badgesColor="error"
        badgeContent={10}
      />
    </Grid>
  );
};

/***
   <CommonButton size="large" varient="contained">
        Add Users
    </CommonButton>
    <CommonButton size="large" varient="outlined">
        Web Setup
    </CommonButton>
 */
