import React, { MouseEventHandler } from "react";
import { Toolbar, Box, AppBar } from "@mui/material";
import { AppTitle, Hamburger } from "./AppHeaderElements";
import YouTubeSearchBarContainer from "../../containers/header/YouTubeSearchBarContainer";

interface AppHeaderItemsProps {
  nightMode: boolean;
  toggleSideBar: MouseEventHandler<HTMLElement>;
}

const AppHeader: React.FC<AppHeaderItemsProps> = ({
  nightMode,
  toggleSideBar,
}) => (
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
      <Box sx={{ flexGrow: 1, width: 240, whiteSpace: "nowrap" }}>
        <Hamburger onClick={toggleSideBar} />
        <AppTitle text="YouTrack" nightMode={nightMode} />
      </Box>
      <Box sx={{ flexGrow: 1.2 }}>
        <YouTubeSearchBarContainer />
      </Box>
    </Toolbar>
  </AppBar>
);

export default AppHeader;
