import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FC } from "react";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { getTask, setDone, setTodo } from "../store/slices/task";
import { TaskId } from "../types";

interface TaskProps {
  taskId: TaskId;
  isDone: boolean;
}

const Task: FC<TaskProps> = ({ taskId, isDone }) => {
  const dispatch = useAppDispatch();
  const task = useAppSelector(getTask(taskId));

  const handleTask = () => {
    if (isDone) {
      dispatch(setTodo({ id: taskId }));
    } else {
      dispatch(setDone({ id: taskId }));
    }
  };

  return (
    <Button color={isDone ? "success" : "primary"} size="large" onClick={handleTask}>
      <Typography variant="h6" component="p" textTransform="none">
        {task?.title}
      </Typography>
    </Button>
  );
};

export default Task;
