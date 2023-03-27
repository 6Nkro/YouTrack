import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import {
  ThumbNail,
  Title,
  ChannelTitle,
  DisplayDate,
} from "./YouTubeSearchResultElements";

const YouTubeSearchResultCard = ({ snippet }: any) => {
  const { thumbnails, title, publishedAt, channelTitle } = snippet;

  return (
    <Card sx={{ width: "80%", mb: 1, boxShadow: "none" }}>
      <CardActionArea>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <CardMedia>
            <ThumbNail url={thumbnails.medium.url} title={title} />
          </CardMedia>
          <Box sx={{ width: "100%" }}>
            <CardContent sx={{ pt: 1 }}>
              <Title text={title} />
              <ChannelTitle text={channelTitle} />
              <DisplayDate text={publishedAt} />
            </CardContent>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default YouTubeSearchResultCard;
