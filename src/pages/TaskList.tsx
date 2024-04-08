import { useState, useEffect } from "react";
import "./TaskList.scss";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await axios.get("task");
        setTasks(response.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    getTasks();
  }, []);
  const handleGoBack = () => {
    navigate(-1); // 返回上一级
  };
  return (
    <div>
      <p className="fs-2">Task List</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleGoBack}
        style={{ margin: 10 }}
      >
        Back
      </button>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>User ID</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task: Task) => (
            <tr key={task.id}>
              <td>
                <div key={task.id}>
                  <NavLink to={`/task/${task.id}`}>{task.id}</NavLink>
                </div>
              </td>
              <td>
                <div key={task.id}>
                  <NavLink to={`/task/${task.id}`}>{task.title}</NavLink>
                </div>
              </td>
              <td>
                <div key={task.id}>
                  <NavLink to={`/user/${task.id}`}>{task.user_id}</NavLink>
                </div>
              </td>
              <td>
                <div key={task.id}>
                  <NavLink to={`/task/${task.id}`}>{task.created_at}</NavLink>
                </div>
              </td>
              <td>
                <div key={task.id}>
                  <NavLink to={`/task/${task.id}`}>{task.updated_at}</NavLink>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={"task_list"}></div>
    </div>
  );
}

export default TaskList;
