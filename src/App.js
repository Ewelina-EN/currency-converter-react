import React, { useState } from 'react';
import Header from "./Header";
import Amount from "./Amount";
import Currency from './Currency';
import Buttons from './Buttons';
import Note from './Note';
import Result from './Result';
import { currencies } from './Currency/currencies';
import Clock from './Clock';
import { Fieldset, Form } from "./styled";

function App() {

  const initialResult = {
    targetAmount: " ",
    currency: currencies.short,
  };

  const [result, setResult] = useState(initialResult);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      targetAmount: (amount / rate).toFixed(2),
      currency: currency,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const resetForm = () => {
    setResult(initialResult);
    setAmount(0);
  };

  return (
    <Form 
      onSubmit={onSubmit} >
      <Fieldset>
        <Header />
        <Clock />
        <p>
          <Amount
            amount={amount}
            setAmount={setAmount} />
        </p>
        <p>
          <Currency
            currency={currency}
            setCurrency={setCurrency} />
        </p>
        <p>
          <Buttons
            resetForm={resetForm} />
        </p>
      </Fieldset>
      <Note />
      <Result
        result={result} />
    </Form>
  );
};
export default App;