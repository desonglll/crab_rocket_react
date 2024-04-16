import "bootstrap/dist/css/bootstrap.css";
import { Fab, Fade } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { BackButton } from "../Common/BackButton.tsx";
import { NewPostButton } from "./NewPostButton.tsx";
import { PostTable } from "./PostTable.tsx";

function PostList() {
  return (
    <>
      {
        <Fade in={true}>
          <div>
            <p className="fs-2">文章列表</p>
            <BackButton />
            <NewPostButton />
            <PostTable />
            <Fab color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
          </div>
        </Fade>
      }
    </>
  );
}

export default PostList;
