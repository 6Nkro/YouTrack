import React, { MouseEventHandler } from "react";
import {
  Button,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

interface HamburgerProps {
  onClick: MouseEventHandler<HTMLElement>;
}

export const Hamburger = ({ onClick }: HamburgerProps) => (
  <IconButton edge="start" sx={{ mr: 2 }} onClick={onClick}>
    <MenuIcon />
  </IconButton>
);

interface AppTitleProps {
  text: string;
  nightMode: boolean;
}

export const AppTitle = ({ text, nightMode }: AppTitleProps) => (
  <Button
    variant="text"
    startIcon={<VideoLibraryIcon sx={{ color: "red" }} />}
    sx={{ textTransform: "none", mr: 2 }}
  >
    <Typography
      variant="h6"
      sx={{
        color: nightMode ? "white" : "black",
        fontWeight: "600",
      }}
    >
      {text}
    </Typography>
  </Button>
);

interface SearchBarProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSearch: () => void;
}

export const SearchBar = ({ onSearch, value, onChange }: SearchBarProps) => {
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
