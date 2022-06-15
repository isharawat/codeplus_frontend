import styles from "./announce.module.css";
import ContestReminder from "./contestReminder";
import Menubar from "./menu";
import Leaderboard from "./sideLeaderboard";
import Topbar from "./topbar";
import style from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUser } from "@fortawesome/free-solid-svg-icons";
import Post from "./Post";

export default function Announce(){
  
  return (
    <div className={style.app}>
      <Menubar />
      <div className={style.part1}>
        <Topbar />
        <div className={style.part2}>
          <div>
            <div className={styles.container}>
              <h3>Title: </h3>
              <p>dfjsksdfkjslkfjkfjakl</p>
              <hr className={styles.line}></hr>
              <div className={styles.postedBy}>
                <div>
                  <span style={{ marginLeft: "10px" }}>
                    <FontAwesomeIcon icon={faUser} className={styles.icon} />
                  </span>{" "}
                  <span style={{ marginLeft: "8px" }}>Posted by</span> name{" "}
                  <span>at</span>
                  <span className={styles.time}>date&time</span>
                </div>
                <FontAwesomeIcon
                  icon={faComment}
                  className={styles.icon}
                  style={{ fontSize: 15, color: "black", cursor: "pointer" }}
                />
              </div>
            </div>
            <div className={styles.container}>
              <h3>Title: </h3>
              <p>dfjsksdfkjslkfjkfjakl</p>
              <hr className={styles.line}></hr>
              <div className={styles.postedBy}>
                <div>
                  <span style={{ marginLeft: "10px" }}>
                    <FontAwesomeIcon icon={faUser} className={styles.icon} />
                  </span>{" "}
                  <span style={{ marginLeft: "8px" }}>Posted by</span> name{" "}
                  <span>at</span>
                  <span className={styles.time}>date&time</span>
                </div>
                <FontAwesomeIcon
                  icon={faComment}
                  className={styles.icon}
                  style={{ fontSize: 15, color: "black", cursor: "pointer" }}
                />
              </div>
            </div>
            <div className={styles.container}>
              <h3>Title: </h3>
              <p>dfjsksdfkjslkfjkfjakl</p>
              <hr className={styles.line}></hr>
              <div className={styles.postedBy}>
                <div>
                  <span style={{ marginLeft: "10px" }}>
                    <FontAwesomeIcon icon={faUser} className={styles.icon} />
                  </span>{" "}
                  <span style={{ marginLeft: "8px" }}>Posted by</span> name{" "}
                  <span>at</span>
                  <span className={styles.time}>date&time</span>
                </div>
                <FontAwesomeIcon
                  icon={faComment}
                  className={styles.icon}
                  style={{ fontSize: 15, color: "black", cursor: "pointer" }}
                />
              </div>
            </div>
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
