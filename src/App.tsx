import Home from "./pages/Home/Home.tsx";
import PostDetail from "./components/Post/PostDetail.tsx";
import PostNew from "./components/Post/PostNew.tsx";
import TaskDetail from "./components/Task/TaskDetail.tsx";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import TaskNew from "./components/Task/TaskNew.tsx";
import {Task} from "./pages/Task/Task.tsx";
import {Post} from "./pages/Post/Post.tsx";
import {User} from "./pages/User/User.tsx";
import {UserDetail} from "./components/User/UserDetail.tsx";
import {UserNew} from "./components/User/UserNew.tsx";
import Employee from "./pages/Employee/Employee.tsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"post"} element={<Post/>}/>
                    <Route path={"post/new"} element={<PostNew/>}/>
                    <Route path={"post/:post_id"} element={<PostDetail/>}/>
                    <Route path={"task"} element={<Task/>}/>
                    <Route path={"task/new"} element={<TaskNew/>}/>
                    <Route path={"task/:task_id"} element={<TaskDetail/>}/>
                    <Route path={"user"} element={<User/>}/>
                    <Route path={"user/new"} element={<UserNew/>}/>
                    <Route path={"user/:user_id"} element={<UserDetail/>}/>
                    <Route path={"employee"} element={<Employee/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
