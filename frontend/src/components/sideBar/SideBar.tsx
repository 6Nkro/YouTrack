import React, { MouseEventHandler } from "react";
import { Drawer, Toolbar } from "@mui/material";
import { HomeButton, PlayListButton, NightModeButton } from "./SideBarElements";

interface SideBarProps {
  isOpen: boolean;
  homeClick: MouseEventHandler<HTMLElement>;
  playListClick: MouseEventHandler<HTMLElement>;
  nightModeToggle: MouseEventHandler<HTMLElement>;
}

const SideBar: React.FC<SideBarProps> = ({
  isOpen,
  homeClick,
  playListClick,
  nightModeToggle,
}) => {
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
      <HomeButton onClick={homeClick} />
      <PlayListButton onClick={playListClick} />
      <NightModeButton onToggle={nightModeToggle} />
    </Drawer>
  );
};

export default SideBar;
