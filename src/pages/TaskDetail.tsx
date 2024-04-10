import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TaskDetail() {
  const { task_id } = useParams();
  const [task, setTask] = useState<Task>();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`task/${task_id}`);
        setTask(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
    fetchTask().then(() => {
      setLoading(!loading);
    });
  }, []);
  const onFinish = (data: PatchTask) => {
    try {
      axios.patch(`task/${task_id}`, data).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUser = async () => {
    try {
      const response = await axios.get(`user`);
      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      {!loading && (
        <div>
          <div>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{
                title: task?.title,
                content: task?.content,
                created_at: task?.created_at,
                updated_at: task?.updated_at,
                user_id: task?.user_id,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item>
                <Button onClick={handleBack}>Back</Button>
              </Form.Item>
              <Form.Item label={"Title"} name={"title"}>
                <Input />
              </Form.Item>

              <Form.Item label={"Content"} name={"content"}>
                <Input />
              </Form.Item>
              <Form.Item label={"Created At"} name={"created_at"}>
                <Input disabled={true} />
              </Form.Item>
              <Form.Item label={"Updated At"} name={"updated_at"}>
                <Input disabled={true} />
              </Form.Item>
              <Form.Item label={"User"} name={"user_id"}>
                <Select
                  style={{ width: 120 }}
                  options={users.map(
                    (user: { user_id: number; username: string }) => ({
                      value: user.user_id,
                      label: user.username,
                    })
                  )}
                />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskDetail;
