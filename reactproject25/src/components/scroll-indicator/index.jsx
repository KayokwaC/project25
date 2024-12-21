
import {useEffect, useState} from 'react';
export default function ScrollIndicator({url}) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

async function fetchData(dataUrl) {
    setLoading(true);
    try{
        const response =  await fetch(dataUrl);
        const result = await response.json();
        if(result?.products && result.products.length > 0)
        {
            setData(result.products);
            setLoading(false);
        }
    }catch(e)
    {
        
        setError(e);
        setLoading(false);
        console.error(error);
    }
}


useEffect(() => {
    fetchData(url);
}, [url]);


if(loading)
{
    return <div>Loading...</div>
}
    return (
        <div>
             <h1>Scroll Indicator</h1>
            <div className="data-container"> 
                {
                    data ? (
                        data.map((item, index) => (
                            <div key={index} className="scroll-indicator__item">
                                <p>{item.title}</p>
                           </div>
                        ))
                    ) : (
                        <p>No data found</p>
                    )
                }

                </div>
        </div>
    );
}