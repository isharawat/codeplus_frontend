import styles from "../styles/Leaderboard.module.css";
import style from "../styles/Home.module.css";

function LeaderboardName() {
  return (
    <li className={styles.li}>
      <span className={styles.first}>pos</span>
      <span className={styles.span1}></span>
      <span>name</span>
      <span className={styles.third}>points</span>
      <span className={styles.span2}></span>
    </li>
  );
}

export default function MainLeaderboard() {
  return (
    <div >
      <div>
        <div className={styles.button}>
          <button className={styles.buttoncom}>Leaderboard</button>
          <button className={styles.buttoncom1}>Lockout Leaderboard</button>
        </div>

        <ul>
          <LeaderboardName />
          <LeaderboardName />
          <LeaderboardName />
          <LeaderboardName />
          <LeaderboardName />
          <LeaderboardName />
          <LeaderboardName />
          <LeaderboardName />
          <LeaderboardName />
          <LeaderboardName />
          <LeaderboardName />
          <LeaderboardName />
        </ul>
      </div>
    </div>
  );
}
