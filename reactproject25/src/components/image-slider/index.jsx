import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";

export default function ImageSlider({ url, page, numberOfImages = 5 }) {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    async function fetchImages(url) {
      if (!url || url === "") {
        setError("URL is required");
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`${url}?page=${page}&limit=${numberOfImages}`);
        const data = await response.json();
        setImages(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchImages(url);
  }, [url, numberOfImages, page]);
  return (
    <>
      <div> Project 3 - Image-Slider</div>

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div>
    
      </div>
    </>
  );
}
