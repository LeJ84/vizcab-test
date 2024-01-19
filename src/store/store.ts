import { configureStore } from "@reduxjs/toolkit";
import buildingsReducer from "./buildings";

export const store = configureStore({
  reducer: {
    buildings: buildingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
