import React from "react";
import "./style.css";

const Buttons = ({ resetForm }) => (
    <>
        <button className="button">Przelicz
        </button>
        <button
            type="reset"
            className="button"
            onClick={resetForm}
        >
            Wyczyść</button>
    </>
);

export default Buttons;