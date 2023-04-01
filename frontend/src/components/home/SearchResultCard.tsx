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
  TextWithSeparator,
} from "../commons/CustomTypographys";
import { timeAgo } from "../../utils/formatData";
import { CommonVideoData } from "../../../../types/common";

interface YouTubeSearchResultCardProps {
  video: CommonVideoData;
  onClick: MouseEventHandler<HTMLElement>;
}

const SearchResultCard: React.FC<YouTubeSearchResultCardProps> = ({
  video,
  onClick,
}) => {
  const { thumbnail, title, duration, publishedAt, viewCount, author } = video;

  const textElementProps = [`조회수 ${viewCount}회`, timeAgo(publishedAt)];

  return (
    <Card sx={{ width: "75%", my: 1, boxShadow: "none" }} onClick={onClick}>
      <CardActionArea>
        <Box sx={{ display: "flex" }}>
          <CardMedia sx={{ position: "relative", width: 240, height: 160 }}>
            <ThumbNail url={thumbnail} title={title} duration={duration} />
          </CardMedia>
          <CardContent sx={{ pt: 1 }}>
            <LineClampText variant="h6" lineClamp={2} text={title} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextWithSeparator
                texts={textElementProps}
                variant="subtitle2"
                color="text.secondary"
              />
            </Box>
            <EllipsisText variant="subtitle2" color="text.secondary">
              {author}
            </EllipsisText>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default SearchResultCard;
