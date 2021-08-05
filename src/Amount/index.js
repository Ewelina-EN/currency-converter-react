import React from "react";
import { LabelText, AmountInpunt } from "./styled";

const Amount = ({ amount, setAmount }) => (
    <label>
        <LabelText>Kwota do przeliczenia*:
        </LabelText>
        <AmountInpunt
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Kwota PLN"
            required
        />
    </label>
);

export default Amount;