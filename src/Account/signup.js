import { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import style from "./Account.module.css";
import axios from "axios";

const Signup = () => {
  //new changes
  const history = useNavigate();
  const [credentials, setCredentials] = useState({ isLoggedin :false, isAdmin :false, firstName :'', codechef: '',
   lastName :'', codeForces :'', atCoder :'', hackerEarth :'', leetcode :'',
   emailId :'', password : ''  })
  const handleSubmit = async (e) => {
      e.preventDefault()
      const response = await fetch("http://localhost:3001/auth/register", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            firstName: credentials.firstName, 
            lastName: credentials.lastName,
            codeForces: credentials.codeForces,
            codechef: credentials.codechef,
            leetcode: credentials.leetcode,
            atCoder: credentials.atCoder,
            hackerEarth: credentials.hackerEarth,
            isLoggedin:false,
            isAdmin:false,
            emailId: credentials.emailId, 
            password: credentials.password 
          })
      });
      const json = await response.json()
      console.log(json)
      if (json.success === true) {
          //Redirect
          localStorage.setItem("token", json.authToken)
          history("/")
      }
     
  }
  const handleChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className={style.outer}>
      
      <div className={style.account}>
        <div className={style.btn}>
          <div></div>
          <button className={style.Signup2} >
            Sign Up
          </button>
          <NavLink to="/login">
            <button className={style.Login2} >Log In</button>
          </NavLink>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div style={{marginLeft:"20px"}}>
              <h3>Personal Details</h3>
            </div>
            <div className={style.form}>
              <div className={style.label}>
                <label style={{marginRight:"6px"}}>
                  First Name:
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={credentials.firstName}
                    onChange={handleChange}
                    className={style.input1}
                  />
                
              </div>
              <div className={style.label}>
                <label style={{marginRight:"6px"}}>
                  Last Name:
                </label>
                  <input
                    type="text"
                    name="lastName"
                    value={credentials.lastName}
                    onChange={handleChange}
                    className={style.input1}
                  />
                
              </div>
              <div className={style.label}>
                <label style={{marginRight:"6px"}}>
                  College Email Id:
                  </label>
                  <input
                    type="text"
                    name="emailId"
                    value={credentials.emailId}
                    onChange={handleChange}
                    className={style.input1}
                  />
                
              </div>
              <div className={style.label}>
                <label style={{marginRight:"6px"}}>
                  Password:
                  </label>
                  <input
                    type="text"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    className={style.input1}
                  />
                
              </div>
            </div>
            <div style={{marginLeft:"20px"}}>
              <h3>Please provide handle name of the following:</h3>
            </div>
            <div className={style.form}>
              <div className={style.label}>
                <label style={{marginRight:"6px"}}>
                  Codeforces:
                  </label>
                  <input
                    type="text"
                    name="codeForces"
                    value={credentials.codeForces}
                    onChange={handleChange}
                    className={style.input1}
                  />
                
              </div>
              <div className={style.label}>
                <label style={{marginRight:"6px"}}>
                  Atcoder:  
                  </label>
                  <input
                    type="text"
                    name="atCoder"
                    value={credentials.atCoder}
                    onChange={handleChange}
                    className={style.input1}
                  />
                
              </div>
              <div className={style.label}>
                <label style={{marginRight:"6px"}}>
                  Codechef:
                  </label>
                  <input
                    type="text"
                    name="codechef"
                    value={credentials.codechef}
                    onChange={handleChange}
                    className={style.input1}
                  />
                
              </div>
              <div className={style.label}>
                <label style={{marginRight:"6px"}}>
                  Leetcode:
                  </label>
                  <input
                    type="text"
                    name="leetcode"
                    value={credentials.leetcode}
                    onChange={handleChange}
                    className={style.input1}
                  />
                
              </div>
              <div className={style.label}>
                <label style={{marginRight:"6px"}}>
                  Hackerearth:
                  </label>
                  <input
                    type="text"
                    name="hackerEarth"
                    value={credentials.hackerEarth}
                    onChange={handleChange}
                    className={style.input1}
                  />     
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
