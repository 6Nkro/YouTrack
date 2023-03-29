import React, { MouseEventHandler } from "react";
import { useTheme } from "@mui/material";
import { ListIconTextButton } from "../commons/CustomButtons";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

interface HomeButtonProps {
  onClick: MouseEventHandler<HTMLElement>;
}

export const HomeButton: React.FC<HomeButtonProps> = ({ onClick }) => (
  <ListIconTextButton icon={<HomeIcon />} text="Home" onClick={onClick} />
);

interface PlayListButtonProps {
  onClick: MouseEventHandler<HTMLElement>;
}

export const PlayListButton: React.FC<PlayListButtonProps> = ({ onClick }) => (
  <ListIconTextButton icon={<ListIcon />} text="PlayList" onClick={onClick} />
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
  return <ListIconTextButton icon={icon} text={text} onClick={onToggle} />;
};
