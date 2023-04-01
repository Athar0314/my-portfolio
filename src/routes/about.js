import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Hero2 from "../components/hero2";
import AboutContent from "../components/aboutcontent";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="ABOUT" text="I am a front end Developer" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
