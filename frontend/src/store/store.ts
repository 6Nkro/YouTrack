import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./slices/commonSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    common: commonReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
