import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import Navbar from "../components/navbar/Navbar";

const Router = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
