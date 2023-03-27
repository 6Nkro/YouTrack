import React, { useEffect } from "react";
import { useYouTubeSearch } from "../../hooks/useYouTubeSearch";
import SearchResultCard from "../../components/contents/SearchResultCard";
import { tmpData } from "../../utils/tmpData";
import SearchResultCardContainer from "./SearchResultCardContainer";

const YouTubeSearchResultContainer = () => {
  // const searchResult = useYouTubeSearch();
  // const { data, isLoading, isError, refetch } = searchResult;
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

  const data = tmpData();

  console.log(data);

  return <SearchResultCardContainer data={data} />;
};

export default YouTubeSearchResultContainer;
