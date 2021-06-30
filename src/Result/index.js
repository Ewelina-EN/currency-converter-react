import React from "react";
import "./style.css";

const Result = ({ result }) => (
    <p className="result">
        WYNIK:{" "}
        <strong>
            {result.targetAmount}
            {result.currency}
        </strong>
    </p>

)
export default Result;
