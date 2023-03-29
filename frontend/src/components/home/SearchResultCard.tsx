import React, { MouseEventHandler } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { ThumbNail } from "../video/VideoInfoElements";
import {
  LineClampText,
  EllipsisText,
  Separator,
} from "../commons/CustomTypographys";
import { timeAgo, formatViewCount } from "../../utils/formatData";
import { YouTubeVideoProps } from "../../types/youtube";

interface YouTubeSearchResultCardProps {
  video: YouTubeVideoProps;
  onClick: MouseEventHandler<HTMLElement>;
}

const SearchResultCard: React.FC<YouTubeSearchResultCardProps> = ({
  video,
  onClick,
}) => {
  const { thumbnail, title, publishedAt, viewCount, author } = video;

  return (
    <Card sx={{ width: "75%", my: 1, boxShadow: "none" }} onClick={onClick}>
      <CardActionArea>
        <Box sx={{ display: "flex" }}>
          <CardMedia>
            <ThumbNail url={thumbnail} title={title} />
          </CardMedia>
          <CardContent sx={{ pt: 1 }}>
            <LineClampText variant="h6" text={title} lineClamp={2} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EllipsisText
                text={`조회수 ${formatViewCount(viewCount)}회`}
                variant="subtitle2"
                color="text.secondary"
              />
              <Separator />
              <EllipsisText
                text={timeAgo(publishedAt)}
                variant="subtitle2"
                color="text.secondary"
              />
            </Box>
            <EllipsisText
              text={author}
              variant="subtitle1"
              color="text.secondary"
            />
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default SearchResultCard;
