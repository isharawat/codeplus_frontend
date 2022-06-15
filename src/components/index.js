
import styles from '../styles/Home.module.css'
import { useState } from 'react'

import style from './Account/Account.module.css'
import Login from './Account/login'
import Signup from './Account/signup'

export default function Home() {
  const [isloggedIn,Changelog]=useState(true);
  
  const handleSignup=()=> {
   console.log("hii");
   }
  return (
    
    <div className={style.outer}>
      <div className={style.codeplus}>
        <h1>CodePlus</h1>
        <p className={style.p}>A platform that can run CodePlus(IIITA cp) classes more smoothly. It has the provision for making announcement for class related stuffs, doubt asking, doubt solving, discussions, contests reminder for different sites, leaderboard, a separate community for girls only techniacal stuff.</p>
      </div>
      <div className={style.account}>
        <div className={style.btn}>
          <div></div>
          <button className={style.Signup}  onClick={handleSignup}>Sign Up</button>
        <button className={style.Login}>Log In</button></div>
        {isloggedIn? <Login />:<Signup/>}
      </div>
    </div>
  )
}
