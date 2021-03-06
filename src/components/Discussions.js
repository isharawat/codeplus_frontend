import stylep from "../styles/Home.module.css";

import style from "../Account/Account.module.css";
import Axios from "axios";
import { setState, useState } from "react";
import DiscussionPost from "./DiscussionPost";

export default function Discussions({ credentials }) {
  const initialvalues = {
    title: "",
    body: "",
    comments: [],
    name: `${credentials.firstName} ${credentials.lastName}`,
  };
  const [formvalues, setformvalues] = useState(initialvalues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/add-discussion", formvalues).then(
      (res) => {
        console.log(res);
        if (res.data.status === "Doubt Posted Successfully") {
          alert("doubt added Successfully");
          setformvalues(initialvalues);
        } else {
          alert("Unable to add");
        }
      }
    );
  };
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
        
      <div>
        <DiscussionPost credentials={credentials} />
      </div>
  </div>
  );
}

