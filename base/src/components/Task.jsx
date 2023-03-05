import {useDispatch, useSelector} from "react-redux";
import {getTask, setDone, setTodo} from "../store/slices/task.js";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const Task = ({taskId, isDone}) => {
    const dispatch = useDispatch();
    const task = useSelector(getTask(taskId));

    const handleTask = () => {
        if (isDone) {
            dispatch(setTodo({id: taskId}));

        } else {
            dispatch(setDone({id: taskId}));
        }
    };

    return (
        <Button
            color={isDone ? "success" : "primary"}
            size="large"
            onClick={handleTask}
        >
            <Typography variant="h6" component="p" textTransform="none">
                {task.title}
            </Typography>
        </Button>
    );
};

export default Task;