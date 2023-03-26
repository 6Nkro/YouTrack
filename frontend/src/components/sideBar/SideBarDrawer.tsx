import React from "react";
import { Drawer, Toolbar } from "@mui/material";
import SideBarItems from "./SideBarItems";

interface SideBarDrawerProps {
  isOpen: boolean;
}

const SideBarDrawer = ({ isOpen }: SideBarDrawerProps) => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isOpen ? drawerWidth : 60,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isOpen ? drawerWidth : 60,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar sx={{ mb: 2 }} />
      <SideBarItems />
    </Drawer>
  );
};

export default SideBarDrawer;
