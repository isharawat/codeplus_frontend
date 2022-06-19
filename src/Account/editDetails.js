import { useState } from "react";
import axios from "axios";
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
                    />
                    </label>
                </div>
                <div className={style.label}>
                    <label >
                        Last Name
                    <input 
                        type="text" 
                        name="lastName"
                        value={formvalues.lastName}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                
                <div>
                    <h3>Please provide handle name of the following:</h3>
                </div>
                <div className={style.label}>
                    <label>
                        Codeforces
                    <input 
                        type="text" 
                        name="codeForces"
                        value={formvalues.codeForces}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div className={style.label}>
                    <label >
                        Atcoder
                    <input 
                        type="text" 
                        name="atCoder"
                        value={formvalues.atCoder}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div className={style.label}>
                    <label >
                        Codechef
                    <input 
                        type="text" 
                        name="codechef"
                        value={formvalues.codechef}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div className={style.label}>
                    <label >
                        Leetcode
                    <input
                        type="text" 
                        name="leetcode"
                        value={formvalues.leetcode}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div className={style.label}>
                    <label >
                        Hackerearth
                    <input
                        type="text" 
                        name="hackerEarth"
                        value={formvalues.hackerEarth}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div className={style.buttonbox}>
                  <button className={style.button} >Save Changes</button>
                </div>
                <div className={style.buttonbox}>
                <button className={style.button}  >Back to Home</button>
            </div>
            </div>
            </form>
        </div>
     );
}
 
export default EditDetails;