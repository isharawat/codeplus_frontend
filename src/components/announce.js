import ContestReminder from "./contestReminder";
import Menubar from "./menu";
import Leaderboard from "./sideLeaderboard";
import Topbar from "./topbar";
import style from "../styles/Home.module.css";
import Announcement from "./announcement";
import Post from "./Post";

export default function Announce() {
  return (
    <div className={style.app}>
      <Menubar />
      <div className={style.part1}>
        <Topbar />
        <div className={style.part2}>
          <div>
            <Announcement />
          </div>
          <div>
            <Announcement />
          </div>
          <div>
            <Announcement />
          </div>
          <div>
            <Post />
          </div>
          <div className={style.part3}>
            <ContestReminder />
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
}
