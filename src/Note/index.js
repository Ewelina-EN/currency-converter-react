import React from "react";
import { StyledNote } from "./styled";

const Note = (props) => (
    <StyledNote>
        Kursy walut pobierane są z Europejskiego Banku Centralnego. Aktualne na dzień: <strong>{props.rates.date}</strong>. Pola z oznaczeniem * wymagają wypełnienia.
    </StyledNote>
)

export default Note;