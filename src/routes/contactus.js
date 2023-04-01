import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Hero2 from "../components/hero2";
import Form from "../components/form";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="CONTACT." text="Let Have a chat" />
      <Form />
      <Footer />
    </div>
  );
};

export default ContactUs;
