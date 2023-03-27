import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import AppHeader from "../../components/header/AppHeader";
import { toggleSideBar } from "../../redux/slices/commonSlice";

export const AppHeaderContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSideBarToggle = () => {
    dispatch(toggleSideBar());
  };

  const nightMode = useSelector((state: RootState) => state.common.nightMode);

  return (
    <AppHeader nightMode={nightMode} toggleSideBar={handleSideBarToggle} />
  );
};

export default AppHeaderContainer;
