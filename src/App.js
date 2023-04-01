import React from "react";
import Home from "./routes/home";
import About from "./routes/about";
import ContactUs from "./routes/contactus";
import Project from "./routes/project";
import { Route, Routes } from "react-router-dom";

function App() {
  return <>
  <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/about" element={<About/>}/>
    <Route  path="/project" element={<Project/>}/>
    <Route  path="/contactus" element={<ContactUs/>}/>
  </Routes>
  </>;
}

export default App;
