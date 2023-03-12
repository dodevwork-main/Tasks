import { FC } from "react";
import useAppSelector from "../../hooks/useAppSelector";
import { getDone } from "../../store/slices/task";
import CardTasks from "./CardTasks";

const DoneCard: FC = () => {
  const done = useAppSelector(getDone);

  return <CardTasks taskIds={done} isDone />;
};

export default DoneCard;
