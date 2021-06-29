import React, { useState } from 'react';
import Header from "./Header";
import Amount from "./Amount";
import Currency from './Currency';
import Buttons from './Buttons';
import Note from './Note';
import Result from './Result';
import { currencies } from './Currency/currencies';


function App() {

  const [result, setResult] = useState();
  const [amount, setAmount] = useState();
  const [currency, setCurrency] = useState(currencies[0].short);

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      targetAmount: amount / rate,
      currency,
    })
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
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
            calculateResult={calculateResult} />
        </p>
      </fieldset>
      <Note />
      <Result
        result={result} />
    </form>

  );
};

export default App;