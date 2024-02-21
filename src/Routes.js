// Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Common/Home/Home";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/passwordGenerator" element={<PasswordGenerator />} />
  </Routes>
);

export default AppRoutes;
