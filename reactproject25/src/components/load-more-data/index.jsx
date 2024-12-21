import React, { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(false);

   async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      if (data?.products.length) {
        setProducts([...products, ...data.products]);
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  }

  useEffect(() => {

    fetchProducts();
  }, [count]);

  useEffect(() => {

    if (products.length >= 100) {
      setMaxCount(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="load-more-container">
      <h1>Products</h1>
      <div className="product-container">
        {

        products?.length ? (
          products.map((product, index) => (
            <div key={index} className="product">
              <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )
        
        }
      </div>

      <button className="load-more-data__button" onClick={()=> setCount(count+1)} disabled={maxCount}>Load More Products</button>
    </div>
  );
}
