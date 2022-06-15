import styles from "./topbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div></div>
      <h1>Indian Institute Of Information Technology, Allahabad</h1>
      <div className={styles.div}><button className={styles.btn}><FontAwesomeIcon icon={faBell} className={styles.icon} /></button>
      </div>
      <div className={styles.div}><button className={styles.btn} ><FontAwesomeIcon icon={faUser} className={styles.icon} /></button>
      </div>
      <div className={styles.div}><button className={styles.btn}><FontAwesomeIcon icon={faRightFromBracket} className={styles.icon} /></button>
      </div>
    </div>
  );
}

