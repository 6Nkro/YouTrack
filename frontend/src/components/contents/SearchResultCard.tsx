import React, { MouseEventHandler } from "react";
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
} from "./VideoInfoElements";

interface YouTubeSearchResultCardProps {
  snippet: any;
  onClick: MouseEventHandler<HTMLElement>;
}

const SearchResultCard = ({
  snippet,
  onClick,
}: YouTubeSearchResultCardProps) => {
  const { thumbnails, title, channelTitle, publishedAt } = snippet;

  return (
    <Card sx={{ width: "75%", mb: 1, boxShadow: "none" }} onClick={onClick}>
      <CardActionArea>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <CardMedia>
            <ThumbNail url={thumbnails.medium.url} title={title} />
          </CardMedia>
          <CardContent sx={{ pt: 1 }}>
            <Title text={title} lineClamp={2} />
            <ChannelTitle text={channelTitle} />
            <DisplayDate text={publishedAt} />
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default SearchResultCard;
