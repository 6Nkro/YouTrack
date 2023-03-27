import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { toggleSideBar } from "../../redux/slices/commonSlice";
import AppHeader from "../../components/header/AppHeader";

export const AppHeaderContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSideBarToggle = () => {
    dispatch(toggleSideBar());
  };

  return <AppHeader toggleSideBar={handleSideBarToggle} />;
};

export default AppHeaderContainer;
