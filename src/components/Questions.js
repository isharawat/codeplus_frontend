import styles from "../styles/Questions.module.css";
import style from "../styles/Home.module.css";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons"
import {useState, useEffect, setState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from 'axios';

export default function Question() {
  const [question, setQuestions] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/get-questions').then(res => {
      setQuestions(res.data.data.questions)
      console.log(res.data);
    })
  },[])

  const deleteQuestion = (id) => {
     Axios.delete(`http://localhost:3001/delete-question/${id}`).then(res => {
      setQuestions(res.data.data.questions)
      console.log(res.data);
    })    
  }

  return (
    <div>
      <ul>{
        question.map((val,key) => {
          console.log(val);
          return <li key={key} className={styles.li} >
            <span><a href={val.url}>{val.question}</a></span>
            <span>{val.points}</span>
            <button type="delete" style={{border: "none", backgroundColor: "#D8E4E8",}} onClick ={() => {deleteQuestion(val._id)} }>
              <FontAwesomeIcon
                icon={faTrash}          
                style={{ fontSize: 15, color: "black", cursor: "pointer" }}
              />
            </button>
            <button type="edit" style={{border: "none", backgroundColor: "#D8E4E8"}}>
            <FontAwesomeIcon
              icon={faEdit}          
              style={{ fontSize: 15, color: "black", cursor: "pointer" }}
            />
          </button>
          </li>
        })
      }      
      </ul>
    </div>
  )
}
