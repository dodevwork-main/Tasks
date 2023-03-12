import { combineReducers } from "@reduxjs/toolkit";
import task from "./slices/task";
import settings from "./slices/settings";

const rootReducer = combineReducers({
  task,
  settings,
});

export default rootReducer;
