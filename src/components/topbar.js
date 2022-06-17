import styles from "../styles/topbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div></div>
      <h1>Indian Institute Of Information Technology, Allahabad</h1>
      <div className={styles.div}><button className={styles.btn}><FontAwesomeIcon icon={faBell} className={styles.icon} /></button>
      </div>
      <div className={styles.div}><NavLink to = "/editDetails"><button className={styles.btn} ><FontAwesomeIcon icon={faUser} className={styles.icon} /></button></NavLink>
      </div>
      <div className={styles.div}><NavLink to = "/Login"><button className={styles.btn}><FontAwesomeIcon icon={faRightFromBracket} className={styles.icon} /></button></NavLink>
      </div>
    </div>
  );
}

