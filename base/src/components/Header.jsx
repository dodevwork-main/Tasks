import {useState} from "react";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModalAddTask from "./ModalAddTask.jsx";


const Header = () => {
    const [modalAddTask, setModalAddTask] = useState(false);

    const handleModalAddTask = () => {
        setModalAddTask(prevState => !prevState);
    };

    return (
        <Stack
            as="header"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            minHeight="70px"
            sx={(theme) => ({background: theme.palette.primary.light})}
            px={4}
        >
            <Typography variant="h4" color="white">
                Tasks
            </Typography>

            <Button
                variant="contained"
                onClick={handleModalAddTask}
            >
                Add Task
            </Button>

            {modalAddTask &&
                <ModalAddTask closeModal={handleModalAddTask}/>
            }
        </Stack>
    );
};

export default Header;