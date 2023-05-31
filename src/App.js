import './App.css';
import Announce from './components/announce';
import Question from './components/Questions';
import Axios from "axios";
import Discussions from './components/Discussions';
import Menubar from "./components/menu";
import ManageQuestions from "./components/ManageQuestions";
import ManagePosts from "./components/ManagePosts";
import Leaderboard from "./components/sideLeaderboard";
import MainLeaderboard from './components/MainLeaderboard';
import EditDetails from './Account/editDetails';
import Login from './Account/login';
import Signup from './Account/signup';
import Topbar from "./components/topbar";
import Womendes from './components/WomenDes';
import style from "./styles/Home.module.css";
import ContestReminder from './components/contestReminder';
import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom"
import React from 'react';
import { useState,useEffect} from 'react';
function App() {
  
  const [credentials, setCredentials] = useState([]);

  

  // useEffect(() => {
    
  //   const retriveCredentials = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   console.log(typeof(retriveCredentials))
  //   if(retriveCredentials) setCredentials(retriveCredentials); 
    
  //   console.log(retriveCredentials,'grgfg',order++)
  //   console.log(credentials,order++)

  // },[]);

  // console.log(credentials,'.............................gg',order++)

  // const fnitialValue ={isLoggedin :true, isAdmin :false,firstName :'', codechef: '',
  //  lastName :'', codeForces :'', atCoder :'', hackerEarth :'', leetcode :'', id: '',
  //  emailId :'', password : ''
  // };


  
  return (
    <BrowserRouter  >
      
      <div className={style.app}>
        <div style={{position: "-webkit-sticky", position: "sticky" ,top: "0", left:"0",alignSelf: "start"}}>
        <Menubar />
        </div>
        <div >
          <div  style={{position: "-webkit-sticky", position: "sticky" ,top: "0"}}> <Topbar credentials={credentials} setCredentials = {setCredentials}/></div>
         
          <div className={style.part2}>
          <Routes>
          {/* <Route path="/Colors" element={isloggedin?<Colors/>:<Navigate to="/Login" state={data}/>}/> */}
          <Route path="/" element={<Announce credentials={credentials} />}/>
           <Route path="/Discussions" element={<Discussions credentials={credentials}/>} /> 
           <Route path="/Leaderboard" element={<MainLeaderboard/>} /> 
           <Route path="/Questions" element={credentials.isLoggedin?<Question/>:<Login setCredentials={setCredentials} message={'Login First'}/>}/> 
           <Route path="/signup" element={<Signup />} /> 
           <Route path="/Login" element={<Login setCredentials={setCredentials} message={''}/>} /> 
           <Route path="/Editdetails" element={<EditDetails setCredentials={setCredentials} credentials={credentials}/>} /> 
           <Route path="/WomenDes" element={<Womendes credentials={credentials}/>} />
           <Route path="/ManageQuestions" element={<ManageQuestions/>} /> 
           <Route path="/ManagePosts" element={<ManagePosts credentials={credentials}/>} /> 

           <Route path="*" element={<h1>Error 404 page not found</h1>} /> 
        </Routes>
            <div className={style.part3}>
              <ContestReminder />
              <Leaderboard />
            </div>
          </div>
        </div>
    </div>
       
    </BrowserRouter>

  );
}

export default App;