import {useState} from "react";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModalAddTodo from "./ModalAddTodo.jsx";


const Header = () => {
    const [modalAddTodo, setModalAddTodo] = useState(false);

    const handleModalAddTodo = () => {
        setModalAddTodo(prevState => !prevState);
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
                onClick={handleModalAddTodo}
            >
                Add Todo
            </Button>

            {modalAddTodo &&
                <ModalAddTodo closeModal={handleModalAddTodo}/>
            }
        </Stack>
    );
};

export default Header;