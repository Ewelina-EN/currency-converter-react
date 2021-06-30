import React from "react";
import "./style.css";

const Result = ({result}) => (
    // console.log(result));
    <p className="result">
        WYNIK: {result.targetAmount} {result.currency}
    </p>

)
export default Result;
