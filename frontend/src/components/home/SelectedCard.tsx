import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Divider,
  Chip,
} from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ReplyIcon from "@mui/icons-material/Reply";
import {
  EllipsisText,
  ExpendableText,
  TextWithSeparator,
} from "../commons/CustomTypographys";
import { timeAgo, formatKakaoVideoUrl } from "../../utils/formatData";
import { ActionButton, TagsScrollbar } from "../video/VideoInfoElements";
import VideoPlayerContainer from "../../containers/video/VideoPlayerContainer";
import { YouTubePlayer, CommonVideoPlayer } from "../video/VideoPlayers";
import { CommonVideoData } from "../../../../types/common";

interface SelectedCardProps {
  video: CommonVideoData;
  onTagClick: (tag: string) => void;
  onSaveClick: (video: CommonVideoData) => void;
}

const SelectedCard: React.FC<SelectedCardProps> = ({
  video,
  onTagClick,
  onSaveClick,
}) => {
  const {
    id,
    title,
    author,
    viewCount,
    publishedAt,
    description,
    tags,
    platform,
  } = video;

  const textElementProps = [
    author,
    `조회수 ${viewCount}회`,
    timeAgo(publishedAt),
  ];

  const actionButtonProps = [
    {
      text: "저장",
      icon: <PlaylistAddIcon color="action" />,
      onClick: () => onSaveClick(video),
    },
    { text: "공유", icon: <ReplyIcon color="action" />, onClick: () => false },
  ];

  const videoPlayerMap = {
    YouTube: () => <YouTubePlayer videoId={id} />,
    kakao: () => <CommonVideoPlayer url={formatKakaoVideoUrl(id)} />,
  };

  const actionButtons = actionButtonProps.map(({ text, icon, onClick }) => (
    <React.Fragment key={text}>
      <ActionButton text={text} icon={icon} onClick={onClick} />
    </React.Fragment>
  ));

  const displayTags = tags && (
    <TagsScrollbar>
      {tags.map(tag => (
        <Chip
          key={tag}
          label={tag}
          sx={{ mr: 1 }}
          onClick={() => onTagClick(tag)}
        />
      ))}
    </TagsScrollbar>
  );

  return (
    <Card sx={{ width: "75%", my: 2 }}>
      <CardMedia>
        <VideoPlayerContainer
          element={videoPlayerMap[platform]()}
          ratio={9 / 16}
        />
      </CardMedia>
      <CardContent>
        <EllipsisText variant="h6">{title}</EllipsisText>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextWithSeparator
            texts={textElementProps}
            variant="subtitle1"
            color="text.secondary"
          />
          <Box sx={{ flexGrow: 1 }} />
          {actionButtons}
        </Box>
        {displayTags}
        <Divider sx={{ my: 1.5 }} />
        <ExpendableText text={description} />
      </CardContent>
    </Card>
  );
};

export default SelectedCard;
