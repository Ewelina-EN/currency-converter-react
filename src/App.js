import React, { useState } from 'react';
import Header from "./Header";
import Amount from "./Amount";
import Currency from './Currency';
import Buttons from './Buttons';
import Note from './Note';
import Result from './Result';
import { currencies } from './Currency/currencies';


function App() {

  const initialResult = {
    targetAmount: 0,
    currency: currencies[0].short,
  };

  const [result, setResult] = useState(initialResult);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      targetAmount: amount / rate,
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
    <form onSubmit={onSubmit} >
      <fieldset className="fieldset">
        <Header />
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
      </fieldset>
      <Note />
      <Result
        result={result} />
    </form>

  );
};
export default App;