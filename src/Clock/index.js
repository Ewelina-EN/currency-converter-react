import React from 'react';
import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";


const formatDate = (date) => date.toLocaleDateString(undefined, {
    day: "numeric",
    weekday: "long",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
});

const Clock = () => {
    const date = useCurrentDate();

    return (
        <StyledClock>
            Dzisiaj jest
            {" "}
            {formatDate(date)}
        </StyledClock>
    );
};

export default Clock;