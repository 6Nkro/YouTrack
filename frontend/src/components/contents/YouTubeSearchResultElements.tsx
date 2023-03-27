import React from "react";
import { Typography } from "@mui/material";
import { timeAgo } from "../../utils/timeAgo";

interface ThumbNailProps {
  url: string;
  title: string;
}

export const ThumbNail = ({ url, title }: ThumbNailProps) => (
  <img
    src={url}
    alt={title}
    style={{
      width: 240,
      height: 160,
    }}
  />
);

export const Title = ({ text }: { text: string }) => (
  <Typography
    component="div"
    variant="h6"
    sx={{
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }}
  >
    {text}
  </Typography>
);

export const ChannelTitle = ({ text }: { text: string }) => (
  <Typography
    variant="subtitle1"
    color="text.secondary"
    component="div"
    sx={{
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    }}
  >
    {text}
  </Typography>
);

export const DisplayDate = ({ text }: { text: string }) => {
  const dateFormat = timeAgo(text);
  return (
    <Typography variant="subtitle2" color="text.secondary" component="div">
      {dateFormat}
    </Typography>
  );
};
