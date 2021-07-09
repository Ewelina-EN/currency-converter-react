import React from "react";
import { currencies } from './currencies';
import { CurrencySelect, LabelText } from "./styled";

const Currency = ({ currency, setCurrency }) => (
  <label>
    <LabelText>
      Przelicz na*:
    </LabelText>
    <CurrencySelect
      value={currency}
      onChange={({ target }) => setCurrency(target.value)}
    >
      {currencies.map((currency => (
        <option
          key={currency.short}
          value={currency.short}
        >
          {currency.name}
        </option>
      )))}
    </CurrencySelect>
  </label>
)

export default Currency;