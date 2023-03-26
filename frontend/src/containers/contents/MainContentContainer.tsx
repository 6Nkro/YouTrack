import React from "react";
import { Box, Toolbar } from "@mui/material";
import YouTubeSearchResultContainer from "./YouTubeSearchResultContainer";

const MainContentContainer = () => {
  return (
    <Box
      component="main"
      sx={{
        p: 3,
      }}
    >
      <Toolbar />
      <YouTubeSearchResultContainer />
    </Box>
  );
};

export default MainContentContainer;
