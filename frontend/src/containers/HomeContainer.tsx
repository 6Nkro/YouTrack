import React from "react";
import { Box, CssBaseline } from "@mui/material";
import AppHeaderContainer from "./header/AppHeaderContainer";
import SideBarDrawerContainer from "./sideBar/SideBarDrawerContainer";
import MainContentContainer from "./contents/MainContentContainer";

const HomeContainer = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppHeaderContainer />
      <SideBarDrawerContainer />
      <MainContentContainer />
    </Box>
  );
};

export default HomeContainer;
