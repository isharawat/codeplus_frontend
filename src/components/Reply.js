import styles from '../styles/announce.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUser } from "@fortawesome/free-solid-svg-icons";
export default function Reply(){
    return(
        <div>
            <div className={styles.reply}>
              <p>dfjsksdfkkdfjkjfksjfklsjfksjjslkfjkfjakl</p>
              <hr className={styles.line}></hr>
              <div className={styles.postedBy}>
                <div>
                  <span style={{ marginLeft: "10px" }}>
                    <FontAwesomeIcon icon={faUser} className={styles.icon} />
                  </span>{" "}
                  name{" "}
                  <span>at</span>
                  <span className={styles.time}>date&time</span>
                </div>
              </div>
            </div>
          </div>

    );
}