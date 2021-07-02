import React from "react";
import "./style.css";

const Clock = ({ date }) => (
    <p className="clock">
        {date}
    </p>
);

export default Clock;