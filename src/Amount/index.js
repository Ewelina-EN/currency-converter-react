import React from "react";
import "./style.css";

const Amount = ({ amount, setAmount }) => (
    <label>
        <span
            className="labelText">Kwota do przeliczenia*:</span>
        <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            className="field"
            type="number"
            step="0.01"
            placeholder="Kwota PLN"
            required />
    </label>
)

export default Amount;