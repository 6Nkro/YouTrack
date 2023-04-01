import { createSlice } from "@reduxjs/toolkit";
import {
  loadPlayListStateFromLocal,
  savePlayListStateToLocal,
} from "../localStorage";
import { PlayListState } from "../../types/state";

const initialState: PlayListState = loadPlayListStateFromLocal() || {
  items: [],
};

const playListSlice = createSlice({
  name: "playList",
  initialState,
  reducers: {
    setPlayList: (state, action) => {
      state.items.push(action.payload);
      savePlayListStateToLocal(state);
    },
  },
});

export const { setPlayList } = playListSlice.actions;
export default playListSlice.reducer;
