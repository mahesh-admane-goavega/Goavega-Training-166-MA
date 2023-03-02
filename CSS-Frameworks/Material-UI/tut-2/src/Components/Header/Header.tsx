import React from "react";
import Avatar from "@mui/material/Avatar/Avatar";
import { CommonButton } from "../Common/CommonButton/CommonButton";
import { NotificationBell } from "../Common/NotificationBell/NotificationBell";
import Typography from "@mui/material/Typography/Typography";
import IconButton from "@mui/material/IconButton/IconButton";
import { Tooltip } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export const Header = ({ title }: any) => {
  const headerStyle = {
    wrapper: {
      width: "112%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#009be5",
      padding: "20px",
      // marginLeft: "22%",
      position: "relative",
    },
    topRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "end",
      alignItems: "center",
      marginBottom: "20px",
      "*": {
        marginRight: "5px",
      },
    },
    middleRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "20px",
      marginLeft: "320px",
    },
    link: {
      fontWeight: 500,
      color: "rgba(255, 255, 255, 0.7)",
      "&:hover": {
        color: "#fff",
        cursor: "pointer",
      },
    },
    webButton: {
      marginRight: "5px",
    },
    helpIcon: {
      marginRight: "5px",
      color: "white",
    },
    avtar: {
      width: "auto",
    },
  };

  return (
    <Box sx={headerStyle.wrapper}>
      <Box sx={headerStyle.topRow}>
        <Typography sx={headerStyle.link}>
          {/* <Link href="https://www.w3schools.com/react/react_usestate.asp">
            GoTo-Doc
          </Link> */}
          GoTo-Doc
        </Typography>
        <NotificationBell
          anchorEl={"anchorEl"}
          badgesColor="error"
          badgeContent={10}
        />
        <Avatar
          sx={headerStyle.avtar}
          src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        />
      </Box>

      <Box sx={headerStyle.middleRow}>
        <Typography variant="h1">{title}</Typography>
        <Box>
          <CommonButton sx={headerStyle.webButton} varient="outlined">
            Web-Setup
          </CommonButton>
          <Tooltip title={"Help"}>
            <IconButton sx={headerStyle.helpIcon}>
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};
