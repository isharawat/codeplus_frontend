import { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
import styles from "../styles/announce.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUser } from "@fortawesome/free-solid-svg-icons";
import DiscussionComment from "./DiscussionComment";
import Pastcomments from "./Pastcomments";


export default function DiscussionPost({ credentials }) {

  const [discussions, setDiscussions] = useState([]);
  
  useEffect(() => {
    Axios.get("http://localhost:3001/get-discussions").then((res) => {
    
      console.log(res.data);
      setDiscussions(res.data.data.discussions);
      console.log(discussions);
    });
  }, []);

  return (
    <>
      <div>
        <ul>
          {discussions.map((obj, key) => {
            console.log(obj);
            return (
              <div key={key}>
                <div className={styles.container}>
                  <h3>Title: {obj.title} </h3>
                  <p>{obj.body}</p>
                  <hr className={styles.line}></hr>
                  <div className={styles.postedBy}>
                    <div>
                      <span style={{ marginLeft: "10px" }}>
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
                 <div><Pastcomments comments={obj.comments}/>
                  <DiscussionComment obj={obj} credentials={credentials}/></div>
                    
                 
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
