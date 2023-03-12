import { FC, useState } from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { TaskId } from "../../types";
import useAppSelector from "../../hooks/useAppSelector";
import { deleteTasks, getTask } from "../../store/slices/task";
import useAppDispatch from "../../hooks/useAppDispatch";
import PATHS from "../../routes/paths";
import ModalEditTask from "./ModalEditTask";

interface TaskProps {
  taskId: TaskId;
}

const Task: FC<TaskProps> = ({ taskId }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const task = useAppSelector(getTask(taskId));
  const [isEditTask, setIsEditTask] = useState<boolean>(false);

  const handleDelete = () => {
    dispatch(deleteTasks({ taskIds: [taskId] }));

    navigate(PATHS.root);
  };

  const handleEdit = () => {
    setIsEditTask((prevState) => !prevState);
  };

  return (
    <Card sx={{ height: "100%", width: "100%", p: 3 }}>
      <Stack height="100%" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            inlineSize: "100%",
            wordBreak: "break-all",
          }}
        >
          {task?.title}
        </Typography>

        <Stack width="100%" direction="row" justifyContent="space-between" alignItems="end">
          <Button variant="contained" onClick={handleEdit}>
            Edit
          </Button>

          {isEditTask && task && <ModalEditTask closeModal={handleEdit} task={task} />}

          <Button variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default Task;
