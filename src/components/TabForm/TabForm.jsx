import React, { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Setting from "./Setting";
import "./TabForm.scss";
const TabForm = () => {
	const [ activeTab,setactiveTab ]=useState (0);
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
			name: "Setting",
			component:Setting,
		},
	];
	const [ data,setdata ]=useState ({
		name:"Akash Halder",
		age: "24",
		gender: "male",
		mobile:"7584093160",
		company:"codilar",
		interests:[ "coding","Gaming","Cooking","Trip" ]
	});
	const RenderActivetabComponent=tabs[activeTab].component;
	return (
		<div className="tabForm">
			<div className="headingclass">
				{tabs.map ((item,index) => {
					return(
						<div key= {index} className={`heading ${activeTab===index? "active":"" }`}  onClick={() => setactiveTab (index)}>{item.name}</div>
					);
				})}
			</div>
			<div className="activetabDiasplay">
				<RenderActivetabComponent data={data} setdata={setdata}/>
			</div>
		</div>
	);
};

export default TabForm;