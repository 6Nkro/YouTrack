import React, { MouseEventHandler } from "react";
import ListItem from "../commons/ListItem";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

interface HomeButtonProps {
  onClick: MouseEventHandler<HTMLElement>;
}

export const HomeButton = ({ onClick }: HomeButtonProps) => (
  <ListItem icon={<HomeIcon />} text={"Home"} onClick={onClick} />
);

interface PlayListButtonProps {
  onClick: MouseEventHandler<HTMLElement>;
}

export const PlayListButton = ({ onClick }: PlayListButtonProps) => (
  <ListItem icon={<ListIcon />} text={"PlayList"} onClick={onClick} />
);

interface NightModeButtonProps {
  nightMode: boolean;
  onToggle: MouseEventHandler<HTMLElement>;
}

export const NightModeButton = ({
  nightMode,
  onToggle,
}: NightModeButtonProps) => {
  const icon = nightMode ? <LightModeIcon /> : <ModeNightIcon />;
  const text = nightMode ? "LightMode" : "NightMode";
  return <ListItem icon={icon} text={text} onClick={onToggle} />;
};
