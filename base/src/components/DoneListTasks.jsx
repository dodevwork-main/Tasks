import ListTasks from "./ListTasks.jsx";
import {useSelector} from "react-redux";
import {getDone} from "../store/slices/task.js";


const DoneListTasks = () => {
    const done = useSelector(getDone);

    return (
        <ListTasks taskIds={done} isDone={true}/>
    );
};

export default DoneListTasks;