import "./hero.css";
import Intro1 from "../assets/intro8.png";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Intro1} alt="Intro1" />
      </div>
      <div className="content">
        <p>Hi I'M DEVELOPER.</p>
        <h1>Frontend Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <Link to="/contactus" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
