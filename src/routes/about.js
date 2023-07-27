import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Hero2 from "../components/hero2";
import AboutContent from "../components/aboutcontent";

const About = () => {
  const url = "https://wallpapercave.com/wp/wp6784391.jpg";
  return (
    <div>
      <Navbar />
      <Hero2 imageurl={url} heading="ABOUT" text="I am a front end Developer" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
