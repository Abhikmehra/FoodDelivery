import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img style={{height:"90px",marginTop:"-48px"}} src={assets.logo} alt="" />
          <p>
          Abhi Food, founded in 2004, is known for delivering high-quality, nutritious food products. With a focus on freshness and customer satisfaction, it has become a trusted name in the food industry.
          </p>
          <div className="footer-social-icons ">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>9120010883</li>
            <li>Contact@AbhiFood.Com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ AbhiFOOD.Com.All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
