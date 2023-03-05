import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import {addTodo} from "../store/slices/task.js";


const ModalAddTodo = ({closeModal}) => {
    const dispatch = useDispatch();
    const [todoTitle, setTodoTitle] = useState("");
    const inputRef = useRef(null);

    const handleTodoTitle = (e) => {
        setTodoTitle(e.target.value);
    };

    const handleAddTodo = (e) => {
        e.preventDefault();

        if (todoTitle) {
            const todo = {
                id: `${Date.now()}`,
                title: todoTitle
            };

            dispatch(addTodo({todo}));
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
            <form onSubmit={handleAddTodo}>
                <DialogTitle>Add Todo</DialogTitle>

                <DialogContent>
                    <TextField
                        defaultValue={todoTitle}
                        onChange={handleTodoTitle}
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

export default ModalAddTodo;