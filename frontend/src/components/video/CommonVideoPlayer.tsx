import React from "react";

interface CommonVideoPlayerProps {
  url: string;
  height: number;
}

const CommonVideoPlayer: React.FC<CommonVideoPlayerProps> = ({
  url,
  height,
}) => {
  return <iframe width="100%" height={height} src={url} allowFullScreen />;
};

export default CommonVideoPlayer;
