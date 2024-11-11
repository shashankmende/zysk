import React from "react";
import "./Footer.css";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <div className="section-footer">
      <div className="section-footer-container">
        <div className="footer-1--div">
          <p>Product</p>

          <ul>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>
        <div className="footer-1--div">
          <p>Company</p>

          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-1--div">
          <p>Resources</p>

          <ul>
            <li>Blog</li>
            <li>News letter</li>
            <li>Events</li>
            <li>Help center</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-1--div">
          <p>Use Cases</p>

          <ul>
            <li>Overview</li>
            <li>Overview</li>
            <li>Overview</li>
            <li>Overview</li>
            <li>Overview</li>
            <li>Overview</li>
          </ul>
        </div>
        <div className="footer-1--div">
          <p>Social</p>

          <ul>
            <li>Overview</li>
            <li>Overview</li>
            <li>Overview</li>
            <li>Overview</li>
            <li>Overview</li>
            <li>Overview</li>
          </ul>
        </div>
        <div className="footer-1--div">
          <p>Legal</p>

          <ul>
            <li>Overview</li>
            <li>Overview</li>
            <li>Overview</li>
            <li>Overview</li>
            <li>Overview</li>
            <li>Overview</li>
          </ul>
        </div>
      </div>

      <div className="section-footer-bottom--container">
        <div className="section-footer-profile--container">
          <figure>
            <img src={logo} alt="footer logo" />
          </figure>
          <h2>zysk</h2>
        </div>
        <p>© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
