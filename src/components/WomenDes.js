import styles from "../styles/womenDes.module.css";
import style from "../Account/Account.module.css";
import Axios from "axios";
import { setState, useState } from "react";
import WomenPost from "./WomenPost";

export default function WomenDes({ credentials }) {
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
    Axios.post("http://localhost:3001/add-women-post", formvalues).then(
      (res) => {
        console.log(res);
        if (res.data.status === "Posted Successfully") {
          alert("post Added Successfully");
          setformvalues(initialvalues);
        } else {
          alert("Unable to add");
        }
      }
    );
  };
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
        <WomenPost credentials={credentials} />
      </div>
    </div>
  );
}
