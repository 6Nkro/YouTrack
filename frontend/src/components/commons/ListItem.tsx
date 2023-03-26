import React, { MouseEventHandler } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface ListItemProps {
  icon: React.ReactNode;
  text: string;
  onClick: MouseEventHandler<HTMLElement>;
}

const ListItem = ({ icon, text, onClick }: ListItemProps) => (
  <div style={{ overflowX: "hidden" }}>
    <ListItemButton key={text} onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </div>
);

export default ListItem;
