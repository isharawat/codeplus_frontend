import styles from "../styles/womenDes.module.css";
import style from "../Account/Account.module.css";
import Axios from "axios";
import { setState, useState } from "react";
import WomenPost from "./WomenPost";

export default function WomenDes() {
  
  const user=JSON.parse(localStorage.getItem("User"));
  const initialvalues = {
    title: "",
    body: "",
    comments: [],
    name: `${user.firstName} ${user.lastName}`,
  };
  const [formvalues, setformvalues] = useState(initialvalues);
  const addDiscuss = async(values) =>{
    console.log(values)
    const request = {
      ...values
    }
    console.log(request);
    const  headers = {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem("token")
  }
    const response = await Axios.post("http://localhost:3001/women-section/add-women-post",request,{headers})
    setformvalues(formvalues.concat(response.data))
}
  const handleSubmit = (e) => {
    e.preventDefault();

    addDiscuss({...formvalues}) 
    setformvalues(initialvalues)
   
  };

  const handleChange = (e)=>{
    setformvalues({...formvalues,[e.target.name]:e.target.value})
}
  return (
    <div>
      <div className={styles.description}>
        <h3>Women Community</h3>
        <p>
          Please Share Any useful Information or new opportunities for girls.
        </p>
        <div className={styles.createpost}>
          <div className={style.box}>
            <form onSubmit={handleSubmit} className={style.form}>
              <div>
                <label className={style.label}>Title: </label>
                <input
                  type="text"
                  name="title"
                  value={formvalues.title}
                  onChange={handleChange}
                  className={style.input1}
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
                />
              </div>
              <div className={style.buttonbox}>
                <button className={style.button}>Sumbit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <WomenPost user={user} />
      </div>
    </div>
  );
}
