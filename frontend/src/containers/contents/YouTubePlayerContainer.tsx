import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";

interface YouTubePlayerProps {
  videoId: string;
  onReady?: (event: { target: any }) => void;
}

const YouTubePlayerContainer = ({ videoId, onReady }: YouTubePlayerProps) => {
  const _onReady = (event: { target: any }) => {
    if (onReady) {
      onReady(event);
    }
  };

  const [height, setHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const currentWidth = containerRef.current.clientWidth;
        setHeight(currentWidth * 0.5625);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const opts = {
    width: "100%",
    height: height.toString(),
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div ref={containerRef}>
      <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
    </div>
  );
};

export default YouTubePlayerContainer;
