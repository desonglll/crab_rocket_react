import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import dayjs from "dayjs";

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get("/post");
        setPosts(response.data.data);
      } catch (e) {}
    };
    getPosts();
  }, []);
  const handleGoBack = () => {
    navigate(-1); // 返回上一级
  };
  const handleNewPost = () => {
    navigate("/post/new");
  };
  return (
    <>
      <div>
        <p className="fs-2">Post List</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleGoBack}
          style={{ margin: 10 }}
        >
          Back
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleNewPost}
          style={{ margin: 10 }}
        >
          New
        </button>
        <table className="table table-hover table-striped-columns">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>User ID</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: Post) => (
              <tr key={post.post_id}>
                <td>
                  <div key={post.post_id}>
                    <Link to={`/post/${post.post_id}`}>{post.post_id}</Link>
                  </div>
                </td>
                <td>
                  <div key={post.post_id}>
                    <Link to={`/post/${post.post_id}`}>{post.title}</Link>
                  </div>
                </td>
                <td>
                  <div key={post.post_id}>
                    <Link to={`/user/${post.post_id}`}>{post.user_id}</Link>
                  </div>
                </td>
                <td>
                  <div key={post.post_id}>
                    <Link to={`/post/${post.post_id}`}>{post.status}</Link>
                  </div>
                </td>
                <td>
                  <div key={post.post_id}>
                    <Link to={`/post/${post.post_id}`}>
                      {dayjs(post.created_at).format("YYYY年MM月DD日 HH:mm:ss")}
                    </Link>
                  </div>
                </td>
                <td>
                  <div key={post.post_id}>
                    <Link to={`/post/${post.post_id}`}>
                      {dayjs(post.updated_at).format("YYYY年MM月DD日 HH:mm:ss")}
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PostList;
