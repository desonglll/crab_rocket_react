import { useState, useEffect } from "react";
import "./TaskList.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Space, Table } from "antd";
interface TaskParams {
  user_id: number | null;
  limit: number | null;
  offset: number | null;
}

interface TaskInfo {
  count: number;
}

interface TaskResponse {
  info: TaskInfo;
  tasks: Task[];
}

function TaskList() {
  const [taskResponse, setTaskResponse] = useState<TaskResponse>({
    info: { count: -1 },
    tasks: [],
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const getTasksByParams = async (params: TaskParams) => {
    try {
      const response = await axios.post("/task/filter", params);
      setTaskResponse(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTasksByParams({
      user_id: null,
      limit: 10,
      offset: 0,
    }).then(() => {
      setLoading(!loading);
    });
  }, []);
  const handleGoBack = () => {
    navigate(-1); // 返回上一级
  };
  const handleNewTask = () => {
    navigate("/task/new");
  };
  const handleDelete = (id: number) => {
    console.log(id);
    try {
      axios.delete(`task/${id}`).then(() => {
        window.location.reload();
      });
    } catch (e) {
      console.log(e);
    }
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "User ID",
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: "created_at",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "updated_at",
      dataIndex: "updated_at",
      key: "updated_at",
    },
    {
      title: "Action",
      key: "action",
      render: (_: number, task: Task) => (
        <Space size="middle">
          <Button danger onClick={() => handleDelete(task.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      {!loading && (
        <div>
          <p className="fs-2">Task List</p>
          <Button type="primary" onClick={handleGoBack} style={{ margin: 10 }}>
            Back
          </Button>
          <Button type="primary" onClick={handleNewTask} style={{ margin: 10 }}>
            New
          </Button>
          <Table
            columns={columns}
            dataSource={taskResponse.tasks}
            rowKey={"id"}
            pagination={{
              showSizeChanger: true,
              showQuickJumper: true,
              total: taskResponse.info.count,
              onChange(page, pageSize) {
                const params: TaskParams = {
                  user_id: null,
                  limit: pageSize,
                  offset: (page - 1) * pageSize,
                };
                getTasksByParams(params);
              },
              onShowSizeChange(current, size) {
                const params: TaskParams = {
                  user_id: null,
                  limit: size,
                  offset: (current - 1) * size,
                };
                getTasksByParams(params);
              },
            }}
          />
        </div>
      )}
    </>
  );
}

export default TaskList;
