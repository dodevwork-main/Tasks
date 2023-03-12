import { FC, Fragment, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import SelectedActions from "./SelectedActions";
import { TaskId } from "../../types";
import TaskItem from "./TaskItem";
import removeArrayItemByValue from "../../utils/removeArrayItemByValue";

interface CardTasksProps {
  taskIds: TaskId[];
  isDone?: boolean;
}

const CardTasks: FC<CardTasksProps> = ({ taskIds, isDone = false }) => {
  const [checked, setChecked] = useState<TaskId[]>([]);

  const handleCheck = (id: TaskId, isChecked: boolean) => {
    if (isChecked) {
      setChecked((prevState) => removeArrayItemByValue(prevState, id));
    } else {
      setChecked((prevState) => [...prevState, id]);
    }
  };

  const resetCheck = () => {
    setChecked([]);
  };

  return (
    <Card sx={{ minHeight: "100%", maxHeight: "100%", display: "flex", pt: { md: 3, xs: 1.5 } }}>
      <Stack width="100%">
        <Typography variant="h5" align="center" textTransform="uppercase" mb={{ md: 3, xs: 1.5 }}>
          {isDone ? "Done" : "Todo"}
        </Typography>

        <Stack sx={{ height: "100%", overflowY: "auto" }}>
          <Stack component="ul" px={2} height="100%">
            {taskIds?.map((taskId) => (
              <Fragment key={taskId}>
                <TaskItem taskId={taskId} isDone={isDone} checked={checked} handleCheck={handleCheck} />
              </Fragment>
            ))}
          </Stack>
        </Stack>

        <SelectedActions checked={checked} resetCheck={resetCheck} isDone={isDone} />
      </Stack>
    </Card>
  );
};

export default CardTasks;
