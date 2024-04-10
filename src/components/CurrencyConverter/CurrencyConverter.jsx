import React from "react";
import { useState } from "react";
import "./CurrencyConverter.scss";
import useCurrencyinfo from "./hooks/useCurrencyinfo.jsx";
function CurrencyConverter() {
	const [amount, setAmount] = useState(0);
	const [fromCurrency, setFromCurrency] = useState("usd");
	const [toCurrency, setToCurrency] = useState("inr");
	const [convertedAmount, setConvertedAmount] = useState(0);

	const currencyInfo = useCurrencyinfo(fromCurrency);

	console.log(currencyInfo);
	// to get the keys as its not array of objects

	const keys = Object.keys(currencyInfo);

	console.log(keys, "gdhfdgf");

	// keys.length == 0 ? problemPage() : renderFunc()

	const currencyOptions = keys.map((item) => (
        
		<option key={item} value={item}>{item}</option>
	));

	const handleAmountChange = (e) => {
		setAmount(e.target.value);
	};

	const handleFromCurrencyChange = (e) => {
		setFromCurrency(e.target.value);
	};

	const handleToCurrencyChange = (e) => {
		setToCurrency(e.target.value);
	};


	const handleConvert = () => {
		// Logic to convert currency
		// This is just a placeholder, you'll need to implement actual conversion logic
		setConvertedAmount(amount * currencyInfo[toCurrency]); // Assuming 1 USD = 0.85 EUR
	};

	const handleSwap = () => {
		const temp = fromCurrency;
		setFromCurrency(toCurrency);
		setToCurrency(temp);
		setConvertedAmount(amount);
		setAmount(convertedAmount);
	};
	function problemPage() {
		console.log("dsafasdf");
		return (
			<>
				<div className="api-problem">
					<h1 className="title">API Problem</h1>
					<p className="message">Looks like something went wrong. The API request encountered an issue.</p>
					<a href="/" className="button">Go Back</a>
				</div>
			</>
		);
	}
	function renderPage(){
		return(
			<>
				<div className="currency-container">
					<label htmlFor="input-field">From</label>
					<input
						type="number"
						value={amount}
						onChange={handleAmountChange}
						className="input-field"
					/>
					<select
						value={fromCurrency}
						onChange={handleFromCurrencyChange}
						className="currency-select"
					>
						{keys?.map((item) => {
							return (
								<option key={item} value={item}>{item}</option>
							);
						})}
					</select>

					<button onClick={handleSwap} className="swap-button">
                        Swap
					</button>

					<select
						value={toCurrency}
						onChange={handleToCurrencyChange}
						className="currency-select"
					>

						{currencyOptions}
						{/* <option value="USD">USD</option>
                            <option value="EUR">EUR</option> */}
						{/* Add more currency options here */}
					</select>

					<button onClick={handleConvert} className="convert-button">
                        Convert
					</button>

					<div className="converted-amount">Converted Amount: {convertedAmount}</div>
				</div>
			</>
		);
	}

	return (
		<>
			{keys.length == 0 ? problemPage() : renderPage()}
		</>
	);

}



export default CurrencyConverter;