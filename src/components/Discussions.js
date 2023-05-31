import stylep from "../styles/Home.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "../Account/Account.module.css";
import Axios from "axios";
import { setState, useState } from "react";
import DiscussionPost from "./DiscussionPost";

export default function Discussions() {
    
  
  const user=JSON.parse(localStorage.getItem("User"));
  const initialvalues = {
    title: "",
    body: "",
    comments: [],
    name: `${user.firstName} ${user.lastName}`,
  };
  const [formvalues, setformvalues] = useState(initialvalues);
  const addADiscuss = async(values) =>{
    console.log(values)
    const request = {
      ...values
    }
    console.log(request);
    const  headers = {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem("token")
  }
    const response = await Axios.post("http://localhost:3001/discussion/add-discussion",request,{headers})
    setformvalues(formvalues.concat(response.data))
}
  const handleSubmit = (e) => {
    e.preventDefault();

    addADiscuss({...formvalues}) 
    setformvalues({ title: "",
    body: "",
    comments: [],
    name: `${user.firstName} ${user.lastName}`})
   
  };

  const handleChange = (e)=>{
    setformvalues({...formvalues,[e.target.name]:e.target.value})
}
useEffect(() => {
  console.log(user)
}, [handleSubmit])

  return (
    <div >
          <div className={style.box} style={{padding:"20px", margin: "10px", borderRadius:"15px",}}>
            <form onSubmit={handleSubmit} className={style.form}>
              <div>
                <label className={style.label}>Title: </label>
                <input
                  type="text"
                  name="title"
                  value={formvalues.title}
                  onChange={handleChange}
                  className={style.input1}
                  required
                />
              </div>
              <div>
                <label className={style.label}>Body: </label>
                <input
                  type="textarea"
                  name="body"
                  value={formvalues.body}
                  onChange={handleChange}
                  className={style.input1}
                  required
                />
              </div>
              <div className={style.buttonbox}>
                <button className={style.button}>Sumbit</button>
              </div>
            </form>
          </div>
        
      <div>
        <DiscussionPost />
      </div>
  </div>
  );
}

