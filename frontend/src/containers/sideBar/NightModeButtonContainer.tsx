import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { toggleNightMode } from "../../redux/slices/commonSlice";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import ListItem from "../../components/commons/ListItem";

const NightModeButtonContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const nightMode = useSelector((state: RootState) => state.common.nightMode);

  const handleNightModeToggle = () => {
    dispatch(toggleNightMode());
  };
  const icon = nightMode ? <LightModeIcon /> : <ModeNightIcon />;
  const text = nightMode ? "LightMode" : "NightMode";

  return <ListItem icon={icon} text={text} onClick={handleNightModeToggle} />;
};

export default NightModeButtonContainer;
