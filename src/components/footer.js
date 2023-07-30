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
  FaArrowAltCircleUp,
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
            <Link
              target="_blank"
              to="https://www.facebook.com/profile.php?id=100008970912513"
            >
              <FaFacebook
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/i_am_atharhossain/"
            >
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/athar-hossain-90300b173/"
            >
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>
          </div>
          <FaArrowAltCircleUp
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            size={40}
            style={{
              color: "#fff",
              marginLeft: "420px",
              marginTop: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
