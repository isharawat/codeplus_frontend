import styles from "./Questions.module.css"
import ContestReminder from './contestReminder'
import Menubar from './menu'
import Leaderboard from './sideLeaderboard'
import Topbar from './topbar'
import style from '../styles/Home.module.css'
export default function Question(){
    return(
        <div className={style.app}>
      <Menubar/>
      <div className={style.part1}>
        <Topbar/>
        <div className={style.part2}>
         <div>
        <ul className={styles.list}>
            <li className={styles.li}><span>Minimum spanning tree</span><span>points</span></li> 
            <li className={styles.li}><span>Minimum spanning tree</span><span>points</span></li> 
            <li className={styles.li}><span>Minimum spanning tree</span><span>points</span></li> 
            <li className={styles.li}><span>Minimum spanning tree</span><span>points</span></li> 
            <li className={styles.li}><span>Minimum spanning tree</span><span>points</span></li> 
            <li className={styles.li}><span>Minimum spanning tree</span><span>points</span></li> 
            <li className={styles.li}><span>Minimum spanning tree</span><span>points</span></li> 
            <li className={styles.li}><span>Minimum spanning tree</span><span>points</span></li> 
            <li className={styles.li}><span>Minimum spanning tree</span><span>points</span></li> 
            <li className={styles.li}><span>Minimum spanning tree</span><span>points</span></li>    
        </ul>
    </div>
          <div className={style.part3}>
            <ContestReminder/>
            <Leaderboard/> 
          </div>          
        </div>
      </div>
    </div>
        
    );
}


