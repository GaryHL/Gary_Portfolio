import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import Navbar from "../components/navbar/Navbar";
import Projects from "../views/projects/Projects";
import AboutMe from "../views/aboutMe/AboutMe";
import ContactForm from "../components/contactForm/ContactForm";

const Router = () => {
   const [formActive, setFormActive] = useState()

   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home setFormActive={setFormActive}/>} />
            <Route path="/:page" element={<Home setFormActive={setFormActive}/>} />
            <Route path="/home/:page" element={<Home setFormActive={setFormActive}/>} />
            <Route path="/home" element={<Home setFormActive={setFormActive}/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<AboutMe/>} />
            <Route path="/abouta" element={<ContactForm/>} />
         </Routes>
         <ContactForm formActive={formActive} setFormActive={setFormActive}></ContactForm>
      </BrowserRouter>
   );
};

export default Router;
