import { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import style from "./Account.module.css";
import axios from "axios";

const Signup = () => {

  const initialvalues ={isLoggedin :false, isAdmin :false, firstName :'', codechef: '',
   lastName :'', codeForces :'', atCoder :'', hackerEarth :'', leetcode :'',
   emailId :'', password : '' 
  };

  const [formvalues, setformvalues] = useState(initialvalues);
  const navigate=useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formvalues.emailId)

    if(formvalues.emailId&&formvalues.password){
      axios.post("http://localhost:3001/register",formvalues )
      .then(res=>console.log(res))
   }
        //Axios request
       // if success
         navigate("/Login");
        // setCredentials(initialvalues)

    // 
    // else message signup again 
    // setformvalues(initialvalues);
    

  };

  return (
    <div className={style.outer}>
      <div className={style.codeplus}>
        <h1>CodePlus</h1>
        <p className={style.p}>
          jjhkjjjjjjjjjjjjjjj
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
                    name="firstName"
                    value={formvalues.firstName}
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
                    name="lastName"
                    value={formvalues.lastName}
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
                    name="emailId"
                    value={formvalues.emailId}
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
                    name="codeForces"
                    value={formvalues.codeForces}
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
                    name="atCoder"
                    value={formvalues.atCoder}
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
                    name="hackerEarth"
                    value={formvalues.hackerEarth}
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
