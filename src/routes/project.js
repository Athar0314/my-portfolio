import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Hero2 from "../components/hero2";
import PricingCard from "../components/pricingcard";


const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="PROJECTS" text="Some of my Works"/>
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;
