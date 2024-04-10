import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import PostList from "./pages/PostList";
import PostNew from "./pages/PostNew";
import TaskDetail from "./pages/TaskDetail";
import TaskList from "./pages/TaskList";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import TaskNew from "./pages/TaskNew";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"post"} element={<PostList />} />
          <Route path={"post/new"} element={<PostNew />} />
          <Route path={"post/:post_id"} element={<PostDetail />} />
          <Route path={"task"} element={<TaskList />} />
          <Route path={"task/new"} element={<TaskNew />} />
          <Route path={"task/:task_id"} element={<TaskDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
