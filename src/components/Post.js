import { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
import styles from "../styles/announce.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUser } from "@fortawesome/free-solid-svg-icons";
import Comment from "./Comment";
import Pastcomments from "./Pastcomments";

export default function Post({ credentials }) {
  const initialvalues = { title: "", body: "", comments: [], name: "", id: "" };

  const [post, setPost] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/get-posts").then((res) => {
      //setQuestions(res.data.data.questions)
      console.log(res.data);
      setPost(res.data.data.posts);
      console.log(post);
    });
  }, []);

  return (
    <>
      <div>
        <ul>
          {post.map((obj, key) => {
            console.log(obj);
            return (
              <div key={key}>
                <div className={styles.container}>
             
                  <h3>Title: {obj.title} </h3>
                  <p>{obj.body}</p>
                  <hr className={styles.line}></hr>
                  <div className={styles.postedByp} >
                    <div>
                      <span style={{ marginLeft: "10px"}}>
                        <FontAwesomeIcon
                          icon={faUser}
                          className={styles.icon}
                        />
                      </span>{" "}
                      <span style={{ marginLeft: "8px" }}>Posted by</span>{" "}
                      {obj.name}
                      <span></span>
                      <span className={styles.time}>date&time</span>
                    </div>
                
                    <FontAwesomeIcon
                      icon={faComment}
                      className={styles.icon}
                      style={{
                        fontSize: 15,
                        color: "black",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                  <Pastcomments comments={obj.comments} />

                  <Comment obj={obj} credentials={credentials} />
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
