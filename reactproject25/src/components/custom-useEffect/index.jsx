import React, { useState, useEffect } from 'react';


export default function useFetch(url, options= {}){

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        const fetchData = async () => {
            setPending(true);
            try {
                const res = await fetch(url, {...options});
                if (!res.ok) {
                    throw new Error('Error fetching data');
                }
                const json = await res.json();

                setData(json);
                setError(null);
                setPending(false);
            } catch (error) {
                setError(error);
                setPending(false);
            }
        }
        fetchData();
    }, [url]);

    return {data, pending, error};
}