import React from "react";
import "./style.css";

const Amount = ({ amount, setAmount }) => (
    <label>
        <span
            className="labelText">Kwota do przeliczenia*:</span>
        <input
            value={amount}
            className="field"
            type="number"
            step="any"
            placeholder="Kwota PLN"
            required min="0" />
    </label>
)

export default Amount;