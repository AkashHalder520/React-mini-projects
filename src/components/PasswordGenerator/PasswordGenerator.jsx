import React, { useCallback, useEffect, useRef, useState } from 'react'
import './PasswordGenerator.scss';
function PasswordGenerator() {
  const [inputValue, setInputValue] = useState("");
  const [sliderValue, setSliderValue] = useState(8);
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
// useRef hook
const passwordRef=useRef(null)

const copyPassword=()=>{
 const inputFieldText=passwordRef.current.value// for getting the reference password

 navigator.clipboard.writeText(inputFieldText).then(() => {
  // Success message for the user
  alert("Text copied to clipboard successfully!");
}, (err) => {
  // Error handling
  console.error("Failed to copy text to clipboard:", err);
});

}
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions based on user input here
    console.log(
      `Input value: ${inputValue}, Slider value: ${sliderValue}, Checkbox 1: ${checkbox1Checked}, Checkbox 2: ${checkbox2Checked}`
    );
  };

  const passwordGenerator=useCallback(function(){

    let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    if(checkbox1Checked){
      charset+="0123456789"
    }
    if(checkbox2Checked){
      charset+="~!@#$%^&*"
    }
    let Password='';
    for (let i = 0; i < sliderValue; i++) {
    let randomIndex=Math.trunc(Math.random()*charset.length+1)// getting a random index of carset
    Password+=charset.charAt(randomIndex)
    }
    setInputValue(Password)

  },[sliderValue,checkbox1Checked ,checkbox2Checked])
 
  useEffect(()=>{
    passwordGenerator()
  },[sliderValue, checkbox1Checked, checkbox2Checked, passwordGenerator])
  
  return (
    <>
      <h1 className="text-3xl text-center  font-bold underline">
        Hello world!
      </h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="textInput" className="input-label">
            Your Password:
          </label>
          <input
            type="text"
            id="textInput"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="input-field"
            ref={passwordRef} // for use ref
          />
          <button onClick={copyPassword}  className="submit-button">
            Copy
          </button>
          <br />
          <label htmlFor="sliderInput" className="input-label">
            Choose a value:
          </label>
          <input
            type="range"
            id="sliderInput"
            min={0}
            max={16}
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
            className="input-field"
          />
          <span className="slider-value">{sliderValue}</span>
          <br />
          <label htmlFor="checkbox1" className="checkbox-label">
            Number:
          </label>
          <input
            type="checkbox"
            id="checkbox1"
            checked={checkbox1Checked}
            onChange={(e) => setCheckbox1Checked(e.target.checked)}
            className="checkbox-field"
          />
          <br />
          <label htmlFor="checkbox2" className="checkbox-label">
             Special Charecters:
          </label>
          <input
            type="checkbox"
            id="checkbox2"
            checked={checkbox2Checked}
            onChange={(e) => setCheckbox2Checked(e.target.checked)}
            className="checkbox-field"
          />
          <br />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default PasswordGenerator