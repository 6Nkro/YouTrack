import React from "react";
import { Typography, Box, Chip } from "@mui/material";
import { timeAgo } from "../../utils/timeAgo";
import CustomScrollbar from "../commons/CustomScrollBar";

interface ThumbNailProps {
  url: string;
  title: string;
}

export const ThumbNail: React.FC<ThumbNailProps> = ({ url, title }) => (
  <img
    src={url}
    alt={title}
    style={{
      width: 240,
      height: 160,
    }}
  />
);

interface TitleProps {
  text: string;
  lineClamp: number;
}
export const Title: React.FC<TitleProps> = ({ text, lineClamp }) => (
  <Typography
    component="div"
    variant="h6"
    sx={{
      display: "-webkit-box",
      WebkitLineClamp: lineClamp,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }}
  >
    {text}
  </Typography>
);

export const ChannelTitle: React.FC<{ text: string }> = ({ text }) => (
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

export const DisplayDate: React.FC<{ text: string }> = ({ text }) => {
  const dateFormat = timeAgo(text);
  return (
    <Typography variant="subtitle2" color="text.secondary" component="div">
      {dateFormat}
    </Typography>
  );
};

export const DisplayTags: React.FC<{ tags: string[] }> = ({ tags }) => (
  <CustomScrollbar
    sx={{
      display: "flex",
      overflowX: "auto",
      whiteSpace: "nowrap",
      my: 1,
      pb: 1,
    }}
  >
    {tags.map(tag => (
      <Chip
        key={tag}
        label={tag}
        sx={{
          mr: 1,
        }}
      />
    ))}
  </CustomScrollbar>
);
