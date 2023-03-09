import { FC, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModalAddTask from "./ModalAddTask";

const Header: FC = () => {
  const [modalAddTask, setModalAddTask] = useState<boolean>(false);

  const handleModalAddTask = () => {
    setModalAddTask((prevState) => !prevState);
  };

  return (
    <Stack
      component="header"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      minHeight="70px"
      sx={(theme) => ({ background: theme.palette.primary.light })}
      px={4}
    >
      <Typography
        variant="h4"
        color="white"
        sx={(theme) => ({ [theme.breakpoints.down(400)]: { fontSize: "1.4rem" } })}
      >
        Tasks - Types
      </Typography>

      <Button variant="contained" onClick={handleModalAddTask}>
        Add Task
      </Button>

      {modalAddTask && <ModalAddTask closeModal={handleModalAddTask} />}
    </Stack>
  );
};

export default Header;
