import { useParams } from "react-router-dom";

function TaskDetail() {
  const { task_id } = useParams();
  return <div>TaskDetail {task_id}</div>;
}

export default TaskDetail;
