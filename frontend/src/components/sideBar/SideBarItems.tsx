import React from "react";
import HomeButtonContainer from "../../containers/sideBar/HomeButtonContainer";
import PlayListButtonContainer from "../../containers/sideBar/PlayListButtonContainer";
import NightModeButtonContainer from "../../containers/sideBar/NightModeButtonContainer";

const SideBarItems = () => (
  <>
    <HomeButtonContainer />
    <PlayListButtonContainer />
    <NightModeButtonContainer />
  </>
);

export default SideBarItems;
