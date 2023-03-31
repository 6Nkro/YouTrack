import { createSlice } from "@reduxjs/toolkit";
import { SearchState } from "../../types/state";

const initialState: SearchState = {
  query: "",
  platform: "YouTube",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setPlatform: (state, action) => {
      state.platform = action.payload;
    },
  },
});

export const { setQuery, setPlatform } = searchSlice.actions;
export default searchSlice.reducer;
