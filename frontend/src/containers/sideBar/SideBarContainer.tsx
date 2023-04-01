import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material";
import { AppDispatch, RootState } from "../../store/store";
import { toggleNightMode } from "../../store/slices/commonSlice";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import {
  SidebarDrawer,
  SideBarButton,
} from "../../components/sideBar/SideBarElements";

const SideBarContainer = () => {
  const isNightMode = useTheme().palette.mode === "dark";
  const isOpen = useSelector((state: RootState) => state.common.sideBar);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const sidebarProps = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => navigate("/"),
    },
    {
      text: "PlayList",
      icon: <ListIcon />,
      onClick: () => navigate("/playlist"),
    },
    {
      text: isNightMode ? "LightMode" : "NightMode",
      icon: isNightMode ? <LightModeIcon /> : <ModeNightIcon />,
      onClick: () => dispatch(toggleNightMode()),
    },
  ];

  const sideBarButtons = sidebarProps.map(({ text, icon, onClick }) => (
    <SideBarButton key={text} text={text} icon={icon} onClick={onClick} />
  ));

  return <SidebarDrawer isOpen={isOpen} children={sideBarButtons} />;
};

export default SideBarContainer;
