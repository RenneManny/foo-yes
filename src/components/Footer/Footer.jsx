import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
function Footer() {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="content-left width">
            <img src={assets.logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              eligendi quis deleniti, ab vel dolores odio quos voluptate maiores
              laborum facere quam illum blanditiis quidem dicta sapiente ratione
              ad laboriosam, dignissimos, numquam voluptas. Error?
            </p>
            <div className="icns">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
            </div>
          </div>
          <div className="center">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About US</li>
              <li>Delivry</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="right">
            <h2>Get in Touch</h2>
            <ul>
              <li>
                +91 8627963791</li>
              <li>akhilkum249@gmail.com</li>
              <li>BHARAT, Himachal Pradesh</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copy">&copy; 2024 copyright reserved - fooYes </p>
      </div>
    </>
  );
}

export default Footer;
