import React from 'react'
import { useState } from 'react'

function EmiCalculator() {

    const [cost,setCost]=useState(0)
    const [interest,setInterst]=useState(0)
    const [fee,setFee]=useState(1)
    const [downpayment,setDownPayment]=useState()
    const [tenure,setTenure]=useState(12)
    const [emi,setEmi]=useState(0)
    return (
        <>
        <div className='title'>EmiCalculator</div>
        <span className=''>Total cost of asset</span>
        <input 
        type="number" 
        name="" 
        id="" 
        value={cost} 
        onChange={(event)=>setCost(event.target.value)}
        placeholder='Please enter the total cost of the asset'
        />
        
        </>


  )
}

export default EmiCalculator