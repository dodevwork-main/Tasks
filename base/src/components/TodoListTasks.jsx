import ListTasks from "./ListTasks.jsx";
import {useSelector} from "react-redux";
import {getTodo} from "../store/slices/task.js";


const TodoListTasks = () => {
    const todo = useSelector(getTodo);

    return (
        <ListTasks taskIds={todo}/>
    );
};

export default TodoListTasks;