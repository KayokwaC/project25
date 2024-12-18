import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, page, numberOfImages = 5 }) {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrenSlide] = useState(0);

  useEffect(() => {
    async function fetchImages(url) {
      if (!url || url === "") {
        setError("URL is required");
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(
          `${url}?page=${page}&limit=${numberOfImages}`
        );
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
  const handleNext = () => {
    setCurrenSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrenSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <>
      <div> Project 3 - Image-Slider</div>

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div>
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrevious}/>
        {images?.map((image, index) => (
          <img
            key={index}
            src={image.download_url}
            alt={image.download_url}
            className={index === currentSlide ? "current-image" : "current-image hide-current-image"}
          />
        ))}
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext}/>
        <span className="circle-indicators">
          {images?.map((_, index) => (
            <button key={index} className={index === currentSlide ? "current-indicator" : "current-indicator inactive-indicator"} onClick={()=>setCurrenSlide(index)}></button>
          ))}
        </span>
      </div>
    </>
  );
}
