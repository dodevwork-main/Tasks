import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Task, TaskId } from "../../types";
import { RootState } from "../store";
import removeArrayItemByValue from "../../utils/removeArrayItemByValue";

interface TaskState {
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
    resetTask: () => initialState,
    addTask: (state, action: PayloadAction<{ task: Task }>) => {
      const { task } = action.payload;

      state.collection.push(task);
      state.todo.push(task.id);
    },
    editTask: (state, action: PayloadAction<{ editedTask: Task }>) => {
      const { editedTask } = action.payload;

      state.collection.forEach((task) => {
        if (task.id === editedTask.id) {
          // eslint-disable-next-line no-param-reassign
          task.title = editedTask.title;
        }
      });
    },
    deleteTasks: (state, action: PayloadAction<{ taskIds: TaskId[] }>) => {
      const { taskIds } = action.payload;

      taskIds.forEach((taskId) => {
        state.collection = state.collection.filter((task) => task.id !== taskId);

        state.todo = removeArrayItemByValue(state.todo, taskId);
        state.done = removeArrayItemByValue(state.done, taskId);
      });
    },
    setDone: (state, action: PayloadAction<{ taskIds: TaskId[] }>) => {
      const { taskIds } = action.payload;

      taskIds.forEach((taskId) => {
        state.todo = removeArrayItemByValue(state.todo, taskId);

        state.done.push(taskId);
      });
    },
    setTodo: (state, action: PayloadAction<{ taskIds: TaskId[] }>) => {
      const { taskIds } = action.payload;

      taskIds.forEach((taskId) => {
        state.done = removeArrayItemByValue(state.done, taskId);

        state.todo.push(taskId);
      });
    },
  },
});

export const getTask =
  (id: TaskId) =>
  (state: RootState): Task | undefined =>
    state.task.collection.find((task: Task) => task.id === id);

export const getTodo = (state: RootState) => state.task.todo;

export const getDone = (state: RootState) => state.task.done;

export const { addTask, setTodo, setDone, resetTask, deleteTasks, editTask } = taskSlice.actions;

export default taskSlice.reducer;
