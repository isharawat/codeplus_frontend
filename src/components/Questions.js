import styles from "../styles/Questions.module.css";
import style from "../styles/Home.module.css";

import {useState, useEffect, setState} from 'react'
import Axios from 'axios';

export default function Question() {
  const [question, setQuestions] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/get-questions').then(res => {
      setQuestions(res.data.data.questions)
      console.log(res.data);
    })
  },[])

  return (
    <div>
      <ul>{
        question.map((val,key) => {
          return <li key={key} className={styles.li} >
            <span>{val.question}</span>
            <span>{val.points}</span>
          </li>
        })
      }      
      </ul>
    </div>
  )
}
