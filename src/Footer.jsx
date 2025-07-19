import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlay,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#042b4e] text-gray-100 pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-12">
        
        {/* Logo / Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-yellow-500">Tescon Engineers</h3>
          <p className="text-gray-400 leading-relaxed">
            At the forefront of innovation, we empower industries by delivering cutting-edge, sustainable infrastructure and energy solutions that are intelligently designed to drive long-term efficiency.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-yellow-500">Quick Links</h4>
          <ul className="space-y-3 text-gray-300">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About us</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/product" className="hover:text-white transition">Products</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-yellow-500">Contact</h4>
          <p className="text-gray-300 text-sm">
            C-1,Kh No. 76/12, 3rd Floor,<br />
            Mahavir Vihar, Sector-1,<br />
            Dwarka, New Delhi - 110045<br /><br />
            <strong className="text-blue-300">Email:</strong> Tesconengineers@gmail.com<br /><span className="ml-11">tesconengineers07@gmail.com</span> <br /> <br />
            <strong className="text-blue-300">Phone:</strong> +91-8882253405<br /> <span className="ml-12.5">+91-9643856547</span><br /> <br />
            <strong className="text-blue-300">Web:</strong> www.tescongroups.com
          </p>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition"><FaFacebookF /></a>
            <a href="#" className="p-3 rounded-full bg-sky-500 hover:bg-sky-600 transition"><FaTwitter /></a>
            <a href="#" className="p-3 rounded-full bg-blue-800 hover:bg-blue-900 transition"><FaLinkedinIn /></a>
            <a href="#" className="p-3 rounded-full bg-green-600 hover:bg-green-700 transition"><FaGooglePlay /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom Note */}
      <div className="text-center text-gray-400 text-sm">
        ©2025 <span className="text-white font-medium">Tescon Engineers</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
