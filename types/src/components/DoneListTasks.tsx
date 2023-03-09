import { FC } from "react";
import useAppSelector from "../hooks/useAppSelector";
import ListTasks from "./ListTasks";
import { getDone } from "../store/slices/task";

const DoneListTasks: FC = () => {
  const done = useAppSelector(getDone);

  return <ListTasks taskIds={done} isDone />;
};

export default DoneListTasks;
