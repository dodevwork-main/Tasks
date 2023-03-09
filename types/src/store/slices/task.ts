import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Task, TaskId } from "../../types";
import removeArrayItemByValue from "../../utils/removeArrayItemByValue";
import { RootState } from "../store";

export interface TaskState {
  collection: Task[];
  todo: TaskId[];
  done: TaskId[];
}

const initialState: TaskState = {
  collection: [],
  todo: [],
  done: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ task: Task }>) => {
      const { task } = action.payload;

      state.collection.push(task);
      state.todo.push(task.id);
    },
    setDone: (state, action: PayloadAction<{ id: TaskId }>) => {
      const { id } = action.payload;

      removeArrayItemByValue(state.todo, id);

      state.done.push(id);
    },
    setTodo: (state, action: PayloadAction<{ id: TaskId }>) => {
      const { id } = action.payload;

      removeArrayItemByValue(state.done, id);

      state.todo.push(id);
    },
  },
});

export const getTask =
  (id: TaskId) =>
  (state: RootState): Task | undefined =>
    state.task.collection.find((task) => task.id === id);

export const getTodo = (state: RootState) => state.task.todo;

export const getDone = (state: RootState) => state.task.done;

export const { addTask, setTodo, setDone } = taskSlice.actions;

export default taskSlice.reducer;
