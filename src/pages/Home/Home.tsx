import {TopMenu} from "../../components/Common/TopMenu.tsx";
import {Route, Routes} from "react-router-dom";
import {Post} from "../Post/Post.tsx";
import PostNew from "../../components/Post/PostNew.tsx";
import PostDetail from "../../components/Post/PostDetail.tsx";
import {Task} from "../Task/Task.tsx";
import TaskNew from "../../components/Task/TaskNew.tsx";
import TaskDetail from "../../components/Task/TaskDetail.tsx";
import {User} from "../User/User.tsx";
import {UserNew} from "../../components/User/UserNew.tsx";
import {UserDetail} from "../../components/User/UserDetail.tsx";
import Employee from "../Employee/Employee.tsx";
import {Role} from "../Role/Role.tsx";
import {Greet} from "../../components/Common/Greet.tsx";
import {RoleNew} from "../../components/Role/RoleNew.tsx";
import {RoleDetail} from "../../components/Role/RoleDetail.tsx";

export function Home() {
    return (
        <>
            <TopMenu/>
            <Routes>
                <Route path={"greet"} element={<Greet/>}/>
                <Route path={"post/post-list"} element={<Post/>}/>
                <Route path={"post/post-new"} element={<PostNew/>}/>
                <Route path={"post/post-detail/:post_id"} element={<PostDetail/>}/>
                <Route path={"task/task-list"} element={<Task/>}/>
                <Route path={"task/task-new"} element={<TaskNew/>}/>
                <Route path={"task/task-detail/:task_id"} element={<TaskDetail/>}/>
                <Route path={"user/user-list"} element={<User/>}/>
                <Route path={"user/user-new"} element={<UserNew/>}/>
                <Route path={"user/user-detail/:user_id"} element={<UserDetail/>}/>
                <Route path={"employee/employee-list"} element={<Employee/>}/>
                <Route path={"role/role-list"} element={<Role/>}/>
                <Route path={"role/role-new"} element={<RoleNew/>}/>
                <Route path={"role/role-detail/:role_id"} element={<RoleDetail/>}/>
            </Routes>
        </>
    )
}