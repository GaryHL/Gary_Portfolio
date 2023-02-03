import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import Navbar from "../components/navbar/Navbar";
import Projects from "../views/projects/Projects";
import AboutMe from "../views/aboutMe/AboutMe";

const Router = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/:page" element={<Home />} />
            <Route path="/home/:page" element={<Home />} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<AboutMe/>} />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
