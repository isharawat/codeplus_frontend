import styles from "../styles/contestReminder.module.css";
import mypic from "../assets/codeforceslog.jpg";

export default function ContestComponent({obj}) {
    const isoString = new Date(obj.start_time);
    return (
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
        
        <div className={styles.h4}>{isoString.toUTCString()}</div>
        <h5 className={styles.h4}><a href={obj.url} target="_blank">{obj.name}</a> </h5>
      </div>
    </div>
  );
}