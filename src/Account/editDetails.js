import { useState } from "react";
import style from "./Account.module.css";

const EditDetails = () => {
    const initialvalues={firstname:"",lastname:"",codeforces:"",codechef:"",atcoder:"",leetcode:"",hackerearth:""}
    const [formvalues,setformvalues]=useState(initialvalues)
    const handleChange =(e)=>{
        const {name,value}=e.target
        setformvalues({ ...formvalues,[name]:value})
    }
    
    const handleSubmit=(e)=>{
       e.preventDefault();
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
                        name="firstname"
                        value={formvalues.firstname}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div className={style.label}>
                    <label >
                        Last Name
                    <input 
                        type="text" 
                        name="lastname"
                        value={formvalues.lastname}
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
                        name="codeforces"
                        value={formvalues.codeforces}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div className={style.label}>
                    <label >
                        Atcoder
                    <input 
                        type="text" 
                        name="atcoder"
                        value={formvalues.atcoder}
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
                        name="hackerearth"
                        value={formvalues.hackerearth}
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