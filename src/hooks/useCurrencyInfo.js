import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/gh/ismartcoding/currency-api/2024-09-14/14.json`
        );
        const result = await res.json();
        
        // Set data for the selected currency
        setData(result[currency]);
      } catch (err) {
        setError("Failed to fetch currency data");
      }
    };

    fetchCurrencyData();
  }, [currency]);

  if (error) {
    console.error(error);
  }

  return data; // Return the data for the selected currency
}

export default useCurrencyInfo;
