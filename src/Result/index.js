import React from "react";
import "./style.css";

const Result = ({ result }) => (
    <p className="result">
        WYNIK: {result.targetAmount} {result.currency}
    </p>

)
export default Result;
