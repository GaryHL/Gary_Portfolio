import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import Navbar from "../components/navbar/Navbar";
import Projects from "../views/projects/Projects";

const Router = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects/>} />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
