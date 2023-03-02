import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

type Props = {};

export const BasicMenu = ({ anchorEl, open, handleClose, menuItem }: any) => {
  return (
    <div>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItem.map((item: any) => (
          <MenuItem onClick={handleClose}>{item.message}</MenuItem>
        ))}
        {}
      </Menu>
    </div>
  );
};
