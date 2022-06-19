import Questions from "./Questions";
import {setState, useState} from 'react';
import styles from '../styles/Post.module.css';
import Axios from 'axios';
export default function ManageQuestions(){
        
    const [question, setName] = useState('')
    const [url, setUrl] = useState('')
    const [points, setPoints] = useState(0)
    const [msg,setMsg]= useState("Please add a new question.");
    //adding question
    
    const addNewQuestion = () => {
       Axios.post('http://localhost:3001/add-question',{question,url,points}).then(res => {
        if(res.data.status=="Success"){
            setMsg("Question Added Successfully");
            setName('');
            setUrl('');
            setPoints(0);

        }
        else{
            setMsg("Unable to add the question");
        }
      })     
    }
    
    return( 
        <div>
            <h1>{msg}</h1>
        <div className="container">
        <label htmlFor="">Question name : </label>
        <input type="text" value={question} onChange={(e) => {setName(e.target.value)}}/><br/><br/>
        <label htmlFor="">Question link : </label>
        <input type="text" value={url} onChange={(e) => {setUrl(e.target.value)}}/><br/><br/>
        <label htmlFor="">Points: </label>
        <input type="number" value={points} onChange={(e) => {setPoints(e.target.value)}}/><br/><br/>
        <button onClick={addNewQuestion}>Add New Question</button>

    </div> 
        <div>
            <Questions/>
        </div>
        </div>
    )
}