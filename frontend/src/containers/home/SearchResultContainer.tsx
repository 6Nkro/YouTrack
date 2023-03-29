import React, { useEffect } from "react";
import { useYouTubeSearch } from "../../hooks/useYouTubeSearch";
import { tmpYouTubeData } from "../../utils/tmpData";
import HomeContentsContainer from "./HomeContentsContainer";
import { useLocation } from "react-router-dom";

const SearchResultContainer = () => {
  // const searchResult = useYouTubeSearch();
  // const { data, isLoading, isError, refetch } = searchResult;
  //
  // const path = useLocation().pathname;
  //
  // useEffect(() => {
  //   if (!data) {
  //     refetch();
  //   }
  // }, [data, refetch]);
  //
  // if (isLoading || !data) {
  //   return <div>Loading...</div>;
  // }
  //
  // if (isError) {
  //   return <div>Error</div>;
  // }

  const data = tmpYouTubeData();

  // console.log(path);

  console.log(data);

  return <HomeContentsContainer videos={data} />;
};

export default SearchResultContainer;
