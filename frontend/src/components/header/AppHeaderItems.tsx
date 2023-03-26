import React from "react";
import { Toolbar, Box, AppBar } from "@mui/material";
import MenuButtonContainer from "../../containers/header/MenuButtonContainer";
import AppTitleContainer from "../../containers/header/AppTitleContainer";
import YouTubeSearchBarContainer from "../../containers/header/YouTubeSearchBarContainer";

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
      <MenuButtonContainer />
      <AppTitleContainer />
      <Box sx={{ flexGrow: 1 }} />
      <YouTubeSearchBarContainer />
      <Box sx={{ flexGrow: 1 }} />
    </Toolbar>
  </AppBar>
);

export default AppHeaderItems;
