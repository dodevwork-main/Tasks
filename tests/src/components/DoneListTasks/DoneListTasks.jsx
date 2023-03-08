import { useSelector } from "react-redux";
import ListTasks from "../ListTasks/ListTasks";
import { getDone } from "../../store/slices/task/task";

const DoneListTasks = () => {
  const done = useSelector(getDone);

  return <ListTasks taskIds={done} isDone />;
};

export default DoneListTasks;
