import React, { MouseEventHandler } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { ButtonPropsSizeOverrides } from "@mui/material/Button/Button";

interface ListIconTextButtonProps {
  icon: React.ReactElement;
  text: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

export const ListIconTextButton: React.FC<ListIconTextButtonProps> = ({
  icon,
  text,
  onClick,
}) => (
  <div style={{ overflowX: "hidden" }}>
    <ListItemButton key={text} onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </div>
);

interface IconTextButtonProps {
  icon: React.ReactElement;
  text: React.ReactElement | string;
  onClick?: MouseEventHandler<HTMLElement>;
  size?: OverridableStringUnion<
    "small" | "medium" | "large",
    ButtonPropsSizeOverrides
  >;
}

export const IconTextButton: React.FC<IconTextButtonProps> = ({
  icon,
  text,
  size,
  onClick,
}) => (
  <Button
    size={size || "medium"}
    variant="text"
    startIcon={icon}
    sx={{ textTransform: "none" }}
    onClick={onClick}
  >
    {text}
  </Button>
);
