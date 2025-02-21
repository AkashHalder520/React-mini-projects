// Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Common/Home/Home";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import Pagination from "./components/Pagination/Pagination";
import Accordion from "./components/Accordion/Accordion";
// import EmiCalculator from "./components/EmiCalculator/EmiCalculator";

const AppRoutes = () => (
	<Routes>
		<Route path="/" element={<Home/>} />
		<Route path="/passwordGenerator" element={<PasswordGenerator />} />
		<Route path="/CurrencyConverter" element={<CurrencyConverter />}/>
		<Route path="/Pagination" element={<Pagination />}/>
		{/* <Route path="/EmiCalculator" element={<EmiCalculator />}/> */}
		<Route path="/Accordion" element={<Accordion/>}/>
	</Routes>
);

export default AppRoutes;
