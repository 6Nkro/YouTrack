import React, { MouseEventHandler } from "react";
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

interface HamburgerProps {
  onClick: MouseEventHandler<HTMLElement>;
}

export const Hamburger: React.FC<HamburgerProps> = ({ onClick }) => (
  <IconButton edge="start" sx={{ mr: 2 }} onClick={onClick}>
    <MenuIcon />
  </IconButton>
);

export const AppTitle: React.FC<{ text: string }> = ({ text }) => {
  const isNightMode = useTheme().palette.mode === "dark";

  return (
    <Button
      variant="text"
      startIcon={<VideoLibraryIcon sx={{ color: "red" }} />}
      sx={{ textTransform: "none", mr: 2 }}
    >
      <Typography
        variant="h6"
        sx={{
          color: isNightMode ? "white" : "black",
          fontWeight: "600",
        }}
      >
        {text}
      </Typography>
    </Button>
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
