import React from "react";
import { StyledResult } from "./styled";

const Result = ({ result }) => (
    <StyledResult>
        WYNIK:{" "}
        <strong>
            {result.targetAmount}
            {" "}
            {result.currency}
        </strong>
    </StyledResult>

)
export default Result;
