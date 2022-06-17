import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Account.module.css";

const Signup = () => {

  const initialvalues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    codeforces: "",
    codechef: "",
    atcoder: "",
    leetcode: "",
    hackerearth: "",
  };

  const [formvalues, setformvalues] = useState(initialvalues);
 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.outer}>
      <div className={style.codeplus}>
        <h1>CodePlus</h1>
        <p className={style.p}>
          jjhkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjhgftrdeswasedrftgyhjk
        </p>
      </div>
      <div className={style.account}>
        <div className={style.btn}>
          <div></div>
          <button className={style.Signup} >
            Sign Up
          </button>
          <NavLink to="/login">
            <button className={style.Login} >Log In</button>
          </NavLink>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <h3>Personal Details</h3>
            </div>
            <div className={style.form}>
              <div className={style.label}>
                <label>
                  First Name
                  <input
                    type="text"
                    name="firstname"
                    value={formvalues.firstname}
                    onChange={handleChange}
                    className={style.input}
                  />
                </label>
              </div>
              <div className={style.label}>
                <label>
                  Last Name
                  <input
                    type="text"
                    name="lastname"
                    value={formvalues.lastname}
                    onChange={handleChange}
                    className={style.input}
                  />
                </label>
              </div>
              <div className={style.label}>
                <label>
                  College Email Id
                  <input
                    type="text"
                    name="email"
                    value={formvalues.email}
                    onChange={handleChange}
                    className={style.input}
                  />
                </label>
              </div>
              <div className={style.label}>
                <label>
                  Password
                  <input
                    type="text"
                    name="password"
                    value={formvalues.password}
                    onChange={handleChange}
                    className={style.input}
                  />
                </label>
              </div>
            </div>
            <div>
              <h3>Please provide handle name of the following:</h3>
            </div>
            <div className={style.form}>
              <div className={style.label}>
                <label>
                  Codeforces
                  <input
                    type="text"
                    name="codeforces"
                    value={formvalues.codeforces}
                    onChange={handleChange}
                    className={style.input}
                  />
                </label>
              </div>
              <div className={style.label}>
                <label>
                  Atcoder
                  <input
                    type="text"
                    name="atcoder"
                    value={formvalues.atcoder}
                    onChange={handleChange}
                    className={style.input}
                  />
                </label>
              </div>
              <div className={style.label}>
                <label>
                  Codechef
                  <input
                    type="text"
                    name="codechef"
                    value={formvalues.codechef}
                    onChange={handleChange}
                    className={style.input}
                  />
                </label>
              </div>
              <div className={style.label}>
                <label>
                  Leetcode
                  <input
                    type="text"
                    name="leetcode"
                    value={formvalues.leetcode}
                    onChange={handleChange}
                    className={style.input}
                  />
                </label>
              </div>
              <div className={style.label}>
                <label>
                  Hackerearth
                  <input
                    type="text"
                    name="hackerearth"
                    value={formvalues.hackerearth}
                    onChange={handleChange}
                    className={style.input}
                  />
                </label>
              </div>
            </div>
            <div className={style.buttonbox}>
              <button className={style.button}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
