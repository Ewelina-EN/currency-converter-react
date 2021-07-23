import React from "react";
import { CurrencySelect, LabelText } from "./styled";

const Currency = ({ currency, rates, setCurrency }) => (
  <label>
    <LabelText>
      Przelicz na*:
    </LabelText>
    <CurrencySelect
      value={currency}
      onChange={({ target }) => setCurrency(target.value)}
    >
      {rates.map((rate => (
        <option
          key={rate.short}
          value={rate.short}
        >
          {rate.short}
        </option>
      )))}
    </CurrencySelect>
  </label>
)

export default Currency;