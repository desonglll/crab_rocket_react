import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone"; // 引入时区插件
import utc from "dayjs/plugin/utc"; // 引入 UTC 插件

// 添加时区和 UTC 插件
dayjs.extend(timezone);
dayjs.extend(utc);
function PostDetail() {
  const { post_id } = useParams();
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`post/${post_id}`);
        setPost(response.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPost().then(() => {
      setLoading(!loading);
    });
  }, []);

  const handleSubmit = async (event: PatchPost) => {
    try {
      // Send form data to server using axios or fetch
      await axios.patch(`post/${post_id}`, event).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const handleBack = () => {
    navigate(-1); // 返回上一级
  };
  return (
    <div>
      {!loading && (
        <div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{
              title: post?.title,
              body: post?.body,
              user_id: post?.user_id,
              status: post?.status,
              created_at: post?.created_at,
              updated_at: post?.updated_at,
            }}
            onFinish={handleSubmit}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item>
              <Button onClick={handleBack}>Back</Button>
            </Form.Item>
            <Form.Item label="Title" name="title">
              <Input />
            </Form.Item>
            <Form.Item label="Body" name="body">
              <TextArea autoSize />
            </Form.Item>
            <Form.Item label="User Id" name="user_id">
              <Select
                style={{ width: 120 }}
                options={[
                  { value: 1, label: "u1" },
                  { value: 2, label: "u2" },
                  { value: 3, label: "u3" },
                  { value: 0, label: "Unknow" },
                ]}
              />
            </Form.Item>
            <Form.Item label="Status" name="status">
              <Input />
            </Form.Item>
            <Form.Item label="Created Time" name="created_at">
              <Input disabled={true} />
            </Form.Item>
            <Form.Item label="Updated Time" name="updated_at">
              <Input disabled={true} />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
}

export default PostDetail;
