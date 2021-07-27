import React, { useState } from 'react';
import Header from "./Header";
import Amount from "./Amount";
import Currency from './Currency';
import Buttons from './Buttons';
import Note from './Note';
import Result from './Result';
import Clock from './Clock';
import { Fieldset, Form } from "./styled";
import { useRatesAPI } from './useRatesAPI';
import ConnectionHandler from './ConnectionHandler';

function App() {

  const initialResult = {
    targetAmount: " ",
    currency:
      ' ',
  };
  const rates = useRatesAPI();
  const [result, setResult] = useState(initialResult);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(initialResult.currency);

  const calculateResult = (currency, amount) => {
    const rate = rates.rates
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
      onSubmit={onSubmit}>
      {rates.state !== "ok" ? (
        <ConnectionHandler rates={rates} />
      ) : (
        <>
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
                rates={rates.rates}
                currency={currency}
                setCurrency={setCurrency} />
            </p>
            <p>
              <Buttons
                resetForm={resetForm} />
            </p>
          </Fieldset>
          <Note
            rates={rates}
          />
          <Result
            result={result} />
        </>)};
    </Form>
  );
};
export default App;