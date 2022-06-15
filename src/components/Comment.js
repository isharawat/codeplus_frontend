import styles from "./Comment.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Comment() {
  return (
    <div>
      <form action="#" method="post">
        <div className={styles.comment}>
          {" "}
          <textarea
            placeholder="Write your comment here"
            name="comment"
            className={styles.commentbox}
          ></textarea>
          <div className={styles.submit}>
            <button type="submit" >
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className={styles.icon}
                style={{ fontSize: 15, color: "black", cursor: "pointer" }}
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
