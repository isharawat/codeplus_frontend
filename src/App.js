import './App.css';
import Announce from './components/announce';
import Question from './components/Questions';
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
import Womendes from './WomenCommunity/womenDes';
import style from "./styles/Home.module.css";
import ContestReminder from './components/contestReminder';
import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom"
import React from 'react';
import { useState,useEffect} from 'react';
function App() {
  const initialValue ={isLoggedin :false, isAdmin :false,firstName :'', codechef: '',
   lastName :'', codeForces :'', atCoder :'', hackerEarth :'', leetcode :'', id: '',
   emailId :'', password : ''
  };
  let order=0
  const LOCAL_STORAGE_KEY = "CREDENTIALS";
  const [credentials,setCredentials] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))||initialValue);
  
  const data= { obj1 : credentials };

  

  // useEffect(() => {
    
  //   const retriveCredentials = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   console.log(typeof(retriveCredentials))
  //   if(retriveCredentials) setCredentials(retriveCredentials); 
    
  //   console.log(retriveCredentials,'grgfg',order++)
  //   console.log(credentials,order++)

  // },[]);

  // console.log(credentials,'.............................gg',order++)

  const fnitialValue ={isLoggedin :true, isAdmin :false,firstName :'', codechef: '',
   lastName :'', codeForces :'', atCoder :'', hackerEarth :'', leetcode :'', id: '',
   emailId :'', password : ''
  };
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(credentials));
    // console.log(credentials,'.............................hh',order++)
  },[credentials]);
  
  return (
    <BrowserRouter>
      
      <div className={style.app}>
        <Menubar />
        <div className={style.part1}>
          <Topbar credentials={credentials} setCredentials = {setCredentials}/>
          <div className={style.part2}>
          <Routes>
          {/* <Route path="/Colors" element={isloggedin?<Colors/>:<Navigate to="/Login" state={data}/>}/> */}
          <Route path="/" element={<Announce/>}/>
           <Route path="/Discussions" element={<Discussions/>} /> 
           <Route path="/Leaderboard" element={<MainLeaderboard/>} /> 
           <Route path="/Questions" element={credentials.isLoggedin?<Question/>:<Login setCredentials={setCredentials} message={'Login First'}/>}/> 
           <Route path="/signup" element={<Signup />} /> 
           <Route path="/Login" element={<Login setCredentials={setCredentials} message={''}/>} /> 
           <Route path="/Editdetails" element={<EditDetails setCredentials={setCredentials} credentials={credentials}/>} /> 
           <Route path="/Womencommunity" element={<Womendes/>} />
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