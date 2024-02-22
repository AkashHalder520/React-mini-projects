// Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Common/Home/Home";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/passwordGenerator" element={<PasswordGenerator />} />
    <Route path="/CurrencyConverter" element={<CurrencyConverter />}/>
  </Routes>
);

export default AppRoutes;
