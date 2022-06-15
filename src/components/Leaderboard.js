import styles from "./Leaderboard.module.css";
import ContestReminder from "./contestReminder";
import Menubar from "./menu";
import Leaderboard from "./sideLeaderboard";
import Topbar from "./topbar";
import style from "../styles/Home.module.css";
export default function MainLeaderboard() {
  return (
    <div className={style.app}>
      <Menubar />
      <div className={style.part1}>
        <Topbar />
        <div className={style.part2}>
          <div>
            <div className={styles.button}>
              <button className={styles.buttoncom}>Leaderboard</button>
              <button className={styles.buttoncom1}>Lockout Leaderboard</button>
            </div>
            <ul>
              <li className={styles.li}>
                <span className={styles.first}>pos</span>
                <span className={styles.span1}></span>
                <span>name</span>
                <span className={styles.third}>points</span>
                <span className={styles.span2}></span>
              </li>
              <li className={styles.li}>
                <span className={styles.first}>pos</span>
                <span className={styles.span1}></span>
                <span>name</span>
                <span className={styles.third}>points</span>
                <span className={styles.span2}></span>
              </li>
              <li className={styles.li}>
                <span className={styles.first}>pos</span>
                <span className={styles.span1}></span>
                <span>name</span>
                <span className={styles.third}>points</span>
                <span className={styles.span2}></span>
              </li>
              <li className={styles.li}>
                <span className={styles.first}>pos</span>
                <span className={styles.span1}></span>
                <span>name</span>
                <span className={styles.third}>points</span>
                <span className={styles.span2}></span>
              </li>
              <li className={styles.li}>
                <span className={styles.first}>pos</span>
                <span className={styles.span1}></span>
                <span>name</span>
                <span className={styles.third}>points</span>
                <span className={styles.span2}></span>
              </li>

              <li className={styles.li}>
                <span className={styles.first}>pos</span>
                <span className={styles.span1}></span>
                <span>name</span>
                <span className={styles.third}>points</span>
                <span className={styles.span2}></span>
              </li>
              <li className={styles.li}>
                <span className={styles.first}>pos</span>
                <span className={styles.span1}></span>
                <span>name</span>
                <span className={styles.third}>points</span>
                <span className={styles.span2}></span>
              </li>
              <li className={styles.li}>
                <span className={styles.first}>pos</span>
                <span className={styles.span1}></span>
                <span>name</span>
                <span className={styles.third}>points</span>
                <span className={styles.span2}></span>
              </li>
              <li className={styles.li}>
                <span className={styles.first}>pos</span>
                <span className={styles.span1}></span>
                <span>name</span>
                <span className={styles.third}>points</span>
                <span className={styles.span2}></span>
              </li>
              <li className={styles.li}>
                <span className={styles.first}>pos</span>
                <span className={styles.span1}></span>
                <span>name</span>
                <span className={styles.third}>points</span>
                <span className={styles.span2}></span>
              </li>
              <li className={styles.li}>
                <span className={styles.first}>pos</span>
                <span className={styles.span1}></span>
                <span>name</span>
                <span className={styles.third}>points</span>
                <span className={styles.span2}></span>
              </li>
              <li className={styles.li}>
                <span className={styles.first}>pos</span>
                <span className={styles.span1}></span>
                <span>name</span>
                <span className={styles.third}>points</span>
                <span className={styles.span2}></span>
              </li>
            </ul>
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
