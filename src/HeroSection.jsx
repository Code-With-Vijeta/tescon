import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative w-full h-[90vh] font-sans overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/bg-video.mp4" 
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 bg-white/90 flex items-center justify-between px-6 md:px-16 py-4 shadow-md">
        <img src="./logo.png" alt="logo" className="h-10 w-auto" />

        <ul className="hidden md:flex gap-10 text-blue-800 text-[16px] font-medium">
          {['Home', 'About', 'Products', 'Services', 'Contact'].map((item, index) => (
            <li key={index} className="relative group cursor-pointer">
              <span className="group-hover:underline group-hover:underline-offset-8 transition">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div
          className="md:hidden text-2xl text-black cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white text-black text-center z-50 flex flex-col space-y-6 py-6 md:hidden font-medium shadow-md">
          {['Home', 'About', 'Products', 'Services', 'Contact'].map((item, i) => (
            <a key={i} href="#" className="hover:underline underline-offset-4">
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-30 flex flex-col justify-center items-center h-full text-center px-6 mt-20 transition-opacity duration-1000">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-800 bg-white/30 px-6 py-3 rounded-lg shadow-lg uppercase mb-4">
          We Build the Future of Infrastructure and Innovation
        </h1>
        <p className="text-white text-lg md:text-2xl font-light max-w-2xl mb-6">
          Tescon delivers turnkey solutions across infrastructure, digital, and interior projects.
          Empowering industries with engineering excellence, smart technology, and trusted delivery.
        </p>
        <button className="bg-white hover:bg-blue-700 hover:text-white text-blue-700 px-8 py-3 rounded shadow-lg font-semibold tracking-wide transition">
          Let's Build Together
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
