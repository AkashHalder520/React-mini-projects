/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Multi_Accordion = ({data}) => {
	const [ ids, setids ] = useState ([]);
	const toggleAccordionMultiple = (id) => {
		setids ((ids) => {
			return ids.includes (id) ? ids.filter ((item) => item !== id) : [ ...ids, id ];
		});
	};
	return (
		<div className="accordion">
			{data?.faq.map ((faqdata) => (
				<div className="wrapper" key={faqdata.id}>
					<div className="question" onClick={() => toggleAccordionMultiple (faqdata.id)}>{faqdata.question}</div>
					<div className={`answer ${ids.includes (faqdata.id) ? "open" : ""}`} >{faqdata.answer}</div>
				</div>
			))}
		</div>
	);
};

export default Multi_Accordion;