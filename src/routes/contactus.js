import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Hero2 from "../components/hero2";
import Form from "../components/form";

const ContactUs = () => {
  const url =
    "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww&w=1000&q=80";
  return (
    <div>
      <Navbar />
      <Hero2 imageurl={url} heading="CONTACT." text="Let Have a chat" />
      <Form />
      <Footer />
    </div>
  );
};

export default ContactUs;
