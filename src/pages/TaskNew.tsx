import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TaskNew() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = async (event: PatchTask) => {
    console.log(event);
    try {
      // Send form data to server using axios or fetch
      await axios.post(`task`, event).then(() => {
        navigate(-1);
      });
    } catch (error) {
      console.error("Error submitting form:", error);
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

  useEffect(() => {
    fetchUser().then(() => {
      setLoading(!loading);
    });
  }, []);
  return (
    <>
      {!loading && (
        <div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onFinish={handleSubmit}
            initialValues={{
              user_id: 1,
            }}
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
      )}
    </>
  );
}

export default TaskNew;
