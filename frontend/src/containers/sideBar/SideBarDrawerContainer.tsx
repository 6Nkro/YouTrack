import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SideBarDrawer from "../../components/sideBar/SideBarDrawer";

const SideBarDrawerContainer = () => {
  const isOpen = useSelector((state: RootState) => state.common.sideBar);
  return <SideBarDrawer isOpen={isOpen} />;
};

export default SideBarDrawerContainer;
