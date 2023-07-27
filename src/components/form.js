import "./form.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <iframe
        title="MyLocation"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14738.34762380455!2d88.3483222860291!3d22.557142236918494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277039190377d%3A0xc2fb57aa81589f4d!2sTaltala%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1687117837734!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="fast"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <form action="https://formspree.io/f/xqkorged" method="POST">
        <label>Your Name</label>
        <input type="text" required placeholder="Enter Your Name" name="name" />
        <label>Email</label>
        <input
          type="email"
          required
          placeholder="Enter Your Email...."
          name="email"
        />
        <label>Phone Number</label>
        <input
          type="number"
          required
          placeholder="Enter Your Phone Number...."
          name="phone"
        />
        <label>Subject</label>
        <input type="text" required name="Subject" />
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type Your message here"
          name="message"
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
