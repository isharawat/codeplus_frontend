import { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
import styles from "../styles/announce.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUser } from "@fortawesome/free-solid-svg-icons";
import WomenComment from "./WomenComment";
import { useNavigate } from "react-router-dom";
export default function WomenPost({womenpost}) {
  

  return (
    <>
      <div>
        <ul>
          {womenpost.map((obj, key) => {
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
                 
                  <WomenComment obj={obj} />
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
