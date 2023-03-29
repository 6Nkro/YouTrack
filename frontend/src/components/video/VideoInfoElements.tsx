import React from "react";
import { Chip } from "@mui/material";
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

export const DisplayTags: React.FC<{ tags: string[] }> = ({ tags }) => (
  <CustomScrollbar
    sx={{
      display: "flex",
      overflowX: "auto",
      whiteSpace: "nowrap",
      my: 1,
      pb: 1.5,
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
