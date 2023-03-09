import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import {addTask} from "../store/slices/task.js";


const ModalAddTask = ({closeModal}) => {
    const dispatch = useDispatch();
    const [taskTitle, setTaskTitle] = useState("");
    const inputRef = useRef(null);

    const handleTaskTitle = (e) => {
        setTaskTitle(e.target.value);
    };

    const handleAddTask = (e) => {
        e.preventDefault();

        if (taskTitle) {
            const task = {
                id: `${Date.now()}`,
                title: taskTitle
            };

            dispatch(addTask({task}));
        }

        closeModal();
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            inputRef.current.focus();
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <Dialog
            maxWidth="sm"
            onClose={closeModal}
            open={true}
            fullWidth
        >
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
                    <Button
                        variant="contained"
                        onClick={closeModal}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Add
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default ModalAddTask;