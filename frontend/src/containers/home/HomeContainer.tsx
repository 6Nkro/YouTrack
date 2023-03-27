import React from "react";
import { Box } from "@mui/material";
import YouTubeSearchResultContainer from "./YouTubeSearchResultContainer";

const HomeContainer = () => {
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
      <YouTubeSearchResultContainer />
    </Box>
  );
};

export default HomeContainer;
