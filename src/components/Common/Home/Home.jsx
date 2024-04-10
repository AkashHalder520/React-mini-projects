// index.jsx

import React from "react";
import "./Home.scss"; // Import SCSS styles
import { Link } from "react-router-dom";

const projects = [
	{
		title: "Password Generator",
		description: "Generate Password as your wish",
		link: "/passwordGenerator", // Adjust the path to your project page
	},
	{
		title: "Currency Convetor",
		description: "Converts your currency",
		link: "/CurrencyConverter", // Adjust the path to your project page
	},
	{
		title:"pagination",
		description:"simple pagination",
		link: "/Pagination"
	},
	{
		title:"Emi Calulator",
		description:"Emi Calculation",
		link: "/EmiCalculator"
	}
	// Add more projects here
];


function Home() {
	return (
		<div className="home-container">
			<h1>My Projects</h1>
			<ul className="list-disc gap-4">
				{projects.map((project, index) => (
					<Link key={index}  to={project.link} >
						<li key={index} className="hover:bg-gray-200 p-4 cursor-pointer">
							<p className="text-gray-600">{project.description}</p>
							<span>{project.title}</span>
						</li>
					</Link>
				))}
			</ul>
		</div>
   
	);
}

export default Home;
