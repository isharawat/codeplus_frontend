import './App.css';
import Announce from './components/announce';
import Question from './components/Questions';
import Discussions from './components/Discussions';
import Menubar from "./components/menu";
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
function App() {
  return (
    <BrowserRouter>
      
      <div className={style.app}>
        <Menubar />
        <div className={style.part1}>
          <Topbar />
          <div className={style.part2}>
          <Routes>
          <Route path="/" element={<Announce/>}/>
           <Route path="/Discussions" element={<Discussions/>} /> 
           <Route path="/Leaderboard" element={<MainLeaderboard/>} /> 
           <Route path="/Questions" element={<Question/>} /> 
           <Route path="/signup" element={<Signup />} /> 
           <Route path="/Login" element={<Login/>} /> 
           <Route path="/Editdetails" element={<EditDetails/>} /> 
           <Route path="/Womencommunity" element={<Womendes/>} /> 
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