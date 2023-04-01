import React, { MouseEventHandler, ReactElement } from "react";
import {
  Theme,
  InputBase,
  styled,
  AppBar,
  IconButton,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export const HeaderAppBar = styled(AppBar)(({ theme }: { theme: Theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: theme.palette.mode === "dark" ? undefined : "grey",
  backgroundColor: theme.palette.mode === "dark" ? undefined : "white",
}));

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

interface AppTitleProps {
  text: string;
  icon: ReactElement;
  onClick: MouseEventHandler<HTMLElement>;
}

export const AppTitle: React.FC<AppTitleProps> = ({ text, icon, onClick }) => (
  <Button
    startIcon={icon}
    variant="text"
    size="small"
    sx={{ textTransform: "none" }}
    onClick={onClick}
  >
    <TitleText variant="h6">{text}</TitleText>
  </Button>
);

const TitleText = styled(Typography)(({ theme }: { theme: Theme }) => ({
  color: theme.palette.mode === "dark" ? "white" : "black",
  fontWeight: 600,
}));

interface SearchBarProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSearch: React.FormEventHandler<HTMLFormElement>;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  value,
  onChange,
}) => {
  return (
    <Paper
      component="form"
      onSubmit={onSearch}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 640 }}
    >
      <InputBase
        sx={{ p: 1, flex: 1 }}
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
      <IconButton type="submit" sx={{ p: 1 }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
