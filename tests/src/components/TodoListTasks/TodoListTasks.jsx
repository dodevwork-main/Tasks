import { useSelector } from "react-redux";
import ListTasks from "../ListTasks/ListTasks";
import { getTodo } from "../../store/slices/task/task";

const TodoListTasks = () => {
  const todo = useSelector(getTodo);

  return <ListTasks taskIds={todo} />;
};

export default TodoListTasks;
