import React from "react";
import { Button, ButtonGroup } from "@mui/material";

const PlatformButtons = () => {
  const platforms = ["YouTube", "Twitch", "Facebook", "Vimeo", "DailyMotion"];

  return (
    <ButtonGroup color="info" size="large">
      {platforms.map(platform => (
        <Button
          sx={{
            px: 3,
            borderBottom: 0,
            borderRadius: "20px 20px 0 0",
            textTransform: "none",
            "&:hover": {
              borderBottom: 0,
            },
          }}
        >
          {platform}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default PlatformButtons;
