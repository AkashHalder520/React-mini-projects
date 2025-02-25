/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";

const TabContext = createContext ();

export const TabProvider = ({ children }) => {
	const [ activeTab, setActiveTab ] = useState (0);

	// Function to move to the next tab
	const nextTab = () => {
		setActiveTab (prevTab => prevTab + 1);
	};
	const prevTab = () => {
		activeTab > 0 &&
		setActiveTab (prevTab => prevTab - 1);
	};
	return (
		<TabContext.Provider value={{ activeTab, setActiveTab, nextTab, prevTab }}>
			{children}
		</TabContext.Provider>
	);
};

export const useTabContext = () => {
	return useContext (TabContext);
};
