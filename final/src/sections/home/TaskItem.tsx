import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FC, memo, useMemo } from "react";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";
import { getTask } from "../../store/slices/task";
import { TaskId } from "../../types";
import PATHS from "../../routes/paths";

interface TaskProps {
  taskId: TaskId;
  checked: TaskId[];
  handleCheck: Function;
  isDone: boolean;
}

const TaskItem: FC<TaskProps> = ({ taskId, isDone, handleCheck, checked }) => {
  const navigate = useNavigate();
  const task = useAppSelector(getTask(taskId));
  const isChecked = useMemo(() => checked.includes(taskId), [checked]);

  const handleTask = () => {
    navigate(PATHS.task(taskId));
  };

  return (
    <Stack component="li" direction="row" justifyContent="center" alignItems="center">
      <Checkbox checked={isChecked} onChange={() => handleCheck(taskId, isChecked)} />

      <Button
        color={isDone ? "success" : "primary"}
        sx={{ justifyContent: "start", borderRadius: "0" }}
        size="large"
        onClick={handleTask}
        fullWidth
      >
        <Typography
          variant="h6"
          component="p"
          textTransform="none"
          textAlign="start"
          sx={{ inlineSize: "100%", wordBreak: "break-all" }}
        >
          {task?.title}
        </Typography>
      </Button>
    </Stack>
  );
};

export default memo(TaskItem);
