import { FC } from "react";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import { Task } from "../sections/task";

const TaskPage: FC = () => {
  const { id } = useParams();

  if (!id) return null;

  return (
    <Stack height="100%">
      <Task taskId={id} />
    </Stack>
  );
};

export default TaskPage;
