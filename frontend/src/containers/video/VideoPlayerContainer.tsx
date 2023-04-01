import React, { useEffect, useRef, useState } from "react";

interface ResponsiveHeightContainerProps {
  element: React.ReactElement;
  ratio: number;
}

const VideoPlayerContainer: React.FC<ResponsiveHeightContainerProps> = ({
  element,
  ratio,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(0);
  const [updatedElement, setUpdatedElement] =
    useState<React.ReactElement>(element);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const currentWidth = containerRef.current.clientWidth;
        setHeight(currentWidth * ratio);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [ratio]);

  useEffect(() => {
    setUpdatedElement(React.cloneElement(element, { height }));
  }, [element, height]);

  return <div ref={containerRef}>{updatedElement}</div>;
};

export default VideoPlayerContainer;
