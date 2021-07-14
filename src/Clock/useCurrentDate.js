import { useState, useEffect } from "react";

const formatDate = (date) => {
    return date.toLocaleDateString(undefined, {
        day: "numeric",
        weekday: "long",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });
};

export const useCurrentDate = () => {
    const [date, setDate] = useState(formatDate(new Date()));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(formatDate(new Date()));
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return date;

};