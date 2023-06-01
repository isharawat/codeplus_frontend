import { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
import styles from "../styles/announce.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUser } from "@fortawesome/free-solid-svg-icons";
import DiscussionComment from "./DiscussionComment";

import { useNavigate } from "react-router-dom";
export default function DiscussionPost() {
  const [discussions, setDiscussions] = useState([]);

  const history=useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const headers= {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
    }
    Axios.get("http://localhost:3001/discussion/get-discussions",{headers}).then((res) => {     
     setDiscussions(res.data.data.discussions);
   });
    }
    else {
        history("/login")
    }
    // eslint-disable-next-line
  }, [])

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
                  <div className={styles.postedByp}>
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
                 <div>
                  <DiscussionComment obj={obj} /></div>
                    
                 
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
