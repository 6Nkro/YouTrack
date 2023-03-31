import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchResultCard from "../../components/home/SearchResultCard";
import SelectedCard from "../../components/home/SelectedCard";
import { useSearch } from "../../hooks/useSearch";
import { RootState } from "../../store/store";

const SearchResultContainer = () => {
  const params = useSelector((state: RootState) => state.search);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { data, isLoading, isError } = useSearch(params);

  console.log({ params, data, isLoading });
  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const handleCardClick = (id: string | null) => {
    setSelectedId(selectedId !== id ? id : null);
  };

  return (
    <>
      {data.map(video => (
        <React.Fragment key={video.id}>
          {video.id === selectedId ? (
            <SelectedCard video={video} platform={video.platform} />
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

export default SearchResultContainer;
