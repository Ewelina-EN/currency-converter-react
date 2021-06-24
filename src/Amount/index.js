import React from "react";
import "./style.css";

const Amount = (props) => (
    <label>
        <span 
        className="labelText">Kwota do przeliczenia*:</span>
        <input
            className="field"
            type="number"
            step="any"
            placeholder="Kwota PLN"
            required min="0" />
    </label>
)

export default Amount;