import React from "react";
import { Button, ButtonGroup, useTheme } from "@mui/material";
import { Platforms } from "../../containers/home/PlatformButtonsContainer";

interface PlatformButtonsProps {
  platforms: Platforms;
  onClick: (platform: string) => void;
}

const PlatformButtons: React.FC<PlatformButtonsProps> = ({
  platforms,
  onClick,
}) => {
  const isNightMode = useTheme().palette.mode === "dark";

  return (
    <ButtonGroup
      color="info"
      size="large"
      sx={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        bottom: "0px",
        zIndex: 2,
        borderRadius: "20px 20px 0 0",
        backgroundColor: isNightMode ? "#121212" : "white",
      }}
    >
      {platforms.map(platform => (
        <Button
          onClick={() => onClick(platform)}
          key={platform}
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
