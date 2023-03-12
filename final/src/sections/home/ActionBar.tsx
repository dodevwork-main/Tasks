import { FC, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ModalAddTask from "./ModalAddTask";
import useAppDispatch from "../../hooks/useAppDispatch";
import { resetTask } from "../../store/slices/task";

const ActionBar: FC = () => {
  const dispatch = useAppDispatch();
  const [modalAddTask, setModalAddTask] = useState<boolean>(false);

  const handleModalAddTask = () => {
    setModalAddTask((prevState) => !prevState);
  };

  const handleDeleteAll = () => {
    dispatch(resetTask());
  };

  return (
    <Stack direction="row" justifyContent="center" alignItems="center" mb={{ md: 3, xs: 1.5 }} spacing={2}>
      <Button variant="contained" onClick={handleModalAddTask} fullWidth>
        Add Task
      </Button>

      <Button variant="contained" onClick={handleDeleteAll} fullWidth>
        Delete All
      </Button>

      {modalAddTask && <ModalAddTask closeModal={handleModalAddTask} />}
    </Stack>
  );
};

export default ActionBar;
