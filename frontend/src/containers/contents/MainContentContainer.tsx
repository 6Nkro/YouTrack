import React from "react";
import { Box, Toolbar } from "@mui/material";
import YouTubeSearchResultContainer from "./YouTubeSearchResultContainer";

const MainContentContainer = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        display: "grid",
        placeItems: "center",
        p: 3,
      }}
    >
      <Toolbar />
      <YouTubeSearchResultContainer />
    </Box>
  );
};

export default MainContentContainer;
