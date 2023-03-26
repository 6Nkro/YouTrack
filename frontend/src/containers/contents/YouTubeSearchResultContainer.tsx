import React, { useEffect } from "react";
import { useYouTubeSearch } from "../../hooks/useYouTubeSearch";

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
    <div>
      {data.items.map((item: any) => (
        <div key={item.id}>{item.snippet.title}</div>
      ))}
    </div>
  );
};

export default YouTubeSearchResultContainer;
