import React, { useState, useEffect } from "react";
import { MdCall, MdLocationOn } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
      {/* Top bar */}
      <div className="bg-blue-900 text-sm text-white flex justify-between items-center px-4 md:px-6 py-1">
        <p>Welcome to Leader in Industrial Solution</p>
        <p>
          <span className="text-yellow-500 font-medium">ISO 9001:2008</span>
        </p>
      </div>

      {/* Main header */}
      <div className="flex items-center justify-between px-4 md:px-20 py-4 bg-white shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="./logo.png" alt="logo" className="h-12 md:h-16" />
        </div>

        {/* Contact Info */}
        <div className="hidden md:flex items-center gap-10 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <MdLocationOn className="text-yellow-500 text-3xl" />
            <div>
              <p className="text-gray-500">Email Address</p>
              <p className="font-semibold">info@tescongroups.com</p>
            </div>
          </div>
          <div className="w-px h-10 bg-gray-300" />
          <div className="flex items-center gap-2">
            <MdCall className="text-yellow-500 text-3xl" />
            <div>
              <p className="text-gray-500">Call Us</p>
              <p className="font-semibold">+91-8882253405</p>
            </div>
          </div>
          <button className="bg-yellow-500 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-sm">
            About us
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-yellow-500 shadow-sm">
        <div className="hidden md:flex justify-end px-4 md:px-20 py-3 space-x-8 text-sm font-medium text-white">
          <a href="#" className="hover:text-blue-900 transition">Home</a>
          <a href="#" className="hover:text-blue-900 transition">About Us</a>
          <a href="#" className="hover:text-blue-900 transition">Services</a>
          <a href="#" className="hover:text-blue-900 transition">Products</a>
          <a href="#" className="hover:text-blue-900 transition">Contact Us</a>
        </div>

        {menuOpen && (
          <div className="flex flex-col px-4 py-3 space-y-3 text-sm font-medium text-white md:hidden">
            <a href="#" className="hover:text-blue-900 transition">Home</a>
            <a href="#" className="hover:text-blue-900 transition">About Us</a>
            <a href="#" className="hover:text-blue-900 transition">Services</a>
            <a href="#" className="hover:text-blue-900 transition">Products</a>
            <a href="#" className="hover:text-blue-900 transition">Contact Us</a>
          </div>
        )}
      </div>

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
            <h2 className="text-3xl text-blue-600 md:text-5xl font-bold mb-4">
             Tescon Engineers
            </h2>
            <p className="text-lg mb-6">
              Empowering industries with trusted technology, sustainable practices, and unmatched engineering expertise.
            </p>
            <button className="bg-yellow-500 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-sm transition">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
