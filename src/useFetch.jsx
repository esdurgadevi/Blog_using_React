import { useState,useEffect } from "react";

const useFetch = (url) =>{

    const [pending,setPending] = useState(true);
    const [data , setData] = useState(null);
    const [error , setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url,{ signal:abortCont.signal })
            .then(res =>{
                if(!res.ok)
                {
                    throw Error("Could not fetch the data....🥺");
                }
                return res.json();
            })
            .then((data) =>{
                setData(data);
                setPending(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError')
                {
                    console.log('fetch aorted');
                }
                else
                {
                    setError(err.message);
                    setPending(false);
                }
            })
        },200);
        return () => abortCont.abort();
    },[url]);
    return { data,pending,error };
}

export default useFetch;

//This is the custom hooks so it will used for all the fetching data scenario so if we want to fetch the data fro the json server this 
//would be the gentral logic so we pass the url to this function then the function will return the fetched data error and the pending values as 
//a return parameter.
//The dependency array [url] at the end of the useEffect hook means the effect will run whenever the url changes.This is particularly useful for dynamic data fetching.