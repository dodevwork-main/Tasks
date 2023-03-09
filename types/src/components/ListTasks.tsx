import Stack from "@mui/material/Stack";
import { FC } from "react";
import Task from "./Task";
import { TaskId } from "../types";

interface ListTasksProps {
  taskIds: TaskId[];
  isDone?: boolean;
}

const ListTasks: FC<ListTasksProps> = ({ taskIds, isDone = false }) => (
  <Stack sx={{ height: "100%", overflow: "auto" }}>
    <Stack>
      {taskIds?.map((taskId) => (
        <Stack key={taskId}>
          <Task taskId={taskId} isDone={isDone} />
        </Stack>
      ))}
    </Stack>
  </Stack>
);

export default ListTasks;
