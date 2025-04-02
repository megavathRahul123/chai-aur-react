import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        // Replace YOUR_API_KEY with your actual API key from exchangerate-api.com
        const apiKey = 'a4ff8f56aa974fa997d2d508';
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.result === 'success') {
                    setData(res.conversion_rates);
                }
            })
            .catch((error) => console.error('Error fetching currency data:', error));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;