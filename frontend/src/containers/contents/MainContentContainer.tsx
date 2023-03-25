import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";

const MainContentContainer = () => {
  return (
    <Box
      component="main"
      sx={{
        p: 3,
      }}
    >
      <Toolbar />
      <Typography variant="h6" component="div">
        Main Content
      </Typography>
    </Box>
  );
};

export default MainContentContainer;
