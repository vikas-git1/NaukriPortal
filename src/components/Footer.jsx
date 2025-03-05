import React from "react";
import "../styles/Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-media-link-container">
        <img src="/images/logo.png" alt="" className="h-20" />
        <div>
          <p>Connect with us</p>
          <div className="social-media-icons">
            <a href="https://www.facebook.com">
              <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagramSquare />
            </a>

            <a href="https://www.twitter.com">
              <FaSquareXTwitter />
            </a>
            <a href="https://www.linkedin.com">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <ul>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Employer home</a>
        </li>
        <li>
          <a href="#">Sitemap</a>
        </li>
        <li>
          <a href="#">Credits</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">Help center</a>
        </li>
        <li>
          <a href="#">Summons/Notices</a>
        </li>
        <li>
          <a href="#">Grievances</a>
        </li>
        <li>
          <a href="#">Report issue</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">Privacy policy</a>
        </li>
        <li>
          <a href="#">Terms & conditions</a>
        </li>
        <li>
          <a href="#">Fraud alert</a>
        </li>
        <li>
          <a href="#">Trust & safety</a>
        </li>
      </ul>
      <div className="appStore-img-container">
        <p>Apply on the go</p>
        <p>Get real-time job updates on our App</p>
        <img
          src="/images/socialMediaIcons/playstore.png"
          alt="google and Apple STore"
        />
      </div>
    </div>
  );
};

export default Footer;
