import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import { YouTubePlayer } from "../commons/VideoPlayer";
import ResponsiveHeightContainer from "../../containers/commons/ResponsiveHeightContainer";
import {
  LineClampText,
  EllipsisText,
  Separator,
  ExpendableText,
} from "../commons/CustomTypographys";
import { timeAgo } from "../../utils/timeAgo";
import { DisplayTags } from "../commons/VideoInfoElements";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ReplyIcon from "@mui/icons-material/Reply";
import { IconTextButton } from "../commons/CustomButtons";

interface SelectedCardProps {
  snippet: any;
  videoId: string;
}

const SelectedCard: React.FC<SelectedCardProps> = ({ snippet, videoId }) => {
  const { title, channelTitle, publishedAt, description, tags } = snippet;

  return (
    <Card sx={{ width: "75%", my: 2 }}>
      <CardMedia>
        <ResponsiveHeightContainer
          element={<YouTubePlayer videoId={videoId} />}
          ratio={9 / 16}
        />
      </CardMedia>
      <CardContent>
        <LineClampText variant="h6" text={title} lineClamp={1} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <EllipsisText
            text={channelTitle}
            variant="subtitle1"
            color="text.secondary"
          />
          <Separator variant="subtitle1" color="text.secondary" />
          <EllipsisText
            text={timeAgo(publishedAt)}
            variant="subtitle1"
            color="text.secondary"
          />
          <Box sx={{ flexGrow: 1 }} />
          <IconTextButton
            size="small"
            icon={<PlaylistAddIcon color="action" />}
            text={
              <Typography variant="subtitle2" color="text.secondary">
                저장
              </Typography>
            }
          />
          <IconTextButton
            size="small"
            icon={<ReplyIcon color="action" />}
            text={
              <Typography variant="subtitle2" color="text.secondary">
                공유
              </Typography>
            }
          />
        </Box>
        {tags ? <DisplayTags tags={tags} /> : null}
        <Divider sx={{ my: 1.5 }} />
        <ExpendableText text={description} />
      </CardContent>
    </Card>
  );
};

export default SelectedCard;
