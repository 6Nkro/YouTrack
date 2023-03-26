import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { timeAgo } from "../../utils/timeAgo";

const YouTubeSearchResultCard = ({ snippet }: any) => {
  const { thumbnails, title, publishedAt, channelTitle } = snippet;
  const displayDate = timeAgo(publishedAt);

  return (
    <Card sx={{ width: "100%", mb: 1, boxShadow: "none" }}>
      <CardActionArea>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <CardMedia>
            <img
              src={thumbnails.medium.url}
              alt={title}
              style={{
                width: 240,
                height: 160,
              }}
            />
          </CardMedia>
          <Box sx={{ width: "100%" }}>
            <CardContent sx={{ pt: 1 }}>
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
                {title}
              </Typography>
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
                {channelTitle}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                {displayDate}
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default YouTubeSearchResultCard;
