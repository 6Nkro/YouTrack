import React from "react";
import { Box, useTheme } from "@mui/material";
import SearchResultContainer from "./SearchResultContainer";
import PlatformButtons from "../../components/home/PlatformButtons";

const HomeContainer = () => {
  const isNightMode = useTheme().palette.mode === "dark";

  return (
    <Box
      component="main"
      sx={{
        display: "grid",
        placeItems: "center",
        p: 3,
      }}
    >
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          bottom: "0px",
          zIndex: 2,
          borderRadius: "20px 20px 0 0",
          backgroundColor: isNightMode ? "#121212" : "white",
        }}
      >
        <PlatformButtons />
      </Box>
      <SearchResultContainer />
    </Box>
  );
};

export default HomeContainer;
