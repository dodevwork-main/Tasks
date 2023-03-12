import { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { addTask } from "../../store/slices/task";
import useAppDispatch from "../../hooks/useAppDispatch";
import { Task } from "../../types";
import useInputFocus from "../../hooks/useInputFocus";

interface ModalAddTaskProps {
  closeModal: () => void;
}

const ModalAddTask: FC<ModalAddTaskProps> = ({ closeModal }) => {
  const dispatch = useAppDispatch();
  const [taskTitle, setTaskTitle] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();

    if (taskTitle) {
      const task: Task = {
        id: `${Date.now()}`,
        title: taskTitle,
      };

      dispatch(addTask({ task }));
    }

    closeModal();
  };

  useInputFocus({ inputRef });

  return (
    <Dialog maxWidth="sm" onClose={closeModal} open fullWidth>
      <form onSubmit={handleAddTask}>
        <DialogTitle>Add Task</DialogTitle>

        <DialogContent>
          <TextField
            defaultValue={taskTitle}
            onChange={handleTaskTitle}
            inputRef={inputRef}
            margin="dense"
            label="Title"
            type="text"
            variant="standard"
            autoComplete="off"
            fullWidth
          />
        </DialogContent>

        <DialogActions>
          <Button variant="contained" onClick={closeModal}>
            Cancel
          </Button>

          <Button variant="contained" type="submit">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ModalAddTask;
