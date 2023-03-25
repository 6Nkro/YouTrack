import React from "react";
import { Toolbar, Box } from "@mui/material";
import MenuButtonContainer from "../../containers/header/MenuButtonContainer";
import AppTitleContainer from "../../containers/header/AppTitleContainer";
import SearchBarContainer from "../../containers/header/SearchBarContainer";

const AppHeaderItems = () => (
  <Toolbar>
    <MenuButtonContainer />
    <AppTitleContainer />
    <Box sx={{ flexGrow: 1 }} />
    <SearchBarContainer />
    <Box sx={{ flexGrow: 1 }} />
  </Toolbar>
);

export default AppHeaderItems;
