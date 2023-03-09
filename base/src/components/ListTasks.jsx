import Task from "./Task.jsx";
import Stack from "@mui/material/Stack";


const ListTasks = ({taskIds, isDone = false}) => {
    return (
        <Stack sx={{height: "100%", overflow: "auto"}}>
            <Stack>
                {taskIds?.map(taskId =>
                    <Stack key={taskId}>
                        <Task taskId={taskId} isDone={isDone}/>
                    </Stack>
                )}
            </Stack>
        </Stack>
    );
};

export default ListTasks;