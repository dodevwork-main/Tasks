import { configureStore } from "@reduxjs/toolkit";
import task from "./slices/task/task";

const setupStore = (preloadedState) =>
  configureStore({
    reducer: {
      task,
    },
    preloadedState,
  });

export default setupStore;
