import { createSlice } from "@reduxjs/toolkit";

interface CommonState {
  nightMode: boolean;
  sideBar: boolean;
}

const initialState: CommonState = {
  nightMode: false,
  sideBar: true,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleNightMode: state => {
      state.nightMode = !state.nightMode;
    },
    toggleSideBar: state => {
      state.sideBar = !state.sideBar;
    },
  },
});

export const { toggleNightMode, toggleSideBar } = commonSlice.actions;
export default commonSlice.reducer;
