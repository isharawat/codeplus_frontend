import styles from "./contestReminder.module.css";

import mypic from "./codeforceslog.jpg";
export default function ContestReminder() {
  return (
    <div className={styles.contestbox}>
      <h3>Contest Reminder</h3>
      <div className={styles.contest}>
        <div className={styles.platform_logo}>
          <img
            src={mypic}
            alt="Picture of the author"
            className={styles.img}
            width={35}
            height={35}
          />
        </div>  
        <div className={styles.content}>
          <div className={styles.h4}>Starting in 00.00 hrs</div>
          <h5 className={styles.h4}>Codeforces Div 2</h5>
        </div>
      </div>
      <div className={styles.contest}>
        <div className={styles.platform_logo}>
        <img
            src={mypic}
            alt="Picture of the author"
            className={styles.img}
            width={35}
            height={35}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.h4}>Starting in 00.00 hrs</div>
          <h5 className={styles.h4}>Codeforces Div 2</h5>
        </div>
      </div>
      <div className={styles.contest}>
        <div className={styles.platform_logo}>
        <img
            src={mypic}
            alt="Picture of the author"
            className={styles.img}
            width={35}
            height={35}/>
          
        </div>
        <div className={styles.content}>
          <div className={styles.h4}>Starting in 00.00 hrs</div>
          <h5 className={styles.h4}>Codeforces Div 2</h5>
        </div>
      </div>
    </div>
  );
}
