import React from "react";
import { useState } from "react";
import "./EmiCalculator.scss";
function EmiCalculator() {

	const [ cost,setCost ]=useState (0);
	const [ interest,setInterst ]=useState (0);
	const [ fee,setFee ]=useState (1);
	const [ downpayment,setDownPayment ]=useState ();
	const [ tenure,setTenure ]=useState (12);
	const [ emi,setEmi ]=useState (0);
	const updateEmi = () => {
		// first have to check if the cost is there or not
		if(!cost){
			return ;
		}
		else{
			const downPayment=Number ();
		}
		
	};
	const updateDownpayment=() => {
		
	};

	const calculateEMI=() => {

	};
	return (
		<>
			<div className='title'>EmiCalculator</div>
			<span className=''>Total cost of asset</span>
			<input 
				type="number" 
				name="" 
				id="" 
				value={cost} 
				onChange={(event) => setCost (event.target.value)}
				placeholder='Please enter the total cost of the asset'
			/>

			<span className=''>Interest Rate</span>
			<input 
				type="number" 
				name="" 
				id="" 
				value={interest} 
				onChange={(event) => setInterst (event.target.value)}
				placeholder='Interest Rates in percentage'
			/>

			<span className=''>Proecessing fees (in %) </span>
			<input 
				type="number" 
				name="" 
				id="" 
				value={fee} 
				onChange={(event) => setFee (event.target.value)}
				placeholder='Proecessing fees (in %)'
			/>

			<span> Down Payment </span>
			<div>

				<input 
					type="range"
					name=""
					id="" 
					className="slider"
					min={0}
					max={cost}
					value={downpayment}
					onChange={updateEmi} 
				/>
			</div>

			<span> Loan Payment Per Month </span>
			<input 
				type="range"
				name=""
				id="" 
				className="slider"
				min={calculateEMI (cost)}
				max={calculateEMI (0)}
				value={emi}
				onChange={updateDownpayment} // on change will update the downpayment
			/>


        
		</>


	);
}
export default EmiCalculator;