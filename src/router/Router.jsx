import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/home" element={<h1>Home</h1>} />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;