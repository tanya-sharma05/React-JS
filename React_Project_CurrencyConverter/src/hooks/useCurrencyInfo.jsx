import { useEffect, useState } from "react";
// hooks basically are functions which return a value and a function in form of array

function useCurrencyInfo(currency){ // giving argument
    // 2// empty object in initial state if data is not coming from api 
    const [data,setData]=useState({});

    // 1 //
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res)=>res.json()) // parsing to json format from string
        .then((res)=>setData(res[currency]))
    },[currency]);

    return data;
};

// returning the whole method itself 
export default useCurrencyInfo;
