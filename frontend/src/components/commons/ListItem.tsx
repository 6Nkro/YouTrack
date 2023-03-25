import React, { MouseEventHandler } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface ListItemProps {
  icon: React.ReactNode;
  text: string;
  onClick: MouseEventHandler<HTMLElement>;
}

const ListItem = (props: ListItemProps) => (
  <div style={{ overflowX: "hidden" }}>
    <ListItemButton key={props.text} onClick={props.onClick}>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItemButton>
  </div>
);

export default ListItem;
