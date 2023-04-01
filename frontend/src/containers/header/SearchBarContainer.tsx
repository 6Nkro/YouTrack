import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../../store/slices/searchSlice";
import { SearchBar } from "../../components/header/AppHeaderElements";

const SearchBarContainer = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const handleSearch: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    dispatch(setQuery(value));
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setValue(event.target.value);
  };

  return (
    <SearchBar value={value} onChange={handleChange} onSearch={handleSearch} />
  );
};

export default SearchBarContainer;
