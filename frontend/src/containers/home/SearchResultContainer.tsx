import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { RootState } from "../../store/store";
import { useSearch } from "../../hooks/useSearch";
import { setQuery } from "../../store/slices/searchSlice";
import { setPlayList } from "../../store/slices/playListSlice";
import SearchResultCard from "../../components/home/SearchResultCard";
import SelectedCard from "../../components/home/SelectedCard";
import { CommonVideoData } from "../../../../types/common";

const SearchResultContainer = () => {
  const params = useSelector((state: RootState) => state.search);
  const playList = useSelector((state: RootState) => state.playList.items);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { data, isLoading, isError } = useSearch(params);
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

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

  console.log(playList);

  const handleTagClick = (tag: string) => dispatch(setQuery(tag));

  const handleSaveClick = (video: CommonVideoData) => {
    const isUnique = !playList.some(
      item => item.id === video.id && item.platform === video.platform
    );
    if (isUnique) {
      dispatch(setPlayList(video));
    }
    const msg = isUnique
      ? "재생 목록에 저장되었습니다."
      : "이미 재생 목록에 존재합니다.";
    const variant = isUnique ? "success" : "error";
    enqueueSnackbar(msg, { variant });
  };

  return (
    <>
      {data.map(video => (
        <React.Fragment key={video.id}>
          {video.id === selectedId ? (
            <SelectedCard
              video={video}
              onTagClick={handleTagClick}
              onSaveClick={handleSaveClick}
            />
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
