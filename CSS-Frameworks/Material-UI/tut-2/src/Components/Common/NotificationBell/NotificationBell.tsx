import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge/Badge";
import IconButton from "@mui/material/IconButton/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { BasicMenu } from "../BasicMenu/BasicMenu";

// type Props = {
//   badgeContent: Node;
//   color;
// };

export const NotificationBell = ({
  mydata,
  badgeContent,
  badgesColor,
}: any) => {
  const newNotification = `${badgeContent} notification recived`;
  const noNewNotification = `No new Notification`;

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

  return (
    <div>
      <Tooltip
        onClick={mydata}
        title={badgeContent ? newNotification : noNewNotification}
      >
        <IconButton onClick={handledOpen} color="primary">
          <Badge badgeContent={badgeContent} color={badgesColor}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </div>
  );
};
