import { useState, useEffect } from "react";

export const useRatesAPI = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
        date: null,
        rates: [{ short: "loading" }],
    });

    useEffect(() => {
        const getAPI = () => {
            const currenciesAPIUrl = "https://api.exchangerate.host/latest?base=PLN";

            fetch(currenciesAPIUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response;
                })
                .then(response => response.json())
                .then(response => {
                    const rates_parsed = [];
                    for (const [key, value] of Object.entries(response.rates)) {
                        rates_parsed.push({
                            short: key,
                            rate: value,
                        })
                    }
                    setRatesData({
                        date: response.date,
                        rates: rates_parsed,
                    })
                })
                .catch(() => setRatesData({ state: "error" }));
        };
        setTimeout(getAPI, 2000);
    }, []);

    return ratesData;
};


