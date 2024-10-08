import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

import { assets } from "../../assets/assets.js";
function Navbar({setLogin}) {
  const [menu, setMenu] = useState("Home");

  return (
    <>
      <div className="container">
        <div className="flex navbar">
          <Link to={"/"}><img src={assets.logo} alt="" className="logo" />
          </Link>
          
          <ul className="navbar-menu">
            <Link to="/"
              onClick={() => setMenu("Home")}
              className={menu === "Home" ? "active" : ""}
            >
              Home
            </Link>
            <a href="#explore-menu"
              onClick={() => setMenu("Menu")}
              className={menu === "Menu" ? "active" : ""}
            >
              Menu
            </a>
            <a href="#app-download"
              onClick={() => setMenu("Mobile-App")}
              className={menu === "Mobile-App" ? "active" : ""}
            >
              Mobile App
            </a>
            <a href="#footer"
              onClick={() => setMenu("Contact-Us")}
              className={menu === "Contact-Us" ? "active" : ""}
            >
              Contact Us
            </a>
          </ul>
          <div className="nav-right">
            <img src={assets.search_icon} alt="" />
            <div className="nav-search">
             <Link to={"/cart"}><img src={assets.basket_icon} alt="" /></Link> 
              <div className="dot"></div>
            </div>
            <button onClick={()=>setLogin(true)}>SIGN-IN</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
