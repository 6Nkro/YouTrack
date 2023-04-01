import React from "react";
import { Box, Typography, styled, Button } from "@mui/material";
import CustomScrollbar from "../commons/CustomScrollBar";

interface ThumbNailProps {
  url: string;
  title: string;
  duration: string;
}

export const ThumbNail: React.FC<ThumbNailProps> = ({
  url,
  title,
  duration,
}) => {
  return (
    <>
      <ThumbNailImage src={url} alt={title} />
      <DurationOverlay duration={duration} />
    </>
  );
};

const ThumbNailImage = styled("img")({
  width: 240,
  height: 160,
});

const DurationOverlay: React.FC<{ duration: string }> = ({ duration }) => (
  <DurationBox>
    <Typography variant="caption" color="white">
      {duration}
    </Typography>
  </DurationBox>
);

const DurationBox = styled(Box)({
  position: "absolute",
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  borderRadius: "8px 0 0 0",
  padding: "2px 8px 0px 8px",
});

interface ActionButtonProps {
  text: string;
  icon: React.ReactElement;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ text, icon }) => (
  <Button
    startIcon={icon}
    variant="text"
    size="small"
    sx={{ textTransform: "none" }}
  >
    <Typography variant="subtitle2" color="text.secondary">
      {text}
    </Typography>
  </Button>
);

export const TagsScrollbar = styled(CustomScrollbar)({
  display: "flex",
  overflowX: "auto",
  whiteSpace: "nowrap",
  padding: "8px 0 12px 0",
});
