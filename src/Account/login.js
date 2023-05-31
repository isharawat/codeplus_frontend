import { useState } from "react";

import { useNavigate } from 'react-router-dom';
import style from "./Account.module.css";
import axios from "axios";
import {NavLink} from "react-router-dom"
const Login = () => {
const message = localStorage.getItem("message");
//New Changes
const history = useNavigate();
const [credentials, setCredentials] = useState({ emailId: "", password: "" })
const handleSubmit = async (e) => {
  e.preventDefault()
  const response = await fetch("http://localhost:3001/auth/login", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailId: credentials.emailId, password: credentials.password })
  });
  const json = await response.json()
 
  if (json.success === true) {
      //Redirect'
      localStorage.setItem("token", json.authToken );
      console.log(json.user);
      localStorage.setItem("User" ,JSON.stringify(json.user));
      const temp=localStorage.getItem("User");
      console.log("temp",temp);
      localStorage.setItem("message", "" );
      console.log(json);
      history("/")
 
  }

}
const handleChange = (e) => {
  setCredentials({ ...credentials, [e.target.name]: e.target.value })
}






//   const initialvalues ={isLoggedin :false, isAdmin :false, firstName :'', codechef: '',
//    lastName :'', codeForces :'', atCoder :'', hackerEarth :'', leetcode :'', id: '',
//    emailId :'', password : '' 
//   };
  
//   let msg='';
//   const [formvalues, setformvalues] = useState(initialvalues);
//   // const [credentials, setformvalues] = useState(true);
//   const navigate=useNavigate();
 
// const handleChange = (e) => {
//     // setcredentials(true);
//     const { name, value} = e.target;
//       setformvalues({ ...formvalues, [name]: value });
    
//   };
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     const obj ={
//       emailId : formvalues.emailId,
//       password : formvalues.password
//     }
//     console.log(obj)
//     if (formvalues.emailId && formvalues.password){
//       axios.post("http://localhost:3001/login",obj)
//       .then(res=>{alert(res.data.message)
//               //setLoginUser(res.data.user)
//               msg=res.data.message;
//               const result=res.data.user
//               if(msg==="Logged in sucessfully"){
//                 setCredentials({isLoggedin :true, isAdmin :result.isAdmin, firstName :result.firstName, codechef: result.codechef,
//                 lastName :result.lastName, codeForces :result.codeForces, atCoder :result.atCoder, hackerEarth :result.hackerEarth, leetcode :result.leetcode, 
//                 id: result._id, emailId :result.emailId, password : result.password})
//                 navigate("/")
//               }
             
//           })

//     }
    

//     //Axios request
//        // if success
//           //  formvalues=res.data.obj
//             // message===''?navigate("/"):navigate("/Questions");

//        // 
//        // else message login again 
//        // setformvalues(initialvalues);
//   //      const {name,email,password} = user
//   //  if (name && email && password){
//   //   axios.post("http://localhost:6969/Register",user )
//   //   .then(res=>console.log(res))
//   //  }
//   //  else{
//   //      alert("invalid input")
//   //  };
//   // axios.post("http://localhost:6969/Login",user)
//   //       .then(res=>{alert(res.data.message)
//   //       setLoginUser(res.data.user)
//   //   history.push("/")})
//   //   }

      

//  }
  return (
    <div className={style.outer}>
    <div className={style.codeplus}>
     
      <p className={style.p}>
        {message}
      </p>
      </div>
    <div className={style.account}>
      <div className={style.btn}>
        <div></div>
        <NavLink to ="/signup">
          <button className={style.Signup} >
            Sign Up
          </button>
        </NavLink>
        <button className={style.Login} >Log In</button>
      </div>
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <h3>Fill your account Details:</h3>
        </div>
        <div className={style.form}>
          <div >
            <label className={style.label}>
              College Email Id:   </label>
              <input
                type="text"
                name="emailId"
                value={credentials.emailId}
                onChange={handleChange}
                className={style.input}
              />
         
          </div>
          <div>
            <label className={style.label}>
              Password:</label>
              <input
                type="text"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className={style.input}
              />
            
          </div>
        </div>
        <div className={style.label}>
          <label>
            <input
              type="checkbox"
              name="check"
            />
            Remember me
          </label>
        </div>
        <div className={style.buttonbox}>
          <button className={style.button}  >LOG IN</button>
        </div>
        <div>
          {/* <p>{!credentials ? "wrong credential" : null}</p> */}
        </div>
      </form>
    </div>
    </div>
    </div>
    
  );
};

export default Login;
