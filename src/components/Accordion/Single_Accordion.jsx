/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Single_Accordion = ({data}) => {
	const [ id, setid ] = useState (null);
	const toggleAccordion=(id) => {
		// console.log (id,"dfds");
		setid (id);
	};
	return (
		<div className="accordion">
			{data?.faq.map ((faqdata) => (
				<div className="wrapper" key={faqdata.id}>
					<div className="question" onClick={() => toggleAccordion (faqdata.id)}>{faqdata.question}</div>
					<div className={`answer ${id===faqdata.id?"open":""}`} >{faqdata.answer}</div>
				</div>
			))}
		</div>
	);
};

export default Single_Accordion;