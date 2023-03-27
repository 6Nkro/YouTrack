import React, { MouseEventHandler } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { ThumbNail } from "../commons/VideoInfoElements";
import { LineClampText, EllipsisText } from "../commons/CustomTypography";
import { timeAgo } from "../../utils/timeAgo";

interface YouTubeSearchResultCardProps {
  snippet: any;
  onClick: MouseEventHandler<HTMLElement>;
}

const SearchResultCard: React.FC<YouTubeSearchResultCardProps> = ({
  snippet,
  onClick,
}) => {
  const { thumbnails, title, channelTitle, publishedAt } = snippet;

  return (
    <Card sx={{ width: "75%", my: 1, boxShadow: "none" }} onClick={onClick}>
      <CardActionArea>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <CardMedia>
            <ThumbNail url={thumbnails.medium.url} title={title} />
          </CardMedia>
          <CardContent sx={{ pt: 1 }}>
            <LineClampText variant="h6" text={title} lineClamp={2} />
            <EllipsisText
              text={channelTitle}
              variant="subtitle1"
              color="text.secondary"
            />
            <EllipsisText
              text={timeAgo(publishedAt)}
              variant="subtitle2"
              color="text.secondary"
            />
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default SearchResultCard;
