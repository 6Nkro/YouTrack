import React from "react";
import ReactPlayer from "react-player";

interface YouTubePlayerProps {
  videoId: string;
  onReady?: () => void;
  height?: number;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoId,
  onReady,
  height,
}) => {
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${videoId}`}
      width="100%"
      height={height}
      playing
      controls={true}
      onReady={onReady}
    />
  );
};

export default React.memo(YouTubePlayer);
