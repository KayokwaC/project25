

import React, { useState } from 'react';

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <button className="load-more-data__button">Load More</button>
        </div>
    )
}