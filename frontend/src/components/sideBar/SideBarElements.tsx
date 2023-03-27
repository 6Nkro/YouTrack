import React, { MouseEventHandler } from "react";
import ListItem from "../commons/ListItem";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material";

interface HomeButtonProps {
  onClick: MouseEventHandler<HTMLElement>;
}

export const HomeButton: React.FC<HomeButtonProps> = ({ onClick }) => (
  <ListItem icon={<HomeIcon />} text={"Home"} onClick={onClick} />
);

interface PlayListButtonProps {
  onClick: MouseEventHandler<HTMLElement>;
}

export const PlayListButton: React.FC<PlayListButtonProps> = ({ onClick }) => (
  <ListItem icon={<ListIcon />} text={"PlayList"} onClick={onClick} />
);

interface NightModeButtonProps {
  onToggle: MouseEventHandler<HTMLElement>;
}

export const NightModeButton: React.FC<NightModeButtonProps> = ({
  onToggle,
}) => {
  const isNightMode = useTheme().palette.mode === "dark";
  const [icon, text] = isNightMode
    ? [<LightModeIcon />, "LightMode"]
    : [<ModeNightIcon />, "NightMode"];
  return <ListItem icon={icon} text={text} onClick={onToggle} />;
};
