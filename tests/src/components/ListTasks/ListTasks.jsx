import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import Task from "../Task/Task";

const ListTasks = ({ taskIds, isDone }) => (
  <Stack sx={{ height: "100%", overflow: "auto" }}>
    <Stack>
      {taskIds?.map((taskId) => (
        <Stack key={taskId}>
          <Task taskId={taskId} isDone={isDone} />
        </Stack>
      ))}
    </Stack>
  </Stack>
);

ListTasks.propTypes = {
  taskIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  isDone: PropTypes.bool,
};

ListTasks.defaultProps = {
  isDone: false,
};

export default ListTasks;
