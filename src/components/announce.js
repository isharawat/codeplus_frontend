import ContestReminder from "./contestReminder";
import Menubar from "./menu";
import Leaderboard from "./sideLeaderboard";
import Topbar from "./topbar";
import style from "../styles/Home.module.css";
import Announcement from "./announcement";
import Post from "./Post";

export default function Announce({credentials}) {
  return (
    <div>
     
      <div>
        <Post credentials={credentials} />
      </div>
  
    </div>
  
  );
}