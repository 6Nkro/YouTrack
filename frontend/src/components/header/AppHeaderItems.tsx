import React from "react";
import { Toolbar, Box, AppBar } from "@mui/material";
import HamburgerContainer from "../../containers/header/HamburgerContainer";
import YouTubeSearchBarContainer from "../../containers/header/YouTubeSearchBarContainer";
import AppTitle from "./AppTitle";

interface AppHeaderItemsProps {
  nightMode: boolean;
}

const AppHeaderItems = ({ nightMode }: AppHeaderItemsProps) => (
  <AppBar
    position="fixed"
    sx={{
      zIndex: theme => theme.zIndex.drawer + 1,
      ...(nightMode
        ? {}
        : {
            color: "grey",
            backgroundColor: "white",
          }),
    }}
  >
    <Toolbar>
      <Box sx={{ flexGrow: 0 }}>
        <HamburgerContainer />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppTitle text="YouTrack" nightMode={nightMode} />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <YouTubeSearchBarContainer />
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Toolbar>
  </AppBar>
);

export default AppHeaderItems;
