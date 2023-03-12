import { FC } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { TaskId } from "../../types";
import useAppDispatch from "../../hooks/useAppDispatch";
import { deleteTasks, setDone, setTodo } from "../../store/slices/task";

interface SelectedActionsProps {
  checked: TaskId[];
  resetCheck: () => void;
  isDone: boolean;
}

const SelectedActions: FC<SelectedActionsProps> = ({ checked, resetCheck, isDone }) => {
  const dispatch = useAppDispatch();

  const handleMake = () => {
    if (isDone) {
      dispatch(setTodo({ taskIds: checked }));
    } else {
      dispatch(setDone({ taskIds: checked }));
    }
    resetCheck();
  };

  const handleDelete = () => {
    dispatch(deleteTasks({ taskIds: checked }));

    resetCheck();
  };

  const handleReset = () => {
    resetCheck();
  };

  if (checked.length === 0) return null;

  return (
    <Stack direction="row">
      <Button variant="contained" sx={{ borderRadius: "0" }} onClick={handleMake} fullWidth>
        Make {isDone ? "Todo" : "Done"}
      </Button>
      <Button variant="contained" sx={{ borderRadius: "0" }} onClick={handleDelete} fullWidth>
        Delete
      </Button>
      <Button variant="contained" sx={{ borderRadius: "0" }} onClick={handleReset} fullWidth>
        Reset
      </Button>
    </Stack>
  );
};

export default SelectedActions;
