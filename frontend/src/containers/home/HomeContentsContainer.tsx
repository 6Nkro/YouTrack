import React, { useState } from "react";
import SearchResultCard from "../../components/home/SearchResultCard";
import SelectedCard from "../../components/home/SelectedCard";
import { YouTubeVideoProps } from "../../types/youtube";

const HomeContentsContainer: React.FC<{
  videos: YouTubeVideoProps[];
}> = ({ videos }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleCardClick = (id: string | null) => {
    setSelectedId(selectedId !== id ? id : null);
  };

  return (
    <>
      {videos.map(video => (
        <React.Fragment key={video.id}>
          {video.id === selectedId ? (
            <SelectedCard video={video} />
          ) : (
            <SearchResultCard
              video={video}
              onClick={() => handleCardClick(video.id)}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default HomeContentsContainer;
