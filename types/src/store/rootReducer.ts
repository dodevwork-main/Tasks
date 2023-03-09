import { combineReducers } from "@reduxjs/toolkit";
import task from "./slices/task";

const rootReducer = combineReducers({
  task,
});

export default rootReducer;
