import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import PricingCard from "../components/pricingcard";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PricingCard />
      <Footer/>
    </div>
  );
}

export default Home;
