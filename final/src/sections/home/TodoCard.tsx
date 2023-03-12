import { FC } from "react";
import useAppSelector from "../../hooks/useAppSelector";
import { getTodo } from "../../store/slices/task";
import CardTasks from "./CardTasks";

const TodoCard: FC = () => {
  const todo = useAppSelector(getTodo);

  return <CardTasks taskIds={todo} />;
};

export default TodoCard;
