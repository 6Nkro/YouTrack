import React, { useEffect } from "react";
import { useYouTubeSearch } from "../../hooks/useYouTubeSearch";
import YouTubeSearchResultCard from "../../components/contents/YouTubeSearchResultCard";

const YouTubeSearchResultContainer = () => {
  const searchResult = useYouTubeSearch();
  const { data, isLoading, isError, refetch } = searchResult;

  useEffect(() => {
    if (!data) {
      refetch();
    }
  }, [data, refetch]);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <>
      {data.items.map((item: any) => (
        <YouTubeSearchResultCard key={item.id.videoId} snippet={item.snippet} />
      ))}
    </>
  );
};

export default YouTubeSearchResultContainer;
