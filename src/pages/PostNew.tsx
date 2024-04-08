import { Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PostNew() {
  const navigate = useNavigate();
  const handleSubmit = async (event: PatchPost) => {
    try {
      // Send form data to server using axios or fetch
      await axios.post(`post`, event).then(() => {
        navigate(-1);
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const handleGoBack = () => {
    navigate(-1); // 返回上一级
  };
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleGoBack}
          style={{ margin: 10 }}
        >
          Back
        </button>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={handleSubmit}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </div>
    </>
  );
}

export default PostNew;
