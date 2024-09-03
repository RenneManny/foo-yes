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
            <p >
              Indulge in a culinary journey at fooYes! Serving up fresh,
              delicious dishes with a touch of elegance. Join us for a memorable
              dining experience. For reservations and inquiries, contact us or
              visit our website. We look forward to welcoming you!
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
              <li>+91 8627963791</li>
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
