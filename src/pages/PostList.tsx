import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Space, Table } from "antd";

interface PostParams {
  user_id: number | null;
  limit: number | null;
  offset: number | null;
}

interface PostInfo {
  count: number;
}

interface PostResponse {
  info: PostInfo;
  posts: Post[];
}

function PostList() {
  const [postResponse, setPostResponse] = useState<PostResponse>({
    info: { count: -1 },
    posts: [],
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const getPostsByParams = async (params: PostParams) => {
    try {
      const response = await axios.post("/post/filter", params);
      setPostResponse(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPostsByParams({
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
  const handleNewPost = () => {
    navigate("/post/new");
  };
  const handleDelete = (id: number) => {
    console.log(id);

    try {
      axios.delete(`post/${id}`).then(() => {
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
      title: "Status",
      dataIndex: "status",
      key: "status",
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
      render: (_: number, post: Post) => (
        <Space size="middle">
          <Button danger onClick={() => handleDelete(post.post_id)}>
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
          <p className="fs-2">Post List</p>
          <Button type="primary" onClick={handleGoBack} style={{ margin: 10 }}>
            Back
          </Button>
          <Button type="primary" onClick={handleNewPost} style={{ margin: 10 }}>
            New
          </Button>
          <Table
            columns={columns}
            dataSource={postResponse?.posts}
            rowKey={"post_id"}
            pagination={{
              showSizeChanger: true,
              showQuickJumper: true,
              onChange(page, pageSize) {
                const params: PostParams = {
                  user_id: null,
                  limit: pageSize,
                  offset: (page - 1) * pageSize,
                };
                getPostsByParams(params);
              },
              onShowSizeChange(current, size) {
                const params: PostParams = {
                  user_id: null,
                  limit: size,
                  offset: (current - 1) * size,
                };
                getPostsByParams(params);
              },
              total: postResponse.info.count,
            }}
          />
        </div>
      )}
    </>
  );
}

export default PostList;
