import React from "react";
import "./style.css";



const Currency = (props) => (
  <label>
    <span className="labelText">Przelicz na*:</span>

    <select className="field">
      <option value="SEK" className="rateSEK">SEK - Korona szwedzka</option>
      <option value="EUR" selected className="rateEUR">EUR - Euro</option>
      <option value="USD" className="rateUSD">USD - Dolar amerykański</option>
    </select>
  </label>
)

export default Currency;