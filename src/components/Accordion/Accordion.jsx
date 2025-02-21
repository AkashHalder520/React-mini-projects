import React, { useState } from "react";
import "./Accordion.scss";
import data from "./Data.json";
import Single_Accordion from "./Single_Accordion";
import Multi_Accordion from "./Multi_Accordion";
const Accordion = () => {
	const [ accordionType, setaccordionType ] = useState ("Single");
	return (
		<>
			<div className="text-center my-4">
				<button
					className={`px-4 py-2 border rounded-md transition mx-2 ${
						accordionType === "Single"
							? "bg-blue-600 text-white border-blue-600"
							: "bg-gray-200 text-gray-700 hover:bg-gray-300"
					}`}
					onClick={() => setaccordionType ("Single")}
				>
    Single Accordion
				</button>

				<button
					className={`px-4 py-2 border rounded-md transition mx-2 ${
						accordionType === "Multi"
							? "bg-blue-600 text-white border-blue-600"
							: "bg-gray-200 text-gray-700 hover:bg-gray-300"
					}`}
					onClick={() => setaccordionType ("Multi")}
				>
    Multi-Select Accordion
				</button>
			</div>

			{accordionType==="Single"? <Single_Accordion data={data}/>:<Multi_Accordion data={data}/>}
		</>
	);
};

export default Accordion;