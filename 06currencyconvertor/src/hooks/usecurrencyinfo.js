
//desiginig a custom hook to fetch the currency data from the api
import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
  
    const [data, setData] = useState({});
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)//sometimes it migth be string data ,so we have to cinvert it
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
    }, [currency])

    console.log(data);
    return data
    
    
}


export default useCurrencyInfo;