import Questions from "./Questions";
import { setState, useState } from "react";
import styles from "../styles/Post.module.css";
import Axios from "axios";
import style from "../Account/Account.module.css";
export default function ManageQuestions() {
  const [question, setName] = useState("");
  const [url, setUrl] = useState("");
  const [points, setPoints] = useState(0);
  const [msg, setMsg] = useState("Please add a new question.");
  //adding question

  const addNewQuestion = () => {
    Axios.post("http://localhost:3001/add-question", {
      question,
      url,
      points,
    }).then((res) => {
      if (res.data.status == "Success") {
        setMsg("Question Added Successfully");
        setName("");
        setUrl("");
        setPoints(0);
      } else {
        setMsg("Unable to add the question");
      }
    });
  };

  return (
    <div className={style.outer1}>
        <div className={style.box}>
      <h1>{msg}</h1>
      <div className={style.form} >
        <div>
        <label htmlFor="" className={style.label}>Question name : </label>
        <input
          type="text"
          value={question}
          className={style.input1}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        </div>
        
        <div>
        <label htmlFor="" className={style.label}>Question link : </label>
        <input
          type="text"
          value={url}
          className={style.input1}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        </div>
        
        <div>
        <label htmlFor="" className={style.label}>Points: </label>
        <input
          type="number"
          value={points}
          className={style.input1}
          onChange={(e) => {
            setPoints(e.target.value);
          }}
        />
        </div>
        
        <div className={style.buttonbox}>
          <button className={style.button}  onClick={addNewQuestion}>Add New Question</button>
        </div>
        </div>
      </div>
      <div>
        <Questions />
      </div>
    </div>
  );
}
