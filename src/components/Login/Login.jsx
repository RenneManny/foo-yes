import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
function Login({ showLogin }) {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <>
      <div className="login">
        <form action="" className="login-container">
          <div className="login-title">
            <h2>{currentState}</h2>
            <img
              onClick={() => showLogin(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <div className="inputs">
            {currentState === "Signup" && (
              <input type="text" placeholder="Your name" required />
            )}

            <input type="email" placeholder="Your email" required />

            <input type="password" placeholder="Password" required />

            {currentState === "Signup" && (
              <input type="password" placeholder="Confirm Password" required />
            )}
          </div>

          <button>
            {currentState === "Signup" ? "Create Account" : "Login"}
          </button>

          <div className="login-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the PRIVACY POLICY conditions.</p>
          </div>

          {currentState === "Login" ? (
            <p>
              Create a new account ?{" "}
              <span onClick={() => setCurrentState("Signup")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account{" "}
              <span onClick={() => setCurrentState("Login")}>Login here</span>
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default Login;
