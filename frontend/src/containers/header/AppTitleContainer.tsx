import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Button, Typography } from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

const AppTitleContainer = () => {
  const nightMode = useSelector((state: RootState) => state.common.nightMode);

  return (
    <>
      <Button
        variant="text"
        startIcon={<VideoLibraryIcon sx={{ color: "red" }} />}
        sx={{ textTransform: "none" }}
      >
        <Typography variant="h6" sx={{ color: nightMode ? "white" : "black" }}>
          YouTrack
        </Typography>
      </Button>
    </>
  );
};

export default AppTitleContainer;
