import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import { toggleSideBar } from "../../store/slices/commonSlice";
import { Box } from "@mui/material";
import { VideoLibrary } from "@mui/icons-material";
import {
  AppTitle,
  Hamburger,
  HeaderAppBar,
} from "../../components/header/AppHeaderElements";
import SearchBarContainer from "./SearchBarContainer";

export const AppHeaderContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <HeaderAppBar position="fixed">
      <Box sx={{ display: "flex", height: 64, alignItems: "center" }}>
        <Box sx={{ flexGrow: 1, width: 240, whiteSpace: "nowrap", pl: 3 }}>
          <Hamburger onClick={() => dispatch(toggleSideBar())} />
          <AppTitle
            text="YouTrack"
            icon={<VideoLibrary sx={{ color: "red" }} />}
            onClick={() => navigate("/")}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <SearchBarContainer />
        </Box>
      </Box>
    </HeaderAppBar>
  );
};

export default AppHeaderContainer;
