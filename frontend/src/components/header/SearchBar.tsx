import React from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSearch: () => void;
}

const SearchBar = ({ onSearch, value, onChange }: SearchBarProps) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    onSearch();
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
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

export default SearchBar;
