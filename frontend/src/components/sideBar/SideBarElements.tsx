import React, { MouseEventHandler, ReactElement } from "react";
import { Drawer } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface SidebarDrawerProps {
  isOpen: boolean;
  children: ReactElement[];
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  isOpen,
  children,
}) => {
  return (
    <Drawer variant="permanent" sx={setDrawerStyles(isOpen)}>
      {children}
    </Drawer>
  );
};

const setDrawerStyles = (isOpen: boolean) => ({
  width: isOpen ? 240 : 60,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: isOpen ? 240 : 60,
    boxSizing: "border-box",
    pt: 10,
  },
});

interface SideBarButtonProps {
  text: string;
  icon: React.ReactElement;
  onClick: MouseEventHandler<HTMLElement>;
}

export const SideBarButton: React.FC<SideBarButtonProps> = ({
  text,
  icon,
  onClick,
}) => (
  <div style={{ overflowX: "hidden" }}>
    <ListItemButton key={text} onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </div>
);
