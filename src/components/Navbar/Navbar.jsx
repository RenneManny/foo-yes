import React, { useState } from "react";
import "./Navbar.css";

import { assets } from "../../assets/assets.js";
function Navbar() {
  const [menu, setMenu] = useState("Home");

  return (
    <>
      <div className="container">
        <div className="flex">
          <img src={assets.logo} alt="" className="logo" />
          <ul className="navbar-menu">
            <li
              onClick={() => setMenu("Home")}
              className={menu === "Home" ? "active" : ""}
            >
              Home
            </li>
            <li
              onClick={() => setMenu("Menu")}
              className={menu === "Menu" ? "active" : ""}
            >
              Menu
            </li>
            <li
              onClick={() => setMenu("Mobile-App")}
              className={menu === "Mobile-App" ? "active" : ""}
            >
              Mobile App
            </li>
            <li
              onClick={() => setMenu("Contact-Us")}
              className={menu === "Contact-Us" ? "active" : ""}
            >
              Contact Us
            </li>
          </ul>
          <div className="nav-right">
            <img src={assets.search_icon} alt="" />
            <div className="nav-search">
              <img src={assets.basket_icon} alt="" />
              <div className="dot"></div>
            </div>
            <button>SIGN-IN</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
