import { ChangeEvent, FC, useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { editTask } from "../../store/slices/task";
import useAppDispatch from "../../hooks/useAppDispatch";
import { Task } from "../../types";
import useInputFocus from "../../hooks/useInputFocus";

interface EditTaskProps {
  closeModal: () => void;
  task: Task;
}

const ModalEditTask: FC<EditTaskProps> = ({ closeModal, task }) => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>(task.title);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const editedTask: Task = { id: task.id, title: inputValue };

    dispatch(editTask({ editedTask }));

    closeModal();
  };

  useInputFocus({ inputRef });

  return (
    <Dialog maxWidth="sm" onClose={closeModal} open fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Edit Task</DialogTitle>

        <DialogContent>
          <TextField
            defaultValue={inputValue}
            onChange={handleInput}
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
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ModalEditTask;
