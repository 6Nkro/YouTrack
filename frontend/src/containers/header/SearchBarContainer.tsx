import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { getYouTubeSearchResult } from "../../services/YouTubeSearchService";
import { SearchBar } from "../../components/header/AppHeaderElements";

const SearchBarContainer = () => {
  const [value, setValue] = useState("");
  const queryClient = useQueryClient();

  const handleSearch = async () => {
    const data = await getYouTubeSearchResult(value);
    queryClient.setQueryData("searchResult", data);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setValue(event.target.value);
  };

  return (
    <SearchBar value={value} onChange={handleChange} onSearch={handleSearch} />
  );
};

export default SearchBarContainer;
