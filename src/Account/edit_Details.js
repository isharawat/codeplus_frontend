import { useState } from "react";

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
        <div>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Personal Details</h3>
                </div>
                <div>
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
                <div>
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
                <div>
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
                <div>
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
                <div>
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
                <div>
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
                <div>
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
                <div>
                    <button>Save Changes</button>
                </div>
            </form>
            <button onClick={handleChangetoHome}>Back to Home</button>
        </div>
     );
}
 
export default EditDetails;