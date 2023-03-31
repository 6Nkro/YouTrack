import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ReplyIcon from "@mui/icons-material/Reply";
import {
  EllipsisText,
  Separator,
  ExpendableText,
} from "../commons/CustomTypographys";
import {
  timeAgo,
  formatViewCount,
  formatKakaoVideoUrl,
} from "../../utils/formatData";
import { DisplayTags } from "../video/VideoInfoElements";
import { IconTextButton } from "../commons/CustomButtons";
import ResponsiveHeightContainer from "../../containers/commons/ResponsiveHeightContainer";
import { YouTubePlayer, CommonVideoPlayer } from "../video/VideoPlayers";
import { CommonVideoData, Platform } from "../../../../types/common";

interface SelectedCardProps {
  video: CommonVideoData;
  platform: Platform;
}

const SelectedCard: React.FC<SelectedCardProps> = ({ video, platform }) => {
  const { id, title, author, viewCount, publishedAt, description, tags } =
    video;

  const videoMap = {
    YouTube: <YouTubePlayer videoId={id} />,
    kakao: <CommonVideoPlayer url={formatKakaoVideoUrl(id)} />,
  };

  const textElementProps = [
    author,
    `조회수 ${formatViewCount(viewCount)}회`,
    timeAgo(publishedAt),
  ];

  const iconTextButtonProps = [
    { text: "저장", icon: <PlaylistAddIcon color="action" /> },
    { text: "공유", icon: <ReplyIcon color="action" /> },
  ];

  return (
    <Card sx={{ width: "75%", my: 2 }}>
      <CardMedia>
        <ResponsiveHeightContainer
          element={videoMap[platform]}
          ratio={9 / 16}
        />
      </CardMedia>
      <CardContent>
        <EllipsisText text={title} variant="h6" />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {textElementProps.map((text, index) => (
            <React.Fragment key={index}>
              <EllipsisText
                text={text}
                variant="subtitle1"
                color="text.secondary"
              />
              {textElementProps.length - 1 > index && (
                <Separator variant="subtitle1" color="text.secondary" />
              )}
            </React.Fragment>
          ))}
          <Box sx={{ flexGrow: 1 }} />
          {iconTextButtonProps.map(({ text, icon }) => (
            <IconTextButton
              key={text}
              size="small"
              icon={icon}
              text={
                <Typography variant="subtitle2" color="text.secondary">
                  {text}
                </Typography>
              }
            />
          ))}
        </Box>
        {tags ? <DisplayTags tags={tags} /> : null}
        <Divider sx={{ my: 1.5 }} />
        <ExpendableText text={description} />
      </CardContent>
    </Card>
  );
};

export default SelectedCard;
