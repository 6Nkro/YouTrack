import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Drawer, Toolbar } from "@mui/material";
import SideBarItems from "../../components/sideBar/SideBarItems";

const SideBarDrawerContainer = () => {
  const isOpen = useSelector((state: RootState) => state.common.sideBar);
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

export default SideBarDrawerContainer;
