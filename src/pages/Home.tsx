import { NavLink } from "react-router-dom";
import "./Home.scss";
import "bootstrap/dist/css/bootstrap.css";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
function Home() {
  const [currentTime, setCurrentTime] = useState(
    dayjs().format("YYYY年MM月DD日 HH:mm:ss")
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("YYYY年MM月DD日 HH:mm:ss"));
    }, 1000); // 每秒更新一次时间
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="container">
        <p className="fs-2">Home</p>
        {currentTime}
        <div className="nav-list">
          <table className="table table-hover">
            <tbody>
              <tr>
                <td>
                  <div className="nav-link">
                    <NavLink to={"post"}>Post</NavLink>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="nav-link">
                    <NavLink to={"task"}>Task</NavLink>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
