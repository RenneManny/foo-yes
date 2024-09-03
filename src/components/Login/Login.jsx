import React, { useState } from 'react'
import "./Login.css"
import { assets } from '../../assets/assets'
function Login({showLogin}) {
    const [currentState,useCurrentState]=useState("Signup")
  return (
    <>
      <div className="login">
        <form action="" className='login-container'>
            <div className="login-title">
                <h2>
                {currentState}
                </h2>
                <img onClick={()=>showLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="inputs">
                <input type="text" placeholder='Your name ' required />
                <input type="email" placeholder='Your email ' required />
            </div>
                <button>{currentState==="Signup"?"Create Account":"Login"}</button>
        </form>
      </div>
    </>
  )
}

export default Login
