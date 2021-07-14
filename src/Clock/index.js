import React from 'react';
import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
    const date = useCurrentDate();

    return (
        <StyledClock>
            {date}
        </StyledClock>)
};

export default Clock;