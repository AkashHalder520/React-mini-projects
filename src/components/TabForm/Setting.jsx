/* eslint-disable react/prop-types */
import React from "react";
// import { useTabContext } from "./TabContext";

// eslint-disable-next-line react/prop-types
const Setting = ({ data }) => {
	// const {prevTab}=useTabContext ();
	return (
		<div className="user-profile">
			<h2>User Profile</h2>
			<ul>
				{Object.keys (data).map ((item) => {
					if (item !== "interests") {
						return <li key={item}>{item}: {data[item]}</li>;
					}
					return null;
				})}
				<li>
					<strong>Interests:</strong>
					<ul className="interests">
						{data?.interests.map ((interest, index) => (
							<li key={index}>{interest}</li>
						))}
					</ul>
				</li>
			</ul>
		</div>
	);
};

export default Setting;