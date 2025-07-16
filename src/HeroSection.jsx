import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const images = ['/bg1.png', '/bg2.png'];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative w-full h-[90vh] font-sans overflow-hidden">
      {/* Carousel Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 bg-white flex items-center justify-between px-6 md:px-16 py-4 shadow-md">
        {/* Logo on Left */}
        <img src="./logo.png" alt="logo" className="h-15 w-auto" />

        {/* Nav Links on Right */}
        <ul className="hidden md:flex gap-10 text-black text-[16px] font-medium">
          {['Home', 'About', 'Energy & Infrastructure', 'Services', 'Contact'].map((item, index) => (
            <li key={index} className="relative group cursor-pointer">
              <span className="group-hover:underline group-hover:underline-offset-8 transition">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-2xl text-black cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white text-black text-center z-40 flex flex-col space-y-6 py-6 md:hidden font-medium shadow-md">
          {['Home', 'About', 'Energy & Infrastructure', 'Services', 'Contact'].map((item, i) => (
            <a key={i} href="#" className="hover:underline underline-offset-4">
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-30 flex flex-col justify-center items-center h-full text-center px-6 mt-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-600 bg-white/30 px-4 py-2 uppercase mb-4">
          Tescon Groups
        </h1>
        <p className="text-white text-xl md:text-5xl font-semibold px-6 py-2 mb-6">
          “Turning Vision into Engineering.”
        </p>
        <button className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-3 rounded shadow-lg font-semibold tracking-wide">
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
