import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { filterSlice } from "./filterSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;