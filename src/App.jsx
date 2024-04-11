// import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";

function App() {
	return (
		<>
			<Router>
				<AppRoutes />
				{/* <PasswordGenerator/> */}
			</Router>
		</>
	);
}

export default App;