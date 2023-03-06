import React, { useEffect } from "react";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";

import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserService } from "../../../Services/UserService";
import { UserManager } from "../../../Managers/UserManager";
import SpringModal from "../Modal/Modal";
import { EditUser } from "../Forms/EditUser";

type Props = {};

export const Option = ({ userData }: any) => {
  const [Open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const closeHandle = () => setOpen(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectUser = () => {
    setAnchorEl(null);
  };

  const selectId = () => {
    console.log(userData.id);
    UserManager.deleteUser(userData.id);
  };

  return (
    <div>
      <SpringModal
        form={<EditUser userData={userData} />}
        colseHandle={closeHandle}
        openHandle={Open}
      />
      <IconButton
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem disableRipple>
          <EditIcon />
          <div onClick={handleOpen}>Edit</div>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <DeleteIcon />
          <div onClick={selectId}>Delete</div>
        </MenuItem>
      </Menu>
    </div>
  );
};
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
