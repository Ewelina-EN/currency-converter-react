import React from 'react';
import Header from "./Header";
import Amount from "./Amount";
import Currency from './Currency';
import Buttons from './Buttons';
import Note from './Note';
import Result from './Result';


function App() {
  return (
    <body>
      <fieldset className="fieldset">
        <Header />
        <p>
          <Amount />
        </p>
        <p>
          <Currency />
        </p>
        <p>
          <Buttons />
        </p>
      </fieldset>
      <Note />
      <Result />
    </body>

  );
};

export default App;