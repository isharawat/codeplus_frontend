import React, { useState } from "react";
import Axios from "axios";
import Componen from "./Component";
import style from "./lockoutstyle.module.css"
const JoinContest = () => {
  const [final, setFinal] = useState([]);
  const [codes, setCodes] = useState("");

  const addQustions = async () => {
    const headers = {
      "Content-Type": "application/json",
    };
    const finale = codes;
    const request = {
      code: finale,
    };
    try {
      console.log(request);
      const res = await Axios.post("http://localhost:3001/lockoutbot/verifycontest", request, { headers });
      setFinal(res.data.data.code[0].questions);
      console.log(final);
    } catch (err) {
      console.log("ye h err", err);
      alert("Invalid Code");
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    addQustions();
  };
  const handleChange = (e) => {
    const { codes, value } = e.target;
    setCodes(value);
  };
  return (
    <>
      
        <div className={style.outest}>
          <form onSubmit={handleClick}>      
            <input
              type="text"
              name="codes"
              value={codes}
              onChange={handleChange}
              placeholder="Provide Code"
              className={style.input}
            ></input>
            <button className = {style.btn}>Enter Code</button>
          </form>
        </div>
      
        <div>
          
          {final.map((obj) => (
            <>
              <Componen key={obj._id} obj={obj} />
            </>
          ))}
        </div>
      
    </>
  );
};

export default JoinContest;
