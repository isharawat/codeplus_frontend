import { setState, useState } from "react";
import styles from "../styles/Post.module.css";
import Axios from "axios";
import style from "../Account/Account.module.css";

export default function ManagePosts() {
  const user = JSON.parse(localStorage.getItem("User"));
  const initialvalues = {
    title: "",
    body: "",
    comments: [],
    name: `${user.firstName} ${user.lastName}`,
  };
  const [formvalues, setformvalues] = useState(initialvalues);
  const addADiscuss = async (values) => {
    console.log(values);
    const request = {
      ...values,
    };
    console.log(request);
    const headers = {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    };
    const response = await Axios.post(
      "http://localhost:3001/posts/add-posts",
      request,
      { headers }
    );
    setformvalues(formvalues.concat(response.data));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addADiscuss({ ...formvalues });
    setformvalues({
      title: "",
      body: "",
      comments: [],
      name: `${user.firstName} ${user.lastName}`,
    });
  };
  return (
    <div className={style.outer1}>
      <div className={style.box}>
        <form onSubmit={handleSubmit} >
            <div className={style.form}>
          <div>
            <label className={style.label}>Title: </label>
            <input
              type="text"
              name="title"
              value={formvalues.title}
              onChange={handleChange}
              className={style.input}
            />
          </div>
          <div>
            <label className={style.label}>Body: </label>
            <input
              type="textarea"
              name="body"
              value={formvalues.body}
              onChange={handleChange}
              className={style.input}
            />
            </div>
          </div>
          <div className={style.buttonbox}>
            <button className={style.button}>Sumbit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
