import styles from '../styles/sideLeaderboard.module.css'
export default function Sideleaderboard(){
    return (
        <div className={styles.leaderboard}>
          <h3>Top Scorers</h3> 
           <div className={styles.heading}><div>Name</div><span>Points</span></div> 

              <div className={styles.list}>
              <div className={styles.content}><div>Name</div><span>Points</span></div>
              <div className={styles.content}><div>Name</div><span>Points</span></div>
              <div className={styles.content}><div>Name</div><span>Points</span></div>
              <div className={styles.content}><div>Name</div><span>Points</span></div>
              <div className={styles.content}><div>Name</div><span>Points</span></div>
          </div>      
        </div>
      )
}