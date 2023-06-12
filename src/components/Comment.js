import styles from "../styles/Comment.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Reply from "./Reply";
export default function Comment({ obj }) {
  const initialvalues = { comment: " " };
  const user = JSON.parse(localStorage.getItem("User"));
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
      person: `${user.firstName} ${user.lastName}`,
    });
    const values = {
      title: obj.title,
      body: obj.body,
      comments: final,
      name: obj.name,
    };
    const headers = {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    };
    axios
      .patch(`http://localhost:3001/posts/update-post/${obj._id}`, values, {
        headers,
      })
      .then((res) => {
        const msg = res.data.status;
        console.log(msg);
        if (msg === "Post Updated Successfully") {
          setformvalues(initialvalues);
        }
      });
  };

  return (
    <div>
      {obj.comments.map((obj, key) => {
        return (
          <div key={key}>
            <Reply obj={obj} />
          </div>
        );
      })}

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
              icon={faChevronCircleRight}
              style={{ fontSize: "25px", color: " #052E3B", cursor: "pointer" }}
            />
          </button>
        </div>
      </form>
    </div>
  );
}
