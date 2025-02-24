/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Interests = ({data,setdata}) => {
	
	const handleCheckboxChange = (e) => {
		// setdata ((prevState) =>({
		//     ...prevState,interests:
		// }) );
		console.log (e.target,"target");
		const { value, checked } = e.target;

		setdata ((prevData) => ({
			...prevData,
			interests: checked 
				? [ ...prevData.interests, value ] 
				: prevData.interests.filter (item => item !== value)
		}));
	};
	return (
		<>
			<form>

				{data.interests.map ((interest) => (
					<label key={interest}>
						<input
							type="checkbox"
							name="interests"
							value={interest}
							checked={data.interests.includes (interest)}
							onChange={handleCheckboxChange}
						/>
						{interest}
					</label>
				))}
			</form>
		</>
	);
};

export default Interests;