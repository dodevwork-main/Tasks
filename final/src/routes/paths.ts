import { TaskId } from "../types";

const PATHS = {
  root: "/",
  page404: "/404",
  task: (id: TaskId): string => `/task/${id}`,
};

export default PATHS;
