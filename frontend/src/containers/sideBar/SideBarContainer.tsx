import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import SideBar from "../../components/sideBar/SideBar";
import { toggleNightMode } from "../../redux/slices/commonSlice";

const SideBarContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const nightMode = useSelector((state: RootState) => state.common.nightMode);
  const isOpen = useSelector((state: RootState) => state.common.sideBar);

  const handleHomeClick = () => {
    console.log("HomeContainer button clicked");
  };

  const handlePlaylistClick = () => {
    console.log("Playlist button clicked");
  };

  const handleNightModeToggle = () => {
    dispatch(toggleNightMode());
  };

  return (
    <SideBar
      isOpen={isOpen}
      nightMode={nightMode}
      homeClick={handleHomeClick}
      playListClick={handlePlaylistClick}
      nightModeToggle={handleNightModeToggle}
    />
  );
};

export default SideBarContainer;
