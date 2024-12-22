import { useEffect, useState } from "react";
export default function ScrollIndicator({ url }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(dataUrl) {
    setLoading(true);
    try {
      const response = await fetch(dataUrl);
      const result = await response.json();
      if (result?.products && result.products.length > 0) {
        setData(result.products);
        setLoading(false);
      }
    } catch (e) {
      setError(e);
      setLoading(false);
      console.error(error);
    }
  }

  function handleScrollPercentage() {
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const percentage = (scrolled / scrollableHeight) * 100;
    setScrollPercentage(percentage);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [scrollPercentage]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="top-container">
        <h1>Scroll Indicator</h1>
        <div className="scroll-indicator">
          <div
            className="scroll-indicator__progress"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data ? (
          data.map((item, index) => (
            <div key={index} className="scroll-indicator__item">
              <p>{item.title}</p>
            </div>
          ))
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
}
