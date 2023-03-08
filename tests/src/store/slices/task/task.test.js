import taskReducer, { addTask, getDone, getTask, getTodo, initialState, setDone, setTodo } from "./task";

const taskId = "1";
const task = { id: "1", title: "Title" };
const taskIds = ["1", "2", "3"];

test("should return the initial state", () => {
  expect(taskReducer(undefined, { type: undefined })).toEqual(initialState);
});

test("should add Task to store - action addTask", () => {
  expect(taskReducer(undefined, addTask({ task }))).toEqual({
    collection: [task],
    todo: [task.id],
    done: [],
  });
});

test("should delete from Todo and add to Done - action setDone", () => {
  expect(taskReducer({ todo: [taskId], done: [] }, setDone({ id: taskId }))).toEqual({
    todo: [],
    done: [taskId],
  });
});

test("should add to Todo and delete from Done - action setTodo", () => {
  expect(taskReducer({ todo: [], done: [taskId] }, setTodo({ id: taskId }))).toEqual({
    todo: [taskId],
    done: [],
  });
});

test("should return task from store - selector getTask", () => {
  const state = {
    task: taskReducer({ collection: [task] }, { type: undefined }),
  };

  expect(getTask(taskId)(state)).toEqual(task);
});

test("should return todo list of task ids - selector getTodo", () => {
  const state = { task: taskReducer({ todo: taskIds }, { type: undefined }) };

  expect(getTodo(state)).toEqual(taskIds);
});

test("should return done list of task ids - selector getDone", () => {
  const state = { task: taskReducer({ done: taskIds }, { type: undefined }) };

  expect(getDone(state)).toEqual(taskIds);
});
