import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { toggleSideBar } from "../../redux/slices/commonSlice";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const MenuButtonContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSideBarToggle = () => {
    dispatch(toggleSideBar);
  };

  return (
    <IconButton edge="start" sx={{ mr: 2 }} onClick={handleSideBarToggle}>
      <MenuIcon />
    </IconButton>
  );
};

export default MenuButtonContainer;
