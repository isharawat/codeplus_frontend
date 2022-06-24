import styles from "../styles/Comment.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";

export default function WomenComment({ obj, credentials }) {
  const initialvalues = { comment: " " };
  const [formvalues, setformvalues] = useState(initialvalues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const final = obj.comments;
    final.push({
      comment: formvalues.comment,
      person: `${credentials.firstName} ${credentials.lastName}`,
    });
    const values = {
      title: obj.title,
      body: obj.body,
      comments: final,
      name: obj.name,
    };

    axios.patch(`http://localhost:3001/women-update-post/${obj._id}`, values).then((res) => {
        const msg = res.data.status;
        console.log(msg);
        if (msg === "Post Updated Successfully") {
          setformvalues(initialvalues);
        }
        alert(msg);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="#" method="post">
        <div className={styles.comment}>
          {" "}
          <textarea
            placeholder="Write your comment here"
            name="comment"
            value={formvalues.comment}
            onChange={handleChange}
            className={styles.commentbox}
          ></textarea>
         <button type="submit" className={styles.btn}>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                style={{ fontSize: "25px", color: " #052E3B", cursor: "pointer" }}
              />
            </button>
        </div>
      </form>
    </div>
  );
}
