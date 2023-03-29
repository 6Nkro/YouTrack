import React, { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import {
  useTheme,
  InputBase,
  Button,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { IconTextButton } from "../commons/CustomButtons";

interface HamburgerProps {
  onClick: MouseEventHandler<HTMLElement>;
}

export const Hamburger: React.FC<HamburgerProps> = ({ onClick }) => (
  <IconButton
    children={<MenuIcon />}
    edge="start"
    sx={{ mr: 2 }}
    onClick={onClick}
  />
);

export const AppTitle: React.FC<{ text: string }> = ({ text }) => {
  const navigate = useNavigate();
  const textColor = useTheme().palette.mode === "dark" ? "white" : "black";
  const textElement = (
    <Typography
      variant="h6"
      sx={{
        color: textColor,
        fontWeight: "600",
      }}
    >
      {text}
    </Typography>
  );

  return (
    <IconTextButton
      icon={<VideoLibraryIcon sx={{ color: "red" }} />}
      text={textElement}
      onClick={() => navigate("/")}
    />
  );
};

interface SearchBarProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSearch: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  value,
  onChange,
}) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    onSearch();
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 640 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
      <IconButton type="submit" sx={{ p: "10px" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
