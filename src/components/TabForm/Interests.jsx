/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useTabContext } from "./TabContext";

const Interests = ({data,setdata}) => {
	
	const [ checkbox, setCheckbox ]=useState (data.interests);
	const {nextTab}=useTabContext ();
	console.log (checkbox,"c");
	
	const handleChange=(e) => {
		
		const { value, checked } = e.target;

		let updatedArr = checked ? [ ...checkbox, value ] // Add value if checked
			: checkbox.filter ((item) => item !== value); // Remove if unchecked
	
		setCheckbox (updatedArr);		
	};
	const handlesubmit=(e) => {
		e.preventDefault ();
		setdata ({ ...data, interests: checkbox });
		nextTab ();
	};
	return (
		<div className="interests">
			<form onSubmit={handlesubmit}>
				<label>
					<input
						type="checkbox"
						name="hobby"
						value="coding"
						checked={checkbox.includes ("coding")}
						onChange={handleChange}
					/>
        Coding
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						name="hobby"
						value="Gaming"
						checked={checkbox.includes ("Gaming")}
						onChange={handleChange}
					/>
        Gaming
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						name="hobby"
						value="Cooking"
						checked={checkbox.includes ("Cooking")}
						onChange={handleChange}					/>
        Cooking
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						name="hobby"
						value="Trip"
						checked={checkbox.includes ("Trip")}
						onChange={handleChange}					/>
        Trip
				</label>
				<br />
				<button className="submitBtn" type="submit">Submit</button>
			</form>

		</div>
	);
};

export default Interests;