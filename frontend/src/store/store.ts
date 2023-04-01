import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./slices/commonSlice";
import searchReducer from "./slices/searchSlice";
import playListReducer from "./slices/playListSlice";

export const store = configureStore({
  reducer: {
    common: commonReducer,
    search: searchReducer,
    playList: playListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
