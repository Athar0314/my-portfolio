import "./aboutcontent.css";
import { Link } from "react-router-dom";
import React from "react";
import Intro1 from "../assets/intro1.png"
import Intro2 from "../assets/intro2.png"

const AboutContent = () => {
  return (
<div className="about">
<div className="left">
      <h1>Who am I?</h1>
      <p>
        I am React Front end Developer
         With a knowledge of HTML CSS BOOTSSTRAP,
        I currently have a experience of 1 year in
         my current organisation, I have done Two 
         project as a Frontend Developer, 
         I am practising Power BI
        Development.
      </p>
      <Link to="/contactus">
        <button className="btn">Contact</button>
      </Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={Intro1} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={Intro2} className="img" alt="true"/>
            </div>
        </div>
    </div>
</div>
  );
};

export default AboutContent;
