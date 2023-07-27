import "./aboutcontent.css";
import { Link } from "react-router-dom";
import React from "react";
import Intro1 from "../assets/intro1.png";
import Intro2 from "../assets/intro2.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          I am a skilled Front-End Developer specializing in Angular and React
          with a passion for crafting intuitive and visually engaging web
          applications. With a keen eye for design and a strong command of
          modern development tools, I create seamless user experiences that
          exceed expectations. My expertise lies in building responsive,
          performant, and scalable solutions that blend creativity with
          technical prowess. Eager to embrace new challenges, I constantly
          strive to stay at the forefront of cutting-edge web technologies,
          ensuring the delivery of top-notch projects that leave a lasting
          impact.
        </p>
        <Link to="/contactus">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Intro1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={Intro2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
