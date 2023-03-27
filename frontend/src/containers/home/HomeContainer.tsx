import React from "react";
import { Box } from "@mui/material";
import SearchResultContainer from "./SearchResultContainer";

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
      <SearchResultContainer />
    </Box>
  );
};

export default HomeContainer;
