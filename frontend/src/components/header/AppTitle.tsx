import React from "react";
import { Button, Typography } from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

interface AppTitleProps {
  text: string;
  nightMode: boolean;
}

const AppTitle = ({ text, nightMode }: AppTitleProps) => (
  <Button
    variant="text"
    startIcon={<VideoLibraryIcon sx={{ color: "red" }} />}
    sx={{ textTransform: "none" }}
  >
    <Typography variant="h6" sx={{ color: nightMode ? "white" : "black" }}>
      {text}
    </Typography>
  </Button>
);

export default AppTitle;
