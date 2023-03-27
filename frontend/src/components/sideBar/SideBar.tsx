import React, { MouseEventHandler } from "react";
import { Drawer, Toolbar } from "@mui/material";
import { HomeButton, PlayListButton, NightModeButton } from "./SideBarElements";

interface SideBarProps {
  isOpen: boolean;
  nightMode: boolean;
  homeClick: MouseEventHandler<HTMLElement>;
  playListClick: MouseEventHandler<HTMLElement>;
  nightModeToggle: MouseEventHandler<HTMLElement>;
}

const SideBar = ({
  isOpen,
  nightMode,
  homeClick,
  playListClick,
  nightModeToggle,
}: SideBarProps) => {
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
      <NightModeButton nightMode={nightMode} onToggle={nightModeToggle} />
    </Drawer>
  );
};

export default SideBar;
