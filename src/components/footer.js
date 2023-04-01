import "./footer.css";
import { Link } from "react-router-dom";

import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>6 Taltala Lane Kolkata, West Bengal</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 8240764685
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              ashar7003@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            This is me Athar Hossain have a experience of JS, HTML, CSS,
            Reactjs. I enjoy doing programming and developing things.
          </p>
          <div className="social">
            <Link to="https://www.facebook.com/profile.php?id=100008970912513">
              <FaFacebook
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>
            <Link to="https://www.instagram.com/i_am_atharhossain/">
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
