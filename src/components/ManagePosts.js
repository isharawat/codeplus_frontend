
import {setState, useState} from 'react';
import styles from '../styles/Post.module.css';

export default function ManageQuestions(){
    const initialvalues={title:"",body: "" }
    const [formvalues,setformvalues]=useState(initialvalues)

    const handleChange =(e)=>{
        const {name,value}=e.target
        setformvalues({ ...formvalues,[name]:value})
    }
    
    const handleSubmit=(e)=>{
       e.preventDefault();
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