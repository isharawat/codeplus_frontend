import { useState } from "react";
import axios from "axios";
import style from './Account.module.css';
const EditDetails = ({credentials,setCredentials}) => {
    const initialvalues={firstname:"",lastname:"",codeforces:"",codechef:"",atcoder:"",leetcode:"",hackerearth:""}
    const [formvalues,setformvalues]=useState(credentials)
    const handleChange =(e)=>{
        const {name,value}=e.target
        setformvalues({ ...formvalues,[name]:value})
    }
    
    const handleSubmit=(e)=>{
       e.preventDefault();
       console.log(formvalues.emailId)

    
      axios.patch(`http://localhost:3001/editdetails/${formvalues.id}`,formvalues )
      .then(res=>{
          const msg=res.data.status
          console.log(msg)
          if(msg==="Successfully updated the user"){
             const result=res.data.data.updateduser;
             setCredentials({isLoggedin :true, isAdmin :result.isAdmin, firstName :result.firstName, codechef: result.codechef,
                lastName :result.lastName, codeForces :result.codeForces, atCoder :result.atCoder, hackerEarth :result.hackerEarth, leetcode :result.leetcode, 
                id: result._id, emailId :result.emailId, password : result.password})
          }
          alert(msg)
      })

    }

    return ( 
        <div className={style.outer}>
            <div className={style.codeplus}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h3>Personal Details</h3>
                    </div>
                    <div className={style.form}>
                        <div className={style.label}>
                            <label>
                                First Name:  
                            </label>
                            <input 
                                type="text" 
                                name="firstName"
                                value={formvalues.firstName}
                                onChange={handleChange}
                                className={style.input1}
                            />
                            
                        </div>
                        <div className={style.label}>
                            <label >
                                Last Name: 
                            </label>
                            <input 
                                type="text" 
                                name="lastName"
                                value={formvalues.lastName}
                                onChange={handleChange}
                                className={style.input1}
                            />
                            
                        </div>
                    </div>
                    <div>
                        <h3>Please provide handle name of the following:</h3>
                    </div>
                    <div className={style.form}>
                        <div className={style.label}>
                            <label>
                                Codeforces: 
                            </label>
                            <input 
                                type="text" 
                                name="codeForces"
                                value={formvalues.codeForces}
                                onChange={handleChange}
                                className={style.input1}
                            />    
                        </div>
                        <div className={style.label}>
                            <label >
                                Atcoder: 
                            </label>
                            <input 
                                type="text" 
                                name="atCoder"
                                value={formvalues.atCoder}
                                onChange={handleChange}
                                className={style.input1}
                            />   
                        </div>
                        <div className={style.label}>
                            <label >
                                Codechef: 
                            </label>
                            <input 
                                type="text" 
                                name="codechef"
                                value={formvalues.codechef}
                                onChange={handleChange}
                                className={style.input1}
                            />
                            
                        </div>
                        <div className={style.label}>
                            <label >
                                Leetcode: 
                            </label>
                            <input
                                type="text" 
                                name="leetcode"
                                value={formvalues.leetcode}
                                onChange={handleChange}
                                className={style.input1}
                            />
                            
                        </div>
                        <div className={style.label}>
                            <label >
                                Hackerearth:
                            </label> 
                            <input
                                type="text" 
                                name="hackerEarth"
                                value={formvalues.hackerEarth}
                                onChange={handleChange}
                                className={style.input1}
                            />
                            
                        </div>
                    </div>
                    <div className={style.buttonbox}>
                    <button className={style.button} >Save Changes</button>
                    </div>
                    <div className={style.buttonbox}>
                        <button className={style.button}  >Back to Home</button>
                    </div> 
                </form>
            </div>
        </div>
     );
}
 
export default EditDetails;