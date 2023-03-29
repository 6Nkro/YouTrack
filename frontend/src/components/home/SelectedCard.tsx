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
  EllipsisText,
  Separator,
  ExpendableText,
} from "../commons/CustomTypographys";
import { timeAgo, formatViewCount } from "../../utils/formatData";
import { DisplayTags } from "../commons/VideoInfoElements";
import { IconTextButton } from "../commons/CustomButtons";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ReplyIcon from "@mui/icons-material/Reply";

import { YouTubeVideoProps } from "../../types/videoProps";

const SelectedCard: React.FC<{ video: YouTubeVideoProps }> = ({ video }) => {
  const { id, title, author, viewCount, publishedAt, description, tags } =
    video;

  return (
    <Card sx={{ width: "75%", my: 2 }}>
      <CardMedia>
        <ResponsiveHeightContainer
          element={<YouTubePlayer videoId={id} />}
          ratio={9 / 16}
        />
      </CardMedia>
      <CardContent>
        <EllipsisText text={title} variant="h6" />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <EllipsisText
            text={author}
            variant="subtitle1"
            color="text.secondary"
          />
          <Separator variant="subtitle1" color="text.secondary" />
          <EllipsisText
            text={`조회수 ${formatViewCount(viewCount)}회`}
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
