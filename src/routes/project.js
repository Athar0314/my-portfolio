import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Hero2 from "../components/hero2";
import PricingCard from "../components/pricingcard";

const Project = () => {
  const url =
    "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  return (
    <div>
      <Navbar />
      <Hero2 imageurl={url} heading="PROJECTS" text="Some of my Works" />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;
