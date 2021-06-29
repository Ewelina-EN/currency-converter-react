import React from "react";
import "./style.css";
import { currencies } from './currencies';



const Currency = ({ currency, setCurrency }) => (
  <label>
    <span className="labelText">Przelicz na*:</span>
    <select
      className="field"
      value={currency}
    >
      {currencies.map((currency => (
        <option
          key={currency.short}
          value={currency.short}
        >
          {currency.name}
        </option>
      )))}
    </select>
  </label>
)

export default Currency;