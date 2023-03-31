import React from "react";
import ReactPlayer from "react-player";

interface YouTubePlayerProps {
  videoId: string | number;
  onReady?: () => void;
  height?: number;
}

export const YouTubePlayer: React.FC<YouTubePlayerProps> = React.memo(
  ({ videoId, onReady, height }) => {
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
  }
);

interface CommonVideoPlayerProps {
  url: string;
  height?: number;
}

export const CommonVideoPlayer: React.FC<CommonVideoPlayerProps> = React.memo(
  ({ url, height }) => {
    return (
      <iframe
        title="videoPlayer"
        width="100%"
        height={height}
        src={url}
        style={{ border: 0 }}
        allowFullScreen
      />
    );
  }
);
