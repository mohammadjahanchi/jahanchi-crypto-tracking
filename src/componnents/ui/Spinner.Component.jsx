import React from "react";
import spinnerImg from './bitcoin.gif'
import "./spinner.css"
const Spinner=()=>{
    return(
        <span className="spinner"  >
            <img src={spinnerImg} alt="spinner" />
        </span>
    )
}
export default Spinner;