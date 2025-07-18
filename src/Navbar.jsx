import React, { useState } from "react";
import { MdCall, MdLocationOn } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="bg-[#042b4e] text-sm text-white flex justify-between items-center px-4 md:px-6 py-1">
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
              <p className="font-semibold">info@essaedig.com</p>
            </div>
          </div>
          <div className="w-px h-10 bg-gray-300" />
          <div className="flex items-center gap-2">
            <MdCall className="text-yellow-500 text-3xl" />
            <div>
              <p className="text-gray-500">Call Us</p>
              <p className="font-semibold">+91-8028544100</p>
            </div>
          </div>
          <button className="bg-yellow-500 hover:bg-[#042b4e] text-white font-semibold px-5 py-2 rounded-sm">
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

           <Link
            to="/"
            className="hover:text-[#042b4e] transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#042b4e] transition"
          >
            About Us
          </Link>
          <a href="#" className="hover:text-[#042b4e] transition">
            Services
          </a>
          <a href="#" className="hover:text-[#042b4e] transition">
            Products
          </a>
          <a href="#" className="hover:text-[#042b4e] transition">
            Contact Us
          </a>
        </div>

        {menuOpen && (
          <div className="flex flex-col px-4 py-3 space-y-3 text-sm font-medium text-white md:hidden">
            <Link
            to="/"
            className="hover:text-[#042b4e] transition"
          >
            Home
          </Link>
            <Link
              to="/about"
              className="hover:text-[#042b4e] transition"
            >
              About Us
            </Link>
            <a href="#" className="hover:text-[#042b4e] transition">
              Services
            </a>
            <a href="#" className="hover:text-[#042b4e] transition">
              Products
            </a>
            <a href="#" className="hover:text-[#042b4e] transition">
              Contact Us
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
