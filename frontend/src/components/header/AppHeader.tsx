import React, { MouseEventHandler } from "react";
import { Box, AppBar, useTheme } from "@mui/material";
import { AppTitle, Hamburger } from "./AppHeaderElements";
import YouTubeSearchBarContainer from "../../containers/header/YouTubeSearchBarContainer";

interface AppHeaderItemsProps {
  toggleSideBar: MouseEventHandler<HTMLElement>;
}

const AppHeader: React.FC<AppHeaderItemsProps> = ({ toggleSideBar }) => {
  const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        color: theme.palette.mode === "dark" ? undefined : "grey",
        backgroundColor: theme.palette.mode === "dark" ? undefined : "white",
      }}
    >
      <Box sx={{ display: "flex", height: 64, alignItems: "center", pl: 3 }}>
        <Box sx={{ flexGrow: 1, width: 240, whiteSpace: "nowrap" }}>
          <Hamburger onClick={toggleSideBar} />
          <AppTitle text="YouTrack" />
        </Box>
        <Box sx={{ flexGrow: 1.2 }}>
          <YouTubeSearchBarContainer />
        </Box>
      </Box>
    </AppBar>
  );
};

export default AppHeader;
