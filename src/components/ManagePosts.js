
import {setState, useState} from 'react';
import styles from '../styles/Post.module.css';
import Axios from 'axios';
import style from  '../Account/Account.module.css'
export default function ManageQuestions({credentials}){
    const initialvalues={title:"",body: "",comments:[], name:`${credentials.firstName} ${credentials.lastName}` }
    const [formvalues,setformvalues]=useState(initialvalues)

    const handleChange =(e)=>{
        const {name,value}=e.target
        setformvalues({ ...formvalues,[name]:value})
    }
    
    const handleSubmit=(e)=>{
       e.preventDefault();
       Axios.post('http://localhost:3001/add-posts',formvalues).then(res => {
           console.log(res)
        if(res.data.status==="Posted Successfully"){
            alert("post Added Successfully");
            setformvalues(initialvalues)

        }
        else{
            alert("Unable to add the question");
        }
      })    

    }
    return( 
        <div className={style.outer1}>
        <div className={style.box}>
            <form onSubmit={handleSubmit} className={ style.form}>
                <div>
            <label className={style.label}>
                   Title: </label>
                    <input 
                        type="text" 
                        name="title"
                        value={formvalues.title}
                        onChange={handleChange}
                        className={style.input1}
                    />
                    </div>
                    <div>
                    <label className={style.label}>
                  Body: </label>
                    <input 
                        type="textarea" 
                        name="body"
                        value={formvalues.body}
                        onChange={handleChange}
                        className={style.input1}
                    />
                    </div>
                    <div className={style.buttonbox}>
          <button className={style.button}  >Sumbit</button>
        </div>
            </form>
        </div>
        
        </div>
    )
}