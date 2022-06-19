
import {setState, useState} from 'react';
import styles from '../styles/Post.module.css';
import Axios from 'axios';

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
        <div>
        <div className={styles.post}>
            <form onSubmit={handleSubmit}>
            <label>
                   <h1>Title: </h1>
                    <input 
                        type="text" 
                        name="title"
                        value={formvalues.title}
                        onChange={handleChange}
                    />
                    </label>
                    <label>
                  <h1>Body:  </h1>
                    <input 
                        type="textarea" 
                        name="body"
                        value={formvalues.body}
                        onChange={handleChange}
                    />
                    </label>

                <button >Submit</button>
            </form>
        </div>
        
        </div>
    )
}