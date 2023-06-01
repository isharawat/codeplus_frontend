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
import Womendes from './components/WomenDes';
import style from "./styles/Home.module.css";
import ContestReminder from './components/contestReminder';
import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom"
import React from 'react';
import { useState, useEffect} from 'react';
function App() {
  
  const  [credentials, setCredentials] = useState([]);

  return (
    <BrowserRouter>
      
      <div className={style.app}>
        <div style={{position: "-webkit-sticky", position: "sticky" ,top: "0", left:"0",alignSelf: "start"}}>
          <Menubar />
        </div>
        <div >
          <div style={{position: "-webkit-sticky", position: "sticky" ,top: "0"}}> 
            <Topbar setCredentials = {setCredentials}/>
          </div>
         
          <div className={style.part2}>
            <div>
              <Routes>
            
                <Route path="/" element={localStorage.getItem("token")?<Announce />:<Login/>}/>
                <Route path="/Discussions" element={<Discussions/>} /> 
                <Route path="/Leaderboard" element={<MainLeaderboard/>} /> 
                <Route path="/Questions" element={<Question/>}/> 
                <Route path="/signup" element={<Signup />} /> 
                <Route path="/Login" element={<Login/>} /> 
                <Route path="/Editdetails" element={<EditDetails/>} /> 
                <Route path="/WomenDes" element={<Womendes/>} />
                <Route path="/ManageQuestions" element={<ManageQuestions/>} /> 
                <Route path="/ManagePosts" element={<ManagePosts/>} /> 

                <Route path="*" element={<h1>Error 404 page not found</h1>} /> 
              </Routes>
            </div>
            <div style={{position: "sticky", top: "80px", alignSelf: "start"}}>
              <div className={style.part3}>
                <ContestReminder />
                <Leaderboard />
              </div>
            </div>
          </div>
        </div>
    </div>
       
    </BrowserRouter>

  );
}

export default App;