/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useTabContext } from "./TabContext";

const Profile = ({data,setdata}) => {
	const [ formValue,setformValue ]=useState (data);
	const { nextTab} = useTabContext ();

	const handleChange = (e) => {
		setformValue ((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault ();
		setdata (formValue); // Update the main data state on submit
		console.log ("Updated Data:", formValue);
		nextTab ();
	};


	return (
		<form className="Profile" onSubmit={handleSubmit}>
			{/* Name Field */}
			<input
				type="text"
				name="name"
				value={formValue.name}
				onChange={handleChange}
				placeholder="Enter Name"
			/>

			{/* Email Field */}
			<input
				type="email"
				name="email"
				value={formValue.email}
				onChange={handleChange}
				placeholder="Enter Email"
			/>

			{/* Mobile Number Field */}
			<input
				type="tel"
				name="mobile"
				value={formValue.mobile}
				onChange={handleChange}
				placeholder="Enter Mobile Number"
			/>

			{/* Gender Field (Radio Buttons) */}
			<label>
				<input
					type="radio"
					name="gender"
					value="Male"
					checked={formValue.gender === "male"}
					onChange={handleChange}
				/>
        Male
			</label>

			<label>
				<input
					type="radio"
					name="gender"
					value="Female"
					checked={formValue.gender === "Female"}
					onChange={handleChange}
				/>
        Female
			</label>

			<label>
				<input
					type="radio"
					name="gender"
					value="Other"
					checked={formValue.gender === "Other"}
					onChange={handleChange}
				/>
        Other
			</label>

			<button className="submitBtn"type="submit">Submit & Contunue </button>
		</form>
	);
};

export default Profile;