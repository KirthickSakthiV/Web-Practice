import React from "react";
import { useState } from "react";
export default function Money(){
    const[usd,setUsd]=useState(0)
    const[inr,setInr]=useState(0)
    const handleUsd=(e)=>{
        setUsd(e.target.value)
        setInr(e.target.value*82.90)
    }
    const handleInr=(e)=>{
        setInr(e.target.value)
        setUsd(e.target.value/82.90)
    }
      return (
        <div>
            <label>USD:</label>
            <input type="number" value={usd} onChange={handleUsd}/><br></br>
            <label>INR:</label>
            <input type="number" value={inr} onChange={handleInr}/><br></br> 
        </div>
      )
    }
    


