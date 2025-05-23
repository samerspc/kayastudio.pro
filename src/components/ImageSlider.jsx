import React, { useState, useEffect } from "react";
import "../styles/ImageSlider.css";

const ImageSlider = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);

  return (
    <div className="slider">
      <div className="slide-container">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={index === currentIndex ? "slide active" : "slide"}
          />
        ))}
      </div>

      <div className="panel" style={{display: 'none'}}>

        <div className="prev" onClick={prevSlide}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="40" y="40" width="40" height="40" rx="20" transform="rotate(-180 40 40)" fill="#EAEAEA" fill-opacity="1"/>
                <path d="M24 28L16 20L24 12" stroke="#292C32" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

        <div className="dots">
            {images.map((_, index) => (
            <span
                key={index}
                className={index === currentIndex ? "dot active" : "dot"}
                onClick={() => setCurrentIndex(index)}
            ></span>
            ))}
        </div>

        <div className="next" onClick={nextSlide}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#EAEAEA" fill-opacity="1"/>
                <path d="M16 12L24 20L16 28" stroke="#292C32" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

      </div>

      
    </div>
  );
};

export default ImageSlider;
