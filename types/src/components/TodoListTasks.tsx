import { FC } from "react";
import useAppSelector from "../hooks/useAppSelector";
import ListTasks from "./ListTasks";
import { getTodo } from "../store/slices/task";

const TodoListTasks: FC = () => {
  const todo = useAppSelector(getTodo);

  return <ListTasks taskIds={todo} />;
};

export default TodoListTasks;
