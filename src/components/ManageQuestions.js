import Questions from "./Questions";
import {setState, useState} from 'react';
import styles from '../styles/Post.module.css';
import Axios from 'axios';
export default function ManageQuestions(){
    
    
    const [question, setName] = useState('')
    const [points, setPoints] = useState('0')

    //adding question
    const addNewQuestion = () => {
        Axios.post('http://localhost:3001/add-question',{question,points})
    }
    
    return( 
        <div>
        <div className="container">

        <label htmlFor="">Question name : </label>
        <input type="text" onChange={(e) => {setName(e.target.value)}}/><br/><br/>
        <label htmlFor="">Points: </label>
        <input type="text" onChange={(e) => {setPoints(e.target.value)}}/><br/><br/>

        <button onClick={addNewQuestion}>Add New Question</button>

    </div> 
        <div>
            <Questions/>
        </div>
        </div>
    )
}