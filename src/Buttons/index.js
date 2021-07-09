import React from "react";
import { StyledButton } from "./styled";

const Buttons = ({ resetForm }) => (
    <>
        <StyledButton>
            Przelicz   
        </StyledButton>
        <StyledButton
            type="reset"
            className="button"
            onClick={resetForm}
        >
            Wyczyść
        </StyledButton>
    </>
);

export default Buttons;