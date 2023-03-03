import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge/Badge";
import IconButton from "@mui/material/IconButton/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { BasicMenu } from "../BasicMenu/BasicMenu";

export const NotificationBell = ({
  mydata,
  badgeContent,
  badgesColor,
}: any) => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handledOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    console.log("Clicked");
    setOpen(false);
  };

  const notification = [
    {
      id: 1,
      message: "First Notification",
    },
    {
      id: 2,
      message: "Second Notification",
    },
  ];

  const newNotification = `${notification.length} notification recived`;
  const noNewNotification = `No new Notification`;

  return (
    <div>
      <Tooltip
        title={notification.length ? newNotification : noNewNotification}
      >
        <IconButton onClick={handledOpen} color="primary">
          <Badge badgeContent={notification.length} color={badgesColor}>
            <NotificationsIcon sx={{ color: "white" }} />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        menuItem={notification}
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};
