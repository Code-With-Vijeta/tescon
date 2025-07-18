import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = ["./bg1.png", "./bg2.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Carousel Section with Text Right Aligned */}
      <div className="relative w-full h-[500px]">
        {/* Carousel Images */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0"
            }`}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-20"></div>

        {/* Text Content */}
        <div className="absolute inset-0 z-30 flex items-center justify-end px-4 md:px-20">
          <div className="text-white max-w-xl ml-auto text-right">
            <h2 className="text-3xl text-gray-300 md:text-5xl font-bold mb-4">
              Tescon Engineers
            </h2>
            <p className="text-lg mb-6">
              Empowering industries with trusted technology, sustainable
              practices, and unmatched engineering expertise.
            </p>
            <button className="bg-yellow-500 hover:bg-[#042b4e] hover:text-white text-white font-semibold px-6 py-3 rounded-sm transition">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
