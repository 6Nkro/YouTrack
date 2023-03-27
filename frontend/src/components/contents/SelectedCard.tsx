import React from "react";
import { Card, CardContent, CardMedia, Box, Divider } from "@mui/material";
import {
  Title,
  ChannelTitle,
  DisplayDate,
  DisplayTags,
} from "./VideoInfoElements";
import YouTubePlayerContainer from "../../containers/contents/YouTubePlayerContainer";
import Separator from "../commons/Separator";
import ExpendableText from "../commons/ExpendableText";

interface SelectedCardProps {
  snippet: any;
  videoId: string;
}

const SelectedCard = ({ snippet, videoId }: SelectedCardProps) => {
  const { title, channelTitle, publishedAt, description } = snippet;
  const tags = snippet.tags ? snippet.tags : [];

  return (
    <Card sx={{ width: "75%", mb: 1 }}>
      <CardMedia>
        <YouTubePlayerContainer videoId={videoId} />
      </CardMedia>
      <CardContent>
        <Title text={title} lineClamp={1} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ChannelTitle text={channelTitle} />
          <Separator />
          <DisplayDate text={publishedAt} />
        </Box>
        <DisplayTags tags={tags} />
        <Divider sx={{ my: 1.5 }} />
        <ExpendableText text={description} />
      </CardContent>
    </Card>
  );
};

export default SelectedCard;
