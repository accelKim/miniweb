import React, { useState } from "react";
import "../css/Slide.css";

function Slide() {
  const slides = [
    "../img/slide1.png",
    "../img/slide2.jpg",
    "../img/slide3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="slideShow" style={slideStyle}>
      <div id="slides">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt=""
            style={{
              display: index === current ? "block" : "none",
              width: "100%",
              height: "auto",
            }}
          />
        ))}
        <button id="prev" onClick={prevSlide}>
          ⟨
        </button>
        <button id="next" onClick={nextSlide}>
          ⟩
        </button>
      </div>
    </div>
  );
}
const slideStyle ={
  position: 'relative',
}
export default Slide;