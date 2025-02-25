import React, { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Setting from "./Setting";
import "./TabForm.scss";
import { TabProvider, useTabContext } from "./TabContext";

const TabFormContent = () => {
	const { activeTab, setActiveTab,prevTab }=useTabContext ();
	const tabs=[
		{
			name: "Profile",
			component:Profile,
		},
		{
			name: "Intersts",
			component:Interests,
		},
		{
			name: "profileDetails",
			component:Setting,
		},
	];
	const [ data,setdata ]=useState ({
		name:"Akash Halder",
		age: "24",
		gender: "male",
		mobile:"7584093160",
		company:"codilar",
		email:"",
		interests:[ "coding" ]// set default interests
	});
	const RenderActivetabComponent=tabs[activeTab].component;
	console.log (activeTab,"activetab");
	
	return (
		<div className="tabForm">
			<div className="headingclass">
				{tabs.map ((item,index) => {
					return(
						<div key= {index} className={`heading ${activeTab===index? "active":"" }`}  onClick={() => setActiveTab (index)}>{item.name}</div>
					);
				})}
			</div>
			<div className="activetabDiasplay">
				<RenderActivetabComponent data={data} setdata={setdata}/>
				<button className="BackBtn" type="button"  disabled={activeTab==0} onClick={() => prevTab ()}>Back</button>
			</div>
		</div>
	);
};

// Wrap only `TabForm` inside `TabProvider`
const TabForm = () => {
	return (
		<TabProvider>
			<TabFormContent />
		</TabProvider>
	);
};
export default TabForm;