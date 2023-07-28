import React from "react";
import Home from "./routes/home";
import About from "./routes/about";
import ContactUs from "./routes/contactus";
import Project from "./routes/project";
import Page404 from "./routes/page404";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./scrolltotop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
