import React from "react";
import { Box, CssBaseline } from "@mui/material";
import AppHeaderContainer from "./header/AppHeaderContainer";
import SideBarContainer from "./sideBar/SideBarContainer";
import MainContentContainer from "./contents/MainContentContainer";

const HomeContainer = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppHeaderContainer />
      <SideBarContainer />
      <MainContentContainer />
    </Box>
  );
};

export default HomeContainer;
