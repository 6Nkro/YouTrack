import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import VideoPlayerContainer from "../video/VideoPlayerContainer";
import {
  CommonVideoPlayer,
  YouTubePlayer,
} from "../../components/video/VideoPlayers";
import { formatKakaoVideoUrl } from "../../utils/formatData";

const PlayListContainer = () => {
  const playList = useSelector((state: RootState) => state.playList.items);
  console.log(playList);
  if (!playList.length) {
    return null;
  }
  const { id, platform } = playList[0];

  const videoPlayerMap = {
    YouTube: () => <YouTubePlayer videoId={id} />,
    kakao: () => <CommonVideoPlayer url={formatKakaoVideoUrl(id)} />,
  };

  return (
    <VideoPlayerContainer element={videoPlayerMap[platform]()} ratio={9 / 16} />
  );
};

export default PlayListContainer;
